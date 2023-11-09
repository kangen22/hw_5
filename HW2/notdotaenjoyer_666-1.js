let honor = (arr, d) => {
    const n = arr.length;
    let maxSum = -Infinity;
    for (let i = 0; i < n; i++) {
      let currentSum = 0;
      for (let j = 0; j < d; j++) {
        const index = (i + (j * n / d)) % n;
        currentSum += arr[index];
      }
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
  }
  
console.log(honor([1, 2, 3, 4], 2));
console.log(honor([1, 5, 6, 3, 4, 2], 3));
console.log(honor([1, 1, 0], 1));

