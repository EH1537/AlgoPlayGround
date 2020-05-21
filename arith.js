class Spreadsheet {
  constructor(spreadArray) {
    this.storage = spreadArray
    this.translator = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      ///continue till you get to Z
    }
    this.operators = ["*", "/", "+", "-"]
  }



  cell(row, col) {
    let rowABC = this.translator[row]
    return this.storage[rowABC][col - 1]
  }


  arith(x, y, operator) {
    switch (operator) {
      case "+":
        return x + y
      case "-":
        return x - y
      case "/":
        return x / y
      case "*":
        return x * y
      default:
        return
    }
  }


  getValue(row, col) {
    let output = this.cell(row, col)
    if (isNaN(output)) {
      let operatingArr = output.split(" ")
      for (let i = 0; i < operatingArr.length; i++) {
        if (!this.operators.includes(operatingArr[i])) {
          //how to deal with this recursively??
          operatingArr[i] = this.cell(operatingArr[i][0], operatingArr[i][1])
        }
        //dont worry about order of operations
      }
      output = 0
      for (let k = 0; k < operatingArr.length; k++) {
        if (this.operators.includes(operatingArr[k])) {
          output += this.arith(operatingArr[k - 1], operatingArr[k + 1], operatingArr[k])
          operatingArr[k+1] = output
        }
      }
      return output
    }
    else {
      return parseFloat(output)
    }
  }
}



const spreadsheet = new Spreadsheet([
  [9, 'A1 + C2 / D3', 5, 1],
  [4, -10, 'A3 + D3', 6],
  [-23, 2, 9, 'A1 * B2'],
  [-23, 2, 9, 'A1 * B2']
]);

console.log(spreadsheet.getValue('B', 3))


