const urlDecode = function(text) {
  // Put your solution here
  const finalObj = {};
  const keyValArr = text.split("&");

  for (const keyVal of keyValArr) {
    let keyValSplit = keyVal.split('=');
    finalObj[`${keyValSplit[0]}`] = `${keyValSplit[1]}`;
  }

  for (const key in finalObj) {
    finalObj[key] = finalObj[key].replace(/%20/g, " ");
  }
  return finalObj;

};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

// EXPECTED OUTPUT

// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"