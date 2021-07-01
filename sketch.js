var bgImg, pirate, MS;
var opp1, opp2, opp3, opp4, ball;

function preload() {
  bgImg = loadImage("BGGG.png");
  MSImg = loadImage("Main.png");
  opp1Img = loadImage("opp1.png");
  opp2Img = loadImage("opp5.png");
  opp3Img = loadImage("opp3.png");
  opp4Img = loadImage("opp4.png");
  ballImg = loadImage("ball.png");
  whiteskullImg = loadImage("white skull.png");
  blackskullImg = loadImage("black skull.png");
  sharkImg = loadImage("Shark.png");
  whaleImg = loadImage("whale.png");
}

function setup() {
  createCanvas(1000,480);
  sea = createSprite(500, 250, 20, 20);
  MS = createSprite(110, 100, 10, 10);

  opp1Group=new Group() ;
  opp3Group=new Group();
  opp4Group=new Group();
  sharkGroup=new Group();
  whaleGroup=new Group();
  ballGroup=new Group();
  //creating Edges
}

function draw() {
  background("Black");
  //adding sea
  sea.addImage(bgImg);
  sea.scale = 1;
  sea.velocityX = -5;

  if (sea.x < 0) {
    sea.x = width / 2;
  }
  //main ship
  MS.addImage(MSImg);
  MS.scale = 0.2;

  //controls of ship
  if (keyDown("up")) {
    MS.y+=-15;
  }
  if (keyDown("down")) {
    MS.y+=15;
  }
 
if(keyWentDown("space")){
   var ball=createSprite(20,20,20,20);
  ball.addImage(ballImg);
  ball.x=MS.x;
  ball.y=MS.y;
  ball.scale=0.1;
  ball.lifetime=100;
  ball.velocityX=25;
  ballGroup.add(ball);
}
//destroying  
if(opp1Group.isTouching(ballGroup)){
   opp1Group.destroyEach();
   ballGroup.destroyEach();
   }  
  
if(opp3Group.isTouching(ballGroup)){
   opp3Group.destroyEach();
   ballGroup.destroyEach();
   }  
    
  if(opp4Group.isTouching(ballGroup)){
   opp4Group.destroyEach();
   ballGroup.destroyEach();
   }  
  
  if(sharkGroup.isTouching(ballGroup)){
   sharkGroup.destroyEach();
   ballGroup.destroyEach();
   }  
  
  if(whaleGroup.isTouching(ballGroup)){
   whaleGroup.destroyEach();
   ballGroup.destroyEach();
   }  
  
//debug
  
  
  
  opp1f();
  opp3f();
  opp4f();
  sharkf();
  whalef();
  drawSprites();
}

function opp1f() {
  if (frameCount % 200 == 0) {
    var opp1 = createSprite(900, random(100, 450), 20, 10);
    opp1.addImage(opp1Img);
    opp1.scale = 0.2;
    opp1.velocityX = -15;
    opp1.lifetime = 100;
    opp1Group.add(opp1);


  
  }
}

function opp3f() {
  if (frameCount % 250 == 0) {
    var opp3 = createSprite(900, random(100, 450), 20, 10);
    opp3.addImage(opp3Img);
    opp3.scale = 0.2;
    opp3.velocityX = -15;
    opp3.lifetime = 100;
    opp3Group.add(opp3);
  
  }
}

function opp4f() {
  if (frameCount % 140 == 0) {
    var opp4 = createSprite(900, random(100, 450), 20, 10);
    opp4.addImage(opp4Img);
    opp4.scale = 0.2;
    opp4.velocityX = -15;
    opp4.lifetime = 100;
  opp4Group.add(opp4);

  }
}

function sharkf() {
  if (frameCount % 225 == 0) {
    var shark = createSprite(900, random(100, 450), 20, 10);
    shark.addImage(sharkImg);
    shark.scale = 0.1;
    shark.velocityX = -15;
    shark.lifetime = 100;
  sharkGroup.add(shark);
  }
}

function whalef() {
  if (frameCount % 270 == 0) {
    var whale = createSprite(900, random(100, 450), 20, 10);
   whale.addImage(whaleImg);
    whale.scale = 0.8;
    whale.velocityX = -15;
    whale.lifetime = 100;
   whaleGroup.add(whale);
  }
}
