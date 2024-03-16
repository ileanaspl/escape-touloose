import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { home } from "./home.js";

export function endGame() {
  const title = createElementWithAttribute("h2", { id: "title" });
  title.innerText = "The End";
  appendOrPrepend("append", "main", title);

  const nextButton = createElementWithAttribute("button", { id: "next-button" });
  nextButton.innerText = "Bouton suivant";
  nextButton.addEventListener("click", () => {
    raz();
    home();
  });
  appendOrPrepend("append", "main", nextButton);
}
