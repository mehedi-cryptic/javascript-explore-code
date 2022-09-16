const normalPerson={
    firstname:"Rahim",
    lastname:"Uddin",
    sallary:15000,
    getfullname: function(){
        console.log(this.firstname, this.lastname);
    },
    chargeBill:function(ampount, tax){
        this.sallary=this.sallary-ampount-tax;
        return this.sallary;
    }
}
// console.log(normalPerson);
// normalPerson.chargeBill(120);
// console.log(normalPerson.sallary);


const heroPerson={
    firstname:"hero",
    lastname: "balam",
    sallary:25000,


}
const friendlyPerson={
    firstname:"kalam",
    lastname: "balam",
    sallary:27000,
    

}
// // // normalPerson.chargebill();
//  const herochargeBill=normalPerson.chargeBill.bind(heroPerson);
// // console.log(herobillcharge);
// const abc=herochargeBill(900);
// console.log(abc);
// const frindlyCharge=normalPerson.chargeBill.bind(friendlyPerson);
// const def=frindlyCharge(200);
// console.log(def);

// const dd=normalPerson.chargeBill.call(heroPerson, 400);
// console.log(heroPerson.sallary);



normalPerson.chargeBill.apply(heroPerson, [30,40]);
console.log(heroPerson.sallary);