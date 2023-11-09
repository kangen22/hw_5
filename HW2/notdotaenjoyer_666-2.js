let findIndex = arr => {
    let totalSum = arr.reduce((a,b) => a + b);
    let leftSum = 0;
    for(let i = 0; i < arr.length; i++) {
       let rightSum = totalSum - leftSum - arr[i];
       if (leftSum === rightSum) {
        return i;
       }
       leftSum += arr[i];
    }
    return -1;
}


console.log(findIndex([1, 2, 3, 4, 3, 2, 1]))
console.log(findIndex([1, 100, 50, -51, 1, 1]))
console.log(findIndex([20, 10, -80, 10, 10, 15, 35 ]))