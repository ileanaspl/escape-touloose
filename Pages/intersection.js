import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";

export function welcomeInTheNeighborhood(welcomeMessage, direction) {
  const welcomeContainer = createElementWithAttribute("div", { id: "welcome-container" });
  appendOrPrepend("prepend", ".dynamic-content", welcomeContainer);

  const welcomeParagraphe = createElementWithAttribute("p", { id: "welcome-paragraphe" });
  appendOrPrepend("append", "#welcome-container", welcomeParagraphe);
  welcomeParagraphe.innerHTML = `Bienvenu ${welcomeMessage}, êtes vous pret à relever le défi pour vous en échapper ?`;

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
}
