/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  let uniCodeS = 0
  let uniCodeT = 0
  for (let i = 0; i < s.length; i++) {
    uniCodeS += s.charCodeAt(i);
    uniCodeT += t.charCodeAt(i);
  }
  if (uniCodeS !== uniCodeT) {
    return false
  }

  let storageS = s.split("").sort().join();
  let storageT = t.split("").sort().join();

  if (storageS !== storageT) {
    return false
  }

  return true
};

console.log(isAnagram("help", "pleh"))