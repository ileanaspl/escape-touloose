import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { apikey } from "../key.js";
import { neighborhoods } from "../main.js";
import { endGame } from "./endGame.js";
import { playerInfos } from "../main.js";

export function welcomeInTheNeighborhood(welcomeMessage, direction, place) {
  console.log(playerInfos);
  const welcomeContainer = createElementWithAttribute("div", { id: "welcome-container" });
  appendOrPrepend("prepend", ".dynamic-content", welcomeContainer);

  const welcomeParagraphe = createElementWithAttribute("p", { id: "welcome-paragraphe" });
  appendOrPrepend("append", "#welcome-container", welcomeParagraphe);
  welcomeParagraphe.innerHTML =
    direction === endGame
      ? "Bien joué vous avez réussi à vous échapper et à atteindre le quartier de Saint-Cyprien !"
      : `Bienvenue ${welcomeMessage}, êtes vous pret à relever le défi pour vous en échapper ?`;

  const WelcomeImgContainer = createElementWithAttribute("div", {
    id: "img-welcome-container",
  });
  appendOrPrepend("append", "#welcome-container", WelcomeImgContainer);

  const WelcomeImg = createElementWithAttribute("img", {
    id: "img-welcome",
    alt: "img-welcome",
    src: neighborhoods[place].url,
  });

  appendOrPrepend("append", "#img-welcome-container", WelcomeImg);

  const nextButton = createElementWithAttribute("button", {
    id: "valid-button-welcome",
    class: "valid-button",
  });
  nextButton.innerText = direction === endGame ? "Voir le score" : "C'est parti !";
  appendOrPrepend("append", "#welcome-container", nextButton);
  nextButton.addEventListener("click", () => {
    raz();
    direction();
  });

  const infoParagrahe = document.querySelector("#info-paragraphe");
  const infoTitle = document.querySelector("#info-title");
  const infoIframe = document.querySelector("#info-iframe");
  infoIframe.src = `https://umap.openstreetmap.fr/fr/map/escape-touloose_1043667#${neighborhoods[place].coordonnates}`;

  infoTitle.innerText = neighborhoods[place].neighborhood;
  infoParagrahe.innerText = neighborhoods[place].descriptif;
  document.body.style.backgroundImage = `url(${neighborhoods[place].background})`;
}
