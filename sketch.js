
var player,car,logs,build,city,river,grass,g;
var stop=0;
var play=1;
var win=2;
var gameState = "stop";
var carA, logA, playerA,buildA,cityA,logG,grassA,gw;
var school;
function preload()
{
 playerA=loadImage("images/kid.png")
 buildA=loadImage("images/building.png")
 cityA=loadImage("images/city1.png")
logA=loadImage("images/log1.png");
grassA=loadImage("images/grass.jpg")
carA=loadImage("images/car1.png")
gw=loadImage("images/partyover.jpg")
}

function setup() {
  createCanvas(1200,620);
  grass=createSprite(600,180,40,40);
grass.addImage(grassA);
grass.scale=4.9;
  river=createSprite(600,160,1200,160);   
river.shapeColor="aqua";
  player=createSprite(50,30,40,40);
  player.addImage(playerA);
  player.scale=0.2;
  player.depth=20;
 build=createSprite(1100,540,40,40);
 build.addImage(buildA);
build.scale=0.5;
city=createSprite(600,-100,40,40);
city.addImage(cityA);
city.scale=1;
city.depth=-10;
g=createSprite(600,300,40,40);
g.addImage(gw);
g.scale=3;
g.depth=40;
g.visible=false;
logG=new Group();





 }

function draw() {
  background("brown");
  if(gameState===play){
    if(keyDown("left")){
      player.x=player.x-5;
    }
    if(keyDown("right")){
      player.x=player.x+5;
    }
    if(keyDown("up")){
      player.y=player.y-5;
    }
    if(keyDown("down")){
      player.y=player.y+5;
    }
    
    if (frameCount % 85 === 0) {
      logs=createSprite(1,Math.round(random(90,220)),40,40);
      logs.addImage(logA);
      logs.scale=0.09;
      logs.velocityX=4;
      logs.depth=10;
      logs.lifetime=500;
      logG.add(logs);
    }
    if (frameCount % 20 === 0) {
      car=createSprite(1,Math.round(random(280,580)),40,40);
      car.addImage(carA);
      car.scale=0.03;
      car.velocityX=6;
      car.depth=10;
      car.lifetime=500;
      logG.add(car);
    }
    if(player.isTouching(logG)){
      player.x=50;
      player.y=30;
    }
  }
if(player.isTouching(build)){
  gameState=win;
}
if(gameState===win){
g.visible=true;
}


  drawSprites();
  if(gameState==="stop"){
    textSize(17)
    stroke("blue")
    strokeWeight(4);
    fill("green")
    text("Madhan lives in a city.One day he has to attend a attend a party.But madhan has to cross some logs and cars to reach his destination.Madhan knows to swim,",10,100)
 text("but unfortunately some logs were floating in the river,if madhan touches the log he has to start from first.Help madhan reach the party without getting hurt.",10,120)
 text("Move im using Arrow keys and help him reach the party",400,140)
 fill("red")
 textSize(40)
 strokeWeight(10);
 text("press S to start",500,200)
  }
  if(keyDown("s")){
    gameState=play;
  }
}
