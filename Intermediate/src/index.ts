class User{
  
  // readonly #city: string = "mumbai"
  //private readonly city: string = "mumbai"
  private readonly city: string ='mumbai'
  //private _courseCount = 1
  protected _courseCount = 1
  private deleteToken(): void{
    console.log("Token deleted")
  }
  constructor(public email: string,
    public name: string,
     ){}

  get getAppleEmail(): string{
    return `apple${this.email}`
  }

  get courseCount(): number{
    return this._courseCount
  }

  set courseCount(courseNum){//no type for setters
    if (courseNum <= 1){
      throw new Error("Course count should be more than 1")
    }
    this._courseCount = courseNum
  }
    
}

const krishna = new User("k@s", "ks")

class SubUser extends User{
  changeCourseCount(){
    this._courseCount = 3
  }
}
// krishna.courseCount
// krishna.
