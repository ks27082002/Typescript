interface camera  {
  cameraMode: string,
  filter: string,
  burst: number

}

interface story{
  read() : void
}

class yt implements camera, story{
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    private story: string
  ){}
  read(){
    console.log("reading")
  }
}