//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var score = 0;
var snake =[];


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  snake=new Snake(10,15,15,15);
  frameRate(5);
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 50, 100);
  snake.run();
  for(var i - 0; i< snake.body.length; i++)

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
