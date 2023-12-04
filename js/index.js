// tre cose
// 1. funzione che fa addTask
// 2. funzione che gestisce attachComplete (riga sbarrata)
// 3. una funzione che attachDelete (cancella)
const handleSubmit = function (e) {
  e.preventDefault(); // evita il comportamento di default
  addTask();
  attachComplete();
  attachDelete();
};

// agganciare gli elementi html come fatto stamattina
const aggiungiTask = function () {
  let form = document.querySelector("testo");
  let button = document.querySelector("aggiungi");
  let newTast = `<div class ="tascona">
                  <span id = "nomeTascona">
                  ${testo.value}
                  </span>
`;
};

button.addEventListener("click", createItem);
let createItem = function () {};

// stampare l'html necessario per aggiungere il value del mio campo input inputField.value
// ogni task che aggiungo aggiunge html -> +=

// aggancia gli elementi html
// li ciclo ad esempio con for
// all'elemento che seleziono aggiunge|toglie una classe (toggle)
// https://www.w3schools.com/js/js_this.asp this per leggere il contenuto
// css ->   text-decoration: line-through;

// aggancia gli elementi html
// ciclo for
// metodo per rimuovere qualcosa .remove
