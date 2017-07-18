function setup(){
    createCanvas(windowWidth,windowHeight);
     fill("red")
    rect(200, 300, 100, 100);
    fill("blue")
    rect(400, 300, 100, 100);
     fill("green")
    rect(600, 300, 100, 100);
}
 
function mouseDragged(){
    rect(mouseX, mouseY, random(50,100), random(50,100));
}


}
function mousePressed(){
    if((mouseX>200 && mouseX<300) && (mouseY>300 && mouseY < 400)){
        fill("red");
    }
    if ((mouseX>400 && mouseX<500) && (mouseY>300 && mouseY < 400)){
        fill("blue");
    }
    if((mouseX>600 && mouseX<700) && (mouseY>300 && mouseY <400)){
        fill("blue");
    }
}



function keyPressed(){
    if(keyCode === 32){
    clear();
    }
}