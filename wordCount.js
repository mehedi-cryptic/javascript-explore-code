var count=0;
var speech="i am a   good person. i don't snore at night";
for (var i=0; i <speech.length; i++){
    var char=speech[i];
    if (char== " " && speech[i-1]!==" "){
        count=count+1;
    }
}
count++;
console.log(count);