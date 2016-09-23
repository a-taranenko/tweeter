/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
function loadTweets() {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    success: function (tweetsReceived) {
      renderTweets(tweetsReceived);
    }
  });
}

function renderTweets(tweets) {
  $("#tweets-container").empty();

  tweets.forEach((element) => {
    $('#tweets-container').append(createTweetElement(element));
  });
}

function createTweetElement(tweetObject) {
  var userName = tweetObject.user.name;
  var userAvatar = tweetObject.user.avatars.small;
  var userHandle = tweetObject.user.handle;
  var userTweet = tweetObject.content.text;
  var tweetDate = timeAgo(tweetObject.created_at);

  var $feed = $(`<article class="tweet-container">
    <header class="tweet-header">
      <img src=${userAvatar} alt="User avatar" class="user-avatar">
      <p class="user-name">${userName}</p>
      <p class="user-link">${userHandle}</p>
    </header>
    <article class="tweet-article">${userTweet}</article>
    <footer class="tweet-footer">
      <p class="tweeted-days">${tweetDate}</p>
      <div class="icon-container">
        <i class="fa fa-flag" aria-hidden="true"></i>
        <i class="fa fa-refresh" aria-hidden="true"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
      </div>
    </footer>
    </article>
  `);

  return $feed;
}

function timeAgo(createdTime) {
  var timeDifference = Date.now() - createdTime;

  timeDifference = Math.round( (timeDifference/1000)/60 );

  if (timeDifference < 60) {
    if (timeDifference === 1) {
      return "1 minute ago";
    }
    return timeDifference + " minutes ago";
  } else {
    timeDifference = Math.round(timeDifference/60);
    if (timeDifference > 23) {
      timeDifference = Math.round(timeDifference/24);
      if (timeDifference === 1) {
        return "1 day ago";
      }
      return timeDifference + " days ago";
    } else {
      if (timeDifference === 1) {
        return "1 hour ago";
      }
      return timeDifference + " hours ago";
    }
  }
}

$(document).ready(loadTweets);