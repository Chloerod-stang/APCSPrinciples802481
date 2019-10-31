//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var score = [0]
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  snake.run();
  food.run();
  newGame();
  startNewRound();

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
  //check for "UP_ARROW" and "DOWN_ARROW"
  //adjust snake vel
}

function run(){
  update();
  render();
}

function gotFood(){
  snake.row===food.row
  snake.col===food.col
}
