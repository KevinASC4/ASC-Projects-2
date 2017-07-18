function setup(){
    createCanvas(800, windowHeight);
    background("grey");
    
}

var score = 0
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//change this array into one string "string are arrays"
var letter = alphabet[Math.floor(Math.random()*26)];
var x = 300;

function draw(){
    
    textSize(32);
    text("Please type the following letter", 200, 100);
    text(letter, x, 200);
    
    text("Current points:" + score, 200, 300);

}

function keyTyped(){
    background("grey");
    if (key === letter){
        score = score + 10;
        letter = alphabet[Math.floor(Math.random()*26)];
        
    }else{
        score = score - 10;
        text("Please try again", 200, 500);
    }

}