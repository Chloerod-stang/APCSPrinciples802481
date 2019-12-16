//  Chloe Rodriguez Stangle
//  12-15-19
//  The setup function function is called once when your program begins
var ships;
var planet=[];
var x = 4; //number of balls
function setup() {
 var cnv = createCanvas(800, 800);
 cnv.position((windowWidth-width)/2, 30);
 background(5, 5, 5);
 fill(200, 30, 150);
 loadAll(x);
}

function loadAll(n){
 for(q=0;q<x;q++){
   planet[q] = new Planet(random(100), random(500), random(50), random(50), -1);
 }

  ships = new ship(random(800), random(800), random(-3, 3), random(-3, 3), q);
}


function draw() {

 background(5, 5, 5, 60);

 for(var i = 0; i < planet.length; i++){
   planet[i].run();
 }

  ships.run();

}

// function shipsDraw(){
//  //background(5,5,5)//get trails back but just a little bit
// if (this.id > -1){
//  for(i=0;i<x;i++){
// ships[i].run();
//  }
// }
// }
