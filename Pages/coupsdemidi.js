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

  const nextButton = createElementWithAttribute("button", { id: "next-button" });
  nextButton.innerText = "Bouton suivant";
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
