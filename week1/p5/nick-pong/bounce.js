function setup (){
    createCanvas(500,500);
    background(238,130,128);
}

var x = 300;
var y = 150;
var xC = 3;
var yC = 3;

function draw(){
    background(238,130,128);
    fill("white")
    ellipse(x, y, 30, 30)
    x = x+xC;
    y = y+yC;
    if (x>500){
        textSize(32);
        text("Game Over", 170, 450);
    }
    if(y>470){
        yC = -5;
    }
    if (x<30){
        xC = 3;
    }
    if (y<30){
        yC = 4;
    }
    if(x>=435 && x <= 455 && y >= mouseY - 30 && y <= mouseY + 40){
        xC = -4;
        yC = -4;
    }
    rect(450, mouseY, 10, 60);

}

