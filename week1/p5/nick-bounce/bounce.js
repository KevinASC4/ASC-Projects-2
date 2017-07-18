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
    ellipse(x, y, 60, 60)
    x = x+xC;
    y = y+yC;
    if (x>470){
        xC = -4;
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

}

