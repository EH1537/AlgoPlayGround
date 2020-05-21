
// var maxSubArray = function (nums) {
//   // Recursive divide and conquer approach
//   function recurseHelp(arr) {
//     // base case: 
//     if (arr.length === 1) {
//       return arr[0]
//     }
//     if (arr.length === 0) {
//       return -Infinity
//     }
//     // Declare length and midpoint
//     let length = arr.length - 1
//     let midPoint = Math.floor(length / 2)

//     // Divide by recursively going into both halves
//     let lMaxSub = recurseHelp(arr.slice(0, midPoint))
//     let rMaxSub = recurseHelp(arr.slice(midPoint + 1, length + 1))

//     // Stil need to look for contiguous array going across midpoint
//     // Max contiguous sums on each side go here
//     let lMaxContig = 0
//     let rMaxContig = 0

//     for (let i = midPoint - 1, currContig = 0; i >= 0; i--) {
//       currContig += arr[i]
//       lMaxContig = Math.max(lMaxContig, currContig)
//     }
//     for (let i = midPoint + 1, currContig = 0; i <= length; i++) {
//       currContig += arr[i]
//       rMaxContig = Math.max(rMaxContig, currContig)
//     }
//     // The maximum sum: contig subarr that traverses the midpoint compared to max from each side
//     return Math.max(lMaxContig + arr[midPoint] + rMaxContig, lMaxSub, rMaxSub);
//   }
//   return recurseHelp(nums);
// }


var maxSubArray = function(nums) {
    let sum = Math.max(...nums);
    let maxEnd = 0;
    
    for(let i = 0; i < nums.length; i++) {
        maxEnd = maxEnd + nums[i];
        
        if(maxEnd < 0) {
            maxEnd = 0;
        } else if(maxEnd > sum) {
            sum = maxEnd
        }
    }

    
    
    return sum;
};


console.log(maxSubArray([10, -11, 3, 4, 5]))