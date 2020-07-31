const numberOfVowels = function (data) {
  // Put your solution here
  let numVowels = 0;
  //Looping the array's index looking for vowels
  for (let i = 0; i < data.length; i++) {
    if (
      data[i] === "a" ||
      data[i] === "e" ||
      data[i] === "i" ||
      data[i] === "o" ||
      data[i] === "u"
    ) {
      numVowels++;
    }
  }
  //returns total vowels in the string
  return numVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
