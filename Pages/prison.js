import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { home } from "./home.js";
import { playerInfos, dateDifferenceInSeconds } from "../main.js";

export function prison() {
  const finalDate = new Date(Date.now());
  const duration = dateDifferenceInSeconds(playerInfos.start, finalDate);
  const prisonContainer = createElementWithAttribute("div", { id: "prison-container" });
  appendOrPrepend("prepend", ".dynamic-content", prisonContainer);

  const title = createElementWithAttribute("h2", { id: "title" });
  title.innerText =
    "Vous avez purgé votre peine mais vous repartez à la case départ ! Peut-être essayez Calc(), sur un coup de chance ça peut marcher....";
  appendOrPrepend("append", "#prison-container", title);

  const prisonParagraphe = createElementWithAttribute("p", { id: "prison-paragraphe" });
  appendOrPrepend("append", "#prison-container", prisonParagraphe);

  prisonParagraphe.innerText += "La durée de votre session a été de " + duration + " secondes";

  ////////////////

  const nextButton = createElementWithAttribute("button", {
    id: "next-button",
    class: "valid-button",
  });
  nextButton.innerText = "Recommencer";
  nextButton.addEventListener("click", () => {
    playerInfos.playerName = "";
    playerInfos.score = 0;
    playerInfos.level = 0;
    playerInfos.start = finalDate;
    raz();
    home();
  });
  appendOrPrepend("append", "#prison-container", nextButton);
}
