let toWeirdCase = (str) => {
  str = str.toLowerCase();
  let newStr = "";
  for (i = 0; i < str.length; i++) {
    if (i % 2 == 0 && str[i] !== " ") {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));
