/*Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?*/

//brute force, double loop or O(n^2)
var intersect = function (nums1, nums2) {
  let smallArr = nums2
  let bigArr = nums1
  let output = []

  if (nums1.length <= nums2.length) {
    smallArr = nums1
    bigArr = nums2
  }
  console.log(smallArr)
  for (const num of smallArr) {       
    let idx = bigArr.indexOf(num)       
    console.log(~-1)        
    if (idx !== -1) output.push(bigArr.splice(idx, 1)) 
  }
  return output
}

console.log(intersect([1,2,2,1], [2]))

