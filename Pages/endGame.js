import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { home } from "./home.js";
import { playerInfos, neighborhoods } from "../main.js";

export function endGame() {
  //////////////////

  const devinetteContainer = createElementWithAttribute("div", { id: "devinette-container" });
  appendOrPrepend("prepend", ".dynamic-content", devinetteContainer);

  const title = createElementWithAttribute("h2", { id: "title" });
  title.innerText =
    "Bravo vous avez terminé le quizz, êtes vous prêt(e) à relever le défi de nouveau";
  appendOrPrepend("append", "#devinette-container", title);

  const question = createElementWithAttribute("p", { id: "question-devinette" });
  appendOrPrepend("append", "#devinette-container", question);
  question.innerText = "Votre score est de " + playerInfos.score + " points \n";
  question.innerText += "La durée de votre session est de " + playerInfos.totalTime + " secondes";

  ////////////////

  const nextButton = createElementWithAttribute("button", { id: "next-button" });
  nextButton.innerText = "Recommencer";
  nextButton.addEventListener("click", () => {
    playerInfos.playerName = "";
    playerInfos.score = 0;
    playerInfos.totalTime = 0;
    playerInfos.level = 0;
    raz();
    home();
  });
  appendOrPrepend("append", ".dynamic-content", nextButton);
}
