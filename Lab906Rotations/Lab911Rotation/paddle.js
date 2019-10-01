class Paddle{
constructor (x, y, w, h) {
  this.loc = createVector(x, y, w, h)
}

run(){
  this.checkEdges();
  this.update();
  this.render();
}

checkEdges(){
  if (this.loc.x > width) {
    this.loc.x = 0
}
  if (this.loc.x < 0) {
    this.loc.x = width
}
  if (this.loc.y > height) {
    this.loc.y = 0
}
  if (this.loc.y < 0) {
    this.loc.y = height
}
}
Update(){


}

render(){
  fill(84, 46, 255)
  rect(this.loc.x, this.loc.y, this.loc.w, this. loc.h)
}
}
