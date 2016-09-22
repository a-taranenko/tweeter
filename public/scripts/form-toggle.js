$(document).ready(function() {
  $("#compose-button").on("click", function(ev) {
    if ( $(".new-tweet").is(":hidden") ) {
      $(".new-tweet").slideDown();
      $("#text-input").focus();
    } else {
      $(".new-tweet").slideUp();
    }
  });
});