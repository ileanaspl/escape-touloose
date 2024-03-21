import { raz } from "./Services/util.js";
import { home } from "./Pages/home.js";
import { hud } from "./Pages/hud.js";
import { welcomeInTheNeighborhood } from "./Pages/intersection.js";

export const neighborhoods = [
  {
    neighborhood: "Saint-Etienne",
    coordonnates: "43.59791371665991,1.4489003215924958",
    url: "Assets/welcome-st-etienne.jpg",
    descriptif:
      "Dans ce quartier bourgeois, les demeures ont été réalisées principalement au  pour des aristocrates et pour des gens de robes. On y trouve aujourd'hui des magasins de luxe, des magasins d'antiquités ainsi que des ateliers de restauration. Parmi les rues remarquables, qui souvent recèlent des monuments classés, notamment la rue des Arts, la rue Ninau, la rue Théodore-Ozenne. \n La cathédrale Saint-Étienne, dont le bâtiment actuel a été construit entre le XIIIe et le XVIIe siècle a donné son nom au quartier",
    background: "Assets/rue-des-arts.jpg",
  },
  {
    neighborhood: "Saint-Sernin, Arnaud-Bernard",
    coordonnates: "43.608424329265766,1.4418575413003312",
    url: "https://cdn.pixabay.com/photo/2023/02/28/09/31/buildings-7820348_1280.jpg",
    descriptif:
      "Quartier tampon entre la ville et la campagne, Arnaud-Bernard abritait au moyen-âge un important marché aux primeurs qui a été déplacé dans les années soixante au marché d'intérêt national de Lalande. \nLe quartier abrite la basilique Saint-Sernin bâtie à la fin du XIe siècle pour abriter les reliques du premier évêque de Toulouse, saint Saturnin (devenu Sarnin ou Sernin en occitan), l'un des premiers et plus vénérés martyrs chrétiens gallo-romains. Aujourd'hui, la basilique Saint Sernin reste le monument le plus visité de la ville, reconnue pour sa valeur patrimoniale exceptionnelle.",
    background: "https://images.pexels.com/photos/674834/pexels-photo-674834.jpeg",
  },
  {
    neighborhood: "Carmes",
    coordonnates: "43.597775367471534,1.4445854701362337",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Carmes-panorama_01.JPG",
    descriptif:
      "Vieux quartier toulousain, traversé par le cardo romain (l'axe nord-sud), les Carmes s'organisent autour d'une ancienne halle dont la construction a été décidée par les capitouls en 1203. La rue des Filatiers est une des rues les plus importantes du quartier. C'est dans cette rue notamment que l'on retrouve un des hauts lieux de l'histoire judiciaire toulousaine, la maison de Jean Calas. Le quartier est connu pour être animé. De nombreux restaurants et bars y sont implantés ainsi que le Marché des Carmes et son parking payant de 520 places.",
    background: "Assets/background-4.jpg",
  },
  {
    neighborhood: "Saint-Cyprien",
    coordonnates: "43.600892504416684,1.4304941343799962",
    url: "https://fr.wikipedia.org/wiki/Quartier_Saint-Cyprien#/media/Fichier:Fontaine_Hyppolite_Olivier_-_place_Olivier_%C3%A0_Toulouse.jpg",
    descriptif:
      "Cet ancien faubourg du XIIeme siècle, souvent inondé dans le passé, est réputé populaire, cosmopolite (en raison des coiffeurs afros et des magasins alimentaires de produits exotiques), vivant et convivial.\n Ce quartier compte beaucoups de lieu emblématiques de Toulouse dont notamment, Le cours Dillon L'église du Sacré-Cœur, place de la Patte-d'Oie La maison à la Vigie, 2 avenue de Lombez/place de la Patte-d'Oie, probablement conçue par Auguste Virebent L'église Saint-Nicolas, L'hôpital de La Grave ou encore les Abattoirs, musée d'art moderne et contemporain.",
    background: "./Assets/city-toulouse.jpg",
  },
  {
    neighborhood: "Prison Saint-Michel",
    coordonnates: "43.5864125255192,1.4481915106079462",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Prison_Saint-Michel_%28Toulouse%29.jpg",
    descriptif:
      "La prison Saint-Michel est un bâtiment toulousain se situant au 18bis de la Grande-rue Saint-Michel sur l'ancienne route qui reliait Toulouse à Narbonne, dans le quartier Saint-Michel. Elle a été en partie inscrite monument historique par arrêté du 25 février 2011.\nAnecdote ! Un ancien détenu, Cyprien Elix, et quatre autres détenus s'échappent de la prison dans la nuit du 2 au 3 août 1978 par un tunnel. En creusant, les détenus affirment avoir trouvé des souterrains aménagés par l'occupant allemand durant la Seconde Guerre mondiale et une fosse de cinq ou six crânes et d'ossements humains calcinés. Elix est repris quelques jours après et prévient l'administration de sa découverte. Rien ne se passe jusqu'en 2004, où Monique Dellatre-Attia, fille de Jean Dellattre, résistant disparu le 17 août 1944, apprend l'existence de cette légende et de Cyprien Elix. En 2008, elle le retrouve. Et en 2009, Cyprien Elix, malade, accepte de montrer l'emplacement du tunnel. L'ancien évadé décède en septembre 2009. Mme Dellatre-Attia par le biais du sénateur socialiste Mirassou a demandé à la chancellerie toulousaine d'ordonner une expertise de ces restes",
    background: "./Assets/prison.jpg",
  },
];

export const playerInfos = { playerName: "", score: 0, totalTime: 0 };

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
