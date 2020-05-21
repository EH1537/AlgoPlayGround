// Input: s = "abc", shift = [[0,1],[1,2]]
// Output: "cab"
// Explanation: 
// [0,1] means shift to left by 1. "abc" -> "bca"
// [1,2] means shift to right by 2. "bca" -> "cab"

// 1 <= s.length <= 100
// s only contains lower case English letters.
// 1 <= shift.length <= 100
// shift[i].length == 2
// 0 <= shift[i][0] <= 1
// 0 <= shift[i][1] <= 100

var stringShift = function(s, shift) {
    let totalShift = 0 // negative is "left"
    let arr = s.split("")
    shift.forEach(directions => {
      if (directions[0]) {
        totalShift+=directions[1]
      }
      else {
        totalShift-=directions[1]
      }
    });
    console.log(totalShift)
    if (!totalShift) {
      return s
    }
    else if (totalShift > 0) {
      while(totalShift) {
        arr.unshift(arr.pop())
        totalShift--
      }
      return arr.join("")
    }
    else if (totalShift < 0) {
      while(totalShift) {
        arr.push(arr.shift())
        totalShift++
      }
      return arr.join("")
    }
};

tester = [[0,7],[1,7],[1,0],[1,3],[0,3],[0,6],[1,2]]
testers = "wpdhhcj"

console.log(stringShift(testers, tester))