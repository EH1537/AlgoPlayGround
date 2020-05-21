function firstUniqChar(s) {
  map = new Map()
  for (let item of s) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  for (let [key, value] of map.entries()) {
    if (value === 1) {
      return s.indexOf(key);
    }
  }
  return -1
}

console.log(firstUniqChar("leetcode"))