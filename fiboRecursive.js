function fibo(n){
    if(n==0){
        return 0;
    }
    if(n==1 ){
        return 1;

    }
    else{
        return fibo(n-1)+fibo(n-2);
    }
}
var res =fibo(10);
console.log(res);