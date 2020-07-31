const sumLargestNumbers = function (data) {
  // Put your solution here
  let largest = 0;
  let secondLargest = 0;

  //Loop for setting largest value.
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largest) {
      largest = data[i];
    }
  }
  //Loop for setting second largest value.
  for (let j = 0; j < data.length; j++) {
    if (data[j] < largest && data[j] >= secondLargest) {
      secondLargest = data[j];
    }
  }
  //returning sum of the two largest numbers.
  // return (sum = largest + secondLargest);
  return largest + secondLargest;
};

//logging the sum of the two largest numbers.
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
