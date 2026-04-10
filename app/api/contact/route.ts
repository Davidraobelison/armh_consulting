import ContactEmailTemplate from "@/app/[locale]/contact/_components/emails/ContactEmailTemplate";
import WelcomeEmail from "@/app/[locale]/contact/_components/emails/WelcomeEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailTO = process.env.EMAIL_TO ?? "armh.consulting@gmail.com"

const emailFrom = "ARMH Consulting <onboarding@resend.dev>";
const emailTo   = emailTO;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nom, entreprise, email, objet, provenance, message } = body;

    // 1️⃣ Notification à Rina avec le contenu du message
    const { error: errorContact } = await resend.emails.send({
      from: emailFrom,
      to: [emailTo],
      replyTo: email,
      subject: `[ARMH] Nouveau message — ${objet}`,
      react: ContactEmailTemplate({ nom, entreprise, email, objet, provenance, message }),
    });

    if (errorContact) {
      return Response.json({ error: errorContact }, { status: 500 });
    }

    // 2️⃣ Email de bienvenue au client
    const { error: errorWelcome } = await resend.emails.send({
      from: emailFrom,
      to: [email],
      subject: "ARMH Consulting — Nous avons bien reçu votre message",
      react: WelcomeEmail({ nom }),
    });

    if (errorWelcome) {
      return Response.json({ error: errorWelcome }, { status: 500 });
    }

    return Response.json({ success: true });

  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}