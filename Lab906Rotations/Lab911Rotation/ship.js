//  Chloe Rodriguez Stangle
// 	Date or version number

//  The setup function function is called once when your program begins
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
    this.vel = -1*this.vel;
    // this.vel(dx) = -1*this.vel(dx);
    this.vel = -1*this.vel;
    // this.vel(dy)=this.vel(dy)
  }

  update(){
      this.loc.add(this.vel);
      // this.vel.add(this.acc);
      // this.angle += TWO_PI * 0.01
  }

  render(){
    push()
    translate(this.loc)
    rotate(this.angle)
    fill(this.clr);
    triangle(-8, 0, 8, 0, 0, 15)
    pop()
  }
}

}// ++++++++++++++++++++++++++++++++++++  end ship
