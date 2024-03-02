function addTwo(num1: number, num2: number):number {
  return num1 + num2
}
addTwo(5, 5)


const func = (num1: number, num2:number) => {
  return num1 + num2
}


function displayError(msg: string): void{
  console.log(msg);
  
}

const handleError = (msg: string): never => {
  throw new Error()
  
}

const createUser = ({name:string, age:number}): {name:string} =>  {
 return {name:"ks"}
}
// createUser({name:"kr", age:9, email:"hh"})
let obj = {name:"kr", age:9, email:"hh"}
createUser(obj)


func(2, 4)


export{}