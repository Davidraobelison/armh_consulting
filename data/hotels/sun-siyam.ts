import React from "react";
import {
  Heart, Users, Gem, Waves, Plane, GraduationCap,
  Briefcase, Star, Sun, Fish, Handshake, Globe, Recycle, CircleCheck,
  ClipboardList, MessageSquare, Target, Radio,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type HotelFilter = "tous" | "familles" | "honeymoon" | "luxe" | "srilanka" | "activites";

export type Hotel = {
  id: number;
  name: string;
  collection: "Luxury Collection" | "Privé Collection" | "Lifestyle Collection";
  collectionColor: string;
  tagline: string;
  image: string;
  tags: HotelFilter[];
  tagLabels: string[];
  highlights: string[];
};

export type ClientProfile = {
  icon: React.ReactNode;
  label: string;
  sub: string;
};

export type AudienceSunCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type EsgPillar = {
  icon: React.ReactNode;
  label: string;
};

export type KitProItem = {
  icon: React.ReactNode;
  label: string;
};

export type WhyArmhItem = {
  icon: React.ReactNode;
  label: string;
};

export type FilterTab = {
  slug: HotelFilter;
  label: string;
};

// ─── Hotels ───────────────────────────────────────────────────────────────────

export const HOTELS: Hotel[] = [
  {
    id: 1,
    name: "Siyam World Maldives",
    collection: "Luxury Collection",
    collectionColor: "bg-amber-700",
    tagline: "L'angle anti-ennui pour familles et tribus.",
    image: "/assets/images/partenaires/sun-siyam/SW-1.jpg",
    tags: ["tous", "familles", "activites"],
    tagLabels: ["Familles", "Fun"],
    highlights: ["Villas avec toboggan", "Waterpark flottant", "Ranch équestre"],
  },
  {
    id: 2,
    name: "Sun Siyam Iru Fushi",
    collection: "Luxury Collection",
    collectionColor: "bg-amber-700",
    tagline: "La valeur sûre luxe des Maldives.",
    image: "/assets/images/partenaires/sun-siyam/SSIF-1.jpg",
    tags: ["tous", "luxe", "familles", "honeymoon"],
    tagLabels: ["Luxe", "Iconique"],
    highlights: ["15 restaurants et bars", "Spa primé", "Couples et familles"],
  },
  {
    id: 3,
    name: "Sun Siyam Iru Veli",
    collection: "Privé Collection",
    collectionColor: "bg-teal-700",
    tagline: "L'intime et romantique au-dessus du lagon.",
    image: "/assets/images/partenaires/sun-siyam/SSIV.jpg",
    tags: ["tous", "honeymoon", "luxe"],
    tagLabels: ["Romantique", "Intime"],
    highlights: ["Toutes villas avec piscine privée", "Dine-around 24/7", "Ambiance ultra romantique"],
  },
  {
    id: 4,
    name: "Sun Siyam Vilu Reef",
    collection: "Privé Collection",
    collectionColor: "bg-teal-700",
    tagline: "La love story maldivienne en harmonie avec le récif.",
    image: "/assets/images/partenaires/sun-siyam/SSVR.jpg",
    tags: ["tous", "honeymoon", "activites"],
    tagLabels: ["Récif", "Romantique"],
    highlights: ["Récif maison exceptionnel", "Barefoot luxury", "Expériences privées"],
  },
  {
    id: 5,
    name: "Sun Siyam Olhuveli",
    collection: "Lifestyle Collection",
    collectionColor: "bg-sky-700",
    tagline: "Le resort tout-en-un, pour ne pas se tromper.",
    image: "/assets/images/partenaires/sun-siyam/SSO.jpg",
    tags: ["tous", "familles", "activites"],
    tagLabels: ["Tout-compris", "Actif"],
    highlights: ["Trois îles, mille ambiances", "Grande piscine", "Sports & activités"],
  },
  {
    id: 6,
    name: "Sun Siyam Pasikudah",
    collection: "Privé Collection",
    collectionColor: "bg-teal-700",
    tagline: "Le Sri Lanka confidentiel : culturel et balnéaire.",
    image: "/assets/images/partenaires/sun-siyam/SSP.jpg",
    tags: ["tous", "srilanka", "luxe"],
    tagLabels: ["Sri Lanka", "Culture"],
    highlights: ["Spa ayurvédique", "Excursions culturelles", "Plage préservée"],
  },
];

// ─── Filter Tabs ──────────────────────────────────────────────────────────────

export const FILTER_TABS: FilterTab[] = [
  { slug: "tous", label: "Tous" },
  { slug: "familles", label: "Familles" },
  { slug: "honeymoon", label: "Honeymoon" },
  { slug: "luxe", label: "Luxe" },
  { slug: "srilanka", label: "Sri Lanka" },
  { slug: "activites", label: "Activités" },
];

// ─── Client Profiles ──────────────────────────────────────────────────────────

export const CLIENT_PROFILES: ClientProfile[] = [
  { icon: React.createElement(Heart,         { size: 20, strokeWidth: 1.5 }), label: "Lune de miel",               sub: "Iru Veli · Vilu Reef · Iru Fushi" },
  { icon: React.createElement(Users,         { size: 20, strokeWidth: 1.5 }), label: "Famille active",              sub: "Siyam World · Olhuveli · Iru Fushi" },
  { icon: React.createElement(Gem,           { size: 20, strokeWidth: 1.5 }), label: "Client luxe rassurant",       sub: "Iru Fushi · Iru Veli" },
  { icon: React.createElement(Waves,         { size: 20, strokeWidth: 1.5 }), label: "Snorkeling & nature",          sub: "Vilu Reef · Iru Fushi · Olhuveli" },
  { icon: React.createElement(Plane,         { size: 20, strokeWidth: 1.5 }), label: "Combiné Sri Lanka",            sub: "Pasikudah + Maldives" },
  { icon: React.createElement(GraduationCap, { size: 20, strokeWidth: 1.5 }), label: "Formation / programmation TO", sub: "Kit Pro complet ARMH" },
];

// ─── Audience Cards ───────────────────────────────────────────────────────────

export const AUDIENCE_CARDS: AudienceSunCard[] = [
  {
    icon: React.createElement(Users,     { size: 20, strokeWidth: 1.5 }),
    title: "Pour les agences",
    description: "Identifier rapidement le resort adapté au client et récupérer les bons arguments de vente.",
  },
  {
    icon: React.createElement(Briefcase, { size: 20, strokeWidth: 1.5 }),
    title: "Pour les TO",
    description: "Concevoir des compléments de collection et ses règles de programmation.",
  },
  {
    icon: React.createElement(Star,      { size: 20, strokeWidth: 1.5 }),
    title: "Pour ARMH",
    description: "Capitaliser le relais qualitatif grâce à un Kit Pro fiable, utile et actionnable.",
  },
];

// ─── ESG Pillars ──────────────────────────────────────────────────────────────

export const ESG_PILLARS: EsgPillar[] = [
  { icon: React.createElement(Sun,         { size: 20, strokeWidth: 1.5 }), label: "Énergie renouvelable" },
  { icon: React.createElement(Fish,        { size: 20, strokeWidth: 1.5 }), label: "Biodiversité & récifs" },
  { icon: React.createElement(Handshake,   { size: 20, strokeWidth: 1.5 }), label: "Communautés locales" },
  { icon: React.createElement(Globe,       { size: 20, strokeWidth: 1.5 }), label: "Culture insulaire" },
  { icon: React.createElement(Recycle,     { size: 20, strokeWidth: 1.5 }), label: "Réduction plastique" },
  { icon: React.createElement(CircleCheck, { size: 20, strokeWidth: 1.5 }), label: "Certifications & démarches" },
];

// ─── Kit Pro Items ────────────────────────────────────────────────────────────

export const KIT_PRO_ITEMS: KitProItem[] = [
  { icon: React.createElement(ClipboardList,  { size: 20, strokeWidth: 1.5 }), label: "Comparatif des 6 hôtels" },
  { icon: React.createElement(MessageSquare,  { size: 20, strokeWidth: 1.5 }), label: "Arguments par clientèle" },
  { icon: React.createElement(Plane,          { size: 20, strokeWidth: 1.5 }), label: "Idées de combinés" },
  { icon: React.createElement(GraduationCap,  { size: 20, strokeWidth: 1.5 }), label: "Support formation agence" },
];

// ─── Why ARMH ─────────────────────────────────────────────────────────────────

export const WHY_ARMH: WhyArmhItem[] = [
  { icon: React.createElement(Target,       { size: 20, strokeWidth: 1.5 }), label: "Sélection du bon resort selon le brief client" },
  { icon: React.createElement(MessageSquare,{ size: 20, strokeWidth: 1.5 }), label: "Support de vente en français" },
  { icon: React.createElement(Users,        { size: 20, strokeWidth: 1.5 }), label: "Formation équipes agences / TO" },
  { icon: React.createElement(Radio,        { size: 20, strokeWidth: 1.5 }), label: "Relais des nouveautés & offres" },
  { icon: React.createElement(Handshake,    { size: 20, strokeWidth: 1.5 }), label: "Mise en relation rapide pour demandes qualifiées" },
];