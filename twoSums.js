// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

let twoSum = (arr, target) => {
  let store = {};

  for (let i = 0; i < arr.length; i++) {
    store[target-arr[i]] = [arr[i], i]
  }
  console.log(store)
  
  for (let i = 0; i < arr.length; i++) {
    if (store[arr[i]]) {
      return ([store[arr[i]][1], i]).sort()
    }
  }

}

console.log(twoSum([2, 7, 11, 15], 9))