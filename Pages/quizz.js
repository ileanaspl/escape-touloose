import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { welcomeInTheNeighborhood } from "./intersection.js";
import { coupsdemidi } from "./coupsdemidi.js";
import { playerInfos } from "../main.js";
import { prison } from "./prison.js";

export function quizz() {
  playerInfos.level++;
  const questions = [
    {
      question: "Quelle bâtiment crée en 1190 est devenu un lieu emblématique de Toulouse ? ",
      options: [
        "Le palais Niel",
        "La basilique saint sernin",
        "Le Capitole",
        "Le couvent des Jacobins",
      ],
      reponse: "Le Capitole",
    },
    {
      question:
        "Quel est le secteur d’activité qui rapporte le plus économiquement à la ville de Toulouse ?",
      options: [
        "L’élevage / Vente de canard",
        "L’automobile",
        "Le Tourisme",
        "L’aerospatial / Aeronautique",
      ],
      reponse: "L’aerospatial / Aeronautique",
    },
    {
      question: "En quelle année la bataille de Toulouse a été gagnée ?",
      options: ["720", "721", "722", "723"],
      reponse: "721",
    },
  ];

  const title = createElementWithAttribute("h2", { id: "title" });
  title.innerText = "Quizz page";
  appendOrPrepend("append", ".dynamic-content", title);

  const quizzContainer = createElementWithAttribute("div", { class: "quizz-container" });

  appendOrPrepend("append", ".dynamic-content", quizzContainer);

  const interrogation = createElementWithAttribute("p", { class: "interrogation" });

  appendOrPrepend("append", ".quizz-container", interrogation);

  const choixRéponse = createElementWithAttribute("div", { class: "choix-des-réponses" });

  appendOrPrepend("append", ".quizz-container", choixRéponse);

  let currentQuestionIndex = 0;
  let score = 0;

  // Fonction pour afficher la question actuelle
  function displayQuestions() {
    interrogation.innerText = questions[currentQuestionIndex].question;
    const question = questions[currentQuestionIndex];
    // console.log(question.question);

    question.options.forEach((option, index) => {
      const optionElement = document.createElement("button");
      optionElement.classList.add("valid-button");
      optionElement.textContent = index + 1 + ". " + option;
      optionElement.addEventListener("click", () => repondre(index));
      choixRéponse.appendChild(optionElement);
    });
    // timeout()
  }
  const timerElement = document.querySelector(".loader");

  let isAnswered = false;

  // Fonction pour traiter la réponse de l'utilisateur
  function repondre(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const choice = question.options[selectedIndex];

    if (choice === question.reponse) {
      score++;
      playerInfos.score++;
      isAnswered = true;
      console.log("Bonne réponse !");
    } else {
      isAnswered = true;
      timerElement.classList.add("inactive");
      raz();
      prison();
      console.log(`Mauvaise réponse. La bonne réponse est : ${question.reponse}`);
    }

    currentQuestionIndex++;
    console.log(currentQuestionIndex);
    // Effacer les options précédentes
    interrogation.innerText = "";
    choixRéponse.innerHTML = "";

    // Passer à la prochaine question ou afficher le score final
    if (currentQuestionIndex < questions.length) {
      displayQuestions();
    } else {
      quizzContainer.innerHTML = "";
      timerElement.classList.add("inactive");
    }

    if (node) {
      console.log(`Votre score final est de ${score}/${questions.length}`);
    }
  }

  displayQuestions();

  // Lancer le quiz
  function timeout() {
    let departSeconde = 20;

    timerElement.innerText = departSeconde;

    const interval = setInterval(() => {
      departSeconde--;
      timerElement.innerText = departSeconde;
      console.log(departSeconde);

      if (departSeconde === 0 || isAnswered === true) {
        clearInterval(interval);
      }
    }, 1000);
  }

  const nextButton = createElementWithAttribute("button", {
    id: "next-button",
    class: "valid-button",
  });
  nextButton.innerText = "Bouton suivant";
  nextButton.addEventListener("click", () => {
    raz();
    welcomeInTheNeighborhood("dans le quartier de Saint-Sernin, Arnaud-Bernard", coupsdemidi, 1);
  });

  appendOrPrepend("append", ".dynamic-content", nextButton);

  console.log(departSeconde);
}

//     const questions = [
//         {
//             question: "Quelle bâtiment crée en 1190 est devenu un lieu emblématique de Toulouse ? ",
//             options: ["Le palais Niel", "La basilique saint sernin", "Le Capitole", "Le couvent des Jacobins"],
//             reponse: "Le Capitole"
//         },
//         {
//             question: "Quel est le secteur d’activité qui rapporte le plus économiquement à la ville de Toulouse ?",
//             options: ["L’élevage / Vente de canard", "L’automobile", "Le Tourisme", "L’aerospatial / Aeronautique"],
//             reponse: "L’aerospatial / Aeronautique"
//         },
//         {
//             question: "En quelle année la bataille de Toulouse a été gagnée ?",
//             options: ["720", "721", "722", "723"],
//             reponse: "721"
//         }
//     ];

//     let currentQuestionIndex = 0;
//     let score = 0;

//     // Fonction pour afficher la question actuelle
//     function displayQuestions() {
//         const question = questions[currentQuestionIndex];
//         const body = document.getElementsByTagName('dynamique-content')[0];

//         const questionElement = document.createElement('p');
//         questionElement.textContent = question.question;
//         body.appendChild(questionElement);

//         question.options.forEach((option, index) => {
//             const optionElement = document.createElement('button');
//             optionElement.textContent = (index + 1) + '. ' + option;
//             optionElement.addEventListener('click', () => repondre(index));
//             body.appendChild(optionElement);
//         });
//     }

//     // Fonction pour traiter la réponse de l'utilisateur
//     function repondre(selectedIndex) {
//         const question = questions[currentQuestionIndex];
//         const choice = question.options[selectedIndex];

//         if (choice === question.reponse) {
//             score++;
//         }

//         currentQuestionIndex++;

//         // Effacer les options précédentes
//         const body = document.getElementsByTagName('dynamique-content')[0];
//         body.innerHTML = '';

//         // Passer à la prochaine question ou afficher le score final
//         if (currentQuestionIndex < questions.length) {
//             displayQuestions();
//         } else {
//             const scoreElement = document.createElement('p');
//             scoreElement.textContent = `Votre score final est de ${score}/${questions.length}`;
//             body.appendChild(scoreElement);
//         }
//     }

//     // Lancer le quiz
//     displayQuestions();
