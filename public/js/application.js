$(document).ready(function() {
  $("#text_stuff").on("submit", function(event){
    // Stop the normal form submission
    event.preventDefault();
    // Prepare data to send with the request
    var data = {user_input: $('#user_input').val()};
    // Hide the form (until the request is done)
    $('#text_stuff').hide();
    // Reset the input so there's no text in it
    $('#user_input').val("");
    // Alert the user that the tweet is being sent
    $('h1:nth-child(2)').after('<p id="tweet_notice">Your tweet has been tweeted</p>');
    // Make the POST request
    $.post("/submit_tweet", data, function(response){
      // Code to run when we receive a success response to our request
      console.log(response);
      // Remove the tweet alert
      $('#tweet_notice').remove();
      // Show the form again, so the user can keep tweeting
      $('#text_stuff').show();
    });
  });
});



// $("#text_stuff").serialize(event){
