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
 checkEdges(){
   if (this.loc.x > width) {
     this.loc.x = 0
   }
   
   if (this.loc.x = 0) {
     this.loc.x = width
   }
   
   if (this.loc.y > height) {
     this.loc.y = 0
   }
   
   if (this.loc.y < 0) {
     this.loc.y = height
   }
 }
   
   
  
  render(){
    fill(255,0,0);
    ellipse(this.x, this.y, 50, 50);

  }


}//++++++++++++++++++++++++++++++++++++++ end ball class
