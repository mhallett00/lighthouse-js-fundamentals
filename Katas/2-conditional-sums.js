const conditionalSum = function (values, condition) {
  // Your code here
  let numArr = [];
  for (let i = 0; i < values.length; i++) {
    //pushing even or odd numbers to array
    if (condition === "even" && values[i] % 2 === 0) {
      numArr.push(values[i]);
    } else if (condition === "odd" && values[i] % 2 != 0) {
      numArr.push(values[i]);
    }
  }
  //checking for an empty array to return 0
  if (numArr.length === 0) {
    return (numArr = 0);
  } else {
    return numArr;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
