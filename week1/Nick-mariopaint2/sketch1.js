function setup(){
    createCanvas(windowWidth,windowHeight);

}
 function mouseDragged(){
     fill(random(0,255), random(0,255), random(0,255));
     rect(mouseX, mouseY, random(50,100), random(50,100));
 }

function keyPressed(){
    if(keyCode === 32){
    clear();
    }
}