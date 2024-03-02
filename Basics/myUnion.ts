let a : number | string = 12
a = "ksj"



type User = {
  name: string,
  userid: number
}

type Admin = {
  name: string,
  adminid: number
}

let b : User | Admin = {
  name: "krishna",
  userid : 1,
  adminid: 2
}

console.log(typeof(b))

function getDBid(id : string | number): void{
  if (typeof id=== "string")
  {
    id.toLowerCase()
  }
  else{
    id += 2
  }
  
}

let arr: (number | string | false)[] = [1, 2, 3, '4', false]

let seat: "aisle" | "window" | "middle"
// seat = "crew"


const tup :[number, string, number] = [1, 'a', 2]

tup.push(1)
tup.push("l")



enum SeatChoice {
  AISLE= "aisle",
  MIDDLE = 4,
  WINDOW,
  CREW= "crew",
  FIFTH=0
}

const seat1 = SeatChoice.AISLE


export{}