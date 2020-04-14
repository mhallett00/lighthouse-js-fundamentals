function range (start, end, step){
  const rangeArr = [];
  if (step > 0) {
    for ( let i = start; i <= end; i += step){
      rangeArr.push(i);
    }
    return rangeArr;
  } else {
    return rangeArr;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, -3));