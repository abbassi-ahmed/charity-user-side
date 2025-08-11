import icon from "@/images/header-icon.png";
import logo2 from "@/images/logo-2.png";
import logo from "@/images/output-onlinepngtools.png";

export const navItems = [
  {
    id: 1,
    name: "Accueil",
    href: "/",
  },
  {
    id: 2,
    name: "A Propos",
    href: "#",
    subNavItems: [
      { id: 1, name: "Olympique Mnihla", href: "/about-om" },
      { id: 2, name: "Équipe", href: "/about" },
    ],
  },
  {
    id: 3,
    name: "Crowdfunding",
    href: "#",
    subNavItems: [
      { id: 1, name: "SOCIAL", href: "/projects-2" },
      { id: 2, name: "Startup", href: "/projects-type1" },
      { id: 3, name: "Projet participatif", href: "/projects-type2" },
    ],
  },

  {
    id: 4,
    name: "Nos Actions",
    href: "#",
    subNavItems: [
      { id: 1, name: "Projet", href: "/project" },
      { id: 2, name: "Evénement", href: "/events" },
      { id: 3, name: "Activité", href: "/activity" },
      { id: 4, name: "Gallerie", href: "/gallery" },
    ],
  },
  {
    id: 5,
    name: "Nos Abonnements",
    href: "#",
    subNavItems: [
      { id: 1, name: "Club", href: "/abonnement-club" },
      { id: 2, name: "Sport", href: "/abonnement-sport" },
      {
        id: 3,
        name: "Donner abonnement",
        href: "/abonnement-form",
        role: "moderator",
      },
    ],
  },
  { id: 6, name: "Blog & Actualité", href: "/news" },
];
export const navDefault = [
  {
    id: 1,
    name: "News",
    href: "/news",
  },
  {
    id: 2,
    name: "Abonnement",
    href: "/abonnement",
  },
];

export const socials = [
  {
    id: 1,
    icon: "fa fa-facebook-square",
    href: "#",
  },
  {
    id: 2,
    icon: "fa fa-instagram",
    href: "#",
  },
  {
    id: 3,
    icon: "fa fa-linkedin",
    href: "#",
  },
  {
    id: 4,
    icon: "fa fa-tiktok",
    href: "#",
  },
];

const headerData = {
  logo,
  logo2,
  icon,
  navItems,
  navDefault,
  email: "olympiquemnihla@gmail.com",
  phone: "+216 xx xxx xxx",
  address: "Cite Bassatine Mnihla, Ariana, Tunisia, 2094",
  socials,
};

export default headerData;
