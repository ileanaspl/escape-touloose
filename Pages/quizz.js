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


    const timerElement = document.querySelector(".loader");

    let isAnswered = false

    let currentQuestionIndex = 0;
    let score = 0;

    displayQuestions();



    /////////////////déclaration des fonctions locales///////////////////////////

    // Fonction pour afficher la question actuelle
    function displayQuestions() {

        interrogation.innerText = currentQuestionIndex === 3 ? "ici le bug" : questions[currentQuestionIndex].question
        if (currentQuestionIndex === 3) {

            if (score === 3) {
                interrogation.innerText = 'Bravo, vous avez réussi cette étape, rendez vous dans le prochain quartier '
                setTimeout(() => {
                    raz()
                    welcomeInTheNeighborhood("dans le quartier de Saint-Sernin, Arnaud-Bernard", coupsdemidi, 1);
                }, 2500)

            }
        } else {
            const question = questions[currentQuestionIndex];
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('button');
                optionElement.classList.add('valid-button')
                optionElement.textContent = (index + 1) + '. ' + option;
                optionElement.addEventListener('click', () => repondre(index));
                choixRéponse.appendChild(optionElement);
            });
        }

        // timeout()
    }




    // Fonction pour traiter la réponse de l'utilisateur
    function repondre(selectedAnswer) {
        const question = questions[currentQuestionIndex];
        const choice = question.options[selectedAnswer];

        if (choice === question.reponse) {
            score++
            playerInfos.score++
            interrogation.innerText = "";
            choixRéponse.innerHTML = "";
            interrogation.innerText = 'Bravo, vous avez bien répondu, prochaine question ! '
            setTimeout(() => {
                currentQuestionIndex++;
                displayQuestions()
            }, 2000)

        } else {
            interrogation.innerText = "";
            choixRéponse.innerHTML = "";
            interrogation.innerText = 'Dommage ! avez vous pensé à ouvrir wikipédia ?! \n Direction le trou ! '
            setTimeout(() => {
                raz()
                welcomeInTheNeighborhood("à la prison Saint-Michel", prison, 4);
            }, 2000);
        }



    }

    // Lancer le quiz
    function timeout() {
        let departSeconde = 20

        timerElement.innerText = departSeconde

        const interval = setInterval(() => {

            departSeconde--
            timerElement.innerText = departSeconde
            // console.log(departSeconde)

            if (departSeconde === 0 || isAnswered === true) {
                clearInterval(interval)
            }

        }, 1000)
    }

}
