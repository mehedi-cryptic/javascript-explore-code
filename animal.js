var depth=12;
var animal=0;
if (depth<=10){
    animal=depth*50;
}
else if(depth<=20){
    var first10=10*50;
    var remainig=depth-10;
    var second20=remainig*100;
    animal=first10+second20;

}
else{
    var first10=10*50;
    var second20=10*100;
    var remainig=depth-20;
    var thirdpart=remainig*300;
    animal=first10+second20+thirdpart;

}
console.log(animal);