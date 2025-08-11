import icon from "@/images/header-icon.png";
import logo2 from "@/images/logo-2.png";
import logo from "@/images/output-onlinepngtools.png";

export const navItems = [
  {
    id: 1,
    name: "Accueil",
    href: "/",
    icon: "fa-home", // Added icons for mobile
  },
  {
    id: 2,
    name: "À Propos",
    href: "#", // Use # for dropdown parents
    icon: "fa-info-circle",
    subNavItems: [
      { id: 1, name: "Olympique Mnihla", href: "/about-om", icon: "fa-shield-alt" },
      { id: 2, name: "Équipe", href: "/about", icon: "fa-users" },
    ],
  },
  {
    id: 3,
    name: "Crowdfunding",
    href: "#",
    icon: "fa-hand-holding-usd",
    subNavItems: [
      { id: 1, name: "SOCIAL", href: "/projects-2", icon: "fa-heart" },
      { id: 2, name: "Startup", href: "/projects-type1", icon: "fa-lightbulb" },
      { id: 3, name: "Projet participatif", href: "/projects-type2", icon: "fa-users-cog" },
    ],
  },
  {
    id: 4,
    name: "Nos Actions",
    href: "#",
    icon: "fa-tasks",
    subNavItems: [
      { id: 1, name: "Projet", href: "/project", icon: "fa-project-diagram" },
      { id: 2, name: "Événement", href: "/events", icon: "fa-calendar-alt" },
      { id: 3, name: "Activité", href: "/activity", icon: "fa-running" },
      { id: 4, name: "Gallerie", href: "/gallery", icon: "fa-images" },
    ],
  },
  {
    id: 5,
    name: "Nos Abonnements",
    href: "#",
    icon: "fa-id-card",
    subNavItems: [
      { id: 1, name: "Club", href: "/abonnement-club", icon: "fa-tshirt" },
      { id: 2, name: "Sport", href: "/abonnement-sport", icon: "fa-dumbbell" },
      {
        id: 3,
        name: "Donner abonnement",
        href: "/abonnement-form",
        icon: "fa-gift",
        role: "moderator",
      },
    ],
  },
  { 
    id: 6, 
    name: "Blog & Actualité", 
    href: "/news",
    icon: "fa-newspaper" 
  },
];
// export const navItems = [
//   {
//     id: 1,
//     name: "Accueil",
//     href: "/",
//   },
//   {
//     id: 2,
//     name: "A Propos",
//     href: "#",
//     subNavItems: [
//       { id: 1, name: "Olympique Mnihla", href: "/about-om" },
//       { id: 2, name: "Équipe", href: "/about" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Crowdfunding",
//     href: "#",
//     subNavItems: [
//       { id: 1, name: "SOCIAL", href: "/projects-2" },
//       { id: 2, name: "Startup", href: "/projects-type1" },
//       { id: 3, name: "Projet participatif", href: "/projects-type2" },
//     ],
//   },

//   {
//     id: 4,
//     name: "Nos Actions",
//     href: "#",
//     subNavItems: [
//       { id: 1, name: "Projet", href: "/project" },
//       { id: 2, name: "Evénement", href: "/events" },
//       { id: 3, name: "Activité", href: "/activity" },
//       { id: 4, name: "Gallerie", href: "/gallery" },
//     ],
//   },
//   {
//     id: 5,
//     name: "Nos Abonnements",
//     href: "#",
//     subNavItems: [
//       { id: 1, name: "Club", href: "/abonnement-club" },
//       { id: 2, name: "Sport", href: "/abonnement-sport" },
//       {
//         id: 3,
//         name: "Donner abonnement",
//         href: "/abonnement-form",
//         role: "moderator",
//       },
//     ],
//   },
//   { id: 6, name: "Blog & Actualité", href: "/news" },
// ];
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
