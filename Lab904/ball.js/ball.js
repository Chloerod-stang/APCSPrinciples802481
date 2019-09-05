

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
    this.vel(dx) = -1*this.vel(dx)
    if(this.loc(y)
