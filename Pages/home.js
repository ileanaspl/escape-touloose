import { createElementWithAttribute, appendOrPrepend, raz } from "../Services/util.js";
import { quizz } from "./quizz.js";
import { playerInfos } from "../main.js";

export function home() {

    const dynamicContent = document.querySelector(".dynamic-content");
      const header = document.querySelector("header");
            header.setAttribute("class", "header-invisible");


      const title = createElementWithAttribute("h2", { id: "title" });
      title.innerText = "Escape Touloose";
      appendOrPrepend("prepend", ".dynamic-content", title);
        
      const homeContainer = document.createElement("div");
      homeContainer.classList.add("home-container");
      dynamicContent.appendChild(homeContainer);

      const rdj = createElementWithAttribute("h2", { id: "rdj"});
      rdj.innerText = "Règles du jeu";
      appendOrPrepend("append", ".home-container", rdj);

      //const form = createElementWithAttribute("form", {});
      //appendOrPrepend("append", ".dynamic-content", form);

      

      const paragraphrdj = createElementWithAttribute("p", { id: "paragraphrdj"});
          paragraphrdj.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis condimentum justo, vel bibendum massa. Quisque ultricies felis id ornare egestas. Pellentesque tempus sed justo at vehicula. Praesent a lectus in nunc aliquet scelerisque at vestibulum nisi.";
          homeContainer.appendChild(paragraphrdj);
          
          const myleneImage = document.createElement("img");
          myleneImage.src = "./Assets/mylene-modified.png"; 
          myleneImage.alt = "Mylène Farmer";
          myleneImage.id = "mylene-avatar";
          dynamicContent.appendChild(myleneImage);

        const footer = document.querySelector("footer");
        footer.setAttribute("class", "footer-invisible");

        const nextButton = createElementWithAttribute("button", { id: "next-button", class: "valid-button" });
        nextButton.innerText = "C'est parti!";
        
        nextButton.addEventListener("click", () => {
            const myleneImage = document.getElementById("mylene-avatar");
            if (myleneImage) {
                myleneImage.remove();
            }
            const paragraphrdj = document.getElementById("paragraphrdj");
            if (paragraphrdj) {
                paragraphrdj.remove();
            }
            raz();
            quizz();
        });
        
        appendOrPrepend("append", ".dynamic-content", nextButton);
        
}






