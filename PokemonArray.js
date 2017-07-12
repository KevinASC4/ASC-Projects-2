myPokemonRoster = ["garchomp", "gardevoir", "sharpedo", "chandelure", "blastoise"];
var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1];
myPokemonRoster.pop();
myPokemonRoster.push("blaziken");
myPokemonRoster.push("scizor");
myPokemonRoster.length;
var RosterSize = myPokemonRoster.length;
for (var i = 0; i <RosterSize; i++) {
    console.log (myPokemonRoster[i]);
}
for (var i = RosterSize; i > -1; i--) {
    console.log (myPokemonRoster[i]);
} 

