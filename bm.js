class BlowerMouth
{
 constructor(x,y,w,h)
 {
     this.x = x
     this.y = y
     this.width = w
     this.height = h
     this.body = Bodies.rectangle(x,y,w,h)
     World.add(engine.world,this.body)
 }

 show() {
  rect(this.body.position.x,this.body.position.y,this.width,this.height)
}
}
