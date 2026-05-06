import React from "react";
import {
  Users, Users2, Heart, HeartHandshake, Gem, Sparkles, LayoutGrid,
  Waves, Trophy, Home, UtensilsCrossed, Car, Shield, Star, Globe, Leaf,
  MapPin, Mountain, Fish, Wine, Dumbbell, Activity, Compass,
  Clock, Sun, Camera, Building2, ChefHat, Binoculars, Footprints,
  Route, Flower2, Crown, ShieldCheck,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ResortCible = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type ResortArgument = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type ResortPreuve = {
  icon: React.ReactNode;
  label: string;
};

export type ResortExperience = {
  image: string;
  title: string;
  description: string;
};

export type ResortFicheData = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  collection: "Collection luxe" | "Collection privée" | "Collection lifestyle";
  collectionColor: string;
  heroBadges: string[];
  ctaSecondaryLabel?: string;
  infoBadges?: { icon: React.ReactNode; label: string }[];
  cibles: ResortCible[];
  arguments: ResortArgument[];
  preuves: ResortPreuve[];
  experiences: ResortExperience[];
  argumentAgence: {
    isQuote?: boolean;
    quote?: string;
    title: string;
    body: string;
    ctaLabel?: string;
  };
  footerBadges: string[];
  autresResorts: {
    slug: string;
    name: string;
    image: string;
    tagline: string;
  }[];
};

// ─── Helper ───────────────────────────────────────────────────────────────────

const ic = (C: React.ElementType) =>
  React.createElement(C, { size: 20, strokeWidth: 1.5 });

// ─── Fiches ───────────────────────────────────────────────────────────────────

