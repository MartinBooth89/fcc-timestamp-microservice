// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var time = encodeURI($('input').val());
    $.get('/api/' + time, function(response) {
      $('#request').html(`GET: https://${window.location.hostname}/api/${time}`)
      $('#json').html(JSON.stringify(response));
      $('#unix').html(response.unix);
      $('#natural').html(response.natural);
      $('input').val('');
      $('input').focus();
    });
  });

});
