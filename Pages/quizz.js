import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { coupsdemidi } from "./coupsdemidi.js";
import { playerInfos } from "../main.js";

export function quizz() {

    const questions = [
        {
            question: "Quelle bâtiment crée en 1190 est devenu un lieu emblématique de Toulouse ? ",
            options: ["Le palais Niel", "La basilique saint sernin", "Le Capitole", "Le couvent des Jacobins"],
            reponse: "Le Capitole"
        },
        {
            question: "Quel est le secteur d’activité qui rapporte le plus économiquement à la ville de Toulouse ?",
            options: ["L’élevage / Vente de canard", "L’automobile", "Le Tourisme", "L’aerospatial / Aeronautique"],
            reponse: "L’aerospatial / Aeronautique"
        },
        {
            question: "En quelle année la bataille de Toulouse a été gagnée ?",
            options: ["720", "721", "722", "723"],
            reponse: "721"
        }
    ];


    const title = createElementWithAttribute("h2", { id: "title" });
    title.innerText = "Quizz page";
    appendOrPrepend("append", ".dynamic-content", title);

    const nextButton = createElementWithAttribute("button", { id: "next-button", class: "valid-button" });
    nextButton.innerText = "Bouton suivant";
    nextButton.addEventListener("click", () => {
        raz();
        coupsdemidi();
    });

    appendOrPrepend("append", ".dynamic-content", nextButton);

    const quizzContainer = createElementWithAttribute("div", { class: "quizz-container" });

    appendOrPrepend("append", ".dynamic-content", quizzContainer);

    const interrogation = createElementWithAttribute("h3", { class: "interrogation" });

    appendOrPrepend("append", ".quizz-container", interrogation);

    const choixRéponse = createElementWithAttribute("div", { class: "choix-des-réponses" });

    appendOrPrepend("append", ".quizz-container", choixRéponse);



    let currentQuestionIndex = 0;
    let score = 0;


    // Fonction pour afficher la question actuelle
    function afficherQuestion() {
        interrogation.innerText = questions[currentQuestionIndex].question
        const question = questions[currentQuestionIndex];
        // console.log(question.question);

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('button');
            optionElement.classList.add('valid-button')
            optionElement.textContent = (index + 1) + '. ' + option;
            optionElement.addEventListener('click', () => repondre(index));
            choixRéponse.appendChild(optionElement);
        });
    }

    // Fonction pour traiter la réponse de l'utilisateur
    function repondre(selectedIndex) {
        const question = questions[currentQuestionIndex];
        const choice = question.options[selectedIndex];



        if (choice === question.reponse) {
            score++;
            console.log("Bonne réponse !");
        } else {
            console.log(`Mauvaise réponse. La bonne réponse est : ${question.reponse}`);
        }

        currentQuestionIndex++;
        console.log(currentQuestionIndex);
        // Effacer les options précédentes
        interrogation.innerText = '';
        choixRéponse.innerHTML = "";


        // Passer à la prochaine question ou afficher le score final    
        if (currentQuestionIndex < questions.length) {
            afficherQuestion();
        } else {
            console.log(`Votre score final est de ${score}/${questions.length}`);
        }


        const departSeconde = 20


        const timerElement = document.getElementsByClassName(".loader")
        timerElement.innerText = departSeconde

        const interval = setInterval(() => {
            // let secondes = parseInt(temps % 20, 10)


            // secondes = secondes < 10 ? "0" + secondes : secondes

            // timerElement.innerText = `${secondes}`
            // temps = temps <= 0 ? 0 : temps - 1


        }, 1000)

        if (temps === 0) {
            clearInterval(interval)
        }
        // console.log(interval);
    }
    afficherQuestion();
    // Lancer le quiz

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
//     function afficherQuestion() {
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
//             afficherQuestion();
//         } else {
//             const scoreElement = document.createElement('p');
//             scoreElement.textContent = `Votre score final est de ${score}/${questions.length}`;
//             body.appendChild(scoreElement);
//         }
//     }

//     // Lancer le quiz
//     afficherQuestion();

