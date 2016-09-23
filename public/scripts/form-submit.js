$(document).ready(function() {
  var $form = $('form');

  $form.on('submit', function (event) {
    event.preventDefault();
    console.log( $( this ).serialize() );
    console.log($( this ));

    var textSubmitted = $( this ).serialize();

    if (event.target.text.value == "") {
      alert("No input entered, please enter a tweet.");
    } else {
      if (event.target.text.value.length > 140) {
        alert("The tweet contains too many characters!");
      } else {
        $.ajax({
          url: '/tweets',
          method: 'POST',
          data: textSubmitted,
          success: function (morePostsHtml) {
            console.log('Success: ', morePostsHtml);
            loadTweets();
          }
        });
      }
    }
  });
});