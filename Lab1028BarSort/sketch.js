//  Chloe Rodriguez Stangle
// 	10-30
//  This is a comment
//  The setup function function is called once when your program begins
var bars = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBars(20);
  //frameRate()
  for(var i=0; i<bars.length; i++){
    bars[i].run();
  }
}

//  The draw function is called @ 30 fps
function draw() {
bubbleSort()
drawList(bars)
}
function bubbleSort(){
  for (var i=0; i<bars.length-1; i++){
    if(bars[j].h>bars[j+1].h){
      swap(bars,j,j+1);
    }
  }
}
function loadBars(){
  for(var x = 0; x<32; x++){
    var w=int(random(1,32));
    bars[x] =new Bar(25'x, 800-(25'w),25,(25'w));
                                          }
  }
  
}
