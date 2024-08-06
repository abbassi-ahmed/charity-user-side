import icon from "@/images/header-icon.png";
import logo2 from "@/images/logo-2.png";
import logo from "@/images/logo.png";

export const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Projects",
    href: "/projects-2",
  },
  {
    id: 4,
    name: "Pages",
    href: "",
    subNavItems: [
      { id: 1, name: "FAQ", href: "/faq" },
      { id: 2, name: "Events", href: "/event" },
      { id: 3, name: "Team Members", href: "/team-members" },
    ],
  },
  {
    id: 5,
    name: "News",
    href: "/news",
  },
  {
    id: 6,
    name: "Abonnement",
    href: "/abonnement",
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
  {
    id: 4,
    icon: "fa fa-dribbble",
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
  phone: "666 888 0000",
  address: "66 Broklyn Street, USA",
  socials,
};

export default headerData;
