

var balls =[]
function setup(){
  var.cnv = createcanvas(800,800);
  cnv.position(windowWidth-width)/2,30;
  backround(0,0,0);
  loadBalls(10);
}

function draw() {
  runBalls();
}

function loadBalls(n){
  for(var i = 0; i<n; i++)
  balls[i] = new Ball (random (width), random (height))
}
}
function runBalls(n){
  for(var i = 0; i<balls.length; i++){
  balls[i].run();  
  }
}
class Ball{
  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.clr = color (random(255), random(255), random(255));
}
run(){
  this.checkEdges();
  this.update();
  this.render();
}
run(){
  this.checkEdges();
  this.update();
  this.render();
}
checkEdges(){
  this.vel(dx)=-1*this.vel(dx)
  this.vel(dx) = -1*this.vel(dx);
  this.vel(dy) = -1*this.vel(dy);
  this.vel(dy)=this.vel(dy)
}
  update(){
    this.loc.x=this.loc.x+this.dx;
    this.loc.y=this.loc.y+this.vel.dy;
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y)
  }
