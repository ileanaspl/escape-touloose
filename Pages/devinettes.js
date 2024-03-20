import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { prison } from "./prison.js";

export function devinette() {
  const devinetteContainer = createElementWithAttribute("div", { id: "devinette-container" });
  appendOrPrepend("prepend", ".dynamic-content", devinetteContainer);

  const question = createElementWithAttribute("p", { id: "question-devinette" });
  appendOrPrepend("append", "#devinette-container", question);
  question.innerText = "Combien d'habitants peuplent Toulouse (à 100 000 près ?)";

  const form = createElementWithAttribute("form", { id: "form-devinette" });
  appendOrPrepend("append", "#devinette-container", form);

  const label = createElementWithAttribute("label", {
    id: "label-devinette",
    for: "input-devinette",
  });
  label.innerText = "Votre réponse";
  appendOrPrepend("append", "#form-devinette", label);

  const input = createElementWithAttribute("input", { id: "input-devinette", type: "text" });
  appendOrPrepend("append", "#form-devinette", input);

  const title = createElementWithAttribute("h2", { id: "title" });
  title.innerText = "Devinette !";
  appendOrPrepend("append", ".dynamic-content", title);

  const nextButton = createElementWithAttribute("button", {
    id: "valid-button-devinette",
    class: "valid-button",
  });
  nextButton.innerText = "Valider";
  nextButton.addEventListener("click", () => {
    raz();
    prison();
  });
  appendOrPrepend("append", "#form-devinette", nextButton);
}
