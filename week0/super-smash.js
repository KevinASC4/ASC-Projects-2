var prompt = require('prompt-sync')();

var mashArray = ["Final Destination", "Battlefield", "Smashville", "Lylat Cruise"];

var firstQuestion = [3,2];

var secondQuestion = ["Toon Link", "Captain Falcon"];

var victor = ["Mewtwo", "Ganondorf", "Dark Pit"];

var choice = prompt("How many times will you strike?");
firstQuestion.push(choice);

var choice2 = prompt("Which character would you like to choose?");
secondQuestion.push(choice2);

var choice3 = prompt ("Where will you like to fight?");
mashArray.push(choice3);

var choice4 = prompt ("Who do you want to fight against?");
victor.push(choice4);

var stage = mashArray[Math.floor(Math.random() * 5)];
var character = secondQuestion[Math.floor(Math.random() * 3)]
var strike = firstQuestion[Math.floor(Math.random()*3)]
var enemy = victor[Math.floor(Math.random() * 4)]


console.log("You fought as " + character + " in the " + stage + " and hit your enemy " + strike + " times. Too bad. " + enemy + " wins!");

