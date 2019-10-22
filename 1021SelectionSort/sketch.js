//  Chloe Rodriguez Stangle
// 	10-21-19
//  This is a comment
//  The setup function function is called once when your program begins

var arr = [];
var compares = 0;
var swaps = 0;
var smallerNumber

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth - width) / 2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  loadArray(10, 1, 100);
  selectionSort();
}

// n numbers between 1 and max
function loadArray(howMany, minValue, maxValue) {
  for (var i = 1; i <= howMany; i++) {
    arr[i] = Math.floor(random(minValue, maxValue));
  }
  console.log(arr);
}

function selectionSort() {
  console.log("BEFORE=", arr)
  for (var i = 0; i < arr.length -1; i++) {
    var index = i;
    for (var j = i +1; j < arr.length; j++) {
      if(arr[j] < arr[index]){
        index = j;
      }
    }
      // swapping code
      var smallerNumber = arr[index];
         arr[index] = arr[i];
         arr[i] = smallerNumber;
         }
      }

  console.log("AFTER=" + arr);
  console.log("compares" + compares);
  console.log("swaps" + swaps);
