"use strict";
function func(val) {
    return val;
}
func({ brand: "a", type: 2 });
function f1(products) {
    return products[3];
}
const f2 = (products) => {
    return products[0];
};
const f3 = (v1, v2) => {
    return {
        v1, v2
    };
};
f3(1, { connection: "", username: "", password: "" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(item) {
        this.cart.push(item);
    }
}
