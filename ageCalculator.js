function ageCalculator(name, yearOfBirth, currentYear){
  let age = currentYear - yearOfBirth;
  let ageID = `${name} is ${age} years old.`;
  return ageID;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));