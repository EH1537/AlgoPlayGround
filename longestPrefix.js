

/**Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
 * 
 * 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return ""
  }

  let output = []
  let addIn = true

  for (let i = 0; i < strs[0].length; i++) {
    let letter = strs[0][i]
    for (let k = 0; k < strs.length; k++) {
      if (letter !== strs[k][i]) {
        addIn = false
        break
      }
    }
    if (!addIn) {
      break
    }
    output.push(letter)
  }
  return output.join("")
};

console.log(longestCommonPrefix(["abc", "flow", "flight"]))