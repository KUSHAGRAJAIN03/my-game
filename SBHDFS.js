
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,roofObject
var rope1;
var engine, world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(200,200,200,10);

	bobObject1=new bob(200,500,30);


	rope1=new rope(roofObject.body, bobObject1.body);
}


function draw() {
 
  background(230);
  Engine.update(engine);
  roofObject.display();

  rope1.display()
 	
  bobObject1.display(); 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  	}
}

