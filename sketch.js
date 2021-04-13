
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	bobDiameter = 40
	bobPosX = width/2
	bobPosY = height/4 + 500
	//Create the Bodies Here.
	roof = new Roof(width/2, 100, 1000, 20);

	bobObject1 = new Bob(bobPosX-bobDiameter*4, bobPosY,bobDiameter);
	bobObject2 = new Bob(bobPosX-bobDiameter*2, bobPosY,bobDiameter);
	bobObject3 = new Bob(bobPosX, bobPosY,bobDiameter);
	bobObject4 = new Bob(bobPosX+bobDiameter*2, bobPosY,bobDiameter);
	bobObject5 = new Bob(bobPosX+bobDiameter*4, bobPosY,bobDiameter);
	
	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*4,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*2,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*2,0);
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*4,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display()
 bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();

rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()

  drawSprites();
 
}

function keyPressed(){
if(keyCode	=== 32){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})	
}
}

