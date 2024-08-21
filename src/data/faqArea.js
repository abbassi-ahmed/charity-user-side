import bg from "@/images/faq-bg.jpg";

export const faqs = [
  {
    id: 1,
    question: "Is my campaign allowed on krowd?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    id: 2,
    question: "How to soft launch your campaign?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    id: 3,
    question: "How to turn visitors into contributors?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    id: 4,
    question: "How can i find my campaign?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
];

export const faqArea = {
  bg,
  tagline: "Frequently Asked Questions",
  title: "How Can We Help?",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Have you done google research which works all the time.",
  categories: [
    {
      id: 1,
      icon: "flaticon-handshake",
      text: "General",
      href: "#",
    },
    {
      id: 2,
      icon: "flaticon-computer",
      text: "Campaigns",
      href: "#",
    },
    {
      id: 3,
      icon: "flaticon-pay",
      text: "Payments",
      href: "#",
    },
  ],
  faqs,
};

export const faqTitleArea = {
  tagline: "Frequently Asked Questions",
  title: "How Can We Help?",
};

export const faqDesignArea = {
  navItems: [
    {
      id: 1,
      href: "pills-1",
      icon: "flaticon-contact",
      name: "General",
    },
    {
      id: 2,
      href: "pills-2",
      icon: "flaticon-networking",
      name: "Privacy",
    },
    {
      id: 3,
      href: "pills-3",
      icon: "flaticon-smartphone",
      name: "Support",
    },
  ],
  tabPane: [
    {
      id: "pills-1",
      faqsData: [faqs],
    },
    {
      id: "pills-2",
      faqsData: [faqs],
    },
    {
      id: "pills-3",
      faqsData: [faqs],
    },
  ],
};
