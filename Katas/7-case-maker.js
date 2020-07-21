const camelCase = function(input) {
  // Your code here
  let newStr = "";
  for (let i = 0; i < input.length; i++){
    if (input.charAt(i-1) === " ") {
      newStr += input[i].toUpperCase();
    } else if (input.charAt(i) === " ") {
      newStr += "";
    } else {
      newStr += input[i];
    }
  }
return newStr;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));