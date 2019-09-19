//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var b1,b2;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  b1 = new Ball(100,300,-3, 4);
  b2 = new Ball(200, 150, -1, 1)


}

//  The draw function is called @ 30 fps
function draw() {
  b1.update();
  b2.update();
  b1.render();
  b2.render();
}
