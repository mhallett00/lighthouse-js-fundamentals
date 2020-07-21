const repeatNumbers = function(data) {
    // Put your solution here
  let repeatNum = '';
    for (let i = 0; i < data.length; i++) {
      //console.log(data[i]);
      if (i === 0 || i === data.length){
        for (let numReps = 0; numReps < data[i][1]; numReps++){
         repeatNum += data[i][0];
        }
      } else {
        repeatNum += ", ";
        for (let numReps = 0; numReps < data[i][1]; numReps++){
          repeatNum += data[i][0];
        }
      }
    }
  return repeatNum;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));