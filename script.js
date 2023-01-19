var today = dayjs().format('DD-MM-YYYY HH:mm');
$('#currentDay').text(today);

var newDate = new Date()
currentTime = newDate.getHours() // WHY DOES THIS NOT NEED A VAR =
// console.log(typeof currentTime); // NUMBER
// console.log(currentTime)

$(function () {
  $(".saveBtn").click(function () {
    var time = $(this).parent().attr("id"); // need evaulation for military time and compare numbers for time
    console.log(time); // STRING
    var text = $(this).siblings(".description").val();
    // console.log(text);

    localStorage.setItem(time, text).JSON.stringify(); //time would be the keyName because that's something we have control over, and so we can pull that information from localStorage
    localStorage.getItem(time, text).JSON.parse();
  });
})

$("textarea").each(function () { // the "textarea" generates the array
  let scheduleTime = parseInt(this.dataset.thishour)
  // console.log(typeof scheduleTime); // STRING need to parse int to turn into a number to compare with time
  // console.log(this.dataset) // This informed us the format of thishour was wrong and needed a lowercase 'h'
  // console.log(parseInt(scheduleTime)); CAN DELETE

  if (currentTime === scheduleTime) {
    $(this).removeClass("past").removeClass("future").addClass("present");

  } else if (currentTime < scheduleTime) {
    $(this).removeClass("past").removeClass("present").addClass("future");

  } else if (currentTime > scheduleTime) {
    $(this).removeClass("present").removeClass("future").addClass("past");
  }

});



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.

 // $('div.time-block div;even').css('color','light grey') TRYING TO MAKE EVERY OTHER BLOCK    A DIFFERENT COLOR GREY
