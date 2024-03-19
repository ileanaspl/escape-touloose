import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { coupsdemidi } from "./coupsdemidi.js";
import { playerInfos } from "../main.js";

export function quizz() {
  console.log(playerInfos);

  const title = createElementWithAttribute("h2", { id: "title" });
  title.innerText = "Quizz page";
  appendOrPrepend("append", ".dynamique-content", title);

  const nextButton = createElementWithAttribute("button", { id: "next-button" });
  nextButton.innerText = "Bouton suivant";
  nextButton.addEventListener("click", () => {
    raz();
    coupsdemidi();
  });
  appendOrPrepend("append", ".dynamique-content", nextButton);
}
