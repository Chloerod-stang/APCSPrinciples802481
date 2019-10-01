//  Chloe Rodriguez Stangle
// 	Date or version number

//  The setup function function is called once when your program begins
class Ship{

  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,.1);
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
    push()
    translate(this.loc)
    rotate(this.angle)
    fill(this.clr);
    triangle(5, 4, 8, 3)
    pop()
  }
}// ++++++++++++++++++++++++++++++++++++  end ship
