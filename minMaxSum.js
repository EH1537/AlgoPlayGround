function miniMaxSum(arr) {
  //modifying an input is a no no, but whatever
  let output = []
  arr.sort()
  let summed = 0
  for (let i = 0; i < arr.length - 1; i++) {
    summed += arr[i]
  }
  output.push(summed)
  summed = 0
  for (let i = 1; i < arr.length; i++) {
    summed += arr[i]
  }

  output.push(summed)
  return output
}

tester = [1, 2, 3, 4, 5]
// console.log(miniMaxSum(tester))


// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
  let max = Math.max(...ar)
  let i = 0
  let j = ar.length - 1
  let counter = 0
  while (j >= i) {

    console.log(counter)
    if (ar[i] == max) {
      counter++
    }
    if (ar[j] == max && i !== j) {
      counter++
    }
    i++
    j--
  }
  return counter;
}

aTester = [2, 2, 4, 4, 4, 4]
// console.log(birthdayCakeCandles(aTester))


/*Sample Input 0

07:05:45PM
Sample Output 0

19:05:45
*/
function timeConversion(s) {
  /*
   * Write your code here.
   */
  let halfDay = s.slice(-2)
  let hour = s.slice(0, 2)
  let minSec = s.slice(2, 8)
  console.log(halfDay, hour, minSec)

  switch (halfDay) {
    case "AM":
      if (hour == "12") {
        return "00" + minSec
      }
      return hour + minSec
    case "PM":
      if (hour == "12") {
        return "12" + minSec
      }
      return (12 + parseInt(hour)).toString() + minSec
  }
}

console.log(timeConversion("12:05:45AM"))