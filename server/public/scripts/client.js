$(document).ready(function() {
  // make sure our client.js and jquery.js files are both sourced
  console.log('jQuery totes sourced');
  // what happens on a submit click event?
  // could just use 'e' instead of event
  $('.userInput').on('submit', function(event) {
    // need to prevent the 'submit' button from auto-refreshing the page
    event.preventDefault();
    // car info entered by user will be stored in an object
    var car = {};
    // add properties to the object with values equal to the user's input
    car.make = $('#make').val();
    car.model = $('#model').val();
    // push our car object into the cars array (NOW LOCATED ON SERVER)
    // cars.push(car); (MOVE TO POST REQ ON SERVER)
    // add console.log below, then...
    // !!!---!!!---!!!---TEST---!!!---!!!---!!!
    // log the object to the console
    console.log(car);
    // log the full array to the console (NOW LOCATED ON SERVER)
    //console.log(cars);

    // add AJAX call and send over car object to the server
    // console.log('cars submit AJAX post request to the server a success - huzzah!');

    // add AJAX call to get cars[] array from the server
    $.ajax({
      type: 'GET', // requst type
      url: '/cars', // route
      success: function(data) {
        // if successful, log the data to the console
        console.log('AJAX get /cars request a success: ', data);
        // empty the div that holds our cars data on the DOM
        $('#carsTable').empty();
        // loop through the array of cars that was returned by the server
        for (var i = 0; i < data.length; i++) {
          // append the data to the DOM
          $('#carsTable').append('<p>Make: ' + data[i].make + 'Model: ' + data[i].model + '</p>');
        }
      }
    });
  }); // END cars-onSubmit event handler
});
