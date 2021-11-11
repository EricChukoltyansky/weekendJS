let century = (year) => {
  let trimmed = year.toString().trim().split("");
  for (i = 0; i < trimmed.length; i++) {
    if (trimmed[trimmed.length - 1] < 1) {
      return trimmed[0] + trimmed[1];
    } else {
      let plusYear = trimmed[0] + trimmed[1];
      plusYear++;
      return plusYear;
    }
  }
};

console.log(century(1601));
console.log(century(2000));
console.log(century(1705));
console.log(century(1900));
