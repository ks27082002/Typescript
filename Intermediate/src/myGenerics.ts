
function func<T>(val: T): T{
 return val
}

interface Bottle{
  brand: string,
  type: number
}

func<Bottle>({brand:"a", type:2 })


function f1<T> (products: T[]): T{
  return products[3]
}

const f2 = <T>(products: T[]) : T=> {
 return  products[0]
}

interface Db{
  connection: string,
  username: string,
  password: string
}
const f3 = <T, U extends Db>(v1: T, v2: U): object => {
  return{
    v1, v2
  }
}

f3(1, {connection:"", username:"", password:""})


interface course{
  name: string,
  author: string,
  subject: string
}

interface quiz{
  name: string,
  type: string
}

class Sellable <T>{
  public cart: T[] = []

  addToCart(item: T){
    this.cart.push(item)
  }
}
