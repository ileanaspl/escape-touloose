import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { endGame } from "./endGame.js";

export function prison() {
  const title = createElementWithAttribute("h2", { id: "title" });
  title.innerText = "Prison";
  appendOrPrepend("append", ".dynamic-content", title);

  const nextButton = createElementWithAttribute("button", { id: "next-button" });
  nextButton.innerText = "Bouton suivant";
  nextButton.addEventListener("click", () => {
    raz();
    endGame();
  });
  appendOrPrepend("append", ".dynamic-content", nextButton);
}
