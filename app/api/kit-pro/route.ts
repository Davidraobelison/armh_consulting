import KitProEmailTemplate from "./emails/KitProEmailTemplate";
import WelcomeKitProEmail from "./emails/WelcomeKitProEmail";
import { isAllowedOrigin } from "@/lib/guard";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailTO = process.env.EMAIL_TO ?? "armh.consulting@gmail.com";
const emailFrom = process.env.EMAIL_FROM ?? "ARMH Consulting <onboarding@armh-consulting.com>";

const ALLOWED_PROFIL = ["agence", "to", "reseau", "independant", "conciergerie", "mice", "autre"];
const ALLOWED_DESTINATION = ["maldives", "sri-lanka", "les-deux"];
const ALLOWED_BESOIN = ["devis", "programmation", "formation", "decouverte", "groupe", "lune-de-miel", "famille", "autre"];
const ALLOWED_VOLUME = ["ponctuel", "regulier", "programmation", "qualifier"];

const rateLimitMap = new Map<string, { count: number; ts: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.ts > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, ts: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count++;
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    console.log("[kit-pro] POST reçu - ip:", ip, "origin:", req.headers.get("origin"));

    if (!isAllowedOrigin(req)) {
      console.log("[kit-pro] Origine refusée");
      return Response.json({ error: "Forbidden" }, { status: 403 });
    }

    if (isRateLimited(ip)) {
      console.log("[kit-pro] Rate limit atteint");
      return Response.json({ error: "Trop de tentatives. Veuillez patienter." }, { status: 429 });
    }

    const body = await req.json();
    const {
      prenom, nom, societe, fonction, email, telephone,
      ville, profil, destination, besoin, volume, message, website,
    } = body;

    // Honeypot - bots fill this hidden field, humans don't
    if (website) {
      console.log("[kit-pro] Honeypot déclenché - champ website rempli:", website);
      return Response.json({ success: true });
    }

    // Validation
    if (!prenom || typeof prenom !== "string" || prenom.trim().length < 2 || prenom.trim().length > 100)
      return Response.json({ error: "Veuillez indiquer votre prénom (2 à 100 caractères)." }, { status: 400 });

    if (!nom || typeof nom !== "string" || nom.trim().length < 2 || nom.trim().length > 100)
      return Response.json({ error: "Veuillez indiquer votre nom (2 à 100 caractères)." }, { status: 400 });

    if (!societe || typeof societe !== "string" || societe.trim().length < 1 || societe.trim().length > 150)
      return Response.json({ error: "Veuillez indiquer votre société ou agence." }, { status: 400 });

    if (!email || !isValidEmail(email) || email.length > 254)
      return Response.json({ error: "L'adresse email saisie n'est pas valide." }, { status: 400 });

    if (!profil || !ALLOWED_PROFIL.includes(profil))
      return Response.json({ error: "Veuillez sélectionner votre profil." }, { status: 400 });

    if (!destination || !ALLOWED_DESTINATION.includes(destination))
      return Response.json({ error: "Veuillez sélectionner la destination travaillée." }, { status: 400 });

    if (!besoin || !ALLOWED_BESOIN.includes(besoin))
      return Response.json({ error: "Veuillez sélectionner votre besoin principal." }, { status: 400 });

    if (!volume || !ALLOWED_VOLUME.includes(volume))
      return Response.json({ error: "Veuillez indiquer votre volume ou fréquence de vente." }, { status: 400 });

    if (message && (typeof message !== "string" || message.trim().length > 5000))
      return Response.json({ error: "Le message est trop long (maximum 5000 caractères)." }, { status: 400 });

    const safePrenom    = prenom.trim();
    const safeNom       = nom.trim();
    const safeSociete   = societe.trim();
    const safeFonction  = (typeof fonction === "string" ? fonction.trim() : "");
    const safeTelephone = (typeof telephone === "string" ? telephone.trim() : "");
    const safeVille     = (typeof ville === "string" ? ville.trim() : "");
    const safeMessage   = (typeof message === "string" ? message.trim() : "");

    console.log("[kit-pro] Validation OK - envoi email interne vers:", emailTO);

    // Email 1 — notification interne ARMH
    const { error: errorInternal } = await resend.emails.send({
      from: emailFrom,
      to: [emailTO],
      replyTo: email,
      subject: `[ARMH] Kit Pro Sun Siyam - ${safePrenom} ${safeNom} · ${safeSociete}`,
      react: KitProEmailTemplate({
        prenom: safePrenom, nom: safeNom, societe: safeSociete,
        fonction: safeFonction, email, telephone: safeTelephone,
        ville: safeVille, profil, destination, besoin, volume, message: safeMessage,
      }),
    });

    if (errorInternal) {
      console.error("[kit-pro] Erreur email interne:", errorInternal);
      return Response.json({ error: "Erreur lors de l'envoi du message. Veuillez réessayer." }, { status: 500 });
    }

    console.log("[kit-pro] Email interne envoyé - envoi confirmation vers:", email);

    // Email 2 — confirmation utilisateur
    const { error: errorWelcome } = await resend.emails.send({
      from: emailFrom,
      to: [email],
      subject: "ARMH Consulting - Votre demande Kit Pro Sun Siyam a bien été reçue",
      react: WelcomeKitProEmail({ prenom: safePrenom, besoin }),
    });

    if (errorWelcome) {
      console.error("[kit-pro] Erreur email confirmation:", errorWelcome);
      return Response.json({ error: "Erreur lors de l'envoi de la confirmation. Veuillez réessayer." }, { status: 500 });
    }

    console.log("[kit-pro] Succès — les deux emails envoyés");
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
