const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustobj, papobj, groundobj;
var world;


function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

  dustobj = new dustbin(1200,650);
  papobj  = new paper (200,450,40);
  groundobj = new ground(width/3, 670, width, 20);
	
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  dustobj.display();
  papobj.display();
  groundobj.display();
  
  drawSprites();
 
}



function keyPressed (){
if(keyCode === UP_ARROW){
 Matter.Body.applyForrce(papobj.body,papobj.body.position,{x:85,y:-85});
}
}