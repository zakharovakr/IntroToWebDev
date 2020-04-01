/*var numSides = prompt("How many sides does the die have?");

function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

for (var i = 0; i < 100; i++) {
    console.log(rollDice(numSides));
}*/

//challenge - ask the user how many dice they have.

var numDice = prompt("How many dice are you using?");
var numSides = prompt("How many sides does the die have?");


function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

for (var i = 0; i < numDice; i++) {
    console.log(rollDice(numSides));
}