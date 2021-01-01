var fixedRect, movingRect,o1,o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1 = createSprite(300,100,50,50);
  o2 = createSprite(400,100,50,50);
  o1.shapeColor = 'blue';
  o2.shapeColor = 'blue';
  o1.velocityX = 2;
  o2.velocityX = -2;
}
function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(collision(movingRect,o1)){
   movingRect.shapeColor = 'red';
   o1.shapeColor = 'red';  
 }

 bounceoff (o1,o2);
  drawSprites();
}
