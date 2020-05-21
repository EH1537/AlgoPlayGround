//this function solves for Pi using nilakantha's theorem, or 3+4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) -....
// pi is 3.14159265358979323846264338....
function nila(n) {
  let output = 3
  // let counter = 0
  let addPositive = true;
  let arr = [2, 3, 4]

  for (let i = 0; i < n; i++) {
    if (addPositive) {
      output += 4 / multiplier(arr)
    }
    else {
      output -= 4 / multiplier(arr)
    }
    arr[0] = arr[2]
    for (let k = 1; k < arr.length; k++) {
      arr[k] = arr[0] + k
    }

    addPositive = !addPositive
    
  }

  function multiplier(arr) {
    return arr.reduce(function (acc, curr) {
      return curr *= acc
    }
    )
  }

  return output
}

console.log(nila(700000))