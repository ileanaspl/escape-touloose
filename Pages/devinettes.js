import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { prison } from "./prison.js";
import { questions, playerInfos } from "../main.js";
import { endGame } from "./endGame.js";
import { welcomeInTheNeighborhood } from "./intersection.js";

export function devinette() {
  playerInfos.level++;
  const devinetteContainer = createElementWithAttribute("div", { id: "devinette-container" });
  appendOrPrepend("prepend", ".dynamic-content", devinetteContainer);

  const question = createElementWithAttribute("p", { id: "question-devinette" });
  appendOrPrepend("append", "#devinette-container", question);
  question.innerText = showQuestion(questions[0]["devinettesQuestion"]);

  const form = createElementWithAttribute("form", { id: "form-devinette" });
  appendOrPrepend("append", "#devinette-container", form);

  const label = createElementWithAttribute("label", {
    id: "label-devinette",
    for: "input-devinette",
  });

  label.innerText = "Votre réponse";
  appendOrPrepend("append", "#form-devinette", label);

  const input = createElementWithAttribute("input", { id: "input-devinette", type: "text" });
  appendOrPrepend("append", "#form-devinette", input);

  const nextButton = createElementWithAttribute("button", {
    id: "valid-button-devinette",
    class: "valid-button",
  });
  nextButton.innerText = "Valider";
  appendOrPrepend("append", "#form-devinette", nextButton);

  let countClick = 0;
  let localScore = 0;

  nextButton.addEventListener("click", (event) => {
    event.preventDefault();
    nextButton.classList.toggle("element-disabled");
    input.classList.toggle("element-disabled");
    label.classList.toggle("element-disabled");
    countClick++;
    if (countClick === 1) {
      findAnswerNumber(questions[0]["devinettesReponse"]);
      question.innerHTML += " Préparez vous à la prochaine question !";
      setTimeout(() => {
        question.innerText = showQuestion(questions[1]["devinettesQuestion"]);
        nextButton.classList.toggle("element-disabled");
        input.classList.toggle("element-disabled");
        label.classList.toggle("element-disabled");
      }, 2000);
    } else if (countClick === 2) {
      findAnswerString(questions[1]["devinettesReponse"]);
      setTimeout(() => {
        question.innerText =
          localScore === 0
            ? "Toutes vos réponses sont fausses, vous partez en prison"
            : `Avec votre score  ${
                localScore === 2
                  ? " exceptionnel de deux réponses correctes sur deux"
                  : `"acceptable" d'une réponse correcte sur deux`
              }, vous pouvez changer de quartier`;
        nextButton.classList.toggle("element-disabled");
        nextButton.innerText = localScore === 0 ? "Allez, au trou !" : `On continue !`;
      }, 2000);
    } else {
      raz();
      if (localScore === 0) {
        welcomeInTheNeighborhood("à la prison Saint-Michel", prison, 4);
      } else {
        welcomeInTheNeighborhood("dans le quartier de Saint-Cyprien", endGame, 3);
      }
    }
  });

  //systeme de compteur avec échappement en fonction du temps écoulé ou du score obtenu
  let countToIncarcerated = 20;
  const loader = document.querySelector(".loader");
  loader.innerText = countToIncarcerated;

  const timerBeforIncarcerated = setInterval(() => {
    countToIncarcerated--;
    loader.innerText = countToIncarcerated <= 0 || countClick === 2 ? "" : countToIncarcerated;
    countClick === 2 && clearInterval(timerBeforIncarcerated);
    if (countToIncarcerated === 0) {
      question.innerText = "Perdu l'escargot ! vous avez été trop lent(e) !";
      nextButton.classList.toggle("element-disabled");
      input.classList.toggle("element-disabled");
      label.classList.toggle("element-disabled");
      nextButton.innerText = "Allez, au trou !";
      setTimeout(() => {
        nextButton.classList.toggle("element-disabled");
        input.classList.toggle("element-disabled");
        label.classList.toggle("element-disabled");
        clearInterval(timerBeforIncarcerated);
        raz();
        welcomeInTheNeighborhood("à la prison Saint-Michel", prison, 4);
      }, 2000);
    }
  }, 1000);

  ///////////////déclaration de fonctions locales/////////////////
  function showQuestion(question) {
    return question;
  }

  function findAnswerNumber(answer) {
    let playerAnswer = parseInt(input.value);
    console.log(playerAnswer);
    if (playerAnswer >= answer - 100000 && playerAnswer <= answer + 100000) {
      goodAnswer(answer);
    } else {
      wrongAnswer(answer);
    }
  }

  function findAnswerString(answer) {
    let playerAnswer = input.value;
    if (playerAnswer.toLowerCase() === answer.toLowerCase()) {
      goodAnswer(answer);
    } else {
      wrongAnswer(answer);
    }
  }

  function goodAnswer(answer) {
    playerInfos["score"]++;
    localScore += 1;
    question.innerHTML = `<span> Bravo !!! </span> la réponse était effectivement <span>  ${answer} </span>\n`;
    input.value = "";
  }
  function wrongAnswer(answer) {
    question.innerHTML = `<span> Perdu !!! </span>\n`;
    input.value = "";
  }
}
