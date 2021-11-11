let findNextSquare = (number) => {
  let squared = Math.sqrt(number);
  let next = squared + 1;
  return Math.pow(next, 2);
};

console.log(findNextSquare(144));
