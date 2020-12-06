let userInput: unknown

// const userName: string = userInput  error unkown is not asignable to dif type

// never

function generateError (message: string, code: number):never{
  throw{
    message, code
  }
}

console.log(generateError('bad request', 401))

