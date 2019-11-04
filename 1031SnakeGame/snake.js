class Snake{
  constructor (x,y,w,h){
    this.loc=createVector(x,y);
    this.vel = createVector(1,0);
    this.w = w;
    this.h = h;
  }

  run(){
    this.update();
    this.render();
    this.checkEdges();
  }

  render(){
    fill(200,0,150)
    rect(this.loc.x*this.w, this.loc.y*this.h, this.w, this.h)
  }
  update(){
    this.loc.x=this.loc.x+this.vel.x;
    this.loc.y=this.loc.y+this.vel.y;
  }
  checkEdges(){
    if(this.loc.x > 800  &&
      this.loc.x< 0  &&
      this.loc.y> 800  &&
      this.loc.y< 0){
        gameState = 3
      }
  }
}//end of snake class
