"use strict";
function mul(num1, num2) {
    return num1 * num2;
}
const numberA = 31.8, numberB = 5;
console.log(mul(numberA, numberB));
// enum tuple
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'max',
    age: 20,
    hobbies: ['roller skating', 'football', 'travelling'],
    role: Role.ADMIN
};
// union and literal
function combine(numberA, numberB, convert) {
    if (typeof numberA === 'number' && typeof numberB === 'number' || convert === "t-number") {
        return +numberA + +numberB;
    }
    else {
        return numberA.toString() + numberB.toString();
    }
}
console.log(combine(2, 5, 't-number'));
