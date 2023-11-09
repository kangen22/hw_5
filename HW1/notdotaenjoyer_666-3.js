function findNb(m) {
  let M = 0;
  let i = 0;
  while (M < m) {
    i++;
    M += i ** 3;
  }
  return M === m ? i : -1;
}

console.log(findNb(1071225));
