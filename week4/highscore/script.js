var database = firebase.database().ref();

function updateDB() {
    var initials = $("#initials").val();
    console.log(initials);
}
var userChoice = "";
var enemyChoice = "";
var choices = ["Rock", "Paper", "Scissors"];
var initials = "";
var winsArray = [];
var loseArray = [];


function game(num){
    userChoice = choices[num];
    enemyChoice = choices[Math.floor(Math.random()*choices.length)];
    if (userChoice == enemyChoice){
        $("body").append("<p>You tied! Try again!</p>");
    } else if (userChoice == "Paper" && enemyChoice == "Rock"){
        $("body").append("<p>The computer picked Rock, so you won!</p>");
        winsArray.push(1);
    } else if (userChoice == "Paper" && enemyChoice == "Scissors"){
        $("body").append("<p>The computer picked Scissors, so you lost!</p>");
        loseArray.push(1);
    } else if (userChoice == "Rock" && enemyChoice == "Scissors"){
        $("body").append("<p>The computer picked Scissors, so you won!</p>");
        winsArray.push(1);
    } else if (userChoice == "Rock" && enemyChoice == "Paper"){
        $("body").append("<p>The computer picked Paper, so you lost!</p>");
        loseArray.push(1);
    } else if (userChoice == "Scissors" && enemyChoice == "Rock"){
        $("body").append("<p>The computer picked Rock, so you lost!</p>");
        loseArray.push(1);
    } else if (userChoice == "Scissors" && enemyChoice == "Paper"){
        $("body").append("<p>The computer picked Paper, so you won!</p>");
        winsArray.push(1);
    }
}
function submit(){
    $("#win").append("Wins: " + winsArray.length);
    $("#lose").append("Losses: " + loseArray.length);
}











