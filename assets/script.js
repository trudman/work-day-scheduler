var textAreas = document.querySelectorAll("textarea");

function saveToLs(e) {
  var value = $(this).prev().val();
  var hour = $(this).parent().attr("id");

  var hours = JSON.parse(localStorage.getItem("Scheduler")) || {};
  hours[hour] = value;
  localStorage.setItem("Scheduler", JSON.stringify(hours));
}

function loadLs() {
  var hours = JSON.parse(localStorage.getItem("Scheduler"));
  console.log(hours);
}

function timeCompare() {
  var currentTime = dayjs().hour();
  for (var i = 0; i < textAreas.length; i++) {
    if (i + 8 < currentTime) textAreas[i].classList.add("past");
    if (i + 8 == currentTime) textAreas[i].classList.add("present");
    if (i + 8 > currentTime) textAreas[i].classList.add("future");
  }
}

$("#currentDay").text(dayjs().format("MMMM, DD, YYYY HH:mm"));

timeCompare();

$(".saveBtn").on("click", saveToLs);

loadLs();
