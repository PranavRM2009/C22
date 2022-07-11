class Cannon{
constructor(x,y,w,h,a){
this.x=x
this.y=y
this.w=w
this.h=h
this.a=a
this.canonBaseImg = loadImage("assets/cannonBase.png")
this.canonImg = loadImage("assets/canon.png")
}
display(){
 push()
 imageMode(CENTER)
 image(this.canonBaseImg,170,110,200,200)   
 image(this.canonImg,this.x,this.y,this.w,this.h)
 pop()
}
}