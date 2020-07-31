const makeCase = function (input, casing) {
  // Put your solution here
  let inputInProcess = input;
  let finalStr = "";
  const casings = prioritzeCasings(convertCasingToArray(casing));

  for (casing of casings) {
    let stringInProcess = "";

    switch (casing) {
      case "camel":
        for (let j = 0; j < inputInProcess.length; j++) {
          if (inputInProcess.charAt(j - 1) === " ") {
            stringInProcess += inputInProcess[j].toUpperCase();
          } else if (inputInProcess.charAt(j) === " ") {
            stringInProcess += "";
          } else {
            stringInProcess += inputInProcess[j];
          }
        }
        break;
      case "pascal":
        for (let j = 0; j < inputInProcess.length; j++) {
          if (inputInProcess.charAt(j - 1) === " " || j === 0) {
            stringInProcess += inputInProcess[j].toUpperCase();
          } else if (inputInProcess.charAt(j) === " ") {
            stringInProcess += "";
          } else {
            stringInProcess += inputInProcess[j];
          }
        }
        break;
      case "snake":
        for (let j = 0; j < inputInProcess.length; j++) {
          if (inputInProcess.charAt(j) === " ") {
            stringInProcess += inputInProcess[j].replace(" ", "_");
          } else {
            stringInProcess += inputInProcess[j];
          }
        }
        break;
      case "kebab":
        for (let j = 0; j < inputInProcess.length; j++) {
          if (inputInProcess.charAt(j) === " ") {
            stringInProcess += inputInProcess[j].replace(" ", "-");
          } else {
            stringInProcess += inputInProcess[j];
          }
        }
        break;
      case "title":
        for (let j = 0; j < inputInProcess.length; j++) {
          if (inputInProcess.charAt(j - 1) === " " || j === 0) {
            stringInProcess += inputInProcess[j].toUpperCase();
          } else {
            stringInProcess += inputInProcess[j];
          }
        }
        break;
      case "vowel":
        stringInProcess = inputInProcess.replace(/[aeiou]/g, function (vowels) {
          return vowels.toUpperCase();
        });
        break;
      case "consonant":
        stringInProcess = inputInProcess.replace(
          /[bcdfghjklmnpqrstvwxyz]/g,
          function (consonants) {
            return consonants.toUpperCase();
          }
        );
        break;
      case "upper":
        stringInProcess = inputInProcess.toUpperCase();
        break;
      case "lower":
        stringInProcess = inputInProcess.toLowerCase();
        break;
      default:
        stringInProcess = inputInProcess;
        break;
    }
    inputInProcess = stringInProcess;
    finalStr = stringInProcess;
  }
  return finalStr;
};

const convertCasingToArray = (casings) => {
  const casingsArr = [];
  if (!Array.isArray(casings)) {
    casingsArr.push(casings);
    return casingsArr;
  } else {
    return casings;
  }
};

const prioritzeCasings = (casings) => {
  const primaryCasings = [];
  const secondaryCasings = [];
  const tertiaryCasings = [];

  for (let casing of casings) {
    switch (casing) {
      case "camel":
      case "pascal":
      case "snake":
      case "kebab":
      case "title":
        primaryCasings.push(casing);
        break;
      case "vowel":
      case "consonant":
        secondaryCasings.push(casing);
        break;
      case "upper":
      case "lower":
        tertiaryCasings.push(casing);
        break;
      default:
        console.log(`"${casing}" was ignored as an invalid case`);
        break;
    }
  }
  return primaryCasings.concat(secondaryCasings, tertiaryCasings);
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(
  makeCase("this is a string", ["lower", "title"]),
  "===",
  "this is a string"
);
console.log(
  makeCase("this is a string", [
    "lower",
    "vowel",
    "upper",
    "pascal",
    "consonant",
    "snake",
    "kebab",
    "title",
    "scramble",
  ]),
  "===",
  "THISISASTRING"
);
