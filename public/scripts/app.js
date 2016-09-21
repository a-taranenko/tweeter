/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  var data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function timeAgo(createdTime) {
    var timeDifference = Date.now() - createdTime;

    timeDifference = Math.round(((timeDifference/1000)/3600)/24);

    if (timeDifference < 1) {
      if (timeDifference * 24 < 1) {
        return timeDifference * 60 + " minutes ago";
      } else {
        return timeDifference * 24 + " hours ago";
      }
    } else if (timeDifference < 2) {
      return timeDifference + " day ago";
    } else {
      return timeDifference + " days ago";
    }
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

  function renderTweets(tweets) {
    $("#tweets-container").empty();

    tweets.forEach((element) => {
      $('#tweets-container').append(createTweetElement(element));
    });
  }

  renderTweets(data);
});