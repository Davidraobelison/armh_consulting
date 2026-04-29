import ContactEmailTemplate from "@/app/[locale]/contact/_components/emails/ContactEmailTemplate";
import WelcomeEmail from "@/app/[locale]/contact/_components/emails/WelcomeEmail";
import { isAllowedOrigin } from "@/lib/guard";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailTO = process.env.EMAIL_TO ?? "armh.consulting@gmail.com";
const emailFrom = process.env.EMAIL_FROM ?? "ARMH Consulting <onboarding@armh-consulting.com>";
const emailTo = emailTO;

const ALLOWED_OBJET = ["information", "collaboration", "partenariat", "intervention", "presse", "autre"];
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
    const { nom, entreprise, email, objet, provenance, message, website } = body;

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
    if (!objet || !ALLOWED_OBJET.includes(objet)) {
      return Response.json({ error: "Objet invalide." }, { status: 400 });
    }
    if (!provenance || !ALLOWED_PROVENANCE.includes(provenance)) {
      return Response.json({ error: "Provenance invalide." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length < 10 || message.trim().length > 5000) {
      return Response.json({ error: "Message trop court ou trop long." }, { status: 400 });
    }

    const safeNom = nom.trim();
    const safeEntreprise = entreprise.trim();
    const safeMessage = message.trim();

    const { error: errorContact } = await resend.emails.send({
      from: emailFrom,
      to: [emailTo],
      replyTo: email,
      subject: `[ARMH] Nouveau message — ${objet}`,
      react: ContactEmailTemplate({ nom: safeNom, entreprise: safeEntreprise, email, objet, provenance, message: safeMessage }),
    });

    if (errorContact) {
      return Response.json({ error: errorContact }, { status: 500 });
    }

    const { error: errorWelcome } = await resend.emails.send({
      from: emailFrom,
      to: [email],
      subject: "ARMH Consulting — Nous avons bien reçu votre message",
      react: WelcomeEmail({ nom: safeNom }),
    });

    if (errorWelcome) {
      return Response.json({ error: errorWelcome }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
