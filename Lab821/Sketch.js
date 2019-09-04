

//  Your Name
// 	Date or version number
var b1, b2;//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cmv = createCanvas(800, 800);
  cmv.position((windowWidth-width)/2, 30);
  background(20,20,20);//
  b1 = new Ball(random(width), random(height), random(-5.5), random(-5,5), random(-5,5));
  b2 = new Ball(random(width), random(height), random(-5.5), random(-5,5), random(-5,5));
  b3 = new Ball(random(width), random(height), random(-5.5), random(-5,5), random(-5,5));
  }



//  The draw function is called @ 30 fps
function draw() {
}
