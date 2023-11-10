"use strict";
// functions
Object.defineProperty(exports, "__esModule", { value: true });
function adddition(num) {
    return num + 1;
}
function getLower(value) {
    return value.toLowerCase();
}
function signUp(name, email, password) {
    if (password === void 0) { password = false; }
}
adddition(10);
getLower("Roshan");
// signUp("roshan","@gmail.com",true)
signUp("roshan", "@yahoo.com");
function getValue(value) {
    if (value < 0) {
        return "negative";
    }
    return 23;
}
var printHello = function (name) {
    return name;
};
var heros = ["ironman", "captain america", "thor", 10];
heros.map(function (hero) {
    return "heros is ".concat(hero, ".");
});
function consoleError(err) {
    console.log(err);
}
function handleError(err) {
    throw new Error(err);
}
// OBjects
var User = {
    name: "roshan",
    email: "roshan@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
    return { fname: "Roshan", lname: "Stha" };
}
var user1 = {
    _id: "123",
    name: "Roshan",
    email: "r@gmail.com",
    isActive: false
};
user1.email = "roshanshrestha@gmail.com";
