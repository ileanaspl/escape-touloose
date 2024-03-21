import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { apikey } from "../Services/key.js";
import { neighborhoods } from "../main.js";

export function welcomeInTheNeighborhood(welcomeMessage, direction, place) {
  const welcomeContainer = createElementWithAttribute("div", { id: "welcome-container" });
  appendOrPrepend("prepend", ".dynamic-content", welcomeContainer);

  const welcomeParagraphe = createElementWithAttribute("p", { id: "welcome-paragraphe" });
  appendOrPrepend("append", "#welcome-container", welcomeParagraphe);
  welcomeParagraphe.innerHTML = `Bienvenu ${welcomeMessage}, êtes vous pret à relever le défi pour vous en échapper ?`;

  const WelcomeImg = createElementWithAttribute("img", {
    id: "img-welcome",
    alt: "img-welcome",
    src: neighborhoods[place].url,
  });

  appendOrPrepend("append", "#welcome-container", WelcomeImg);

  const nextButton = createElementWithAttribute("button", {
    id: "valid-button-welcome",
    class: "valid-button",
  });
  nextButton.innerText = "C'est parti !";
  appendOrPrepend("append", "#welcome-container", nextButton);
  nextButton.addEventListener("click", () => {
    raz();
    direction();
  });

  const infoParagrahe = document.querySelector("#info-paragraphe");
  const infoTitle = document.querySelector("#info-title");
  const infoIframe = document.querySelector("#info-iframe");
  infoIframe.src = `https://www.google.com/maps/embed/v1/place?key=${apikey} &q=${neighborhoods[place].coordonnates}`;

  infoTitle.innerText = neighborhoods[place].neighborhood;
  infoParagrahe.innerText = neighborhoods[place].descriptif;
  document.body.style.backgroundImage = `url(${neighborhoods[place].background})`;
}
