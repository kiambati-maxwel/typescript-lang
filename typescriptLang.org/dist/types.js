"use strict";
// type by inference
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new UserAccount("Murphy", 1);
console.log(user);
// anotate types in functions
function getAdminUser() {
    //...
}
function deleteUser(user) {
    // ...
}
let Name;
Name = 1;
console.log(Name);
