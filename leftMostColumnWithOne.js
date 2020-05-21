/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function (binaryMatrix) {
  // let dimen = BinaryMatrix.dimensions()//returns our dimension [n,m] n row, m columns
  let dimen = [2, 2]
  let leftMost = Infinity;
  //this matrix as a tester
  mat = [[0, 0], [1, 1]]
  function leftMostSearch(matrix) {
    console.log(mat)
    let x = dimen[0] - 1
    let y = 0
    while (x > -1) {
      // if (binaryMatrix.get(x, y)) {
      if (matrix[x][y]) {
        leftMost = x;
        x--
      }
      else if (y + 1 >= dimen[1]) {
        y = 0;
        x--
      }
      else {
        y++
      }
    }
    return leftMost
  }
  console.log(leftMostSearch(mat))
};
leftMostColumnWithOne("dude")
var leftMostColumnWithOne = binaryMatrix => {
  let [rows, columns] = binaryMatrix.dimensions();
  let rowHasOne = [];
  let leftMostOne = Infinity;

  // Check each row for a 1, by checking the last col in each row
  for (let row = 0; row < rows; row++) {
    let lastVal = binaryMatrix.get(row, columns - 1);
    if (lastVal === 1) rowHasOne.push(row);
  }

  for (let i = 0; i < rowHasOne.length; i++) {
    let left = 0, right = columns - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let val = binaryMatrix.get(rowHasOne[i], mid);
      if (val === 1) {
        // Compare index of 1 to current leftMostOne
        if (mid < leftMostOne) leftMostOne = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return leftMostOne === Infinity ? -1 : leftMostOne;
}

