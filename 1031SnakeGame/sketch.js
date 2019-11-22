//  Chloe Rodriguez Stangle
// 	11-8-19
//  This is a comment
//  The setup function function is called once when your program begins
var score = 0;
var snake =[];
var gameState = [];
var numCol;
var frameRate;
var isEaten
var runObjects

function setup() {
  var cnv = createCanvas(800, 800);

  snakeWidth = 25;
  numCol= width/snakeWidth;
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  frameRate(13);
  endSnake = "no";
  fill(200, 30, 150);
  snake = new Snake (400, 400, 10, 10, snakeWidth, color(random(255), random(255), random(255)));
  food = new Food(int(random(0,775)), int(random(0,775)), color(random(0,225)))
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 50, 100);
    if(food.isEaten()){
      food = new Food(Math.floor(random(20))*colWidth, Math.floor(random(10))*colWidth, colWidth);
      //add a segment
    snake.grow();
    }
  }

function frameRate(){
  if (gameState === 1){
    if(keyPressed === true){
      gameState = 3;
  if(endSnake === 'yes'){
    clear();
    background(0, 0, 0)
    text('YOU DIED')
    fill(255, 10, 40)
}
  }
  function runSnake(){
    snake.run();
  }
  function runFood(){
    food.run();
  }
    }
  }
  function newGame(){
    newGame();
  }


  //food.run();
  //newGame();
  //startNewRound();

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
