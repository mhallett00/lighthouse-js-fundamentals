const checkAir = function (samples, threshold) {
  // Code here!
  let dirtySamp = 0;
  for (i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty'){
      dirtySamp++;
    }
  }
  if (dirtySamp / samples.length < threshold) {
    return 'clean';
  } else {
    return 'Polluted';
  }
  console.log(dirtySamp);
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
