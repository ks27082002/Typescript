"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 12;
a = "ksj";
var b = {
    name: "krishna",
    userid: 1,
    adminid: 2
};
console.log(typeof (b));
function getDBid(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id += 2;
    }
}
var arr = [1, 2, 3, '4', false];
var seat;
// seat = "crew"
var tup = [1, 'a', 2];
tup.push(1);
tup.push("l");


