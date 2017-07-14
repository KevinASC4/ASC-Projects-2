var charizard = {
    "attack" : "Blaze",
    "HP" : 266,
    "legendary" :false,
    "types" : ["Fire", "Flying"]
};

function Superhero(realName, power, sidekick, race, gender, hideout, enemy, world){
    this.realName = realName;
    this.power = power;
    this.sidekick = sidekick;
    this.race = race;
    this.gender = gender;
    this.hideout = hideout;
    this.enemy = enemy;
    this.world = world;

    this.talk = function(){
        console.log("Hi my name is " + this.realName);
    }
}

var superman = new Superhero ("Clark Kent", "Heat Vision", false, 
                               "Kryptonian", "Male", "Metropolis", 
                               "Lex Luther", "DC");

function Pizza (sauce, cheese, toppings, size){
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
    this.size = size;
}

var famiglia = new Pizza("tomato", "kraft singles", 
                        ["pineapple", "garlic knots", "grease"], 
                        "massive");
var luzzos = new Pizza ("tomato", "mozzarella", "pepperoni", "tini");