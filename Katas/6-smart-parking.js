const whereCanIPark = function (spots, vehicle) {
  // Code here!
  let spotAvail = [];
  //Looping through "row" array
  for (i = 0; i <spots.length; i++) {
    //Looping through "column" array
    for (j = 0; j < spots[i].length; j++){
      //conditionals pushing index values to an array for logging.
      if (vehicle === 'regular' && spots[i][j] === 'R') {
        spotAvail.push(j, i);
        return spotAvail; 
      } else if (vehicle === 'small' && (spots[i][j] === 'R' || spots[i][j] === 'S')) {
        spotAvail.push(j, i);
        return spotAvail;
      } else if (vehicle === 'motorcycle' && (spots[i][j] === 'R' || spots[i][j] === 'S'|| spots[i][j] === 'M')) {
        spotAvail.push(j, i);
        return spotAvail;
      }
    }
  }
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE J
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE I
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))