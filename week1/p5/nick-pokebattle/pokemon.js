var img;
var img2;
var img3;
var img4;


function setup(){
    createCanvas(500, 500);
    background("grey"); //CHANGE TO WHITE
    img = loadImage("garchomp.png");
    img2 = loadImage("garchompback.png");
    img3 = loadImage("dragonite.png");
    img4 = loadImage("background.jpg");

}

function pokemon(name, HP, maxHP, move1, move1dmg, move2, move2dmg, move3, move3dmg, move4, move4dmg){
    this.name = name;
    this.HP = HP;
    this.maxHP = maxHP;
    this.move1 = move1;
    this.move1dmg = move1dmg;
    this.move2 = move2;
    this.move2dmg = move2dmg;
    this.move3 = move3;
    this.move3dmg = move3dmg;
    this.move4 = move4;
    this.move4dmg = move4dmg;
}


var garchomp = new pokemon("Garchomp", 400, 400, "Dragon Claw", 50, "Earthquake", 30, "Stone Edge", 40, "Fire Blast", 20);
var dragonite = new pokemon("Dragonite", 400 , 400, "Thunder Punch", 20, "Fire Punch", (30), "Dragon Claw", (50), "Draco Meteor", (70));
var dragonitemovesdmg = [dragonite.move1dmg, dragonite.move2dmg, dragonite.move3dmg, dragonite.move4dmg];
var dragonitemoves = [dragonite.move1, dragonite.move2, dragonite.move3, dragonite.move4];


function draw(){
    background("grey");
    stroke("black");
    fill("grey");//SHADOWS
    ellipse(100, 430, 100, 20);
    ellipse(400, 130, 100, 20);
    fill("black");
    stroke("white");//UI RECTANGLES
    rect(0, 450, 500, 80);
    rect(310,300,200,200);
    fill("white");//MOVES UNDERLINE AND BOXES
    rect(310, 330, 190, 2);
    rect(328, 350, 150, 20, 20);
    rect(328, 385, 150, 20, 20);
    rect(328, 420, 150, 20, 20);
    rect(328, 455, 150, 20, 20);
    noStroke();
    textSize(20);//ALLY TEXT
    text("What move would you like to use?",5 , 480);
    textSize(24);
    text("Moves",370, 322);
    fill("black");
    text(garchomp.name,125, 330);
    text(garchomp.HP + "/" + garchomp.maxHP, 135, 370);
    textSize(16);
    text(garchomp.move1, 350, 365);
    text(garchomp.move2, 350, 400);
    text(garchomp.move3, 350, 435);
    text(garchomp.move4, 350, 470);
    textSize(24);
    text(dragonite.name, 250, 50); 
    text(dragonite.HP + "/" + dragonite.maxHP, 250, 90)
    image(img2, 55, 350);
    image(img3, 355, 50);
    if (dragonite.HP <=0){
        dragonite.HP = 0;
        fill("black");
        rect( 0, 0, 600, 600);
        textSize(64);
        fill("white");
        text("Dragonite fainted", 0, 125);
        text("You win!", 125, 250);
    }
    if (garchomp.HP <=0){
        garchomp.HP = 0;
        fill("black");
        rect( 0, 0, 600, 600);
        textSize(40);
        fill("white");
        text("Your Garchomp fainted!", 50 , 125);
        text("You blacked out!", 100, 375);
    }
   
}

function mouseClicked(){
    if(mouseX >= 328 && mouseX <= 478 && mouseY >= 350 && mouseY <= 370){
        dragonite.HP = dragonite.HP - garchomp.move1dmg;
    } 
    else if(mouseX >= 328 && mouseX <= 478 && mouseY >= 385 && mouseY <= 405){
        dragonite.HP = dragonite.HP - garchomp.move2dmg;   
    }
    else if(mouseX >= 328 && mouseX <= 478 && mouseY >= 420 && mouseY <= 440){
        dragonite.HP = dragonite.HP - garchomp.move3dmg;
    }
    else if(mouseX >= 328 && mouseX <= 478 && mouseY >= 455 && mouseY <= 475){
        dragonite.HP = dragonite.HP - garchomp.move4dmg;
    }
    setTimeout(function(){
        garchomp.HP = garchomp.HP - random(dragonitemovesdmg);
    }, 500);
}