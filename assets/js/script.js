// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// save reference to important DOM elements
var dateDisplayEl = $('#dateDisplay');
var saveBtnEl = $('saveBtn');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('dddd MMM DD, YYYY [at] hh:mm:ss a');
    dateDisplayEl.text(rightNow);
  }

setInterval(displayTime, 1000);


var now = new Date().getHours();

function colorCode() {
  if (now > 9) {
    $("#text9").addClass("past");
  } else if (now >= 9 && now < 10) {
    $("#text9").addClass("present");
  } else if (now < 9) {
    $("#text9").addClass("future");
  }
}

colorCode();


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// Update every hours. If in past, color is gray. If current, color is red, if future, color is green.

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events 