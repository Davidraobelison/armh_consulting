
import PartnerEmailTemplate from "@/app/[locale]/partenaire/_components/emails/Partneremailtemplate";
import WelcomePartnerEmail from "@/app/[locale]/partenaire/_components/emails/WelcomePartnerEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailTO = process.env.EMAIL_TO ?? "armh.consulting@gmail.com"
const emailFrom = process.env.EMAIL_FROM ?? "ARMH Consulting <onboarding@armh-consulting.com>";
const emailTo   = emailTO;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nom, entreprise, email, profil, typePartenariat, horizon, provenance, besoin } = body;

    // 1️⃣ Notification à Rina avec le contenu de la demande
    const { error: errorPartner } = await resend.emails.send({
      from: emailFrom,
      to: [emailTo],
      replyTo: email,
      subject: `[ARMH] Nouvelle demande partenariat — ${typePartenariat}`,
      react: PartnerEmailTemplate({ nom, entreprise, email, profil, typePartenariat, horizon, provenance, besoin }),
    });

    if (errorPartner) {
      return Response.json({ error: errorPartner }, { status: 500 });
    }

    // 2️⃣ Email de bienvenue au partenaire
    const { error: errorWelcome } = await resend.emails.send({
      from: emailFrom,
      to: [email],
      subject: "ARMH Consulting — Votre demande de partenariat a bien été reçue",
      react: WelcomePartnerEmail({ nom, typePartenariat }),
    });

    if (errorWelcome) {
      return Response.json({ error: errorWelcome }, { status: 500 });
    }

    return Response.json({ success: true });

  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}