function addd(n1: number, n2:number){
  return n1 + n2
}

// the return type is void
function printResults(n: number){
  console.log('Result = ' + addd(n, 10))
}

printResults(5)

// let combinedValues: Function

// function type
let combinedValues: (a: number, b: number) => number

combinedValues = addd

// call backs 
function adddAndHundle(a: number, b:number, cb: (result: number) => void){
  const result = a + b
  return cb(result)
}

// const cb = function (a){
// console.log(a)
// }

// adddAndHundle(10, 6, cb)

adddAndHundle(10, 12, (a)=>{
  console.log(a)
})

