class Snake{
  constructor (x,y,w,h,size){
    this.segments = []
    this.loc=createVector(0,0);
    this.vel = createVector(1,0);
    this.w = w;
    this.h = h;
    this.size=size
    this.clr = color(random(255), random(255), random(255));
    for(var i=0; i<size; i++){
      this.segments[i] = createVector(x*i, y);
    }
  }

  run(){
    this.update();
    this.render();
    this.checkEdges();
  }

//  render(){
//    fill(200,0,150)
  //  rect(this.loc.x*this.w, this.loc.y*this.h, this.w, this.h)

  update(){
    for (var i = this.segments[i].length-1; i>0; i--){

      if (i===0){ //the zero segment needs to follow head
      } else {
          this.segments[i].x = this.segments[i-1].x
          this.segments[i].y = this.segments[i-1].y
        }
      }
    this.loc.add(this.vel)
    //this.loc.x=this.loc.x+this.vel.x;
    //this.loc.y=this.loc.y+this.vel.y;
  }

grow(){
  segments.push(createVector(0,0));
}

render(){
  fill(this.clr);
  for(var i = 0; i< this.segments; i++){
    rect(20*this.segments[i].x, 20*this.segments[i].y, this.w, this.h);
  }
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
