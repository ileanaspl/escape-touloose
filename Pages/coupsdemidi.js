import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { devinette } from "./devinettes.js";

export function coupsdemidi() {
  const title = createElementWithAttribute("h2", { id: "title" });
  title.innerText = "Les 31 coups de midi";
  appendOrPrepend("append", ".dynamic-content", title);

  const dynamicContent = document.querySelector(".dynamic-content");

  // création du container de la question (coupsdemidiContainer)
  const coupsdemidiContainer = document.createElement("div");
  coupsdemidiContainer.classList.add("coupsdemidi-container");
  dynamicContent.appendChild(coupsdemidiContainer);

  // ajout du titre en haut du container coupsdemidiContainer
  const textCoupsdemidi = document.createElement("h3");
  textCoupsdemidi.classList.add("textCoupsdemidi");
  coupsdemidiContainer.appendChild(textCoupsdemidi);
  textCoupsdemidi.innerHTML = "Quel est cet endroit ?"

  // création de la div qui va contenir l'image et la grille pour les superposer
  const imageAndGridContainer = document.createElement("div");
  imageAndGridContainer.classList.add("imageAndGridContainer");
  coupsdemidiContainer.appendChild(imageAndGridContainer);

  // ajout de l'image qui sera derrière la grille
  const imageCoupsdemidi = document.createElement("img");
  imageCoupsdemidi.classList.add("imageCoupsdemidi");
  imageAndGridContainer.appendChild(imageCoupsdemidi);
  imageCoupsdemidi.src = "https://cdn.pixabay.com/photo/2022/11/09/08/11/chapel-7580040_1280.jpg"

  // création de la grille
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  imageAndGridContainer.appendChild(gridContainer);

  // création de tous les carrés qui seront dans la grille
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


  // square.setAttribute("class", "square-visible");

  // setInterval(() => {
  //   for (i = 0; i < 0; i++) {
  //     square.classList.add("square-invisible");
  //     i++;
  //   }
  // }, 1000);
}
