import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { devinette } from "./devinettes.js";

export function coupsdemidi() {
  const title = createElementWithAttribute("h2", { id: "title" });
  title.innerText = "Les 31 coups de midi";
  appendOrPrepend("append", ".dynamic-content", title);

  const nextButton = createElementWithAttribute("button", { id: "next-button" });
  nextButton.innerText = "Bouton suivant";
  nextButton.addEventListener("click", () => {
    raz();
    devinette();
  });
  appendOrPrepend("append", ".dynamic-content", nextButton);

  const dynamicContent = document.querySelector(".dynamic-content");
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  dynamicContent.appendChild(gridContainer);

  let i;
  for (i = 0; i < 12; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
  }

  square.setAttribute("class", "square-visible");

  setInterval(() => {
    for (i = 0; i < 0; i++) {
      square.classList.add("square-invisible");
      i++;
    }
  }, 1000);
}
