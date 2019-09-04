//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x, y;
function setup() {
  x = 100;
  y = 200;
  speedX = random (-3,5)
  speedY = random (-3, 5)
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  x = x + speedX
  y = y + speedY
fill(250,20,20)
ellipse (x, y, 50, 50)
}
