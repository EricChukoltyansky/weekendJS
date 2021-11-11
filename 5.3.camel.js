function toCamelCase(input) {
    let result = '';
    input = input.toLowerCase()
    for(let i=0; i< input.length; i++){
      if(input[i] === '_' || input[i] === '-'){
        i++;
        result += input[i].toUpperCase()
      } else {
        result+= input[i]
      }
    }
    return result
  }

console.log(toCamelCase("the-stealth_warrior"));
