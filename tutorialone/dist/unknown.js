"use strict";
let userInput;
// const userName: string = userInput  error unkown is not asignable to dif type
// never
function generateError(message, code) {
    throw {
        message, code
    };
}
console.log(generateError('bad request', 401));
