function sum(number) {
  let sum = 0;
  if (number > 0) {
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  } else {
    return 0;
  }
}

console.log(sum(10));
