const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground;
var dustbin1;
var paper;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;

	ground = new Ground(600,height,1200,20);
	dustbin1 = new Dustbin(580,620,150,150);
    //dustbin2 = new Dustbin(500,640,20,100);
	//dustbin3 = new Dustbin(660,640,20,100);
	paper = new Paper(150,680,30,30);
}

function draw() {
	background(255);  
	Engine.update(engine);

	dustbin1.display();
	ground.display();
	paper.display();
	//dustbin2.display();
	//dustbin3.display();
	
  }

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:20 , y:-25});
	}
}
   

