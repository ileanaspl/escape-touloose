import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { devinette } from "./devinettes.js";
import { welcomeInTheNeighborhood } from "./intersection.js";
import { prison } from "./prison.js";
import { endGame } from "./endGame.js";

export function coupsdemidi() {
  const dynamicContent = document.querySelector(".dynamic-content");
  const infoBulle = document.querySelector("#info-bulle")
  const infoContainer = document.querySelector('#info-container')

  // création du container de la question (coupsdemidiContainer)
  const coupsdemidiContainer = document.createElement("div");
  coupsdemidiContainer.classList.add("coupsdemidi-container");
  dynamicContent.appendChild(coupsdemidiContainer);

  // ajout du titre en haut du container coupsdemidiContainer
  const textCoupsdemidi = document.createElement("h4");
  textCoupsdemidi.classList.add("textCoupsdemidi");
  coupsdemidiContainer.appendChild(textCoupsdemidi);
  textCoupsdemidi.innerHTML = "Quel est cet endroit ?";

  // création de la div qui va contenir l'image et la grille pour les superposer
  const imageAndGridContainer = document.createElement("div");
  imageAndGridContainer.classList.add("imageAndGridContainer");
  coupsdemidiContainer.appendChild(imageAndGridContainer);

  // ajout de l'image qui sera derrière la grille
  const imageCoupsdemidi = document.createElement("img");
  imageCoupsdemidi.classList.add("imageCoupsdemidi");
  imageAndGridContainer.appendChild(imageCoupsdemidi);
  imageCoupsdemidi.src = "https://cdn.pixabay.com/photo/2022/11/09/08/11/chapel-7580040_1280.jpg";

  // création de la grille
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  imageAndGridContainer.appendChild(gridContainer);

  // tableau image du jeux
  // let imagesPaths = ["./assets/canal-midi.jpg"(id = "canal_du_midi"), "./assets/basilique.jpg"(id = "basilique-st-sernin"), "./assets/capitole.jpg"(id = "capitole")];
  // let imageGame = document.createAttribute("img");
  // imageGame.src = imagesPaths
  // imageAndGridContainer.appendChild(imageGame[])

  // création de tous les carrés qui seront dans la grille
  let i;
  for (i = 0; i < 32; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
  }

  const squares = document.querySelectorAll(".square");

  // ajout de la classe square-visible à tous les carrés
  squares.forEach(square => {
    square.classList.add("square-visible")
  });

let countToIncarsereted = 0 

  // fonction pour ajouter aléatoirement la classe square-invisible à un carré
  function makeSquareInvisible() {
    const random = Math.floor(Math.random() * squares.length)
    squares[random].classList.add("square-invisible");
  }

  // méthode pour faire fonctionner la fonction makeSquareInvisible toutes les 300 millièmes de seconde et si la bonne réponse n'est pas trouvée -> case prison
 const countFunction = setInterval(() => { makeSquareInvisible()
    countToIncarsereted ++
    console.log(countToIncarsereted)
  if(countToIncarsereted === 60) { 
    clearInterval(countFunction) 
    raz ();
    prison();
  }}, 300);

  const form = createElementWithAttribute("form", { class: "form-demidi" });
  coupsdemidiContainer.appendChild(form);

  const hintText = createElementWithAttribute("p", { class: "hint" });
  form.appendChild(hintText);
  hintText.innerText = "Tapez votre réponse";

  const label = createElementWithAttribute("label", {
    id: "label-demidi",
    for: "input-demidi",
  });
  form.appendChild(label);

  const input = createElementWithAttribute("input", {
    id: "input-demidi",
    type: "text",
    name: "input-demidi",
    placeholder: " votre réponse ",
  });

  label.appendChild(input);
  let inputValue = "";
  input.addEventListener("change", (event) => {
    inputValue = event.target.value;
    console.log(inputValue);
  });

  const nextButton = createElementWithAttribute("button", { id: "next-button" });
  nextButton.innerText = "Suivant";
  nextButton.addEventListener("click", () => {
    raz();
    welcomeInTheNeighborhood("dans le quartier de la Daurade", devinette);
  });
  appendOrPrepend("append", ".coupsdemidi-container", nextButton);

  // fonction si tous les carrés sont invisibles
  function allInvisible() {
    const allInvisible = Array.from(squares).every(square => square.classList.contains(".square-invisible"));
  }
  // fonction qui permet de faire perdre le joueur si jamais l'image est dévoilé entièrement
  // let scoreCoupsdemidi = 2
  // function youLoseCoupsdemidi() {
  //   if (scoreCoupsdemidi === 0) {
  //     raz()
  //     prison()
  //   } else if (scoreCoupsdemidi === 1) {
  //     raz()
  //     endGame()
  //   }
  // }
 
  // si tous les carrés ont disparu -> envoyer la fonction prison()
  
}
