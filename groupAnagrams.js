//find you anagrams so that
//groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
//returns [["eat", "tea", "ate"],["tan", nat"], ["bat"]] 
//order does not matter

var groupAnagrams = (strs) => {
  let hash = {};

  for (let word of strs) {
    let chars = word.split('').sort()

    if (hash[chars]) {
      hash[chars].push(word)
    }
    else {
      hash[chars] = [word]
    }
  }
  return Object.values(hash);
}

console.time("my solution")
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.timeEnd("my solution")   //.260ms


//just a little test to see how colissions would work with a charCode methodology.
// var groupAnagrams = function(strs) {
//   let charVals = []
//   let output = {}
//   for (let word of strs) {
//     let stringVal = 0;
//     for (let i = 0; i < word.length; i++) {
//       stringVal += word.charCodeAt(i)
//     }
//     charVals.push(stringVal)
//   }

//   for (let i = 0; i < charVals.length; i++) {
//     if (!output[charVals[[i]]]) {
//       output[charVals[[i]]] = []
//       output[charVals[[i]]].push(strs[i])
//     }
//     else {
//       output[charVals[[i]]].push(strs[i])
//     }
//   }

//   return Object.values(output);
// };