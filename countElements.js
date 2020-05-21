//count elemenets that have their plus one value represented in the array
//for example [1,2,1] returns 2, since there are two 1's
// [1, 1, 2, 2] returns 2, since there are two 1's
// [1, 2, 2] returns 1, since there is only one 1.
// solved with Hash Map
// 

var countElements = (arr) => { //hash with keys being the +1 number, each value is an array holding the values that equate
  let hash = {};
  let output = 0
  for (number of arr) {
    (!hash[number + 1]) ? hash[number + 1] = [number] : hash[number + 1].push(number)
  }
  for (number of arr) {
    if (hash[number]) {
      while (hash[number].length) { //pop off count off, prevents double counting like in [1, 2, 2]
        hash[number].pop();
        output += 1;
      }
    }
  }
  return output
};

const countElementsFriend = arr => { //a friends algorithm using a Set method
  const minus1 = new Set(arr.map(el => el - 1));
  return arr.reduce((acc, curr) => acc += minus1.has(curr), 0);
};





let tester1 = [1, 3, 2, 3, 5, 0, 4, 2, 3, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 3] //19
let tester2 = [1, 2, 2] //2
let tester3 = [1, 2, 1] //2

console.time("my solution")
console.log(countElements(tester1)) //209ms
console.timeEnd("my solution")

console.time("their solution")
console.log(countElementsFriend(tester1)) //118ms
console.timeEnd("their solution")