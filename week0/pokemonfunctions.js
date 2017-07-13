var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function randletter(){
    var letter = alphabet[Math.floor(Math.random() * 26)];
    return letter;
}
randletter();

function randword() {
    var length = Math.floor(Math.random() * 10);
    var str='';
    for (var i=0; i<length; i++){
        str=str+randletter();
    }
    return str;
}
//randword();

function randsentence() {
    var length = Math.floor(Math.random() * 10);
    var str = '';
    for (var i=0; i<length; i++){
        str = str + randword();
        str = str + " ";
    }
    str = str + ".";
    console.log (str);
}
randsentence();