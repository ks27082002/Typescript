"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userDetails = function (user) {
    //return{name:user.name, age:user.age, email:user.email}
    return { name: "", age: 9, email: "" };
};
var a = {
    name: "pooja",
    age: 21,
    email: "p@p",
    // _id: "1",
    mine: true
};
// a.name= "pooja sharma"
// a.mine= true
console.log(a);
var aastha = {
    name: "pooja",
    age: 21,
    email: "p@p",
    mine: true
};
console.log(a === aastha);//separate location in memory


