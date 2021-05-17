
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1 ,  bobObject2 ,  bobObject3 , bobObject4 , bobObject5;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world;
  
	bobObject1 = new Bob(200 , 500 , 90);
	bobObject2 = new Bob(200+90 , 500 , 90);
	bobObject3 = new Bob(200+180 , 500 , 90);
	bobObject4 = new Bob(200+270 , 500 , 90);
	bobObject5 = new Bob(200+270+90 , 500 , 90);

   roof = new Roof(380 , 200 , 450, 50);
   
   rope1 = new Rope(bobObject1.body , roof.body , -90*2 , 25);
   rope2 = new Rope(bobObject2.body , roof.body , -40*2 , 25);
   rope3 = new Rope(bobObject3.body , roof.body , 0*2 , 25);
   rope4 = new Rope(bobObject4.body , roof.body , 40*2 , 25);
   rope5 = new Rope(bobObject5.body , roof.body , 90*2 , 25);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
  drawSprites();
 
}



