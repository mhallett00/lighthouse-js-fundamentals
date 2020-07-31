const talkingCalendar = function (date) {
  // Your code here
  let year = date.slice(0, 4);
  let month = Number(date.slice(5, 7));
  let day = Number(date.slice(8, 10));

  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  //const ordinalsuff = ['st', 'nd', 'rd', 'th'];

  //Loop checking array for relevant month
  for (let i = 0; i < monthArr.length; i++) {
    if (month === i + 1) {
      month = monthArr[i];
    }
  }

  //conditional assigning ordinal sufixes to dates
  if (day % 10 === 1 && day != 11) {
    day += "st";
  } else if (day === 2 || day === 22) {
    day += "nd";
  } else if (day === 3 || day === 23) {
    day += "rd";
  } else {
    day += "th";
  }

  return `${month} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
