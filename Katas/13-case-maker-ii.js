const makeCase = function(input, casing) {
  // Put your solution here
  
  let newStr = '';
  //console.log(casing);
  switch(casing) {
    case "camel":
      for (let j = 0; j < input.length; j++){
        if (input.charAt(j-1) === " ") {
          newStr += input[j].toUpperCase();
        } else if (input.charAt(j) === " ") {
          newStr += "";
        } else {
          newStr += input[j];
        }
      }
      break;
    case "pascal":
      for (let j = 0; j < input.length; j++){
        if (input.charAt(j-1) === " " || j === 0) {
          newStr += input[j].toUpperCase();
        } else if (input.charAt(j) === " ") {
          newStr += "";
        } else {
          newStr += input[j];
        }
      }
      break;
    case "snake":
      for (let j = 0; j < input.length; j++){
        if (input.charAt(j) === " ") {
          newStr += input[j].replace(' ', '_');
        } else {
          newStr += input[j];
        }
      }
      break;
    case "kebab":
      for (let j = 0; j < input.length; j++){
        if (input.charAt(j) === " ") {
          newStr += input[j].replace(' ', '-');
        } else {
          newStr += input[j];
        }
      }
      break;
    case "title":
      for (let j = 0; j < input.length; j++){
        if (input.charAt(j-1) === " " || j === 0) {
          newStr += input[j].toUpperCase();
        } else {
          newStr += input[j];
        }
      }
      break;  
    case "vowel":
      newStr = input.replace(/[aeiou]/g, function (vowels){
        return vowels.toUpperCase();
      });
      break;
    case "consonant":
      newStr = input.replace(/[bcdfghjklmnpqrstvwxyz]/g, function (consonants){
        return consonants.toUpperCase();
      });
      break;
    case "upper":
      newStr = input.toUpperCase();
      break;
    default:
      newStr = input;
      break;
  }
  return newStr;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));