var fixedrect,movingrect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
 fixedrect= createSprite(400, 200, 50, 50);
 fixedrect.shapeColor="RED";
 movingrect=createSprite(200,200,50,50);
 movingrect.shapeColor="RED";
 rect1=createSprite(100,100,80,80);
 rect1.shapeColor="white";
 rect1.velocityY=3
 rect2=createSprite(100,700,80,80);
 rect2.shapeColor="white";
 rect2.velocityY=-3
}

function draw() {
  background("black");
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

 if( isTouching(movingrect,rect1)){
  movingrect.shapeColor="blue";
 rect1.shapeColor="blue";
 }
else{
  movingrect.shapeColor="red";
rect1.shapeColor="red"; 
}
bounceoff(rect1,rect2);
  drawSprites();
}

