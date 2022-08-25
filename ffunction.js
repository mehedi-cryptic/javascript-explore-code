function evenify(num){
    if(num%2==0){
        console.log(num, "is even number");
    }
    else{
        console.log(num, "is odd number");
    }
}

nums=[5,12,14,5,6,13,16,19,18];
for (let i = 0; i < nums.length; i++) {
    const num = nums [i];

    evenify(num);
    
    
}

friends_age=[13,17,19,20,18];
for (let i = 0; i < friends_age.length; i++) {
    const age = friends_age[i];
    //console.log(age);
    evenify(age);
}