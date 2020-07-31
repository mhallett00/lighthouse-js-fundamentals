let prompt = require("prompt-sync")();

const secretNumber = Math.floor(Math.random() * 100 + 1);
const userGuesses = [];
let correctAnswer = false;

console.log("Guess the secret number between 1 and 100!");

while (!correctAnswer) {
  let answer = Number(prompt("Guess a number: "));
  if (Number.isNaN(answer)) {
    console.log("Not a number, try again!");
  } else if (userGuesses.includes(answer)) {
    console.log("Already guessed!");
  } else if (answer === secretNumber) {
    userGuesses.push(answer);
    correctAnswer = true;
    console.log(`You got it! You took ${userGuesses.length} attempts!`);
  } else {
    userGuesses.push(answer);
    answer < secretNumber ? console.log("Too Low!") : console.log("Too High!");
  }
}
