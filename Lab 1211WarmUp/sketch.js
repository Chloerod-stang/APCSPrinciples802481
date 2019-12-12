//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var nums = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadNumbers(random(1,100));
  findAvg();


}

//  The draw function is called @ 30 fps
function draw() {
  for(var i = 0; i < 10; i++);
}

function mySort(){
  for (var i = 1; i < arr.length; i++) {
    for (var j = i; j > 0; j--) {
      compares = compares+1;
      if (arr[j] < arr[j - 1]) {
        swaps = swaps+1;
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
}
function logNumbers(){
  nums = []
  for (var = 0; i < 11; i++){
    nums[i] = random(1,100)
  }
}

function findAvg(){

  console.log;
}

function findMedian(){

  console.log;
}
