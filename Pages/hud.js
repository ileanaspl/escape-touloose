export function hud() {
  const infoBulle = document.querySelector("#info-bulle");
  const infoContainer = document.querySelector("#info-container");
  infoBulle.addEventListener("click", () => {
    infoContainer.classList.toggle("info-visible");
    infoContainer.classList.toggle("info-invisible");
  });

  infoContainer.addEventListener("click", (e) => {
    if (e.currentTarget !== e.target) {
      return;
    } else {
      infoContainer.classList.toggle("info-visible");
      infoContainer.classList.toggle("info-invisible");
    }
  });
  const iframe = document.querySelector("#info-iframe");
  iframe.src = "https://umap.openstreetmap.fr/fr/map/escape-touloose_1043667#17/43.59608/1.45501";
}
