//  Paddle game Ball

//   chloe rocks
//   918
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

}//+++++++++++++++++++++++++++++++++++++++++++++++ End class
