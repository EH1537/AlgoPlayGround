var lastStoneWeight = function (stones) {
  console.log(stones)
  if (stones.length === 1) {
    return stones[0]
  }
  if (stones.length === 1) {
    return 0
  }

  let max = 0
  let secondMax = 0
  let maxIdx = 0
  let secondIdx = 0

  for (let i = 0; i < stones.length; i++) {
    if (stones[i] >= max) {
      secondMax = max
      secondIdx = maxIdx
      max = stones[i]
      maxIdx = i
    }
    else {
      if (stones[i] >= secondMax) {
        secondMax = stones[i]
        secondIdx = i
      }
    }
  }

  if (maxIdx > secondIdx) {
    stones.splice(maxIdx, 1)
    stones.splice(secondIdx, 1)
  }
  else {
    stones.splice(secondIdx, 1)
    stones.splice(maxIdx, 1)
  }

  let difference = Math.abs(max - secondMax)

  if (difference) {
    stones.push(difference)
    return lastStoneWeight(stones)
  }
  else {
    return lastStoneWeight(stones)
  }
};





var lastStoneWeightSorty = function (stones) {
  console.log(stones)
  if (stones.length === 1) {
    return stones[0]
  }
  if (stones.length === 0) {
    return 0
  }

  stones.sort((a, b) => a - b);

  if (stones[stones.length - 1] === stones[stones.length - 2]) {
    stones.pop()
    stones.pop()
  } else {
    let difference = Math.abs(stones[stones.length - 1] - stones[stones.length - 2])
    console.log(stones)
    stones.pop();
    stones.pop();
    stones.push(difference)
  }

  return lastStoneWeight(stones)

};

console.log(lastStoneWeightSorty([3, 1]))