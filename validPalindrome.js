var isPalindrome = function(s) {
  let arr = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '').split("")
  console.log(arr.join(""))
  let len = arr.length - 1
  for (let i = 0; i < len/2; i++) {
    if (arr[i] !== arr[len-i]) {
      return false
    }
  } 
  return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))