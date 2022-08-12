// var n=18;
// for(var i=2; i<=n-1; i++){
//      if(n%i==0){
//         console.log("not a prime number");
//         break;
//      }
//      else{
//         console.log("number is prime number");
//      }
// }

function isprime(n){
    for(var i=0; i<=n-1;i++){
        if(n%i==0){
            return "not a prime number";
        }
    }
    return "number is prime number";
}
var res=isprime(7);
console.log(res);
