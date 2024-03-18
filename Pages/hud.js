import { createElementWithAttribute, appendOrPrepend } from "../Services/util.js";

export function hud() {
  // const infoBulle = createElementWithAttribute("img", {
  //   id: "info-bulle",
  //   class: "invisible",
  //   src: "./Assets/infobulle.svg",
  //   alt: "infobulle",
  //   style: "position : fixed;max-width : 32px;top : 15%;right:2%",
  // });
  // appendOrPrepend("append", "body", infoBulle);
  // const infoContainer = createElementWithAttribute("div", {
  //   id: "info-container",
  //   class: "invisible",
  //   style:
  //     "position :absolute; top : 0;left:0;right : 0;bottom:0;background-color : rgb(159, 78, 31, 0.2); display : flex; flex-direction : column ; justify-content : center; align-items : center",
  // });

  // appendOrPrepend("append", "body", infoContainer);

  // const infos = createElementWithAttribute("div", {
  //   id: "infos",
  //   class: "invisible",
  //   style:
  //     "background-color : rgb(125, 132, 178, 0.9); border-radius:20px; width:85dvw;height:65dvh; padding:var(--spacing);display : flex; flex-direction : column ; justify-content : space-around; align-items : center",
  // });

  // appendOrPrepend("append", "#info-container", infos);
  // infos.focus();
  // const infoTitle = createElementWithAttribute("h2", {
  //   id: "info-title",
  //   class: "invisible",
  //   style: "",
  // });

  // infoTitle.innerText = "Infos !";

  // appendOrPrepend("append", "#infos", infoTitle);

  // const infoParagraphe = createElementWithAttribute("p", {
  //   id: "info-paragraphe",
  //   class: "invisible",
  //   style: "",
  // });

  // infoParagraphe.innerText =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorem ratione quas harum incidunt quidem debitis sunt veniam laboriosam magni, porro a reiciendis nemo temporibus. Aut eius facere fugit nesciunt?";

  // appendOrPrepend("append", "#infos", infoParagraphe);

  // const infoMap = createElementWithAttribute("iframe", {
  //   id: "info-iframe",
  //   class: "invisible",
  //   style: "",
  // });

  // appendOrPrepend("append", "#infos", infoMap);

  // infoContainer.addEventListener("click", (e) => {
  //   if (e.currentTarget !== e.target) {
  //     return;
  //   } else {
  //     infoContainer.remove();
  //   }
  // });
  const infoBulle = document.querySelector("#info-bulle");
  const infoContainer = document.querySelector("#info-container");
  infoBulle.addEventListener("click", () => {
    infoContainer.classList.toggle("visible");
    infoContainer.classList.toggle("invisible");
  });

  infoContainer.addEventListener("click", (e) => {
    if (e.currentTarget !== e.target) {
      return;
    } else {
      infoContainer.classList.toggle("visible");
      infoContainer.classList.toggle("invisible");
    }
  });
}
