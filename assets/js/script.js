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

// 
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

// function nine00() {
//   var textEl = localStorage.getItem($"text900")
// }



// function nine00() {
// var inputText = document.querySelector("#text900");
// var outputText = document.querySelector("#text900");
// var saveBtnEl = document.querySelector("#btn900");

// outputText.textContent = localStorage.getItem("content");
// inputText.value = localStorage.getItem("content");

// saveBtnEl.addEventListener("click", output900);

// function output900() {
//   localStorage.setItem("content", inputText.value);
//   outputText.textContent = inputText.value;
// }

// }


// saveBtnEl.on("click", function () {
//   localStorage.setItem("content", inputText.value);
//   outputText.textContent = inputText.value;
// })


// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events 