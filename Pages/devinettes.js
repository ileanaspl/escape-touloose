import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { prison } from "./prison.js";

export function devinette() {
  const title = createElementWithAttribute("h2", { id: "title" });
  title.innerText = "Devinette !";
  appendOrPrepend("append", "main", title);

  const nextButton = createElementWithAttribute("button", { id: "next-button" });
  nextButton.innerText = "Bouton suivant";
  nextButton.addEventListener("click", () => {
    raz();
    prison();
  });
  appendOrPrepend("append", "main", nextButton);
}
