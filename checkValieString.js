// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.

var checkValidString = function (s) {
  let balanceFromLeft = 0
  let balanceFromRight = 0

  for (let i = 0; i < s.length; i++) {
    if ((s[i] == '(') || (s[i] == '*'))
      balanceFromLeft++;
    else
      balanceFromLeft--;
    if (balanceFromLeft < 0) {
      return false
    }
  }


  if (!balanceFromLeft) {
    return true
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if ((s[i] == ')') || (s[i] == '*'))
      balanceFromRight++;
    else
      balanceFromRight--;
    if (balanceFromRight < 0) {
      return false
    }
  }

  return true
}


console.log(checkValidString(")(")) 