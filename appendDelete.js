let s = "ashley"
let t = "ash"
let k = 2

let p = "hackerhappy"
let q = "hackerrank"
let r = 9

let x = "aba"
let y = "aba"
let z = 7


  function appendAndDelete(s, t, k) {
    //convert s to t within k appends or deletes
    let lenS = s.length
    let lenT = t.length
    let diffIdx = 0
    k -= 1
    for (let i = 0; i < lenS; i++) {
      if (s[i] !== t[i]) {
        diffIdx = i - 1
        break
      }
    }
    if (diffIdx == 0) {
      return "Yes"
    }

    if (diffIdx == lenT - 1) {
      return (k - diffIdx >= 0) ? "Yes" : "No"
    }

    return (k - diffIdx + (lenT - diffIdx) >= 0) ? "Yes" : "No"
  }

console.log(appendAndDelete(s, t, k)) //should be no
console.log(appendAndDelete(p, q, r)) //should be yes
console.log(appendAndDelete(x, y, z)) //should be yes
