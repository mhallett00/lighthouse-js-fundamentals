const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'plumpness';


const judgeVegetable = function (vegetables, metric) {
  let winner = "";
  let highestScore = 0;
  for (let i = 0; i < vegetables.length; i++){
    //console.log(vegetables[i]);
    const objectA = metric;
    const object = vegetables[i];
    //let highestScore = 0;
    //let winner = "";
    //console.log(object);
    for (const property in object){
      //console.log(`${property}; ${object[property]}`);
      if(property === objectA && object[property] > highestScore) {
        //console.log(`${property} = ${objectA} = ${object[property]}`);
        highestScore = object[property];
        winner = object.submitter;
        //console.log(winner, highestScore, object[property]);
      }
    //console.log(winner);  
    }
    //console.log(winner);
    //return winner;
  }
  //console.log(winner);
  return winner;
}  

console.log(judgeVegetable(vegetables, metric));

//------REFERENCE CODE FOR CHECKING OBJECT PROPERTIES------------

/*
const object = {a:1, b:2, c:3};
const objectA = 'b';

for (const property in object){
  console.log(`${property}; ${object[property]}`);
  if(property === objectA) {
    console.log(`${property} = ${objectA} = ${object[property]}`);
  }
}
*/