class Bar {
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
  fill(0, 100, 200)
  rect(this.x, this.y, this.w, this.h)
}
set(i){
  this.loc.x=i*25
}
}//end of bar class++++++++++++++++++++
