/*Problem 1
Create an array of size 10 and place a 
random integer in each index.
Write a function that will find the sum of the array values.*/
var add = 0;
var numberset = [];
for(var i = 0; i < 10; i++){
    var number = Math.floor(Math.random()* 100);
    numberset.push (number);
}

console.log (numberset);

function addset(){
    for (var i = 0; i < 10; i++)
    add = add + numberset [i];
    console.log (add);
}
addset();





