import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { quizz } from "./quizz.js";
import { playerInfos } from "../main.js";

export function home() {
  const header = document.querySelector("header");
        header.setAttribute("class", "header-invisible");


  const title = createElementWithAttribute("h2", { id: "title" });
  title.innerText = "Escape Touloose";
  appendOrPrepend("prepend", ".dynamique-content", title);

  const form = createElementWithAttribute("form", {});
  appendOrPrepend("append", ".dynamique-content", form);

  const labelPlayerName = createElementWithAttribute("label", { for: "player-name" });
  labelPlayerName.innerText = "Entrer votre nom";
  appendOrPrepend("append", "form", labelPlayerName);

  const playerName = createElementWithAttribute("input", { id: "player-name", type: "text" });
  appendOrPrepend("append", "form", playerName);

  const footer = document.querySelector("footer");
        footer.setAttribute("class", "footer-invisible");


  const nextButton = createElementWithAttribute("button", { id: "next-button",class:"valid-button" });
  nextButton.innerText = "C'est parti!";
  nextButton.addEventListener("click", () => {
    // header.innerText += playerName.value;
    // playerInfos.playerName = playerName.value;
    raz();
    quizz();
  });
  appendOrPrepend("append", ".dynamic-content", nextButton);
}
