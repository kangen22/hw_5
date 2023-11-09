function sortNumbers(number) {
    number = String(number).split("");
    let swap = "";
    for (let i = 0; i < number.length; i++) {
      for (let j = 0; j < number.length; j++) {
        if (number[i] > number[j]) {
          swap = number[j];
          number[j] = number[i];
          number[i] = swap;
        }
      }
    }
    return Number(number.join(""));
  
}

console.log(sortNumbers(89154353447437));
