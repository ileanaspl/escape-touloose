import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { devinette } from "./devinettes.js";

export function coupsdemidi() {
  const title = createElementWithAttribute("h2", { id: "title" });
  title.innerText = "Les 31 coups de midi";
  appendOrPrepend("append", "main", title);

  const nextButton = createElementWithAttribute("button", { id: "next-button" });
  nextButton.innerText = "Bouton suivant";
  nextButton.addEventListener("click", () => {
    raz();
    devinette();
  });
  appendOrPrepend("append", "main", nextButton);
}
