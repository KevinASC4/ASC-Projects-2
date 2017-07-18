function setup(){
    createCanvas(windowWidth, windowHeight);
}

var x = 0;
function draw(){
    background("purple");
     ellipse(x, 200, 200, 200);
     x = x + 1;
}