class Snake{
  constructor (x,y,w,h){
    this.loc=createVector(x,y);
    this.w = w;
    this.h = h;
  }

  run(){
    this.render();
  }

  render(){
    fill(10,100,150)
    rect(this.loc.x*this.w, this.loc.y*this.h, this.w, this.h)
  }
}//end of snake class
