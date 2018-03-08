
var userInput = document.getElementById('piInput');

var tester = document.getElementById('tester');

var goodInput = "Here's your number: ";

var badInput = "Please enter a number between 1 and 20"

var textResponse = document.getElementById('text-response');

var createP = document.createElement("p");

tester.onclick = function() {


  if (userInput.value <= 0 || userInput.value > 20) {
    textResponse.appendChild(createP);
    createP.innerHTML = badInput;
  } else {
    textResponse.appendChild(createP);
    createP.innerHTML = goodInput + Math.PI.toFixed(userInput.value);
  }

};
