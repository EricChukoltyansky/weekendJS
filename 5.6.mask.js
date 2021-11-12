let maskify = (str) => {
  return str.slice(0,-4).replace(/./g, '#') + str.slice(-4);
}

console.log(maskify("Nananananananananananananananana Batman!"))