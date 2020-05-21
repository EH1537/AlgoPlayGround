function diagonalDifference(arr) {
  // Write your code here
  let output = []
  let sum = 0
  let j = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i]
  }
  output.push(sum)
  sum = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i][j])
    sum += arr[i][j]
    j++
  }
  output.push(sum)
  return Math.abs(output[0] - output[1])
}

tester = [[11, 2, 4],
[4, 5, 6],
[10, 8, -12]]

console.log(diagonalDifference(tester))