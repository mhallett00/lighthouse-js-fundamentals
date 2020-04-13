const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (stations){
  const goodStations = [];
  for (let station of stations){
      //console.log(station);
    const capacity = station[1];
    const type = station[2];
    if (capacity >= 20 && (type === "community centre" || type === "school")){
      //console.log(station);
      goodStations.push(station[0]);
    }
  }

  //console.log(goodStations);
  return (goodStations);
}
chooseStations(stations);