import artoriusImage from "./media/artorius.jpeg";
import unFinalPerfectoImage from "./media/un_final_perfecto.jpeg";
import laHermandadImage from "./media/la_hermandad.jpeg";

export const productsList = [
  {
    id: 1,
    title: "Artorius",
    author: "César Vidal",
    publisher: "Grijalbo",
    category: "historia",
    condition: "Usado",
    description:
      "Britannia, amenazada por la caída del Imperio romano y por el avance de los bárbaros, ve nacer la leyenda artúrica a través de la historia real del rey Artorius",
    price: 400,
    image: artoriusImage,
    alt: "Artorius",
  },
  {
    id: 2,
    title: "Un final perfecto",
    author: "John Katzenbach",
    publisher: "Ediciones B",
    category: "policial",
    condition: "Usado",
    description:
      "Vuelve Katzenbach. El retorno del autor de El psicoanalista (un millón de ejemplares). Un thriller sobre la lucha a muerte entre un refinado psicópata y sus tres víctimas.",
    price: 600,
    image: unFinalPerfectoImage,
    alt: "Un final perfecto",
  },
  {
    id: 3,
    title: "La hermandad",
    author: "John Grisham",
    publisher: "DEBOLS!LLO",
    category: "policial",
    condition: "Usado",
    description:
      "Se hacen llamar 'La hermandad'. Son tres ex jueces corruptos que cumplen condena en la prisión federal de Florida. Pasan horas sentados en la biblioteca escribiendo cartas frenéticamente mientras toma forma un retorcido plan de extorsión que consiste en chantajear a homosexuales ricos que no hayan salido del clóset. Parece que han encontrado a la víctima perfecta: Aaron Lake, el candidato a las próximas elecciones presidenciales. Lo que no saben, es que están a punto de entrometerse en una confabulación diseñada por Teddy Maynard, el implacable director de la CIA.",
    price: 700,
    image: laHermandadImage,
    alt: "La hermandad",
  },
];
