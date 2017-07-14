var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var current_money = 1000;
var user_items = [];
while (current_money >= 100){
    console.log("You currently have " + current_money + ". Sword = $500, Food $100");
    var choice = prompt("Would you like a sword, or food?");
    if (choice == "sword"){
        if(current_money >= 500){
            current_money = current_money - 500;
            user_items.push("sword");
        }else{
            console.log("Sorry you do not have enough money.");
        }
    }else if(choice == "food"){
        current_money = current_money - 100;
        user_items.push("food");
    }else{
        console.log("We don't have that item.");
    }
}

console.log("Watch out for the fire dragon! Best of luck on your adventure!")
var seeinventory = prompt("Would you like to see your inventory? (yes/no)");

if (seeinventory == "yes"){
    console.log("Your inventory:" + user_items);
}else{
    console.log("Have a nice day!");
}



//Sword costs $500
//Food costs $100
