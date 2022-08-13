var marks=[45, 42, 65, 57, 21, 88, 43, 55];
var max=marks[0];
for ( var i=0; i <marks.length; i++){
    var element=marks[i];
    if (element>max){
      max=element;
    }
}
console.log("Highest value is ",max);