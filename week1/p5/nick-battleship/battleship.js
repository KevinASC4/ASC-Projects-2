

var grid = [];
var rectx = 10;
var recty = 10;

/*function rectangle(color, ship){
    this.color = color;
    this.ship = ship;
}*/

function setup(){
    createCanvas(500, 500);
    background("purple");
}
   

function draw(){
    for(var i=0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            rect(rectx, recty, 80, 80);
            grid.push(rect(rectx, recty, 80, 80));
            rectx = rectx + 125;   
            //grid[j][i] = new rectangle("white",false); 
            //grid.push(grid[j][i]);
    }
    rectx = 10;
    recty = recty + 125;
}
} 
    
     



