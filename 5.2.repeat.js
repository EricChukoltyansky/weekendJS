let repeat_str = (times, str) => {
  let str1 = "";
  for (let i = 0; i < times; i++) {
   str1 +=str;
  }
  return str1;
};

console.log(repeat_str(4,"hello"));
