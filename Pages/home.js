import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { quizz } from "./quizz.js";

export function home() {
  const title = createElementWithAttribute("h2", { id: "title" });
  title.innerText = "Home page";
  appendOrPrepend("append", "main", title);

  const nextButton = createElementWithAttribute("button", { id: "next-button" });
  nextButton.innerText = "Bouton suivant";
  nextButton.addEventListener("click", () => {
    raz();
    quizz();
  });
  appendOrPrepend("append", "main", nextButton);
}
