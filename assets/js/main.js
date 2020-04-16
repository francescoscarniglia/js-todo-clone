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

 // ordina in array
 // var todoItemsOrd = todoItems.sort()
 //console.log(todoItemsOrd);

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

  // rimuovo elemento li (va bene per gli elementi statici e quindi solo per quelli che vengono caricati insieme alla pagina (non i nuovi valori che inserisco nel input))
  // $('.todo-list li i').click(function() {
  //   $(this).parent().remove();
  // });

  // cambio il padre quindi diventa .body
  // .click è una forma contratta di .on('click') il quale può (non necessariamente) ricevere parametri ( https://api.jquery.com/click/#click-eventData-handler )

  $('body').on('click', '.todo-list li i', function(){
    $(this).parent().remove();
  });


  // aggiunta di un nuovo elemento list-item
    newElement.keyup(function(e) {
      console.log(e.which, e.keyCode);

      // è buona norma assicurarmi il codice del tasto, quindi sia which che keyCode per non avere problemi di compatibilità
      // con or || (oppure) elimino il rischio "undefined"
      if(e.which == 13 || e.keyCode == 13){
        var text = newElement.val().trim();
        console.log(text);

        // questo è == newElement.lenght > 0
        if(text !== '') {
          var elementNew = $('.template li').clone();
          elementNew.prepend(text);
          todo.append(elementNew);

          // clear input
          newElement.val('');
        }
      }
    });


}); //ready
