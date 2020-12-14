
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var dust1,dust2,dust3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=createSprite(50,320,200,40);
	ground.shapeColor(255);
	
	dust1=createSprite(350,200,30,60);
	dust1.shapeColor("green");
	dust2=createSprite(350,230,60,30);
	dust2.shapeColor("green");
	dust3=createSprite(410,200,30,60);
	dust3.shapeColor("green");

	paper=createSprite(100,300,40,40);
	paper.shapeColor("pink");
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ground.display();
  dust1.display();
  dust2.display();
  dust3.display();
  paper.display();
  
  drawSprites();
 
}



