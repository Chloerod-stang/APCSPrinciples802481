
class Ship{

  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.clr = color(random(255), random(255), random(255));
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if (this.loc.x> width){
      this.vel.x = -this.vel.x
    }

    if (this.loc.x < 0){
      this.vel.x = -this.vel.x
    }

    if (this.loc.y > height){
      this.vel.y = -this.vel.y
    }

    if (this.loc.y<0){
      this.vel.y = -this.vel.y
    }
  }

  update(){
    this.vel.add(this.acc)
    this.loc.add(this.vel)
      // this.angle += TWO_PI * 0.01
  }

  render(){
    this.angle = this.vel.heading() + PI/2;
    push()
      translate(this.loc.x, this.loc.y);
//      rotate(this.angle);
      fill(this.clr);
      triangle(-5, 5, 5, 5, 0, -10)
    pop();
  }
}// ++++++++++++++++++++++++++++++++++++  end ship
