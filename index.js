$(".players-box button").on("click", function () {
  let container = $(this).closest(".players-box").find("button");

  container.removeClass("active").css("background-color", "#bcced9");

  $(this).addClass("active").css("background-color", "#304859");
});

$(".grid-buttons button").on("click", function () {
  let container = $(this).closest(".grid-box").find("button");

  container.removeClass("active").css("background-color", "#bcced9");

  $(this).addClass("active").css("background-color", "#304859");
});

$(".buttons1 button").on("click", function () {
  let container = $(this).closest(".theme").find("button");

  container.removeClass("active").css("background-color", "#bcced9");

  $(this).addClass("active").css("background-color", "#304859");
});

// Next Step -----------------------------------------------------------------------

let selectedTheme = null;
let selectedPlayer = null;
let selectedGrid = null;

$(".buttons1 button").on("click", function () {
  $(".buttons1 button").removeClass("active");
  $(this).addClass("active");
  selectedTheme = $(this).text().trim();
});

$(".box-numbers button").on("click", function () {
  $(".box-numbers button").removeClass("active");
  $(this).addClass("active");
  selectedPlayer = $(this).text().trim();
});

$(".grid-buttons button").on("click", function () {
  $(".grid-buttons button").removeClass("active");
  $(this).addClass("active");
  selectedGrid = $(this).text().trim();
});

$(".Start-game").on("click", function () {
  if (
    selectedTheme === "Numbers" &&
    selectedPlayer === "1" &&
    selectedGrid === "4x4"
  ) {
    window.location.href = "GameSolo.html";
  } else {
    alert(
      "Please select 'Numbers', '1 Player', and '4x4 Grid' before starting the game."
    );
  }
});

$(document).ready(function () {
  if ($(".theme-number").css("background-color") === "rgb(48, 72, 89)") {
    $(".theme-number").addClass("active");
    selectedTheme = "Numbers";
  }

  if ($(".first-box").css("background-color") === "rgb(48, 72, 89)") {
    $(".first-box").addClass("active");
    selectedPlayer = "1";
  }

  if ($(".square4x4").css("background-color") === "rgb(48, 72, 89)") {
    $(".square4x4").addClass("active");
    selectedGrid = "4x4";
  }
});
