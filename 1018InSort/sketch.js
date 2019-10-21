//  Chloe Rodriguez Stangle
// 	10-15-19
//  This is a comment
//  The setup function function is called once when your program begins

var arr = [];
var compares = 0;
var swaps = 0;


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth - width) / 2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  loadArray(100, 1, 100);
  insertionSort();
}

// n numbers between 1 and max
function loadArray(howMany, minValue, maxValue) {
  for (var i = 1; i <= howMany; i++) {
    arr[i] = Math.floor(random(minValue, maxValue));
  }
}

function insertionSort() {
  console.log("BEFORE=", arr)
  for (var i = 1; i < arr.length; i++) {
    for (var j = i; j > 0; j--) {

      // swapping code
      compares = compares+1;
      if (arr[j] < arr[j - 1]) {
        swaps = swaps+1;
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }

    }
  }
  console.log("AFTER=" + arr);
  console.log("compares" + compares);
  console.log("swaps" + swaps);
}
