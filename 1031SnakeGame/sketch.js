//  Chloe Rodriguez Stangle
// 	11-8-19
//  This is a comment
//  The setup function function is called once when your program begins
var score = 0;
var snake =[];
var gameState = [];
var numCol;
var snakeWidth;

function setup() {
  var cnv = createCanvas(800, 800);

  snakeWidth = 25;
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  frameRate(13;
  endSnake = "no");
  cle
  fill(200, 30, 150);
  snake=new Snake(width/2, height/2, 0, 0, snakeWidth, color(random(255), random(255), random(255));
  food = new Food(int(random0,775)), int(random(0,775)), color(random(0,225))
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 50, 100);
  snake.run();
  frameRate(15);
  if (gameState === 1){
    if(keyPressed === true){
      gameState = 3;
    }
  }
  //food.run();
  //newGame();
  //startNewRound();

}

function checkTangled(){
  return snake.tangled()
}

function startNewRound(){
  update(20); //update score by 20
  //make snake grow by one segment
  //move food to a random place

}

function newGame(){
  score = 0
//create snake objects
//create food objects
}

function keyPressed(){
  if (keyCode === LEFT_ARROW) {
    snake.vel.x= -1;
    snake.vel.y= 0;

  } else if (keyCode === RIGHT_ARROW) {
    snake.vel.x=1;
    snake.vel.y=0;
  }

  if (keyCode === DOWN_ARROW) {
    snake.vel.x= 0;
    snake.vel.y= 1;

  } else if (keyCode === UP_ARROW) {
    snake.vel.x= 0;
    snake.vel.y= -1;
  }

  //adjust snake vel
}

function run(){
  update();
  render();
  checkEdges();
}

function gotFood(){
  snake.row===food.row
  snake.col===food.col
}
