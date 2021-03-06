$(document).ready(function() {
  // make sure our client.js and jquery.js files are both sourced
  console.log('jQuery totes sourced');
  // add event listeners
  addEventListeners();
}); // END of document.ready

function addEventListeners() {
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
    // add console.log below, then...
    // !!!---!!!---!!!---TEST---!!!---!!!---!!!
    // log the object to the console
    console.log(car);
    // AJAX call to send user's input of new car object over to the server
    postNewCar(car);
    // AJAX call to get cars[] array from the server and post them to the DOM
    getCars();
  }); // END cars-onSubmit event handler
}

// AJAX call to send user's input of new car object over to the server
function postNewCar(car) {
  $.ajax({
    type: 'POST', // request type
    url: '/cars', // route
    data: car, // data being sent to the server
    success: function() { // if server tells us we succeeded
      console.log('/cars POST request to the server successful - huzzah!');
    }
  }); // END AJAX '/cars' 'POST' request
} // END postNewCar() function

// AJAX call to get cars[] array from the server and post them to the DOM
function getCars() {
  $.ajax({
    type: 'GET', // requst type
    url: '/cars', // route
    success: function(res) { // res === cars[] array from server
      // if successful, log the data to the console
      console.log('AJAX get /cars request a success: ', res);
      // call appendCarsTable() function to append response data to the DOM
      appendCarsTable(res);
    } // END success function()
  }); // END AJAX '/cars' 'GET' request
} // END getCars() function

// append array of cars to the #carsTable on the DOM
function appendCarsTable(carsArray) {
  // empty the table that holds our cars data on the DOM
  $('#carsTable').empty();
  // create the table header
  $('#carsTable').append('<thead><tr><th>MAKE</th><th>MODEL</th></tr></thead><tbody></tbody>');
  // loop through the cars[] array that was returned by the server
  for (var i = 0; i < carsArray.length; i++) {
    // append the data to the body of the table to display on the DOM
    // last chiled of the carsTable is <tbody>
    var $parent = $('#carsTable').children().last();
    // append elements of the cars[] array to the table body
    $parent.append('<tr><td>' + carsArray[i].make + '</td><td>' + carsArray[i].model + '</td></tr>');
  } // END for-loop through the cars[] array
} // END appendCarsTable() function
