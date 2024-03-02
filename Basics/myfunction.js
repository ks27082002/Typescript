"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num1, num2) {
    return num1 + num2;
}
addTwo(5, 5);
var func = function (num1, num2) {
    return num1 + num2;
};
function displayError(msg) {
    console.log(msg);
}
var handleError = function (msg) {
    throw new Error();
};
var createUser = function (_a) {
    var string = _a.name, number = _a.age;
    return { name: "ks" };
};
// createUser({name:"kr", age:9, email:"hh"})
var obj = { name: "kr", age: 9, email: "hh" };
createUser(obj);
func(2, 4);
