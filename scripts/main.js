$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();

    var total = getScore();
    var message;
    
    if (total < 42*1/4) {
      message = "You're not a nerd.";
    } else if (total < 42*1/2) {
      message = "You might be somewhat of a nerd.";
    } else if (total < 42*3/4) {
      message = "You're high tier nerd.";
    } else {
      message = "Other nerds bow in your presence!";
    }

    var your_score = "<div id='score'>You're score is " + total + '.</div>';
    message = '<div id="message">' + message + '</div>';

    $('#container').html(your_score + message);

    function getScore() {
      var score = 0;

      for (var i = 1; i < 15; i++) {
        var question = i;

        var answer = $('input[name=q' + i + ']:checked').val();

        if (answer) {
          score += parseInt(answer);
        }
      }
      return score;
    };
  });
});