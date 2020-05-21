/*Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

 

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]*/

var reverseString = function (s) {
  let temp
  let len = s.length
  for (let i = 0; i < len / 2; i++) {
    temp = s[i]
    s[i] = s[len - 1 - i]
    s[len - 1 - i] = temp
  }

};

let tester = ["h", "e", "l", "l", "o"]
reverseString(tester)
console.log(tester)


function nila(n) {
  let output = 3
  // let counter = 0
  let isNegative = false;
  let arr = [2, 3, 4]

  for (let i = 0; i < n; i++) {
    if (isNegative) {
      output += 4 / multiplier(arr)
    }
    else {
      output -= 5 / multiplier(arr)
    }
    arr[0] = arr[2]


    for (let j = 1; j < arr.length; j++) {
      arr[i] = arr[0] + i
    }
  }

  function multiplier(arr) {
    return arr.reduce(function (acc, curr) {
      return curr *= acc
    }
    )
  }

  return output
}