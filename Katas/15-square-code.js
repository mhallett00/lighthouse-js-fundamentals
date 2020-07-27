// recursively splits string into elements based on the length of the parent's sqrt

const recurseString = (inputString, outputString, indexString) => {
  const squareString = [...outputString];

  squareString.push(inputString.slice(0, indexString));
  let remString = inputString.slice(indexString);
  if (remString.length) {
    return recurseString(remString, squareString, indexString);
  } else {
    return squareString;
  }
};

// builds a new string by transposing and appending the input array's elements. takes in the recursed string and parent sqrt value.

const buildString = (inputArr, sqrtString) => {
  let outputString = "";

  for (let i = 0; i < sqrtString; i++) {
    let inProcessString = "";
    for (let j = 0; j < inputArr.length; j++) {
      if (inputArr[j][i]) {
        inProcessString += inputArr[j][i];
      }
    }
    outputString += inProcessString + " ";
  }

  return outputString;
};

// processes the original string, processes it and spits out the new encrypted string.

const squareCode = (inputString) => {
  let stripString = inputString.replace(/\s/g, "");
  let stringSqrt = Math.ceil(Math.sqrt(stripString.length));
  let finalString = "";

  return buildString(recurseString(stripString, "", stringSqrt), stringSqrt);
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
