abstract class TakePhoto{
  constructor(
    public cameraMode : string,
    public filter: string
  ){}

  abstract getSepia(): void

  getReelTime() : number{
    return 7
  }
}

class ig extends TakePhoto{
  constructor(
    public cameraMode: string,
    public filter: string,
    private burst: number
  ){
    super(cameraMode, filter)
  }

  getSepia(): void {
      console.log("Sepia")
  }
  getReelTime(): number {
      return 77
  }
}

const ks = new ig("a", "b", 7)
 