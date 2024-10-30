import bg from "@/images/categories-bg.jpg";
import categoriesUser from "@/images/bg4.jpg";
import signIn from "@/images/singin.png";
import culturelles from "../assets/svgs/culturelles.svg";
import educations from "../assets/svgs/education.svg";
import defencDroits from "../assets/svgs/defence des droits.svg";
import environment from "../assets/svgs/environment.svg";
import social from "../assets/svgs/social.svg";
import sports from "../assets/svgs/sports.svg";

export const categoriesSection = {
  bg,
  tagline: "Which Category Intrest You",
  title: "Top Categories",
  text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown was popularised.",
  categoriesUser,
  signIn,
  categoriesIcons: [
    {
      id: 1,
      icon: social,
      title: "Activités sociales et humanitaires",
    },
    {
      id: 2,
      icon: educations,
      title: "Activités éducatives",
    },
    {
      id: 3,
      icon: culturelles,
      title: "Activités culturelles",
    },
    {
      id: 4,
      icon: sports,
      title: "Activités sportives et récréatives",
    },
    {
      id: 5,
      icon: environment,
      title: "Activités environnementales",
    },
    {
      id: 6,
      icon: defencDroits,
      title: "Activités de plaidoyer et de défense des droits",
    },
  ],
};
