type User = {
  name:string,
  age: number,
  email: string
}

const userDetails = (user: User): User => {
  //return{name:user.name, age:user.age, email:user.email}
  return {name:"", age:9, email:""}
 
}

type newUser = {
  readonly _id?: string
  name: string,
  age: number,
  email: string,
  mine?: boolean
}

let a : newUser= {
  name:"pooja",
  age:21,
  email:"p@p",
  // _id: "1",
  mine:true
}

// a.name= "pooja sharma"
// a.mine= true
console.log(a)
// a._id = 2

type name = {
    name: string
}
type age = {
  age: number
}

type b = name & age & {
  email: string
  mine : true
}

let aastha : b= {
  name:"pooja",
  age:21,
  email:"p@p",
  mine: true
  
}

console.log(a===aastha)

export{}

