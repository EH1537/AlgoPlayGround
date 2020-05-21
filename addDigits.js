var addDigits = function (num) {
  let sum;

  while (Math.floor(num / 10) !== 0) {
    console.log(sum)
    sum = 0;
    while (num > 0) {
      sum = Math.floor(sum + (num % 10))
      num = Math.floor(num / 10)
    }
    num = sum;
  }
  return num;
};

console.log(addDigits(55));
function arrSort(arr) {
  var swapp;
  var n = arr.length - 1;
  do {
    swapp = false;
    for (var i = 0; i < n; i++) {
      if (arr[i][1] < arr[i + 1][1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapp = true;
      }
      if (arr[i][1] == arr[i + 1][1]) {
        swapp = true;
        if ([arr[i][0], arr[i + 1][0]].sort()[1] == arr[i][0]) {
          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    n--;
  } while (swapp);
  return arr;
}

let blargh = arrSort([["apple", 3], ["orange", 3], ["pear", 3], ["grape", 3]])
console.log(blargh);