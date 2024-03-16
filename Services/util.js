//////////////////////FONCTIONS UTILITAIRES DU DOM///////////////////////////////////////

//Fonction de remise à zero de la balise main (utile à chaque changement de page)
export function raz() {
  const main = document.querySelector("main");
  main.innerHTML = "";
}

//Fonction de création d'élément avec attributs
//Notice d'utilisation des parametres :
//tag = la balise à insérer en string,
//attribute = le/les attributs html à mettre sous forme d'objet {clef : valeur}
export function createElementWithAttribute(tag, attributes) {
  const element = document.createElement(tag);
  for (const [attribute, value] of Object.entries(attributes)) {
    if (value !== null) {
      element.setAttribute(attribute, value);
    }
  }
  return element;
}

//Fonction de rattachement d'élément
//Notice d'utilisation des parametres : choice = le choix avec un string "append" pour fixer l'élément à la fin de l'élément sinon au début de l'élément
//parent = le nom du selecteur en string parent de rattachement
//child = le nom de la variable enfant à rattacher
export function appendOrPrepend(choice, parent, child) {
  const parentElement = document.querySelector(parent);
  return choice === "append" ? parentElement.appendChild(child) : parentElement.prepend(child);
}
