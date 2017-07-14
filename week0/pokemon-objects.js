var prompt = require('prompt-sync')();

function pokemon(name, type, hp, def, atk, legend){
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.def = def;
    this.atk = atk;
    this.legend = legend;
}
var garchomp = new pokemon("Garchomp", "Dragon, Ground", 108, 95 , 130, false);
var scizor = new pokemon("Scizor", "Bug, Steel", 70, 100, 130, false);
var genesect = new pokemon("Gensect", "Bug, Steel", 71, 95, 120, true);
var giratina = new pokemon("Giratina", "Dragon, Ghost", 150, 120, 100, true);
var mawile = new pokemon("Mawile", "Steel, Fairy", 50, 85, 85, false);
var gyrados = new pokemon("Gyrados", "Water, Flying", 95, 79, 125, false);

var roster = [garchomp, scizor, genesect, giratina, mawile, gyrados];

function printRoster(){
for (var i = 0; i < roster.length; i++){
    console.log(roster[i]);
}
}
function pokemonAttacked(){
    for(var i = 0; i< roster.length; i++){
        roster[i].hp = roster[i].hp - 10;
    }
    printRoster();
}
/*(pokemonAttacked();*/

function randomAttacked(){
    var randompokemon = roster[Math.floor(Math.random() * roster.length)];
    var hpchoice = prompt("How much HP would you like to subtract?");
    randompokemon.hp = randompokemon.hp - hpchoice;
    console.log(randompokemon);
}
randomAttacked();
