import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { quizz } from "./quizz.js";
import { playerInfos } from "../main.js";

export function home() {
  const title = createElementWithAttribute("h2", { id: "title" });
  title.innerText = "Home page";
  appendOrPrepend("append", ".dynamique-content", title);

  const form = createElementWithAttribute("form", {});
  appendOrPrepend("prepend", ".dynamique-content", form);

  const labelPlayerName = createElementWithAttribute("label", { for: "player-name" });
  labelPlayerName.innerText = "Entrer votre pseudo";
  appendOrPrepend("prepend", "form", labelPlayerName);

  const playerName = createElementWithAttribute("input", { id: "player-name", type: "text" });
  appendOrPrepend("append", "form", playerName);

  const header = document.querySelector("header");

  const nextButton = createElementWithAttribute("button", { id: "next-button" });
  nextButton.innerText = "Bouton suivant";
  nextButton.addEventListener("click", () => {
    header.innerText += playerName.value;
    playerInfos.playerName = playerName.value;
    raz();
    quizz();
  });
  appendOrPrepend("append", ".dynamique-content", nextButton);
}
