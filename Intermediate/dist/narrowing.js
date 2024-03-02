"use strict";
function printAll1(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
function printAll2(strs) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
const f11 = (acc) => {
    if ("isAdmin" in acc) {
        return acc.isAdmin;
    }
};
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        return `${pet} food`;
    }
    else {
        return `${pet} food`;
    }
}
const getArea = (fig) => {
    if (fig.kind === "circle") {
        return 3.14 * fig.radius ** 2;
    }
    return fig.side ** 2;
};
const getArea2 = (fig) => {
    switch (fig.kind) {
        case "circle": return 3.14 * fig.radius ** 2;
        case "square": return fig.side ** 2;
        default:
            const _defaultforfig = fig;
            return _defaultforfig;
    }
};
