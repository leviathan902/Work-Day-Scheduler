// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// save reference to important DOM elements
var dateDisplayEl = $('#dateDisplay');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('dddd MMM DD, YYYY [at] hh:mm:ss a');
    dateDisplayEl.text(rightNow);
  }

setInterval(displayTime, 1000);

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// Variable to check/store the current hour.
var now = new Date().getHours();

function timeBlockColorCode() {
  // If the current hour is greater than 9AM...
  if (now > 9) {
    // Add class "past"(Gray background color) to textarea...
    $("#text900").addClass("past");
    // Otherwise, if current hour is greater than 9AM, and also less than 10AM...
  } else if (now >= 9 && now < 10) {
    // Add class "present"(Red background color) to textarea...
    $("#text900").addClass("present");
    // Otherwise, if current hour is less than 9AM...
  } else if (now < 9) {
    // Add class "future"(Green background color) to textarea...
    $("#text900").addClass("future");
  }

  if (now > 10) {
    $("#text1000").addClass("past");
  } else if (now >= 10 && now < 11) {
    $("#text1000").addClass("present");
  } else if (now < 10) {
    $("#text1000").addClass("future");
  }

  if (now > 11) {
    $("#text1100").addClass("past");
  } else if (now >= 11 && now < 12) {
    $("#text1100").addClass("present");
  } else if (now < 11) {
    $("#text1100").addClass("future");
  }

  if (now > 12) {
    $("#text1200").addClass("past");
  } else if (now >= 12 && now < 13) {
    $("#text1200").addClass("present");
  } else if (now < 12) {
    $("#text1200").addClass("future");
  }

  if (now > 13) {
    $("#text1300").addClass("past");
  } else if (now >= 13 && now < 14) {
    $("#text1300").addClass("present");
  } else if (now < 13) {
    $("#text1300").addClass("future");
  }

  if (now > 14) {
    $("#text1400").addClass("past");
  } else if (now >= 14 && now < 15) {
    $("#text1400").addClass("present");
  } else if (now < 14) {
    $("#text1400").addClass("future");
  }

  if (now > 15) {
    $("#text1500").addClass("past");
  } else if (now >= 15 && now < 16) {
    $("#text1500").addClass("present");
  } else if (now < 15) {
    $("#text1500").addClass("future");
  }

  if (now > 16) {
    $("#text1600").addClass("past");
  } else if (now >= 16 && now < 17) {
    $("#text1600").addClass("present");
  } else if (now < 16) {
    $("#text1600").addClass("future");
  }

  if (now > 17) {
    $("#text1700").addClass("past");
  } else if (now >= 17 && now < 18) {
    $("#text1700").addClass("present");
  } else if (now < 17) {
    $("#text1700").addClass("future");
  }

}

timeBlockColorCode();

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events 

saveBtnEl = $(".saveBtn");

// When the save button is clicked...
saveBtnEl.on("click", function () {
  console.log("clicky click");
  var btnID = $(this).attr("id");
  var schedule = $(this).prev().val();
  console.log(btnID);
  localStorage.setItem(btnID, schedule);
})

// Displaying localstorage items from text area.
var displaySchedule = () => {
  $("#text900").val(localStorage.getItem('btn900'));
  $("#text1000").val(localStorage.getItem('btn1000'));
  $("#text1100").val(localStorage.getItem('btn1100'));
  $("#text1200").val(localStorage.getItem('btn1200'));
  $("#text1300").val(localStorage.getItem('btn1300'));
  $("#text1400").val(localStorage.getItem('btn1400'));
  $("#text1500").val(localStorage.getItem('btn1500'));
  $("#text1600").val(localStorage.getItem('btn1600'));
  $("#text1700").val(localStorage.getItem('btn1700'));
}

displaySchedule();
