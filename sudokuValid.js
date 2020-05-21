var isValidSudoku = function (board) {
  let valid = true;

  const validate = digits => {
    digits = digits.filter(val => val !== '.').map(n => Number(n)).sort((a, b) => a - b);

    for (let i = 0; i < digits.length - 1; i++) {
      if (digits[i] === digits[i + 1]) {
        valid = false;
      }
    }

  }

  //  rows
  for (let row of board) {
    validate(row);
    if (!valid) {
      return false
    }
  }


  // collumns
  for (let col = 0; col < board[0].length; col++) {
    let digits = [];

    for (let row = 0; row < board.length; row++) {
      digits.push(board[row][col]);
    }

    validate(digits);
    if (!valid) {
      return false
    }
  }


  for (let r = 0; r < board.length; r += 3) {
    for (let c = 0; c < board[0].length; c += 3) {
      let digits = [];
      for (let k = 0; k < 3; k++) {
        for (let n = 0; n < 3; n++) {
          digits.push(board[r + k][c + n]);
        }
      }

      validate(digits);
      if (!valid) {
        return false
      }
    }
  }

  return valid;
};

let tester = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

console.log(isValidSudoku(tester))