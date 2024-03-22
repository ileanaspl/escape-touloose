import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { home } from "./home.js";
import { playerInfos, dateDifferenceInSeconds } from "../main.js";

export function endGame() {
  //////////////////
  const finalDate = new Date(Date.now());
  const duration = dateDifferenceInSeconds(playerInfos.start, finalDate);
  const devinetteContainer = createElementWithAttribute("div", { id: "endgame-container" });
  appendOrPrepend("prepend", ".dynamic-content", devinetteContainer);

  const title = createElementWithAttribute("h2", { id: "title" });
  title.innerText = "Bravo vous avez terminé le quizz \n mais vous pouvez faire mieux !";
  appendOrPrepend("append", "#endgame-container", title);

  const question = createElementWithAttribute("p", { id: "endgame-paragraphe" });
  appendOrPrepend("append", "#endgame-container", question);
  question.innerText = "Votre score est de " + playerInfos.score + " points \n";
  question.innerText += "La durée de votre session est de " + duration + " secondes";

  ////////////////

  const nextButton = createElementWithAttribute("button", {
    id: "next-button",
    class: "valid-button",
  });
  nextButton.innerText = "Recommencer";
  appendOrPrepend("append", "#endgame-container", nextButton);
  nextButton.addEventListener("click", () => {
    playerInfos.playerName = "";
    playerInfos.score = 0;
    playerInfos.level = 0;
    playerInfos.start = finalDate;
    raz();
    home();
  });
}
