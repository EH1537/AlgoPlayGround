//return a bool if a number is a "happy" one
//basically, can a number like 13 be reduced via taking "1" and "3"
//1^2 + 3^2 = 10 
// 1^2 + 0^2 + 0^2 = 1 so 13 is happy!!
//for 19
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1 so 19 is happy!!

//the trick is to figure out how to break out of an infinite loop for an unhappy number, 
//I used a Set (any object will do as long as it has Constant look up time)

var isHappy = function (n) {
  const done = new Set();

  function helper(n) {

    const newN = n.toString().split('').reduce((acc, curr, index, array) => (acc += parseInt(curr) ** 2 ), 0)
    if (newN == 1) return true
    else if (done.has(newN)) return false
    else {
      done.add(newN)
      return helper(newN)
    }
  }
  return helper(n)
};
console.time("my solution")
console.log(isHappy(13)) //true
console.timeEnd("my solution") //265ms

