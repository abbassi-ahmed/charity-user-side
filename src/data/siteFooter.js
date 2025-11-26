import bg from "@/images/footer-bg.jpg";
import shape from "@/images/footer-shape.png";
import logo from "@/images/output-onlinepngtools.png";

export const socials2 = [
  {
    id: 1,
    icon: "fa fa-facebook-square",
    href: "https://www.facebook.com/OlympiqueMnihla",
  },
  {
    id: 2,
    icon: "fa fa-instagram",
    href: "https://www.instagram.com/olympique_mnihla/",
  },
  {
    id: 3,
    icon: "fa fa-linkedin",
    href: "https://www.linkedin.com/company/olympique-mnihla",
  },
  // {
  //   id: 4,
  //   icon: "fa fa-tiktok",
  //   href: "#",
  // },
];

const footerData = {
  logo,
  bg,
  socials: socials2,
  text: "Olympique Mnihla",
  text2: "Contactez-nous maintenant écrire un message",
  shape,
  links: [
    {
      id: 1,
      text: "Accueil",
      href: "#",
    },
    {
      id: 2,
      text: "A propos",
      href: "#",
    },
    {
      id: 3,
      text: "Événements",
      href: "#",
    },
    {
      id: 4,
      text: "Nos Abonnements",
      href: "#",
    },
    {
      id: 5,
      text: "Gallerie",
      href: "#",
    },
    {
      id: 6,
      text: "Sport",
      href: "#",
    },
    {
      id: 7,
      text: "Clubs",
      href: "#",
    },
    {
      id: 8,
      text: "Formation",
      href: "#",
    },
    {
      id: 9,
      text: "Entrepreneuriat sportif et loisirs",
      href: "#",
    },
    {
      id: 10,
      text: "Eya Faydi",
      href: "#",
    },
    {
      id: 11,
      text: "Walid Neffati",
      href: "#",
    },
  ],
  author: "Krowd",
  year: new Date().getFullYear(),
};

const footerData2 = {
  linksNav: [
    {
      id: 1,
      text: "Accueil",
      href: "/",
    },
    {
      id: 2,
      text: "A propos",
      href: "/about",
    },

    {
      id: 3,
      text: "Événement",
      href: "/events",
    },
    {
      id: 4,
      text: "Nos Abonnements",
      href: "/abonnement-club",
    },
    { id: 5, text: "Faq", href: "/faq" },
  ],
  Categories: [
    {
      id: 1,
      text: "Social",
      href: "/projects-2",
    },
    {
      id: 2,
      text: "Startup",
      href: "/projects-type1",
    },
    {
      id: 3,
      text: "Projet participatif",
      href: "/projects-type2",
    },
  ],
};
export default footerData;

export { footerData2 };
