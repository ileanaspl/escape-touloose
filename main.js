import { raz } from "./Services/util.js";
import { home } from "./Pages/home.js";
import { hud } from "./Pages/hud.js";
import { welcomeInTheNeighborhood } from "./Pages/intersection.js";

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
