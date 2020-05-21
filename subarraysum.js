  var subarraySum = function (nums, k) {
  let count = 0
  let sum = 0;
  let hashMap = new Map();
  let target;
  hashMap.set(0, 1)

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    target = sum - k;
    if (hashMap.has(target)) {
      count += hashMap.get(target);
    }
    if (!hashMap.has(sum)) {
      hashMap.set(sum, 0);
    }
    hashMap.set(sum, hashMap.get(sum) + 1);
    console.log(hashMap)
  }

  return count

};

console.log(subarraySum([1,2,1],3   ))