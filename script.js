// Fonctionnalité 1 : footer, clic, console

// Étape 1 : trouver et stocker l'élément qui nous intéresse
let footer = document.getElementsByTagName('footer')[0];

// Étape 2 : définir la fonction à appeler pour répondre à l'évènement
function displayClickOnFooter() {
  console.log('Clique');
}

// Étape 3 : ajouter le 'event listener' qui concerne l'élément et qui appelle la fonction après l'action.
footer.addEventListener("click", displayClickOnFooter);


// Fonctionnalité 1 bis : footer, nombre de clics, console

// Étape 1 : trouver et stocker l'élément qui nous intéresse
// Déjà fait à la fonctionnalité 1

// Étape 2 : définir la fonction à appeler pour répondre à l'évènement
let clicksCount = 0;
function displayClicksOnFooter() {
  clicksCount ++;
  console.log(`Clic numéro : ${clicksCount}.`);
}

// Étape 3 : ajouter le 'event listener' qui concerne l'élément et qui appelle la fonction après l'action.
footer.addEventListener("click", displayClicksOnFooter);


// Fonctionnalité 2 : Ajouter la classe collapse à l'élément navbarHeader

// Étape 1 : trouver et stocker l'élément qui nous intéresse
let hamburgerButton = document.getElementsByClassName('navbar-toggler')[0];
console.log(hamburgerButton);

// Étape 2 : définir la fonction à appeler pour répondre à l'évènement
function toggleThatMenu() {
  let menuContent = document.getElementById('navbarHeader');
  menuContent.classList.toggle('collapse');
}

// Étape 3 : ajouter le 'event listener' qui concerne l'élément et qui appelle la fonction après l'action.
hamburgerButton.addEventListener("click", toggleThatMenu);


// Fonctionnalité 3 : Quand on clique sur "Edit", le texte de la première card doit se mettre en rouge


// Étape 1 : trouver et stocker les éléments qui nous intéressent
let cards = document.getElementsByClassName("card");
let firstCard = cards[0];
let dangerButton = firstCard.getElementsByClassName("btn-outline-secondary")[0];

// Étape 2 : définir la fonction à appeler pour répondre à l'évènement
function paintItRed() {
  firstCard.style.color = 'red';
}

// Étape 3 : ajouter le 'event listener' qui concerne l'élément et qui appelle la fonction après l'action.
dangerButton.addEventListener("click", paintItRed);


// Fonctionnalité 4 : passer le texte de la deuxième card en vert quand on clique sur Edit et le repasser en noir quand on reclique sur Edit

// Étape 1 : trouver et stocker les éléments qui nous intéressent
// cards a déjà été défini à l'exercice précédent

let secondCard = cards[1];
let ecoButton = secondCard.getElementsByClassName("btn-outline-secondary")[0];
let ecoStyle = false;

// Étape 2 : définir la fonction à appeler pour répondre à l'évènement
function toggleTheGreen() {
  if (ecoStyle) {
    secondCard.style.color = 'black';
    ecoStyle = false;
  } else {
    secondCard.style.color = 'green';
    ecoStyle = true;
  }

}

// Étape 3 : ajouter le 'event listener' qui concerne l'élément et qui appelle la fonction après l'action.
ecoButton.addEventListener("click", toggleTheGreen);

// Fonctionnalité 5 : On double-clique sur la navbar et bootstrap disparaît, on re-double clique et bootstrap réapparait

// Étape 1 : trouver et stocker l'élément qui nous intéresse
// navbar + le lien bootstrap
let navbar = document.getElementsByTagName("header")[0];
console.log(navbar)
let bootstrapLink = document.head.getElementsByTagName("link")[0];
console.log(bootstrapLink)

// Étape 2 : définir la fonction à appeler pour répondre à l'évènement
let bootstrapLinkContent = document.head.getElementsByTagName("link")[0].href;
let bootstrapStatus = true

function switchBootstrap() {
  if (bootstrapStatus) {
    bootstrapLink.href = "#";
    bootstrapStatus = false;
  } else {
    bootstrapLink.href = bootstrapLinkContent;
    bootstrapStatus = true;
  }
}

// Étape 3 : ajouter le 'event listener' qui concerne l'élément et qui appelle la fonction après l'action.
navbar.addEventListener("dblclick", switchBootstrap);

