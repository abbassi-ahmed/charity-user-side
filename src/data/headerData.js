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
    href: "/about",
  },
  {
    id: 3,
    name: "Projets",
    href: "",
    subNavItems: [
      { id: 1, name: "SOCIAL", href: "/projects-2" },
      { id: 2, name: "IDÉE DE PROJET", href: "/projects-type1" },
      { id: 3, name: "ESS", href: "/projects-type2" },
    ],
  },
  {
    id: 4,
    name: "Événement",
    href: "/events",
  },

  {
    id: 5,
    name: "Pages",
    href: "",
    subNavItems: [
      { id: 1, name: "Nos Abonnement", href: "/abonnement" },
      { id: 2, name: "Gallerie", href: "/gallery" },
      { id: 3, name: "Faq", href: "/faq" },
      { id: 4, name: "Dérigont", href: "/team-members" },
      { id: 5, name: "Actualité", href: "/news" },
    ],
  },
  {
    id: 7,
    name: "Contact",
    href: "/contact",
  },
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
    icon: "fa fa-twitter",
    href: "#",
  },
  {
    id: 3,
    icon: "fa fa-instagram",
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
