let count = 100;

while (count <= 200){
  if (count % 3 === 0 && count % 4 === 0) {
    console.log("LoopyLighthouse");
    count++
  } else if ( count % 3 === 0){
    console.log("Loopy");
    count++;
  } else if (count % 4 === 0){
    console.log("Lighthouse");
    count++;
  } else {
    console.log(count);
    count++;
  }
}