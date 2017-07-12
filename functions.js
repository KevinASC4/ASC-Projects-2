function hello(){
    console.log("Hello, world");
}
hello();

function add(num1, num2){
    console.log(num1 + num2);
    return(num1 + num2); 
}
add(157, 103);

function rand(number){
    var wholeNumber = Math.floor(Math.random() * number);
    return wholeNumber;
}
rand(100);
