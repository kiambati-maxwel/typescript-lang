"use strict";
// types
const number1 = document.querySelector('#num1');
const number2 = document.querySelector('#num2');
const btnAdd = document.querySelector('#btn');
btnAdd.addEventListener('click', () => {
    console.log(add(+number1.value, +number2.value));
});
const add = (function () {
    return function (n1, n2) {
        return n1 + n2;
    };
}());
