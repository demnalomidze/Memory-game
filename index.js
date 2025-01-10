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
