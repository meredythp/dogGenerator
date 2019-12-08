'use strict';

function getDogImage(numberOfDogs) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert(error));
}

function displayResults(responseJson) {
  console.log(responseJson);
  document.getElementById('results').innerHTML = "<h2>Look at this dog!</h2>";

  for(var i = 0; i < responseJson.message.length; i++) {
    var pictureURL = responseJson.message[i];
    console.log(pictureURL);
    var newDog = document.createElement("IMG");
    newDog.setAttribute("class", "results-img");
    newDog.setAttribute("src", `${pictureURL}`);
    // console.log(newDog);
    document.getElementById('results').appendChild(newDog);
  }
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    var dogs = document.getElementById('numberOfDogs').value;
    getDogImage(dogs);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});