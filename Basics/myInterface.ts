interface User  {
  readonly dbId: number
  name: string,
  email: string,
  googleId? : string,
  // startTrail: () => string
  startTrail() : string
  getCoupon(couponname: string, discount: number) : string
}

const hitesh: User = {
  name: "",
  dbId: 1,
  email: "jk",
  startTrail: () => {
    return "start trail"
  },
  getCoupon : (name:"home", off: 10) => {
    return "discount"
  },
  githubToken: "12"
}

interface User {
  githubToken: string
}

interface Admin extends User{
  role: "admin" | "ta" | "learner"
}

