$(document).ready(function() {
  console.log("running");

  var lettersLeft = 0;

  $(".new-tweet form textarea").on("input", function() {
    lettersLeft = 140 - this.value.length
    var counterSpan = $(this).closest(".new-tweet").find(".counter");

    if (lettersLeft < 0) {
      counterSpan.text(lettersLeft);
      counterSpan.css("color", "red");
    } else {
      counterSpan.text(lettersLeft);
      counterSpan.css("color", "#244751");
    }
  });
});