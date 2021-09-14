
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine
let world

var bm, blower,ball

function setup() {
  createCanvas(800,400);

  engine = Engine.create()
  world = engine.world

  bm =  new BlowerMouth(400,180,100,20);
  blower = new Blower(450,180,50,70)
  ball = new Ball(450,100,40,40)

  
  button = createButton("CLICK TO BLOW")
  button.position(width/2,height-100)
  button.class("blowButton")
 button.mousePressed(blow)
rectMode(CENTER)
}

function draw() {
  background("black");  
  bm.show()
  blower.show()
  ball.show()
  drawSprites();
 
}

function blow() {
  Matter.Body.applyForce(ball.body, {x: 0,y:0},{x:0,y:0.05})
}
