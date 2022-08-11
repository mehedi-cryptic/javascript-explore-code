// var factorial=1;
// for(let i=1; i<=10;i++){
//     factorial=factorial*i;
//     console.log(i, factorial);
// }

function fact(num){
    var factorial=1;
    for(let i=1; i<=num;i++){
    factorial=factorial*i;
}
return factorial;
}
var result=fact(10);
console.log(result);