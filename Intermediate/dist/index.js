"use strict";
class User {
    deleteToken() {
        console.log("Token deleted");
    }
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // readonly #city: string = "mumbai"
        //private readonly city: string = "mumbai"
        this.city = 'mumbai';
        //private _courseCount = 1
        this._courseCount = 1;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const krishna = new User("k@s", "ks");
class SubUser extends User {
    changeCourseCount() {
        this._courseCount = 3;
    }
}
// krishna.courseCount
// krishna.
