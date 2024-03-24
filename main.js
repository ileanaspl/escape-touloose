import { raz } from "./Services/util.js";
import { home } from "./Pages/home.js";
import { hud } from "./Pages/hud.js";
import { welcomeInTheNeighborhood } from "./Pages/intersection.js";

export const neighborhoods = [
  {
    neighborhood: "Saint-Etienne",
    coordonnates: "17/43.59791/1.44890",
    url: "./Assets/welcome-st-etienne.jpg",
    descriptif:
      "Dans ce quartier bourgeois, les demeures ont été réalisées principalement au  pour des aristocrates et pour des gens de robes. On y trouve aujourd'hui des magasins de luxe, des magasins d'antiquités ainsi que des ateliers de restauration. Parmi les rues remarquables, qui souvent recèlent des monuments classés, notamment la rue des Arts, la rue Ninau, la rue Théodore-Ozenne. \n La cathédrale Saint-Étienne, dont le bâtiment actuel a été construit entre le XIIIe et le XVIIe siècle a donné son nom au quartier",
    background: "./Assets/rue-des-arts.jpg",
  },
  {
    neighborhood: "Saint-Sernin, Arnaud-Bernard",
    coordonnates: "17/43.60842/1.44185",
    url: "./Assets/background-st-sernin.jpeg",
    descriptif:
      "Quartier tampon entre la ville et la campagne, Arnaud-Bernard abritait au moyen-âge un important marché aux primeurs qui a été déplacé dans les années soixante au marché d'intérêt national de Lalande. \nLe quartier abrite la basilique Saint-Sernin bâtie à la fin du XIe siècle pour abriter les reliques du premier évêque de Toulouse, saint Saturnin (devenu Sarnin ou Sernin en occitan), l'un des premiers et plus vénérés martyrs chrétiens gallo-romains. Aujourd'hui, la basilique Saint Sernin reste le monument le plus visité de la ville, reconnue pour sa valeur patrimoniale exceptionnelle.",
    background: "./Assets/welcome-saint-sernin.webp",
  },
  {
    neighborhood: "Les Carmes",
    coordonnates: "17/43.59777/1.44458",
    url: "./Assets/welcome-carmes.jpg",
    descriptif:
      "Vieux quartier toulousain, traversé par le cardo romain (l'axe nord-sud), les Carmes s'organisent autour d'une ancienne halle dont la construction a été décidée par les capitouls en 1203. La rue des Filatiers est une des rues les plus importantes du quartier. C'est dans cette rue notamment que l'on retrouve un des hauts lieux de l'histoire judiciaire toulousaine, la maison de Jean Calas. Le quartier est connu pour être animé. De nombreux restaurants et bars y sont implantés ainsi que le Marché des Carmes et son parking payant de 520 places.",
    background: "./Assets/carmes.jpg",
  },
  {
    neighborhood: "Saint-Cyprien",
    coordonnates: "15/43.59795/1.43212",
    url: "./Assets/welcome-saint-cyprien.jpg",
    descriptif:
      "Cet ancien faubourg du XIIeme siècle, souvent inondé dans le passé, est réputé populaire, cosmopolite (en raison des coiffeurs afros et des magasins alimentaires de produits exotiques), vivant et convivial.\n Ce quartier compte beaucoups de lieu emblématiques de Toulouse dont notamment, Le cours Dillon L'église du Sacré-Cœur, place de la Patte-d'Oie La maison à la Vigie, 2 avenue de Lombez/place de la Patte-d'Oie, probablement conçue par Auguste Virebent L'église Saint-Nicolas, L'hôpital de La Grave ou encore les Abattoirs, musée d'art moderne et contemporain.",
    background: "./Assets/welcome-victory.jpg",
  },
  {
    neighborhood: "Prison Saint-Michel",
    coordonnates: "17/43.58641/1.44819",
    url: "./Assets/welcome-saint-michel.jpg",
    descriptif:
      "La prison Saint-Michel est un bâtiment toulousain se situant au 18bis de la Grande-rue Saint-Michel sur l'ancienne route qui reliait Toulouse à Narbonne, dans le quartier Saint-Michel. Elle a été désaffectée en 2009 et est partiellement inscrite monument historique par arrêté du 25 février 2011.",
    background: "./Assets/background-prison.jpg",
  },
];

const initialDate = new Date(Date.now());
export const dateDifferenceInSeconds = (dateInitial, dateFinal) => (dateFinal - dateInitial) / 1000;
export const playerInfos = { playerName: "", score: 0, start: initialDate, level: 0 };
export const questions = [
  {
    level: "normal",
    devinettesQuestion:
      "Première question : Combien d'habitants peuplent l'agglomération toulousaine (à 100 000 près ?)",
    devinettesReponse: 1063235,
  },
  {
    level: "hardcore",
    devinettesQuestion:
      "Seconde question : Quel animal est représenté sur le blazon de la ville de Toulouse ?",
    devinettesReponse: "agneau",
  },
];

hud();
raz();
home();
