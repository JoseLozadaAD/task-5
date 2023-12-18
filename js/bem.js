$('.form__link').click(function (event) {
  event.preventDefault();
  $('form').animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
});
