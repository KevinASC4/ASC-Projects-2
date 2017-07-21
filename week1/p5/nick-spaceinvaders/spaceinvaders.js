/*
function setup(){
    createCanvas(600, 600);
    background(225);
    strokeWeight(2);
;   for (j=0; j < 4; j++){
        for (i = 0 ;i < 6; i++){
            rect(x+25,y+25,50,50);
            myArray[j][i] = new rectangle("white", false);
            x += 100;
        }
        x = 0;
        y += 100;
        if (y >= 300){
            y = 300
        }
    }
}


var x = 0;
var y = 0;

var rectx = 100;
var recty = 550;
var rectxspd = 5;


var myArray = [[],[],[],[],[]];
function rectangle(color, ship) {
    this.color = color;
    this.ship = ship;
}

//bullet
var bulletx = rectx+40
var bullety = recty - 35
var bulletspeed = 5

function draw(){
    noStroke();
    fill(225);
    rect(0,510, 600, 40);
    
   stroke("black");
    strokeWeight(2);
    fill("white");
    rect(rectx, recty - 15, 100, 8);

   if(keyIsDown(RIGHT_ARROW)) {
        rectx += rectxspd;
        bulletx += rectxspd;
    };
    if(keyIsDown(LEFT_ARROW)) {
        rectx -= rectxspd;
        bulletx -= rectxspd;
    };
    if (rectx >= 500 && bulletx >= 540){
        rectx = 500;
        bulletx = 540;
    }
    if (rectx <= 0 && bulletx <= 40){
        rectx = 0;
        bulletx = 40;
    }

   //rect(bulletx, bullety, 20, 20);
    s = recty - 35;
    rect(rectx+40,s,20,20);
    
   if (keyPressed() == true){
        s = s - 5;
    }
}


function keyPressed(){
    if (keyCode === 32){
        return true;
    }
}


function yes(){
    r = bulletx
    rect(r, bullety, 20, 20);
    while (bullety >=0 ){
        bullety -= bulletspeed;
    }
}
// function bullet(){
//     this.xpos = bulletx;
//     this.ypos = bullety;
//     this.moveup = function{
//         rect(bulletx,bullety,20,20);
//     }
// }

*/
function setup(){
    createCanvas(600, 600);
    background(225);
    strokeWeight(2);
    for (j=0; j < 4; j++){
        for (i = 0 ;i < 6; i++){
            rect(x+25,y+25,50,50);
            x += 100;
        }
        x = 0;
        y += 100;
        if (y >= 300){
            y = 300
        }
    }
}

function Bullet(xpos,ypos,width,height){
    this.xpos = xpos;
    this.ypos = ypos;
    this.width = width;
    this.height = height; 
}
var bulletChamber =[];


var x = 0;
var y = 0;

var rectx = 100;
var recty = 550;

var bulletx = rectx - 10;

function draw(){
    background(225);
    x = 0
    y = 0
    for (j=0; j < 4; j++){
        for (i = 0 ;i < 6; i++){
            rect(x+25,y+25,50,50);
            x += 100;
        }
        x = 0;
        y += 100;
        if (y >= 300){
            y = 300
        }
    }
    
   
   
   
   noStroke();
    fill(225);
    rect(0,530, 600, 15);
  
 
   stroke("black");
    strokeWeight(2);
    fill("white");
    rect(rectx, recty - 15, 100, 8);

   for(i = 0; i <bulletChamber.length; i++){
       rect(bulletChamber[i].xpos, bulletChamber[i].ypos, 10, 10);
       bulletChamber[i].ypos = bulletChamber[i].ypos - 10;
    }

   if(keyIsDown(RIGHT_ARROW)) {
       rectx = rectx + 5;
    };
    if(keyIsDown(LEFT_ARROW)) {
       rectx = rectx - 5;
    };
    if(rectx >= 500){
       rectx = 500;
    }
    if(rectx <= 0){
       rectx = 0;
    }
}
var bullety = recty - 45;

function keyPressed(){
    if (keyCode === 32){
    bulletChamber.push(new Bullet(rectx + 50,recty - 20 ,5,10));
    }
}

function alien (alienx, alieny){
    this.alienx = alienx;
    this.alieny = alieny;
}


