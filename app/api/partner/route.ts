import PartnerEmailTemplate from "@/app/[locale]/partenaire/_components/emails/Partneremailtemplate";
import WelcomePartnerEmail from "@/app/[locale]/partenaire/_components/emails/WelcomePartnerEmail";
import { isAllowedOrigin } from "@/lib/guard";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailTO = process.env.EMAIL_TO ?? "armh.consulting@gmail.com";
const emailFrom = process.env.EMAIL_FROM ?? "ARMH Consulting <onboarding@armh-consulting.com>";
const emailTo = emailTO;

const ALLOWED_PROFIL = ["destination", "hotel", "dmc", "to", "formation", "autre"];
const ALLOWED_TYPE_PARTENARIAT = ["commercial", "representation", "evenement", "formation", "surmesure"];
const ALLOWED_HORIZON = ["pret", "cadrage", "info"];
const ALLOWED_PROVENANCE = ["google", "linkedin", "instagram", "facebook", "bouche_a_oreille", "salon", "partenaire", "presse", "autre"];

// Simple in-memory rate limiter (resets on server restart / cold start)
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

    if (!isAllowedOrigin(req)) {
      return Response.json({ error: "Forbidden" }, { status: 403 });
    }

    if (isRateLimited(ip)) {
      return Response.json({ error: "Trop de tentatives. Veuillez patienter." }, { status: 429 });
    }

    const body = await req.json();
    const { nom, entreprise, email, profil, typePartenariat, horizon, provenance, besoin, website } = body;

    // Honeypot — bots fill this hidden field, humans don't
    if (website) {
      return Response.json({ success: true });
    }

    // Server-side validation
    if (!nom || typeof nom !== "string" || nom.trim().length < 2 || nom.trim().length > 100) {
      return Response.json({ error: "Nom invalide." }, { status: 400 });
    }
    if (!entreprise || typeof entreprise !== "string" || entreprise.trim().length < 1 || entreprise.trim().length > 150) {
      return Response.json({ error: "Entreprise invalide." }, { status: 400 });
    }
    if (!email || !isValidEmail(email) || email.length > 254) {
      return Response.json({ error: "Email invalide." }, { status: 400 });
    }
    if (!profil || !ALLOWED_PROFIL.includes(profil)) {
      return Response.json({ error: "Profil invalide." }, { status: 400 });
    }
    if (!typePartenariat || !ALLOWED_TYPE_PARTENARIAT.includes(typePartenariat)) {
      return Response.json({ error: "Type de partenariat invalide." }, { status: 400 });
    }
    if (!horizon || !ALLOWED_HORIZON.includes(horizon)) {
      return Response.json({ error: "Horizon invalide." }, { status: 400 });
    }
    if (!provenance || !ALLOWED_PROVENANCE.includes(provenance)) {
      return Response.json({ error: "Provenance invalide." }, { status: 400 });
    }
    if (!besoin || typeof besoin !== "string" || besoin.trim().length < 10 || besoin.trim().length > 5000) {
      return Response.json({ error: "Besoin trop court ou trop long." }, { status: 400 });
    }

    const safeNom = nom.trim();
    const safeEntreprise = entreprise.trim();
    const safeBesoin = besoin.trim();

    const { error: errorPartner } = await resend.emails.send({
      from: emailFrom,
      to: [emailTo],
      replyTo: email,
      subject: `[ARMH] Nouvelle demande partenariat — ${typePartenariat}`,
      react: PartnerEmailTemplate({ nom: safeNom, entreprise: safeEntreprise, email, profil, typePartenariat, horizon, provenance, besoin: safeBesoin }),
    });

    if (errorPartner) {
      return Response.json({ error: errorPartner }, { status: 500 });
    }

    const { error: errorWelcome } = await resend.emails.send({
      from: emailFrom,
      to: [email],
      subject: "ARMH Consulting — Votre demande de partenariat a bien été reçue",
      react: WelcomePartnerEmail({ nom: safeNom, typePartenariat }),
    });

    if (errorWelcome) {
      return Response.json({ error: errorWelcome }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
