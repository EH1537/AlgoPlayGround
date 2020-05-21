//get an array of 1s and 0s, find the longest contiguous array that has equal ones and zeros

var findMaxLength = function (nums) {
  if (!nums.length) return 0
  if (nums.length == 1) return 0
  console.log(nums.length)
  let holdArr = []
  nums.forEach(element => {
    if (element) {
      holdArr.push(element)
    }
    else {
      holdArr.push(element - 1)
    }
  });

  let sum = holdArr.reduce((acc, curr) => acc + curr)

  let i = 0
  let j = holdArr.length - 1
  console.log(sum)
  console.log(holdArr)

  if (!sum) return nums.length

  while (i <= j && sum) {
    console.log(i, j)
    console.log(sum)
    if (sum > 0) {
      if (sum - holdArr[i] < sum) {
        sum -= holdArr[i]
        i++
      }
      else {
        sum -= holdArr[j]
        j--
      }
    }
    else if (sum < 0) {
      if (sum - holdArr[i] > sum) {
        sum -= holdArr[i]
        i++
      }
      else {
        sum -= holdArr[j]
        j--
      }
    }
    console.log(i, j)
  }
  return nums.slice(i, j + 1).length
};

console.log(findMaxLength([0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1]))



var findMaxLength = function (nums) {
  let hash = { 0: -1 };
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      count--;
    }
    else {
      count++;
    }


    if (hash[count] != null) {
      max = Math.max(max, i - hash[count])
    }
    else {
      hash[count] = i
    }
  }
  return max;
};