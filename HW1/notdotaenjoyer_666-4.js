function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num % 2 !== 0) {
    let sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {  
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;  
}

console.log(isPrime(4))