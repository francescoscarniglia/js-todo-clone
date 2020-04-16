// Esercizio di oggi: Todo list
// Descrizione
// Ricreare la todo list vista oggi durante la lezione
// (focus dell’esercizio la logica)
// Usiamo i template in html e il clone per separare
// la parte logica (JS) dalla parte di markup (HTML)
// recap funzionalità: mostrare, aggiungere e eliminare elementi
// dalla lista
// Nome della repo per consegnare l’esercizio: js-todo-clone
// Link utili:
// Doc metodo .on() https://api.jquery.com/on/#on-events-selector-data-handler
$(document).ready(function(){
  console.log('jQuery it\'s ok');

  // Sorgente dati
  var todoItems = [
      'Acqua',
      'Carne bianca',
      'Frutta',
      'Legumi',
      'Verdura'
  ];

  // my ref
  var todo = $('.todo-list');
  var newElement = $('.add-element');

  for(i=0; i < todoItems.length; i++) {
    // Chiamo il template
    var elementList = $('.template li').clone();
    // aggiungo testo dinamico
    elementList.prepend(todoItems[i]);
    // aggiungo il clone alla lista
    todo.append(elementList);
  }










}); //ready
