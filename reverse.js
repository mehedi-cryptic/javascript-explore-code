function reverseString(str){
    var reverse="";
    for(var i=0; i<str.length; i++){
        var char=str[i];
        reverse=char+reverse;

    }
    return reverse;
}
var statement=" hellow vai brothers";
var alln=reverseString(statement);
console.log(alln);