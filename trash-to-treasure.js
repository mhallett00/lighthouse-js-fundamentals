const smartGarbage = function (trash, bins){  // Your code in here ...
  if(trash === 'recycling'){
    bins.recycling++;
  } else if (trash === 'waste'){
    bins.waste++;
  } else if (trash === 'compost'){
    bins.compost++;
  }
  //console.log(bins);
  return bins;
}


smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
