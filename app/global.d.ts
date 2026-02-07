import messages from "@/locales/fr.json";
export type NavKey = keyof typeof messages.general.nav;


declare module "next-intl" {
  interface AppConfig {
    Messages: typeof messages;
  }
}
