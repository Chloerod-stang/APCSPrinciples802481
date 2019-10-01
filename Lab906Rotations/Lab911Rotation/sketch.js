//  Chloe Rodriguez Stangle
// 	Date or version number

//  The setup function function is called once when your program begins
<<<<<<< HEAD
var ship =[]
var attractor;
var repeller;
var loadShip;
var runShip;
var mainShip;
=======
var ships =[]
var attractor;
var repeller;
// var mainBall;
// var paddle;
// var mainShips;
>>>>>>> 5fd817d1ce30ac982ccc9de3d5f32ac87b895845

function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(10,10,10);
  loadShip(10);
}

function draw() {
  background(10, 10, 10, 50)
  // mainShips.run();
  runShips();
  // runPaddle();
}

function loadShip(n) {
  fill(80, 46, 255)
  // mainShip = new Ship(width/2, height/2, random(-2,2), ramdom(-2,2))  // 40, 40
  // paddle = new Paddle(random(width), random(height), 20, 10)
  for(var i = 0; i<n; i++) {
    ships[i] = new Ship(random(0,200), random(0,200), random(-5,5), random(-5,5)) // random(0,TWO_PI)
  }
}

function runShips(){
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
  }
}
