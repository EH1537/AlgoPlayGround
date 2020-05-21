/*
Round up to nearest multiple of 5 when the difference is less than three (8->10 or 3->5)
Failing grades are less than 40 dont round those

Sample Input 0

4
73
67
38
33
Sample Output 0

75
67
40
33
print grades on new line
*/



function gradingStudents(grades) {
  // Write your code here, takes in an int array, returns int array
  const rounder = (grd) => {
    if (grd < 38) {
      return grd
    }

    else if ((grd % 5 - 5) >= (-2)) {
      return (grd - (grd % 5 - 5))
    }
    else {
      return grd
    }
  }
  return grades.map((grade) => rounder(grade))
}

let tester = [4, 73, 67, 38, 33]
console.log(gradingStudents(tester))


let dict = ["heater", "cold", "clod", "reheat", "docl"]
let q = ["codl", "heater", "abcd"]



function stringAnagram(dictionary, query) {
  // Write your code here
  function charCodeGet(string) {
    return string.split('').reduce((acc, curr) => {
      return acc += curr.charCodeAt(0)
    }, 0)
  }

  let output = []
  query.forEach(qword => {
    let count = 0

    for (let i = 0; i < dictionary.length; i++) {
      if (qword === dictionary[i]) {
        console.log("exact match")
        count++
        continue
      }
      if (qword.length == dictionary[i].length) {
        if (charCodeGet(qword) == charCodeGet(dictionary[i])) {
          if (qword.split('').sort().join('') == dictionary[i].split('').sort().join('')) {
            count++
          }
        }
      }
    }
    output.push(count)
  })
  return output
}

console.log(stringAnagram(dict, q))