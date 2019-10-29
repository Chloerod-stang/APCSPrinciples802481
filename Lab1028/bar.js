Class bar {
  constructr (x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
run(){
  this.render();
  drawList();

  
}

render() {
  fill(this.clr)
  rect(this.x, this.y, this.w, this.h)
}
}
