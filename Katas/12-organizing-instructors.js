const organizeInstructors = function(instructors) {
  // Put your solution here
  let organized = {};
  for (i = 0; i < instructors.length; i++) {
    let course = instructors[i].course;
    let name = instructors[i].name;
    if (course in organized) {
      organized[course].push(name)
    } else {    
      organized[course] = [name];
    }
  }  
  return organized; 
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));