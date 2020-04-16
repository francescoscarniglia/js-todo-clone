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
      'Carne bianca',
      'Verdura',
      'Frutta',
      'Acqua',
      'Legumi'
  ];

 var todoItemsOrd = todoItems.sort()
 //console.log(todoItemsOrd);

  // my ref
  var todo = $('.todo-list');


  for(i=0; i < todoItemsOrd.length; i++) {
    // Chiamo il template
    var elementList = $('.template li').clone();
    // aggiungo testo dinamico
    elementList.prepend(todoItemsOrd[i]);
    // aggiungo il clone alla lista
    todo.append(elementList);
  }

  // rimuovo elemento li
  $('.todo-list li i').click(function(){
    $(this).parent().remove();
  });









}); //ready
