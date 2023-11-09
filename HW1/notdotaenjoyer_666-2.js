function moves(numberOfDisks) {
  return 2 ** numberOfDisks - 1;
}

console.log(moves(3));
