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
      { id: 1, name: "All Of Them", href: "/projects-2" },
      { id: 2, name: "Mobile", href: "/projects-type1" },
      { id: 3, name: "Web", href: "/projects-type1" },
    ],
  },

  {
    id: 4,
    name: "Nouveautés",
    href: "/news",
  },
  {
    id: 5,
    name: "Abonnement",
    href: "/abonnement",
  },
  {
    id: 6,
    name: "FAQ",
    href: "/faq",
  },
  // {
  //   id: 7,
  //   name: "Contact",
  //   href: "/contact",
  // },
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
  email: "needhelp@krowd.com",
  phone: "+216 xx xxx xxx",
  address: "Cite Bassatine Mnihla, Ariana, Tunisia, 2094",
  socials,
};

export default headerData;
