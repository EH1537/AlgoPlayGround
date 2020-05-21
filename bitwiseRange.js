// //Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

// Example 1:

// Input: [5,7]
// Output: 4
// Example 2:

// Input: [0,1]
// Output: 0

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

var rangeBitwiseAnd = function (m, n) {
  let Zeroes = 0;
  console.log(dec2bin("m",m))
  console.log(dec2bin("n",n))
  while (m != n) {
    m >>= 1;
    n >>= 1;
    console.log(dec2bin("m",m))
    console.log(dec2bin("n",n))
    console.log(Zeroes)
    Zeroes++;
  }
  console.log(m<<Zeroes)
  return m << Zeroes;
};


console.log(rangeBitwiseAnd(4, 7))
