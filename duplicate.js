var name=[3,6,2,7, 5, 3,6,7,9,5,8,2,9,3,9,3,2];
var uniqueName=[];
for(var i=0; i<name.length; i++){
    var element=name[i];
    var index=uniqueName.indexOf(element);
    if(index==-1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);