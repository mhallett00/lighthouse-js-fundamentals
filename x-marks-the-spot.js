//Parade's path
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

//parade's final position function
const finalPosition = function (moves) {
  const paradePosition = [];
  let x = 0;
  let y = 0;  
  for (let move of moves) {
    //let x = 0;
    //let y = 0;  
    if (move === 'north') {
      y++;
    } else if (move === 'west') {
      x--;
    } else if (move === 'east') {
      x++;
    } else if (move === 'south') {
      y--;
    }
    //paradePosition.push(x[0], y[1]);
    //console.log(paradePosition);
    //console.log (x ,y);
    //return(x, y);
  }
  //console.log (x, y);
  paradePosition.push(x, y);
  //console.log(paradePosition);
  return (paradePosition);
}

finalPosition(moves);

//console.log(paradePosition);
