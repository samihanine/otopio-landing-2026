export type Question = {
  id: string;
  question: string;
  answer: string;
};

export const questions: Question[] = [
  {
    id: "1",
    question: "Que faites-vous exactement ?",
    answer:
      "Nous concevons des expériences numériques qui se démarquent. De l'image de marque aux applications web full-stack, notre objectif est de donner vie à votre vision avec précision et une touche de magie.",
  },
  {
    id: "2",
    question: "Combien de temps dure généralement un projet ?",
    answer:
      "Cela varie en fonction de l'envergure. Une page d'atterrissage simple peut prendre quelques semaines, tandis qu'une application web complexe peut prendre des mois. Nous privilégions la qualité sans compromettre l'efficacité.",
  },
  {
    id: "3",
    question: "Proposez-vous un support continu ?",
    answer:
      "Absolument. Nous croyons en l'établissement de relations à long terme. Après le lancement, nous proposons des forfaits de maintenance et d'assistance adaptés à vos besoins spécifiques.",
  },
  {
    id: "4",
    question: "Quelle est votre structure tarifaire ?",
    answer:
      "Nous proposons des devis personnalisés en fonction des exigences spécifiques de votre projet. Planifions un appel pour discuter de vos objectifs et nous pourrons vous fournir une proposition détaillée.",
  },
];
