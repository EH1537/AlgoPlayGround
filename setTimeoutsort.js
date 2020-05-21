var sortArray = async function (nums) {
  let output = [];
  let val = 0
  const addOne = (x) => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`I added one! Now it's ${x + 1}.`)
        resolve()
      }, 2000);
      val = 5
    })
  }
  async function addAsync() {
    console.log('I have 10')
    await addOne(10)
    console.log(`Now I'm done!`)
    return new Promise(resolve => {
      val = 5
      resolve();
    })
  }
  val = await addAsync()
  return val
};

console.log(sortArray([1, 2, 6, 2, 1, 1, 2, 4, 2, 9]))