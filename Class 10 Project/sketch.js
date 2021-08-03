var seaImg;
var shipImg1;

function preload(){
seaImg=loadImage("sea.png");

shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
  sea=createSprite(200,-100,200,200);
  sea.addImage(seaImg);

  ship=createSprite(100,100);
  ship.addAnimation("ship",shipImg1);
  ship.scale=0.2
}

function draw() {
  background("blue");
  
  sea.velocityX=-10;

  if(sea.x<0){
    sea.x=sea.width/2;
  }

  drawSprites();
}