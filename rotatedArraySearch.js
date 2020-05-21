var search = function(nums, target) {
    let startIdx = 0;
    let endIdx = nums.length-1;
    let minIdx = 0;

    while(startIdx <= endIdx) {
        let midPoint = Math.floor((startIdx+endIdx)/2);

        if(nums[midPoint] < nums[minIdx]) minIdx = midPoint;
        
        if(nums[endIdx] < nums[midPoint]) {
            startIdx = midPoint+1;
        } else {
            endIdx = midPoint-1;
        }
    }
    
    if(target < nums[0]) {
        startIdx = minIdx;
        endIdx = nums.length-1;
    } else {
        startIdx = 0;
        // if minIdx = 0 set end to last index
        endIdx = minIdx || nums.length-1;
    }
    
    while(startIdx <= endIdx) {
        let midPoint = Math.floor((startIdx+endIdx)/2);
        
        if(nums[midPoint] === target) {
            return midPoint;
        } else if(target < nums[midPoint]) {
            endIdx = midPoint-1;
        } else {
            startIdx = midPoint+1
        }
    }
    return -1;    
};

console.log(search([4,5,6,7,0,1,2],0))