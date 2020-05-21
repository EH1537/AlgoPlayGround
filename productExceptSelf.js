// takes an Array, returns an array consisting of elements that are the product of all buy the ith element
// Input:  [1,2,3,4]
// Output: [24,12,8,6]
var productExceptSelf = function (nums) {

    var output = [];
    var product = 1;
    for(var i=0; i<nums.length; i++){
        output[i] = product;
        product *= nums[i];
    }
    console.log(output)
    product = 1;

    for(var i=nums.length-1; i>=0; i--){
        output[i] *= product;
        product *= nums[i];
        console.log(output)
    }
    return output
}

console.log(productExceptSelf([1, 2, 3, 4]))