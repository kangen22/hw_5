function highAndLow (nums) {
    nums = nums.split(" ").map(Number);
    let swap;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
               swap = nums[j];
               nums[j] = nums[i];
               nums[i] = swap;
            }
        }
    }
    let minNumber = nums[nums.length - 1];
    let maxNumber = nums[0];
    
    return maxNumber + " " + minNumber;
}


console.log(highAndLow("1 2 3 4 -5"));
console.log(highAndLow("10 4 5 -9 2"));

