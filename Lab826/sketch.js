//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var b1, b2;

function setup() {

var cmv = createCanvas(800, 800);
cmv.position((windowWidth-width)/2, 30);
background(20,20,20);//
b1 = new Ball(random(width), random(height), random(-5.5), random(-5,5), random(-5,5));
b2 = new Ball(random(width), random(height), random(-5.5), random(-5,5), random(-5,5));
b3 = new Ball(random(width), random(height), random(-5.5), random(-5,5), random(-5,5));
}



function draw(){

b1.run();
b2.run()
b3.run();
}
// var Balls = {}
// function setup() {
//   loadBalls (20)
//   var cnv = createCanvas(800, 800);
//   cnv.position((windowWidth-width)/2, 30);
//   background(5, 5, 5);
//   fill(200, 30, 150);
//
//
// }
//
// //  The draw function is called @ 30 fps
// function draw() {
// runBalls ()
// }
//
// function loadBalls(n){
//   for(var i = 0; i< n; i++){
//     balls[i].run();
//   }
// }
