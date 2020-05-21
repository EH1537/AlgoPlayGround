/*

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

//cheeky two liner using a set
var containsDuplicate = function(nums) {
  let storage = new Set(nums)
  
  return (storage.size !== nums.length)
};

//brute force would be to use an object to check if any particular one is greater than 1 after iterating thru array (time is O(n))
//another method is to sort it, then iterate thru, seeing if next element matches the first, this would be O(nlog(n)) (sorting is Log(n))



console.log(containsDuplicate([5,3,2,1,4]))