var backspaceCompare = function(S, T) {
  function deleter(string) {
    for (let i =0; i<string.length; i++) {
      if (string[i]==="#" && i == 0) {
        string = string.slice(1,string.length)
        i -= 1;
      }
      else if (string[i]==="#") {
        i = i-1;

        string = string.slice(0,i) + (string.slice((i+2)))
        i = i-1;
      }
    }
    return string
  }
  deleter(T)
  return (deleter(S) === deleter(T))
};

console.log(backspaceCompare("a#c", "b"))

