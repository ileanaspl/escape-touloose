import { createElementWithAttribute, appendOrPrepend } from "../Services/util.js";
import { apikey } from "../Services/key.js";

export function hud() {
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
  const iframe = document.querySelector("#info-iframe");
  iframe.src = `https://www.google.com/maps/embed/v1/place?key=${apikey} &q=43.5962037213863,1.4552344529356003`;
}
