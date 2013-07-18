//var counter = 0;
$(document).ready(function() {

  //   1- intercept the form submission event using jQuery
  $('#roll-it').on('click', function(event) {

  //   2- prevent the default action for that event from happening
    event.preventDefault();

    var random_number = Math.floor(Math.random() * 6) + 1;     
    $.post('/rolls', {value: random_number}, function(response) {
      console.log(response);
      $('#die').html(response);
    });
  });
});
