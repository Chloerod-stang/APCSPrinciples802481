//  Chloe Rodriguez Stangle
// 	Date or version number

//  The setup function function is called once when your program begins
var ships =[];
var attractor;
var repeller;
// var mainBall;
// var paddle;
// var mainShips;

function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(10,10,10);
  fill(100,100,100)
  loadShips(10);
  attractor = new Attractor(x,y,dx,dy)
  repeller = new Repeller(x, y, dx, dy)
}

function draw() {
  background(10, 10, 10, 50)
  // mainShips.run();
  runShips();
  runAttractor();
  runRepeller();



  // runPaddle();
}

function loadShips(n) {
  fill(80, 46, 255)
  // mainShip = new Ship(width/2, height/2, random(-2,2), ramdom(-2,2))  // 40, 40
  // paddle = new Paddle(random(width), random(height), 20, 10)
  for(var i = 0; i<10; i++) {
    ships[i] = new Ship(random(width), random(height), random(-5,5), random(-5,5)) // random(0,TWO_PI)
  }
}

function runShips(){
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
  }
}
