var ship, ship_animation;

var sea, sea_ocean;

function preload(){
ship_animation=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

sea_ocean=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea=createSprite(130,200,400,20);
  sea.addImage("ocean",sea_ocean);
  sea.scale=0.25;
 
  sea.velocityX=-2;
  

  ship=createSprite(200,200,20,20);
  ship.addAnimation("shipani",ship_animation);
  ship.scale=0.25;

  
  
}

function draw() {
  background("blue");
 console.log(ship);

if(sea.x<0){
  sea.x=sea.width/8
}

  drawSprites();


}