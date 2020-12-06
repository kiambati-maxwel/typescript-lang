// type by inference

interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}



const user: User = new UserAccount("Murphy", 1);

console.log(user);

// anotate types in functions

function getAdminUser(): void {
  //...
}

function deleteUser(user: User) {
  // ...
}


let Name: string | string[] | number;

Name = 1;

console.log(Name);