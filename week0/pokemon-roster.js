var prompt = require('prompt-sync')();

var garchomp = ["Garchomp", "Dragon,Ground", 108, 95, 130, false];
var sunflora = ["Serperior", "Grass", 75, 55, 75, false];
var genesect = ["Genesect", "Bug,Steel", 71, 95, 120, true];
var giratina = ["Giratina", "Dragon,Ghost", 150, 120, 100, true];
var mawile = ["Mawile", "Steel,Fairy", 50, 85, 85, false];
var gyrados = ["Gyrados", "Water", 95, 79, 125, false];
var roster = [garchomp, sunflora, genesect, giratina, mawile, gyrados];
for (var i=0; i < roster.length; i++){
    console.log("#" + (i+1)+ roster[i][0]+ " Type:" + roster[i][1] + " HP:" + roster[i][2] + " Atk:" + roster[i][3] + " Def:" + roster[i][4] + " Legend:" + roster[i][5]);
 }

var choice = prompt("What Pokemon would you like to add to your party?");
var choice = [];