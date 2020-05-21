/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
 For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.




/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (checker(x)) {
    return 0
  }
  let isNegative = false;
  if (x < 0) {
    isNegative = true
    x *= -1
  }
  let workArr = (x.toString()).split("")
  workArr.reverse()
  let output = workArr.join("")
  if (isNegative) {
    output *= -1
  }
  if (checker(output)) {
    return 0
  }
  return output
};

let checker = (num) => {
  return (num <= -1 * (2 ** 31) || num >= (2 ** 31) - 1)
}
console.log(2**31)
console.log(reverse(1534236469))