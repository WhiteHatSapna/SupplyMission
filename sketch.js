var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,myEngine,myWorld
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(0)

	myEngine = Engine.create();
	myWorld = myEngine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(myWorld, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	 World.add(myWorld, ground);
	 
	 boxPosition=width/2-100
 	boxY=610;
	
 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(myWorld, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(myWorld, boxBottomBody);

 	boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxrightSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(myWorld, boxRightBody);
	
	// Engine.run(myEngine);
	  
}


function draw() {

background("white");
 Engine.update(myEngine);
 packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 	
    
  drawSprites();

  
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
  
	  helicopterSprite.x=helicopterSprite.x-20;    
	  translation={x:-20,y:0}
	  Matter.Body.translate(packageBody, translation)
  
  
	} else if (keyCode === RIGHT_ARROW) {
	  helicopterSprite.x=helicopterSprite.x+20;
	  translation={x:20,y:0}
	  Matter.Body.translate(packageBody, translation)
	}
	else if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false);
	  
	}
  }
  


