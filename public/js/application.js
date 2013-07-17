$(document).ready(function () {
  //   1- intercept the form submission event using jQuery
  $('#button_form').on('submit', '#button_form', function(event){

  //   2- prevent the default action for that event from happening
      event.preventDefault();

  //   3- generate a random number between 1 and 6 using JavaScript
      var random_number = Math.floor(Math.random() * 6) + 1;
   
  //   4- use jQuery to submit an AJAX post to the form's action
       var url  = $(this).attr('action');
       $.post(url, function(event2){
          
       })



    });
  });
});



// PSEUDO-CODE:


  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery


