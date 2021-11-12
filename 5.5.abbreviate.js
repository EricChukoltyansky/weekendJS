let init = (str) => {
 str = str.toUpperCase();
 let newStr = "";
 for( i=0; i<str.length; i++) {
   if(str[i] === " ") {
       i++;
       newStr += str[0]+"."+str[i]
   }
 }
 return newStr;
}

console.log(init("Sam Harris"))