function mul (num1: number, num2: number) {
  return num1 * num2
}
const numberA = 31.8,
      numberB = 5

console.log(mul(numberA, numberB))

// enum tuple
enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
  name: 'max',
  age: 20,
  hobbies: ['roller skating', 'football', 'travelling'],
  role: Role.ADMIN
}

// alias
type Combinable = number | string

// union and literal
function combine (
  numberA: Combinable,
  numberB: Combinable, 
  convert: 't-string' | 't-number' 
  ){
    if(typeof numberA === 'number' && typeof numberB === 'number' || convert === "t-number"){
      return +numberA + +numberB
    }else{
      return numberA.toString() + numberB.toString()
    }
  }

  console.log(combine(2, 5, 't-number'))