export const RESORT_FICHES: Record<string, ResortFicheData> = {
  world: {
    slug: "world",
    name: "Siyam World Maldives",
    tagline: "Séjour sensation pour familles, tribus et clients actifs.",
    description:
      "Le resort à recommander quand vos clients veulent les Maldives… sans la peur de s'ennuyer. Tout est pensé pour l'action, le partage et les souvenirs inoubliables.",
    heroImage: "/assets/images/partenaires/sun-siyam/hero/hero-1.JPG",
    collection: "Collection lifestyle",
    collectionColor: "bg-sky-700",
    heroBadges: ["Collection lifestyle", "Maldives", "Familles", "All inclusive", "Activités"],
    ctaSecondaryLabel: "Demander les arguments Siyam World",
    cibles: [
      { icon: ic(Users), title: "Familles", description: "Clubs enfants, waterpark, activités en continu et villas adaptées." },
      { icon: ic(Users2), title: "Tribus & multi-familles", description: "Espaces communs, grandes villas et liberté pour chacun." },
      { icon: ic(HeartHandshake), title: "Groupes d'amis", description: "Ambiance festive, activités fun et expériences à partager." },
      { icon: ic(Dumbbell), title: "Couples actifs", description: "Sport, bien-être, aventures et moments exclusifs." },
    ],
    arguments: [
      { icon: ic(Gem), title: "Promesse claire", description: "Ici, l'ennui n'existe pas. Le resort le plus complet des Maldives pour tous les âges et tous les profils." },
      { icon: ic(Sparkles), title: "Effet waouh immédiat", description: "Du toboggan privé à la plus grande piscine d'Asie, chaque instant est un souvenir." },
      { icon: ic(LayoutGrid), title: "Grande variété", description: "Activités terrestres, marines, lifestyle et gastronomie : chacun y trouve son kiff." },
    ],
    preuves: [
      { icon: ic(Trophy), label: "Le plus grand resort des Maldives" },
      { icon: ic(Home), label: "Villas avec toboggan privé" },
      { icon: ic(Waves), label: "Waterpark flottant" },
      { icon: ic(Mountain), label: "Ranch équestre" },
      { icon: ic(UtensilsCrossed), label: "Nombreux restaurants & bars" },
      { icon: ic(Car), label: "Go-kart et expériences lifestyle" },
    ],
    experiences: [
      { image: "/assets/images/partenaires/sun-siyam/experience-sign/ssworld/water-villa-with-pool-slide.jpg", title: "Water Villa with Pool + Slide", description: "Plongez depuis votre terrasse et amusez-vous en un clin d'œil." },
      { image: "/assets/images/partenaires/sun-siyam/experience-sign/ssworld/SW-Waterworld-final.jpg", title: "Siyam Water World", description: "Le plus grand parc aquatique flottant des Maldives." },
      { image: "/assets/images/partenaires/sun-siyam/experience-sign/ssworld/sw-horse-ranch.jpg", title: "Horse Ranch", description: "Équitation, balades au coucher du soleil et moments uniques." },
      { image: "/assets/images/partenaires/sun-siyam/experience-sign/ssworld/sw-go-cart.jpg", title: "Go-Kart", description: "Adrénaline sur circuit au cœur de l'île." },
      { image: "/assets/images/partenaires/sun-siyam/experience-sign/ssworld/SW-pool-party.jpg", title: "Pool Parties", description: "Ambiance, DJ sets et vibes toute la journée." },
      { image: "/assets/images/partenaires/sun-siyam/experience-sign/ssworld/rent-a-moke.jpg", title: "Rent-a-Moke", description: "Explorez l'île à votre rythme et en toute liberté." },
    ],
    argumentAgence: {
      title: "Le resort qui se vend tout seul.",
      body: "Siyam World est la réponse évidente pour tous les clients qui veulent les Maldives sans le silence total. Un resort où chaque profil trouve sa place et rentre avec des souvenirs plein les yeux.",
      ctaLabel: "Demander les arguments Siyam World",
    },
    footerBadges: [
      "Sélection des meilleurs resorts Sun Siyam",
      "Support dédié aux agences",
      "Argumentaires prêts à convaincre",
      "Mise à disposition de visuels et documents",
      "Réactivité & accompagnement",
    ],
    autresResorts: [
      { slug: "iru-fushi", name: "Sun Siyam Iru Fushi", image: "/assets/images/partenaires/sun-siyam/hero/fiche/SSIF.jpg", tagline: "Luxe tropical et expériences inoubliables." },
      { slug: "olhuveli", name: "Sun Siyam Olhuveli", image: "/assets/images/partenaires/sun-siyam/hotels/SSO-2.jpg", tagline: "Aventures, sports et fun pour tous." },
      { slug: "iru-veli", name: "Sun Siyam Iru Veli", image: "/assets/images/partenaires/sun-siyam/hotels/SSIV-2.jpg", tagline: "Élégance, intimité et parenthèse romantique." },
    ],
  },

  "iru-fushi": {
    slug: "iru-fushi",
    name: "Sun Siyam Iru Fushi",
    tagline: "La valeur sûre luxe qui rassure autant les couples que les familles.",
    description:
      "Élégance naturelle, confort absolu et service attentionné : Iru Fushi réunit tous les atouts d'une île premium. Gastronomie variée, spa d'exception et expériences uniques sont au cœur d'un art de recevoir qui fait la différence.",
    heroImage: "/assets/images/partenaires/sun-siyam/hero/fiche/SSIF.jpg",
    collection: "Collection luxe",
    collectionColor: "bg-amber-700",
    heroBadges: ["Collection luxe", "Maldives", "Luxe", "Familles premium", "Spa", "Plongée"],
    ctaSecondaryLabel: "Demander la fiche Iru Fushi",
    infoBadges: [
      { icon: ic(MapPin), label: "Raa Atoll, Maldives" },
      { icon: ic(Clock), label: "45 min en hydravion" },
      { icon: ic(Sun), label: "Idéal : nov. à avr." },
    ],
    cibles: [
      { icon: ic(Heart), title: "Couples", description: "Recherche d'intimité, romantisme et séjours d'exception." },
      { icon: ic(Sparkles), title: "Jeunes mariés", description: "Lune de miel mémorable dans un cadre idyllique et raffiné." },
      { icon: ic(Users), title: "Familles premium", description: "Activités pour tous les âges, espaces dédiés et service sur-mesure." },
      { icon: ic(Crown), title: "Clients exigeants", description: "Standard élevé, attention aux détails et expériences authentiques." },
    ],
    arguments: [
      { icon: ic(Gem), title: "Richesse d'offre", description: "15 restaurants et bars, activités variées, expériences exclusives et excursions inoubliables." },
      { icon: ic(ShieldCheck), title: "Resort rassurant", description: "Service attentionné, sécurité, standards premium et logistique maîtrisée pour des séjours sans souci." },
      { icon: ic(Star), title: "Polyvalence luxe", description: "Parfait pour couples, familles et groupes d'amis avec un excellent rapport qualité/expérience." },
    ],
    preuves: [
      { icon: ic(UtensilsCrossed), label: "15 restaurants et bars" },
      { icon: ic(Flower2), label: "Spa primé dans la jungle" },
      { icon: ic(Waves), label: "Grand centre de plongée" },
      { icon: ic(Heart), label: "Couples et familles" },
      { icon: ic(Users2), label: "Butlers multilingues" },
      { icon: ic(Home), label: "Villas spacieuses" },
    ],
    experiences: [
      { image: "/assets/images/partenaires/sun-siyam/experience-sign/iru-fushi/premium-islander.jpg", title: "Premium Island Indulgence", description: "Vivez l'essence d'Iru Fushi : luxe discret, service sur-mesure et nature préservée." },
      { image: "/assets/images/partenaires/sun-siyam/experience-sign/iru-fushi/jungle-spa.jpg", title: "Jungle Spa", description: "Soins holistiques dans un cadre tropical apaisant pour un lâcher-prise total." },
      { image: "/assets/images/partenaires/sun-siyam/experience-sign/iru-fushi/nemo-ref.jpg", title: "Nemo Reef", description: "Snorkeling exceptionnel sur le récif maison peuplé de poissons tropicaux." },
      { image: "/assets/images/partenaires/sun-siyam/experience-sign/iru-fushi/water-villa.jpg", title: "Water Villas", description: "Villas sur pilotis avec piscine privée et accès direct au lagon turquoise." },
      { image: "/assets/images/partenaires/sun-siyam/experience-sign/iru-fushi/Family-Beach-Villa.jpg", title: "Family Deluxe Beach Villa", description: "Espaces généreux en bord de plage, parfaits pour les familles en quête de confort." },
      { image: "/assets/images/partenaires/sun-siyam/experience-sign/iru-fushi/moment-signature.jpg", title: "Moments signature", description: "Dîners privés, croisières au coucher du soleil et instants inoubliables à deux ou en famille." },
    ],
    argumentAgence: {
      isQuote: true,
      quote: "Iru Fushi est la recommandation premium qui sécurise vos ventes haut de gamme.",
      title: "Iru Fushi est la recommandation premium qui sécurise vos ventes haut de gamme.",
      body: "Un resort iconique, complet et rassurant, qui séduit aussi bien les couples que les familles exigeantes. La garantie d'un séjour exceptionnel et d'un client pleinement satisfait.",
      ctaLabel: "Demander la fiche Iru Fushi",
    },
    footerBadges: [
      "Sélection des bons resorts selon le brief client",
      "Support de vente et outils dédiés",
      "Formations équipes agences & TO",
      "Relais des nouveautés & offres",
      "Mise en relation rapide pour demandes qualifiées",
    ],
    autresResorts: [
      { slug: "iru-veli", name: "Sun Siyam Iru Veli", image: "/assets/images/partenaires/sun-siyam/hotels/SSIV-2.jpg", tagline: "Élégance contemporaine et services haut de gamme pour couples et familles." },
      { slug: "vilu-reef", name: "Sun Siyam Vilu Reef", image: "/assets/images/partenaires/sun-siyam/hotels/SSVR-2.jpg", tagline: "Charme authentique et service au cœur d'un lagon exceptionnel." },
      { slug: "world", name: "Siyam World Maldives", image: "/assets/images/partenaires/sun-siyam/hero/hero-1.JPG", tagline: "Le resort le plus vaste des Maldives avec des activités incomparables." },
    ],
  },

  "iru-veli": {
    slug: "iru-veli",
    name: "Sun Siyam Iru Veli",
    tagline: "L'adresse confidentielle où chaque villa devient une bulle privée.",
    description:
      "Pensé pour les lunes de miel et les moments à deux, Sun Siyam Iru Veli réinvente l'intimité aux Maldives. Chaque villa avec piscine privée, des dîners à la carte inclus 24h/24, des couchers de soleil magiques et un service attentionné pour vivre votre histoire, en toute simplicité.",
    heroImage: "/assets/images/partenaires/sun-siyam/hotels/SSIV-2.jpg",
    collection: "Collection privée",
    collectionColor: "bg-teal-700",
    heroBadges: ["Collection privée", "Maldives", "Honeymoon", "Piscine privée", "Romance", "All inclusive"],
    ctaSecondaryLabel: "Recevoir les offres lune de miel",
    cibles: [
      { icon: ic(Heart), title: "Lunes de miel", description: "Un décor intime pour un début de vie inoubliable." },
      { icon: ic(HeartHandshake), title: "Couples premium", description: "Évasion romantique en toute discrétion." },
      { icon: ic(Sparkles), title: "Anniversaires", description: "Célébrez vos plus beaux moments à deux." },
      { icon: ic(Users), title: "Petites familles", description: "Des instants privilégiés dans un cadre serein." },
    ],
    arguments: [
      { icon: ic(Waves), title: "Piscine privée dans chaque villa", description: "L'intimité absolue, face au lagon ou à la plage." },
      { icon: ic(Heart), title: "Promesse romance facile à expliquer", description: "Ambiance, attentions et décors pensés pour les amoureux." },
      { icon: ic(Wine), title: "Restaurez-vous 24h/24, 7j/7", description: "Votre all inclusive vous suit partout, tout le temps." },
    ],
    preuves: [
      { icon: ic(Home), label: "125 villas intimes" },
      { icon: ic(Waves), label: "Toutes avec piscine privée" },
      { icon: ic(Crown), label: "Boutique resort" },
      { icon: ic(Flower2), label: "Ambiance paisible" },
      { icon: ic(Star), label: "Service personnalisé" },
      { icon: ic(Sun), label: "Sunset experiences" },
      { icon: ic(UtensilsCrossed), label: "Private dining" },
    ],
    experiences: [
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSIV-2.jpg", title: "Beach Villa with Pool", description: "À quelques pas du sable blanc et du lagon." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSIV-2.jpg", title: "Ocean Villa with Pool", description: "Sur pilotis, avec accès direct au lagon turquoise." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSIV-2.jpg", title: "Dolphin Ocean Villa", description: "Admirez les dauphins depuis votre terrasse privée." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSIV-2.jpg", title: "Sunset experiences", description: "Couchers de soleil inoubliables, chaque soir." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSIV-2.jpg", title: "Private dining", description: "Dîners exclusifs où vous voulez, quand vous voulez." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSIV-2.jpg", title: "Service signature", description: "Des attentions délicates qui font toute la différence." },
    ],
    argumentAgence: {
      isQuote: false,
      title: "La fiche idéale pour les clients en quête d’une lune de miel raffinée, sereine et sans contraintes.",
      body: "Vous vendez un séjour romantique, tout compris, avec un service irréprochable et des villas qui garantissent l'intimité. Une recommandation fluide, belle et facile à défendre.",
      ctaLabel: "Recevoir cette fiche",
    },
    footerBadges: [
      "Un réseau de partenaires fiables et sélectionnés",
      "Support de vente dédié",
      "Formations & webinaires",
      "Relais des nouveautés et offres",
      "Mise en relation rapide pour demandes qualifiées",
    ],
    autresResorts: [
      { slug: "vilu-reef", name: "Sun Siyam Vilu Reef", image: "/assets/images/partenaires/sun-siyam/hotels/SSVR-2.jpg", tagline: "An amoureux de nature et de lagon infini." },
      { slug: "iru-fushi", name: "Sun Siyam Iru Fushi", image: "/assets/images/partenaires/sun-siyam/hero/fiche/SSIF.jpg", tagline: "L'iconique 5★ pour une lune de miel grand luxe aux Maldives." },
      { slug: "pasikudah", name: "Sun Siyam Pasikudah, Sri Lanka", image: "/assets/images/partenaires/sun-siyam/hotels/SSP-2.jpg", tagline: "Lune de miel exotique entre plages sauvages et culture sri lankaise." },
    ],
  },

  "vilu-reef": {
    slug: "vilu-reef",
    name: "Sun Siyam Vilu Reef",
    tagline: "L'île confidentielle pour les couples qui veulent ressentir les Maldives.",
    description:
      "Boutique hideaway à taille humaine, Vilu Reef séduit par son récif maison spectaculaire, son atmosphère barefoot et son sens du détail. Ici, chaque instant est simple, vrai et profondément romantique.",
    heroImage: "/assets/images/partenaires/sun-siyam/hotels/SSVR-2.jpg",
    collection: "Collection privée",
    collectionColor: "bg-teal-700",
    heroBadges: ["Collection privée", "Maldives", "Couples", "Récif", "Snorkeling", "Authentique"],
    ctaSecondaryLabel: "Demander la fiche romance Vilu Reef",
    cibles: [
      { icon: ic(Heart), title: "Couples en quête d'intimité", description: "Connexion, authenticité et moments vrais face au lagon." },
      { icon: ic(Sparkles), title: "Jeunes mariés en lune de miel", description: "Un cadre romantique sincère, loin des grands complexes." },
      { icon: ic(Fish), title: "Amoureux du snorkeling", description: "Accès direct au house reef depuis la plage et les villas." },
      { icon: ic(Crown), title: "Clients qui veulent une île confidentielle", description: "Charme, authenticité et service attentionné à taille humaine." },
    ],
    arguments: [
      { icon: ic(Heart), title: "Émotion pure", description: "Une atmosphère intime et romantique, idéale pour célébrer l'amour et créer des souvenirs inoubliables." },
      { icon: ic(Fish), title: "Récif maison exceptionnel", description: "L'un des plus beaux house reefs des Maldives, accessible directement depuis la plage et les villas." },
      { icon: ic(Star), title: "Expériences privées", description: "Dîners sur la plage, ciné sous les étoiles, moments rien qu'à deux, pensés pour les couples." },
    ],
    preuves: [
      { icon: ic(Home), label: "Boutique hideaway à taille humaine" },
      { icon: ic(Fish), label: "House reef spectaculaire" },
      { icon: ic(Footprints), label: "Barefoot luxury vraiment authentique" },
      { icon: ic(Leaf), label: "Cuisine plant-based de la ferme voisine" },
      { icon: ic(Camera), label: "Cinéma privé sous les étoiles" },
      { icon: ic(UtensilsCrossed), label: "Private dining romantique" },
    ],
    experiences: [
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSVR-2.jpg", title: "House Reef", description: "Snorkeling depuis la plage avec raies, tortues et poissons tropicaux." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSVR-2.jpg", title: "Cinema by Moonlight", description: "Votre film préféré sous les étoiles, les pieds dans le sable." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSVR-2.jpg", title: "Plant Based Bliss", description: "Cuisine végétale créative, fraîche et savoureuse, issue de la ferme voisine." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSVR-2.jpg", title: "Beach Villa with Pool", description: "Villas spacieuses avec piscine privée à quelques pas du lagon." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSVR-2.jpg", title: "Water Villa with Pool", description: "Villas sur pilotis avec piscine privée et accès direct au lagon." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSVR-2.jpg", title: "Private Dining", description: "Dîners romantiques sur la plage, sous les palmiers ou sur votre terrasse." },
    ],
    argumentAgence: {
      isQuote: false,
      title: "Vilu Reef se vend quand vos clients veulent du feeling, pas du grand spectacle.",
      body: "Une île à taille humaine, un récif vibrant, une atmosphère barefoot et des expériences romantiques sincères. Parfait pour les couples qui veulent se retrouver et ressentir l'essence des Maldives.",
      ctaLabel: "Demander la fiche Vilu Reef",
    },
    footerBadges: [
      "Sélection des bons resorts selon le brief client",
      "Support de vente et argumentaires",
      "Formations équipes agences & TO",
      "Relais des nouveautés et offres",
      "Mise en relation rapide pour demandes qualifiées",
    ],
    autresResorts: [
      { slug: "iru-veli", name: "Sun Siyam Iru Veli", image: "/assets/images/partenaires/sun-siyam/hotels/SSIV-2.jpg", tagline: "Luxe décontracté et lagon infini aux Maldives." },
      { slug: "olhuveli", name: "Sun Siyam Olhuveli", image: "/assets/images/partenaires/sun-siyam/hotels/SSO-2.jpg", tagline: "L'île iconique pour des expériences variées à deux." },
      { slug: "iru-fushi", name: "Sun Siyam Iru Fushi", image: "/assets/images/partenaires/sun-siyam/hero/fiche/SSIF.jpg", tagline: "L'âme authentique des Maldives dans un cadre naturel." },
    ],
  },

  olhuveli: {
    slug: "olhuveli",
    name: "Sun Siyam Olhuveli",
    tagline: "Le resort polyvalent qui facilite les recommandations agence.",
    description:
      "Un resort complet, dynamique et rassurant, réparti sur trois îles avec une belle diversité d'hébergements, de restaurants et d'activités. Idéal pour répondre à tous les profils de voyageurs et toutes les envies, en toute confiance.",
    heroImage: "/assets/images/partenaires/sun-siyam/hero/fiche/SSO-2.jpg",
    collection: "Collection lifestyle",
    collectionColor: "bg-sky-700",
    heroBadges: ["Collection lifestyle", "Maldives", "Familles", "Polyvalent", "Activités", "Trois îles"],
    ctaSecondaryLabel: "Recevoir le comparatif Olhuveli",
    cibles: [
      { icon: ic(Users), title: "Familles", description: "Clubs enfants, activités et espace pour tous." },
      { icon: ic(Heart), title: "Couples", description: "Cadre romantique, expériences à partager à deux." },
      { icon: ic(HeartHandshake), title: "Groupes d'amis", description: "Ambiance conviviale, activités et sorties variées." },
      { icon: ic(Compass), title: "Primo-voyageurs Maldives", description: "Accessible, rassurant et facile à recommander." },
    ],
    arguments: [
      { icon: ic(Star), title: "Un resort complet", description: "Hébergements variés, restauration riche, infrastructures modernes et services pour tous les profils." },
      { icon: ic(Shield), title: "Facile à défendre", description: "Une valeur sûre qui rassure vos clients et simplifie vos recommandations au quotidien." },
      { icon: ic(LayoutGrid), title: "Grande variété d'expériences", description: "Sports, bien-être, découvertes et moments uniques sur trois îles aux ambiances complémentaires." },
    ],
    preuves: [
      { icon: ic(Globe), label: "Trois îles, ambiances complémentaires" },
      { icon: ic(UtensilsCrossed), label: "Une douzaine de restaurants et bars" },
      { icon: ic(Waves), label: "Grande piscine" },
      { icon: ic(Activity), label: "Sports nautiques" },
      { icon: ic(LayoutGrid), label: "Nombreuses activités" },
      { icon: ic(Fish), label: "Observation de raies mantas et requins-baleines" },
    ],
    experiences: [
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSO-2.jpg", title: "Snorkeling excursion", description: "Explorez les récifs et la vie marine." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSO-2.jpg", title: "Jet Car", description: "Adrénaline et fun sur le lagon." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSO-2.jpg", title: "Traditional Fishing", description: "Pêche traditionnelle au coucher du soleil." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSO-2.jpg", title: "Local Island Exploration", description: "Découvrez la culture et la vie locale." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSO-2.jpg", title: "Whale Shark Expedition", description: "Vivez la rencontre unique avec les géants de l'océan." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSO-2.jpg", title: "All Inclusive Package", description: "Sérénité totale tout au long du séjour." },
    ],
    argumentAgence: {
      isQuote: false,
      title: "Sun Siyam Olhuveli est le choix idéal quand vous voulez une recommandation sûre pour tous.",
      body: "Un resort polyvalent, facile à vendre et qui fait toujours plaisir. Que ce soit pour une famille, des amis ou des primo-voyageurs, Olhuveli répond à toutes les demandes avec assurance.",
      ctaLabel: "Envoyer ma demande",
    },
    footerBadges: [
      "Sélection des best resorts selon le brief client",
      "Support de vente et training",
      "Formats adaptés agences / TO",
      "Relais des nouveautés et offres",
      "Mise en relation rapide pour demandes qualifiées",
    ],
    autresResorts: [
      { slug: "world", name: "Siyam World Maldives", image: "/assets/images/partenaires/sun-siyam/hotels/SW-2.jpg", tagline: "Luxe et immensité, une île aux possibilités infinies." },
      { slug: "iru-fushi", name: "Sun Siyam Iru Fushi", image: "/assets/images/partenaires/sun-siyam/hero/fiche/SSIF.jpg", tagline: "L'intemporel romantique au cœur des Maldives." },
      { slug: "vilu-reef", name: "Sun Siyam Vilu Reef", image: "/assets/images/partenaires/sun-siyam/hotels/SSVR-2.jpg", tagline: "Authenticité et intimité dans un cadre préservé." },
    ],
  },

  pasikudah: {
    slug: "pasikudah",
    name: "Sun Siyam Pasikudah, Sri Lanka",
    tagline: "La page qui ouvre le champ des combinés culture + plage.",
    description:
      "Un boutique resort confidentiel sur la côte Est du Sri Lanka, entre plage tranquille et patrimoine millénaire. Idéal pour prolonger un itinéraire culturel avec douceur, sens et authenticité.",
    heroImage: "/assets/images/partenaires/sun-siyam/hotels/SSP-2.jpg",
    collection: "Collection privée",
    collectionColor: "bg-teal-700",
    heroBadges: ["Collection privée", "Sri Lanka", "Culture", "Ayurveda", "Combiné", "Plage calme"],
    ctaSecondaryLabel: "Recevoir l'argumentaire Sri Lanka",
    cibles: [
      { icon: ic(Heart), title: "Couples", description: "Retraite romantique entre plage calme et bien-être." },
      { icon: ic(Users), title: "Familles", description: "Espace et sérénité, découvertes culturelles adaptées aux enfants." },
      { icon: ic(Compass), title: "Voyageurs culture & nature", description: "Envie de comprendre le Sri Lanka autrement, entre paysages, traditions et spiritualité." },
      { icon: ic(Route), title: "Combinés Sri Lanka + Maldives", description: "L'alliance parfaite entre culture et farniente dans l'océan Indien." },
    ],
    arguments: [
      { icon: ic(Crown), title: "Une alternative premium", description: "En bord de mer, loin des foules de la côte Ouest. Une adresse confidentielle, élégante et apaisante." },
      { icon: ic(Building2), title: "Culture + plage, à la bonne distance", description: "Parfaitement situé pour combiner patrimoine ancestral et relaxation sur la plage de Pasikudah." },
      { icon: ic(Leaf), title: "Expérience locale authentique", description: "Architecture inspirée du Sri Lanka, cuisine locale, rencontres et immersion." },
    ],
    preuves: [
      { icon: ic(Waves), label: "Plage paisible" },
      { icon: ic(Flower2), label: "Spa ayurvédique" },
      { icon: ic(Waves), label: "Piscine infinity de 30 mètres" },
      { icon: ic(ChefHat), label: "Cours de cuisine" },
      { icon: ic(UtensilsCrossed), label: "Marché avec le chef" },
      { icon: ic(Binoculars), label: "Excursions Polonnaruwa / Minneriya / Dambulla" },
    ],
    experiences: [
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSP-2.jpg", title: "Garden Pavilion", description: "Villas entourées de jardins tropicaux pour une intimité totale." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSP-2.jpg", title: "Ocean Pavilion", description: "Vue mer et design contemporain, à deux pas de la plage." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSP-2.jpg", title: "Private Pool Pavilion", description: "Piscine privée et espaces extérieurs pour un séjour en toute quiétude." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSP-2.jpg", title: "Sri Lankan Food Tour", description: "Partez au marché local puis cuisinez les saveurs du Sri Lanka." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSP-2.jpg", title: "UNESCO Polonnaruwa", description: "Découvrez l'ancienne capitale royale classée au patrimoine mondial." },
      { image: "/assets/images/partenaires/sun-siyam/hotels/SSP-2.jpg", title: "Minneriya Safari", description: "Vivez le spectacle des éléphants dans leur habitat naturel." },
    ],
    argumentAgence: {
      isQuote: true,
      quote: "La page à utiliser quand le client veut le Sri Lanka autrement.",
      title: "Proposez Pasikudah en fin de voyage culturel ou en alternative douce à la côte Sud.",
      body: "Idéal pour les clients en quête d'authenticité et de tranquillité. Triangle culturel ou combiné Maldives : Pasikudah s'intègre naturellement dans tous les itinéraires Sri Lanka premium.",
      ctaLabel: "Recevoir l'argumentaire Sri Lanka",
    },
    footerBadges: [
      "Sélection des bons resorts selon le brief client",
      "Support de vente et accompagnement",
      "Formats clairs agences / TO",
      "Relais des nouveautés et offres",
      "Mise en relation rapide pour demandes qualifiées",
    ],
    autresResorts: [
      { slug: "iru-veli", name: "Sun Siyam Iru Veli", image: "/assets/images/partenaires/sun-siyam/hotels/SSIV-2.jpg", tagline: "Élégance et tranquillité aux Maldives." },
      { slug: "vilu-reef", name: "Sun Siyam Vilu Reef", image: "/assets/images/partenaires/sun-siyam/hotels/SSVR-2.jpg", tagline: "Luxe naturel et service d'exception." },
    ],
  },
};
