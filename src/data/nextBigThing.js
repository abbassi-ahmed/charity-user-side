import image from "@/images/output-onlinepngtools.png";

const text =
  "L’Olympique Mnihla est une association sportive et culturelle fondée en 2020 dans la région de Mnihla, avec pour mission de promouvoir le sport et le bien-être des jeunes de la région, en particulier ceux issus de milieux vulnérables. Grâce à des initiatives inclusives et innovantes, l'association s'efforce de créer des espaces où les jeunes peuvent s'épanouir à travers des activités sportives, culturelles et entrepreneuriales, tout en favorisant leur intégration sociale et professionnelle.";

const HistoriqueText = `
L’association Olympique Mnihla a été fondée en septembre 2020 avec pour objectif de soutenir la jeunesse locale à travers le sport. En 2021, elle a lancé son premier projet autofinancé, A3ref thnitik, permettant aux jeunes vulnérables de Mnihla de découvrir le sport comme un outil d'épanouissement personnel et social. Ensuite, elle a mis en place son premier projet financé, Sehtek Madhayaahech, qui visait à sensibiliser la population à l'importance de la santé physique et mentale, en particulier chez les jeunes.

En 2022, l’association a aménagé la salle de sport Al Wafa à Mnihla avec le projet 3andi win netrena, offrant ainsi à la communauté un espace sportif dédié. Elle a également lancé le programme Jeunes sportifs Entrepreneurs, destiné à accompagner les jeunes passionnés dans la création de projets entrepreneuriaux liés au sport.

En 2023, l’association a intensifié ses efforts avec le projet Inclusion des jeunes migrants de retour, offrant des opportunités d’intégration à travers le sport. Elle a aussi créé un espace de loisirs, sportif et culturel, qui génère des revenus pour soutenir ses activités, tout en favorisant l’épanouissement social et culturel des jeunes. La période 2023-2024 a marqué un tournant avec l’initiative Rose - Ta’ziz, qui visait à restructurer et redéfinir les objectifs stratégiques de l’association pour mieux répondre aux besoins de la communauté.

En 2024, l’association a lancé le projet Tamessek en partenariat avec le PNUD, axé sur l’autonomisation des jeunes à travers des initiatives sportives et communautaires. Elle a également participé aux projets #EU4YOUTH, Fe3il.a et Maghroumin - DUE, soutenus par l’Union Européenne, pour promouvoir l'engagement des jeunes dans des initiatives sportives et culturelles.`;

const ActivitiesText = `
Sport : Propose des sports collectifs comme le handball et le football, ainsi que des sports individuels tels que le kung-fu, le kickboxing et le karaté. Objectif : rendre le sport accessible à tous.

Clubs : Des clubs éducatifs, récréatifs et sportifs pour enfants, visant à développer leurs compétences linguistiques, technologiques, sociales et physiques, tout en favorisant l'épanouissement global.

Formation : Offre des formations en soft skills, robotique et gestion d’association pour améliorer les compétences des membres et l'efficacité organisationnelle.

Entrepreneuriat sportif et loisirs : Accompagnement dans la création d’espaces de loisirs pour enfants et formation des futurs entraîneurs, encourageant ainsi l’esprit entrepreneurial.

Projet Crowdfunding : Développement d’un jardin automatisé avec capteurs intelligents pour une irrigation optimale et création d’un espace de loisirs pour les familles.

Actualités récentes : Formation en soft skills et robotique, expédition à Montaure, et camp à Ermil, Bizerte, renforçant les compétences et la cohésion de groupe des participants.
`;

const introductionText =
  "L'Olympique Mnihla est une association sportive engagée dans la promotion du sport pour tous, avec une attention particulière à l'inclusion, l'égalité des genres et la durabilité. Elle se distingue par la création d'infrastructures sportives accessibles et l'organisation d'initiatives visant à promouvoir la santé et la culture sportive auprès des jeunes. En impliquant activement les jeunes dans la vie associative et en les accompagnant vers l'autonomie, l'association contribue au développement durable de la région. Elle soutient également les Objectifs de Développement Durable (ODD), en particulier ceux liés à la santé et au bien-être (ODD 3) et aux villes et communautés durables (ODD 11).";
export const nextBigThing = {
  tagline: "Faites connaissance avec nous",
  title: "Olympique Mnihla",
  image,
  text,
  tabs: [
    {
      id: "pills-home",
      tagline: "Présentation",
      text: introductionText,
    },
    {
      id: "pills-profile",
      tagline: "Nos activités",
      text: ActivitiesText,
    },
    {
      id: "pills-contact",
      tagline: "Notre histoire",
      text: HistoriqueText,
    },
  ],

  lists: [
    "Création de clubs sportifs adaptés à tous les âges",
    "Organisation d’activités sportives et récréatives",
    "Participation à des compétitions sportives",
    "Développement de programmes de formation et d'encadrement pour favoriser l'autonomie des jeunes",
  ],
};
