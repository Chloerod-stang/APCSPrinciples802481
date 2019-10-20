//  Chloe Rodriguez Stangle
// 	10-15-19
//  This is a comment
//  The setup function function is called once when your program begins

var arr = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  loadArray(50);
  // swap();
}

// function swap(){
//   var temp = numList[a]
//   numList[a] = numList [b]
//   numList[b] = temp
// }

function loadArray(n){
  for(var i = 0; i <n; i++){
     arr[i] = Math.floor(random(1,100));

  }

}
function bubbleSort(){
  for(var i = arr.length - 1; i > 0; i--){
    for(var j = 0; j<1; j++){
      swap(arr, j, j+1)

    }

  }
}

function swap(arr, j, i){
  var temp = arr[j-1]
  arr[j-1] = arr [j]
  arr[j] = temp
}
