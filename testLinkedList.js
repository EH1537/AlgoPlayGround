//save for later for other LinkedList testing

function ListNode(val) {
  this.val = val;
  this.next = null;
  this.add = (val) => {
    let current = this
    while (current.next){
      current = current.next
    }      
    current.next = new ListNode(val)
  }
  this.print = () => {
    let outputArr = []
    let current = this
    while (current.next){
      outputArr.push(current.val)
      current = current.next
    }
    return outputArr
  }
}



let tester1 = new ListNode(2)
tester1.add(1);
tester1.add(2);
tester1.add(3);

console.log(tester1.print())
console.log(tester1)

let tester2 = new ListNode(5)

tester1.next = new ListNode(4)
tester2.next = new ListNode(6)
tester1.next.next = new ListNode(3)
tester2.next.next = new ListNode(4)


console.log(tester1)
console.log(tester2)

var addTwoNumbers = function (l1, l2) {
  let List = new ListNode(0);
  let head = List;
  let sum = 0;
  let carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }
    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }
  return List.next;
};

let midFind = new ListNode(1)

for (let i=2; i <= 7; i++) {
  midFind.add(i)
}

console.log(midFind.print())

// var middleNode = function(head) {
//     let dummy = new ListNode(-1)
//     dummy.next = head
//     let current = dummy;
//     let moveFast = dummy;

//     while(moveFast.next) {
//       if(moveFast.next.next) {
//         current = current.next
//         moveFast = moveFast.next.next
//       }
//     }

//     return current;
// };

var middleNode = function(head) {
    let dummy = new ListNode(-1)
    dummy.next = head;
    let current = dummy;
    let moveFast = dummy;
    

    while(moveFast.next && moveFast.next.next) {
      if(moveFast.next.next) {
        current = current.next
        moveFast = moveFast.next.next
      }
    }

    return current.next;
};

console.log(middleNode(midFind).print())