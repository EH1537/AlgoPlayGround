/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.storage = [];
  this.length = 0;
  this.max = -Infinity
  this.min = Infinity
};

/** 
 * @param {number} 
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.storage.push(x)
  if (x > this.max) this.max = x
  if (x < this.min) this.min = x
  this.length++
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  y = this.storage.pop();
  if (this.max == y) {
    this.max = Math.max(...this.storage)
  }
  if (this.min == y) {
    this.min = Math.min(...this.storage)
  }
  this.length--
  return y
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.storage[this.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 */
 var obj = new MinStack()
 let x= 5
 obj.push(4)
 obj.push(4)
 obj.push(3)
 console.log(obj)

 obj.pop()
console.log(obj)
 var param_3 = obj.top()
 var param_4 = obj.getMin()

 console.log(param_3)
 console.log(param_4) 
 