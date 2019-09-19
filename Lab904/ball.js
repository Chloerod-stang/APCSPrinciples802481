class Ball {
  constructor(x,y,dx,dy){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;

  }
update(){
  this.x=this.x+this.dx;
  this.y=this.y+this.dy;
  



}
  render(){
    fill(255,0,0);
    ellipse(this.x, this.y, 50, 50);

  }


}//++++++++++++++++++++++++++++++++++++++ end ball class
