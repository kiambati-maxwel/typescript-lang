// types
// const number1 = document.querySelector('#num1')! as HTMLInputElement
// const number2 = document.querySelector('#num2')! as HTMLInputElement
const btnAdd = document.querySelector('#btn')!

// btnAdd.addEventListener('click', ()=> {
//   console.log(add(+number1.value, +number2.value))
// })

// const add = (function () {
//   return function (n1: number, n2: number) {
//     return n1 + n2
//   }
// }())

function clickHandler(message: string){
  console.log('message' + message)
}

if(btnAdd){
  btnAdd.addEventListener('click', clickHandler.bind(null, 'i am max'))
}