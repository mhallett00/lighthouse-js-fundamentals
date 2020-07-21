const multiplicationTable = function(maxValue) {
  // Your code here
  let multTable = '';
  for (let row = 1; row <= maxValue; row++){
    multTable += '\n';
    for (let col = 1; col <= maxValue; col++){
      multTable += row*col + ' ';
     
    }
  }

return  multTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));