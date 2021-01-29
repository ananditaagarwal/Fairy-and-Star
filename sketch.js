var fairyImg, starImg, backgroundImg;
var fairy, star;

function preload() {
  backgroundImg = loadImage("images/starnight.png"); 
  fairyImg = loadImage("images/fairy1.png");
  starImg = loadImage("images/star.png");  
}

function setup() {
  createCanvas(800, 800);
  
  fairy = createSprite(100, 700, 10, 10);
  fairy.addImage(fairyImg);
  fairy.scale = 0.15;

  star = createSprite(725, 40, 10, 10);
  star.addImage(starImg);
  star.scale = 0.2;
}


function draw() {
  background(backgroundImg);

  imageMode(CENTER);
  if(keyDown("down_arrow")) {
    star.velocityY = 5;
  }
  if(keyDown("left_arrow")) {
    fairy.x = fairy.position.x - 5;
  }
  if(keyDown("right_arrow")) {
    fairy.x = fairy.position.x + 5;
  }
  if(fairy.isTouching(star)) {
    star.velocityY = 0;
  }

  drawSprites();
}
