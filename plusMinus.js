function plusMinus(arr) {
  let arrOut = [0,0,0]

  tester.forEach(number => {
    if (number > 0) {
      arrOut[0] += 1 
    }
    else if (number < 0) {
      arrOut[1] += 1
    }
    else {
      arrOut[2] += 1
    }
  })
  arrOut.forEach( (number, idx) => {
    arrOut[idx] /= arr.length
    console.log(arrOut[idx])
  })

  return arrOut

}
let tester = [-4,3,-9,0,4,1];
console.log(plusMinus(tester))