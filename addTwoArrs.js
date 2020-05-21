//Adding two arrays as if 1,200 = [0,0,2,1] and 500 = [0,0,5]
//takes into account carrying the one and adding another place like 999 + 1 = 1,000

function addTwoArrs(arr1, arr2) {
  let summedArr = [];
  let summedInt;
  let carry = 0;

  innArr1 = (arr1.length > arr2.length) ? arr1 : arr2;
  innArr2 = (arr1.length < arr2.length) ? arr1 : arr2;

  for (let i = 0; i < innArr1.length; i++) {
    if (i >= innArr2.length) {
      summedInt = innArr1[i] + carry
      if (summedInt >= 10) {
        summedInt -= 10;
        carry = 1
        summedArr.push(summedInt)
      }
      else {
        summedArr.push(summedInt)
        carry = 0;
      }
    }
    else {
      summedInt = innArr1[i] + innArr2[i] + carry;
      if (summedInt >= 10) {
        summedInt -= 10;
        carry = 1
        summedArr.push(summedInt)
      }
      else {
        summedArr.push(summedInt)
        carry = 0;
      }
    }
  }

  if (carry === 1) {
    summedArr.push(1)
  }
  return summedArr;
}

let tester1 = [9,9,9]
let tester2 = [1]
console.log(addTwoArrs(tester1, tester2))