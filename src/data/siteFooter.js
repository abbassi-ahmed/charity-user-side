import bg from "@/images/footer-bg.jpg";
import shape from "@/images/footer-shape.png";
import logo from "@/images/output-onlinepngtools.png";

export const socials2 = [
  {
    id: 1,
    icon: "fa fa-twitter",
    href: "#",
  },
  {
    id: 2,
    icon: "fa fa-facebook-official",
    href: "#",
  },
  {
    id: 3,
    icon: "fa fa-pinterest",
    href: "#",
  },
  {
    id: 4,
    icon: "fa fa-instagram",
    href: "#",
  },
];

const footerData = {
  logo,
  bg,
  socials: socials2,
  text: "Olympique Mnihla",
  text2:
    "Sign up for our latest news & articles. We won’t give you spam mails.",
  shape,
  links: [
    {
      id: 1,
      text: "Anis Aloui",
      href: "#",
    },
    {
      id: 2,
      text: "Salah Baldi",
      href: "#",
    },
    {
      id: 3,
      text: "Hela Ben Ghayadha",
      href: "#",
    },
    {
      id: 4,
      text: "Rana Saoudi",
      href: "#",
    },
    {
      id: 5,
      text: "Olfa",
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

export default footerData;
