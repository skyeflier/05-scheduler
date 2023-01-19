var today = dayjs().format('DD-MMMM-YYYY HH:mm');
$('#currentDay').text(today);

var newDate = new Date()
currentTime = newDate.getHours()
// console.log(typeof currentTime); // NUMBER
// console.log(currentTime)

$(function () {
  $(".saveBtn").click(function () {
    var time = $(this).parent().attr("id"); // need evaulation for military time and compare numbers for time
    console.log(time); // STRING
    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, text); //time would be the keyName because that's something we have control over, and so we can pull that information from localStorage

  });
})

$("textarea").each(function () { // the "textarea" generates the array
  let scheduleTime = parseInt(this.dataset.thishour)
  // console.log(typeof scheduleTime); // STRING need to parse int to turn into a number to compare with time
  // console.log(this.dataset) // This informed us the format of thishour was wrong and needed a lowercase 'h'

  if (currentTime === scheduleTime) {
    $(this).removeClass("past").removeClass("future").addClass("present");

  } else if (currentTime < scheduleTime) {
    $(this).removeClass("past").removeClass("present").addClass("future");

  } else if (currentTime > scheduleTime) {
    $(this).removeClass("present").removeClass("future").addClass("past");
  }
  var text = localStorage.getItem(scheduleTime);
  $(this).val(text)
});