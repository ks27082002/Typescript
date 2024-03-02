function printAll1(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

function printAll2(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User{
  name: string,
  email: string
}

interface Admin{
  name: string
  email: string
  isAdmin: boolean
}

const f11 = (acc: User | Admin) => {
  if ("isAdmin" in acc){
    return acc.isAdmin
  }
}

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird):pet is Fish{
  return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
  if (isFish(pet)){
    return `${pet} food`
  }
  else{
    return `${pet} food`
  }
}


interface circle{
kind: "circle"
radius: number
}

interface square{
  kind: "square",
  side: number
}

type shape = circle | square

const getArea = (fig: circle | square) => {
  if (fig.kind === "circle"){
    return 3.14 * fig.radius ** 2

  }
  return fig.side ** 2

}

const getArea2 = (fig: shape) => {
  switch(fig.kind){
    case "circle": return 3.14 * fig.radius**2 
    case "square": return fig.side ** 2
    default:
      const _defaultforfig: never = fig
      return _defaultforfig
  }
}