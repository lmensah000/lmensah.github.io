//Adding logo that changes based on time
//Using javascript and jquery
var today = new Date();
var hourNow = today.getHours();

if (hourNow >= 18) {
  document.write('<img src="resources/images/eveningmoji.jpeg">');
}
else if (hourNow >= 12 && hourNow < 18) {
  document.write('<img src="resources/images/afternoonmoji.jpeg">');
}
else if(hourNow > 0 &&  hourNow < 12) {
  document.write('<img src="resources/images/morningmoji.jpeg">');
}
