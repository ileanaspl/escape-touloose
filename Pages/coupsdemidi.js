import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { devinette } from "./devinettes.js";

export function coupsdemidi() {
  const title = createElementWithAttribute("h2", { id: "title" });
  title.innerText = "Les 31 coups de midi";
  appendOrPrepend("append", ".dynamic-content", title);

  const dynamicContent = document.querySelector(".dynamic-content");

  const coupsdemidiContainer = document.createElement("div");
  coupsdemidiContainer.classList.add("coupsdemidi-container");
  dynamicContent.appendChild(coupsdemidiContainer);

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  coupsdemidiContainer.appendChild(gridContainer);

  let i;
  for (i = 0; i < 15; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
  }




  const form = createElementWithAttribute("form", { class: "form-demidi" });
  coupsdemidiContainer.appendChild(form);

  const hintText = createElementWithAttribute("p", { class: "hint" })
  form.appendChild(hintText);
  hintText.innerText = "Tapez votre réponse"


  const label = createElementWithAttribute("label", {
    id: "label-demidi",
    for: "input-demidi",
  });
  form.appendChild(label);


  const input = createElementWithAttribute("input", { id: "input-demidi", type: "text", name: "input-demidi" });
  label.appendChild(input)





  const nextButton = createElementWithAttribute("button", { id: "next-button" });
  nextButton.innerText = "Suivant";
  nextButton.addEventListener("click", () => {
    raz();
    devinette();
  });
  appendOrPrepend("append", ".coupsdemidi-container", nextButton);


  square.setAttribute("class", "square-visible");

  setInterval(() => {
    for (i = 0; i < 0; i++) {
      square.classList.add("square-invisible");
      i++;
    }
  }, 1000);
}
