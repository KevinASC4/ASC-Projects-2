function setup(){
   createCanvas(300, 300);
   background(225);
   //FACE
   fill('yellow');
   ellipse(width / 2, height / 2, 200);
   fill('black');
   //SUNGLASSES
   rect (78, 100, 60, 40);
   rect (158, 100, 60, 40);
   strokeWeight(5);
   //MOUTH
   line (64, 100, 236, 100);
   line (100, 200, 200, 200);
   //NOSE
   line (150, 150, 140, 165);
   line (140, 165, 150, 165);
   //CAP
   
   fill('red');
   
   strokeWeight(1);
   ellipse (62, 75.5, 100, 45);
   arc (150 , 98, 180, 150, PI, 0, CHORD);
   noStroke();
   ellipse (62, 75.5, 99.5, 44);
};

function mousePressed(){
    console.log("The mouse is at x: " + mouseX + ".");
    console.log("The mouse is at y:" + mouseY + ".");
}