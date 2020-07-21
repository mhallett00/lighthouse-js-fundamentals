const calculateChange = function(total, cash) {
  // Your code here
  let toGive = cash - total;
  //console.log(toGive);
  let changeObj = {
    twentydollar: 0, 
    tendollar: 0,
    fivedollar: 0,
    twodollar: 0,
    onedollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };
  
  //pulling number of denominations from change
  //twentydollar
  let twenties = Math.floor(toGive/2000);
  changeObj.twentydollar = twenties;
  toGive -= twenties*2000;
  //tendollar
  let tens = Math.floor(toGive/1000);
  changeObj.tendollar = tens
  toGive -= tens*1000;
  //fivedollar
  let fives = Math.floor(toGive/500);
  changeObj.fivedollar = fives
  toGive -= fives*500;
  //twodollar
  let twos = Math.floor(toGive/200);
  changeObj.twodollar = twos
  toGive -= twos*200;
  //onedollar
  let ones = Math.floor(toGive/100);
  changeObj.onedollar = ones
  toGive -= ones*100;
  //quarters
  let quarters = Math.floor(toGive/25);
  changeObj.quarter = quarters
  toGive -= quarters*25;
  //dimes
  let dimes = Math.floor(toGive/10);
  changeObj.dime = dimes;
  toGive -= dimes*10;
  //nickels
  let nickels = Math.floor(toGive/5);
  changeObj.nickel = nickels;
  toGive -= nickels*5;
  //pennies
  let pennies = Math.floor(toGive/1);
  changeObj.penny = pennies;
  
  //Loop deleting empty denominations
  for (let denom in changeObj) {
    //console.log(changeObj[denom])
    if (changeObj[denom] === 0){
      //console.log(true);
      delete changeObj[denom];
    }
  }

  return changeObj;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));