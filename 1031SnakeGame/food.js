class Food{
  constructor(x,y,w, id){
    this.loc = createVector(x,y);
    this.w=w;
    this.clr=color(0,255,0);
    this.id=id;
  }
  run(){
    this.render();
    this.update();

  }

  render(){
    fill(this.clr);
    react(this.loc.x*this.w,this.loc.y*this.w, this.w, this.w)
  }
  update(){
    if(snake.segments[0].x === this.loc.x &&
       
  }
}
