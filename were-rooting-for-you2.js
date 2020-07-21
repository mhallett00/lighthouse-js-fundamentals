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

const metric = 'redness';

const judgeVegetable = function (vegetables, metric) {
  let winner = "";
  let highestScore = 0;
  for (let i = 0; i < vegetables.length; i++){
    const entry = vegetables[i];
    for (const judgeCrit in entry){
      if(judgeCrit === metric && entry[judgeCrit] > highestScore) {
        highestScore = entry[judgeCrit];
        winner = entry.submitter;
      }
    }
  }
  return winner;
}  

console.log(judgeVegetable(vegetables, metric));
