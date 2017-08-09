// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {

  $('form').submit(function(event) {
    event.preventDefault();
    var time = encodeURI($('input').val());
    $.get('/api/' + time, function(response) {
      $('#output').removeClass('hidden');
      $('#request').html(`GET: https://${window.location.hostname}/api/${time}`)
      $('#json').html(JSON.stringify(response));
      $('#unix').html(response.unix);
      $('#natural').html(response.natural);
      $('input').val('');
      $('input').focus();
    });
  });

});
