$('form a').click(function (event) {
  event.preventDefault();
  $('form').animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
});
