// const year=3566;
// let remainder=year%4;
// if(remainder==0){
//     console.log("Year is leap year");
// }
// else{
//     console.log("year is not leap year");
// }

function isleapYear(year){
    if((year%4==0) && (year%100!==0)||(year%400==0))
    {
        console.log("year is leap year");
    }
    else{
        console.log("year is not leap year");
    }
}
//const check=prompt("enter year: ");
isleapYear(2282934);
isleapYear(2020);