const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var background,backgroundImg

var tower,towerImg

var canonBase,canonBaseImg, canon, canonImg


function preload() {
 backgroundImg = loadImage("assets/background.gif")
 towerImg = loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 tower = Bodies.rectangle(75,175,100,400,options)
 World.add(world,tower)

 canon = new Cannon(190,100,125,150,20)
 
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
 image(towerImg,tower.position.x, tower.position.y, 180,350)

 canon.display()
}
