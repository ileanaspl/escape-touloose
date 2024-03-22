import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { devinette } from "./devinettes.js";
import { welcomeInTheNeighborhood } from "./intersection.js";
import { playerInfos } from "../main.js";
import { prison } from "./prison.js";

export function coupsdemidi() {
  playerInfos.level++;
  const dynamicContent = document.querySelector(".dynamic-content");
  const infoBulle = document.querySelector("#info-bulle");
  const infoContainer = document.querySelector("#info-container");

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

  // creation de la fonction des images au hasard
  let images = [
    { path: "./Assets/canal-midi.jpg", answerExpected: "canal du midi" },
    { path: "./Assets/basilique.jpg", answerExpected: "st-sernin" },
    { path: "./Assets/capitole.jpg", answerExpected: "capitole" },
  ];
  let imageGame = document.createElement("img");
  imageGame.classList.add("image-toulouse");
  let randomIndex = Math.floor(Math.random() * images.length);
  imageAndGridContainer.appendChild(imageGame);
  imageGame.src = images[randomIndex].path;

  // création de la grille
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  imageAndGridContainer.appendChild(gridContainer);

  // création de tous les carrés qui seront dans la grille

  for (let i = 0; i < 32; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
  }

  const squares = document.querySelectorAll(".square");

  // ajout de la classe square-visible à tous les carrés
  squares.forEach((square) => {
    square.classList.add("square-visible");
  });

  // fonction pour ajouter aléatoirement la classe square-invisible à un carré

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
  input.addEventListener("input", () => {
    inputValue = input.value;
  });

  let countClick = 0;
  const nextButton = createElementWithAttribute("button", {
    id: "next-button",
    class: "valid-button",
  });
  nextButton.innerText = "Suivant";
  nextButton.addEventListener("click", () => {
    countClick += 1;
    if (inputValue.toLowerCase() === images[randomIndex].answerExpected) {
      clearInterval(countFunction);
      clearInterval(timerBeforIncarcerated);
      playerInfos.score += 2;
      textCoupsdemidi.innerHTML =
        "Bravo !!! Vous avez trouvé la bonne réponse direction le prochain quartier";
      imageAndGridContainer.remove();
      form.remove();
      nextButton.remove();
      setTimeout(() => {
        raz();
        welcomeInTheNeighborhood("aux Carmes", devinette, 2);
      }, 2000);
    } else {
      clearInterval(countFunction);
      clearInterval(timerBeforIncarcerated);
      textCoupsdemidi.innerHTML = "Perdu !!! Allez, au trou !";
      imageAndGridContainer.remove();
      form.remove();
      nextButton.remove();
      setTimeout(() => {
        raz();
        welcomeInTheNeighborhood("à la prison Saint-Michel", prison, 4);
      }, 2000);
    }
  });
  appendOrPrepend("append", ".coupsdemidi-container", nextButton);

  let countToIncarcerated = 20;
  const loader = document.querySelector(".loader");
  loader.innerText = countToIncarcerated;
  const timerBeforIncarcerated = setInterval(() => {
    countToIncarcerated--;
    console.log(countToIncarcerated);
    loader.innerText = countToIncarcerated <= 0 || countClick === 1 ? "" : countToIncarcerated;
    countClick > 0 && clearInterval(timerBeforIncarcerated);
    if (countToIncarcerated === 0) {
      textCoupsdemidi.innerHTML =
        "Perdu l'escargot !!! Vous avez été trop lent(e), allez, au trou !";
      imageAndGridContainer.remove();
      form.remove();
      nextButton.remove();
      setTimeout(() => {
        clearInterval(timerBeforIncarcerated);
        clearInterval(countFunction);
        raz();
        welcomeInTheNeighborhood("à la prison Saint-Michel", prison, 4);
      }, 2000);
    }
  }, 1000);

  // méthode pour faire fonctionner la fonction makeSquareInvisible toutes les 300 millièmes de seconde et si la bonne réponse n'est pas trouvée -> case prison
  const countFunction = setInterval(() => {
    makeSquareInvisible();
    const invisibleSquares = document.querySelectorAll(".square-invisible");
    if (invisibleSquares.length === squares.length) {
      clearInterval(countFunction);
      clearInterval(timerBeforIncarcerated);
      raz();
      prison();
    }
  }, 500);

  ////déclaration des fonctions locales
  function makeSquareInvisible() {
    const random = Math.floor(Math.random() * squares.length);
    squares[random].classList.add("square-invisible");
  }
}
