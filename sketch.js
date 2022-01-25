const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var ground;
var backgroundImg;
var tower;
var towerimg;
var angle = 20;
var cannon;
var cannonball;

function preload() {
 backgroundImg = loadImage("./assets/background.gif");
 towerimg = loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options ={
    isStatic:true
  }

  ground = Bodies.rectangle(0, height-1, width*2, 1,options);
  World.add(world, ground);
  
 tower = Bodies.rectangle(150,350,160,320,options);
World.add(world,tower);

cannon = new Cannon(180,110,130,100,angle);

cannonball  = new CannonBall(cannon.x,cannon.y);

}

function draw() {
  image(backgroundImg,0,0,width,height);
 
  Engine.update(engine);
  
  rect(ground.position.x,ground.position.y, width*2,1);

  push();
  imageMode(CENTER);
  image(towerimg,tower.position.x,tower.position.y,160,320);
  pop();

  cannon.diplay();
  cannonball.display();
}

function keyReleased(){
	if(keyCode === DOWN_ARROW){
		cannonball.shoot();		
	}
}