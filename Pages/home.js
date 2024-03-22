import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { quizz } from "./quizz.js";
import { playerInfos } from "../main.js";
import { welcomeInTheNeighborhood } from "./intersection.js";

export function home() {

    const dynamicContent = document.querySelector(".dynamic-content");

    const headerHome = document.querySelector("header");
    headerHome.setAttribute("class", "header-invisible");

    const title = createElementWithAttribute("h2", { id: "title" });
    title.innerText = "Escape Touloose";
    appendOrPrepend("prepend", ".dynamic-content", title);

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");
    dynamicContent.appendChild(homeContainer);

    const rdj = createElementWithAttribute("h2", { id: "rdj" });
    rdj.innerText = "Règles du jeu";
    homeContainer.appendChild(rdj);

    const paragraphrdj = createElementWithAttribute("p", { id: "paragraphrdj" });
    paragraphrdj.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis condimentum justo, vel bibendum massa. Quisque ultricies felis id ornare egestas. Pellentesque tempus sed justo at vehicula. Praesent a lectus in nunc aliquet scelerisque at vestibulum nisi.";
    homeContainer.appendChild(paragraphrdj);

    const myleneImage = document.createElement("img");
    myleneImage.src = "./Assets/mylene-modified.png";
    myleneImage.alt = "Mylène Farmer";
    myleneImage.id = "mylene-avatar";
    dynamicContent.appendChild(myleneImage);

    const nameInputSection = document.createElement("div");
    nameInputSection.classList.add("name-input-section");
    dynamicContent.appendChild(nameInputSection);

    const nameLabel = createElementWithAttribute("label", { id: "name-input" });
    nameLabel.innerText = "Entrez votre nom : ";
    nameInputSection.appendChild(nameLabel);

    const nameInput = createElementWithAttribute("input", { type: "text", id: "name-input", placeholder: "Votre nom" });
    nameInputSection.appendChild(nameInput);
    dynamicContent.appendChild(nameInputSection);

    const footerHome = document.querySelector("footer");
    footer.setAttribute("class", "footer-invisible");

    /* const nextButton = createElementWithAttribute("button", { id: "next-button", class: "valid-button" });
    nextButton.innerText = "C'est parti!";
    nextButton.addEventListener("click", () => {
        const playerName = document.getElementById("name-input").value.trim();
        if (playerName === "") {
            alert("Veuillez entrer votre nom.");
            return    
        }
    }); */

      /*  const nameInputSection = document.querySelector(".name-input-section");
        if (nameInputSection) {
            nameInputSection.remove();
        } */

        const header = document.querySelector("header");
        header.classList.remove("header-invisible");


        /* const footerHome = document.querySelector("footer");
        footerHome.classList.remove("footer-invisible"); */

  const nextButton = createElementWithAttribute("button", { id: "next-button" });
  nextButton.innerText = "Bouton suivant";
  nextButton.addEventListener("click", () => {
    header.innerText += playerName.value;
    playerInfos.playerName = playerName.value;
    raz();
    welcomeInTheNeighborhood("dans le quartier de Saint-Etienne", quizz, 0);
  });
  appendOrPrepend("append", ".dynamic-content", nextButton); 
}






