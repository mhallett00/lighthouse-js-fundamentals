const urlEncode = function (text) {
  // Put your solution here
  //trimming text parameter to fit expected output format
  const trimText = text.trim();
  let newText = "";
  //Looping through string's index
  for (let i = 0; i < trimText.length; i++) {
    //Conditional to concat a new string replacing ' '
    if (trimText[i] === " ") {
      newText += "%20";
    } else {
      newText += trimText[i];
    }
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
