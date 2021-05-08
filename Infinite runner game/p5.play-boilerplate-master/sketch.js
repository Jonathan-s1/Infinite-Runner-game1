var player;
var playerImage;
function preload(){
playerImage=loadAnimation("player1.png", "player2.png", "player3.png", "player4.png");
}
function setup() {
  createCanvas(1200,800);
  ground=createSprite(100,800,2400,50);
  player=createSprite(100,700,50,50);
  player.addAnimation("player",playerImage);
  player.scale=2;
}

function draw() {
  background(0); 
  player.collide(ground); 
  if(keyDown(UP_ARROW)){
player.velocityY=-12
  }
  if(keyDown(RIGHT_ARROW)){
  player.x=player.x+2
  }
  if(keyDown(LEFT_ARROW)){
    player.x=player.x-2
  }
  player.velocityY= player.velocityY+ 0.7;
  drawSprites();
}