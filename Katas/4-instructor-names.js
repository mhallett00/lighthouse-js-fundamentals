const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let longestName = 0;
  let instructorNm = [];
  //looping through the array's objects
  for (i = 0; i < instructors.length; i++) {
    //conditional checking for longest name property within an object, '>' ensures first longest to be retuned.
    if(instructors[i].name.length > longestName) {
      longestName = instructors[i].name.length;
      instructorNm = instructors[i];
    }
  }
  //returns longest instructor name's object.
  return instructorNm;
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));