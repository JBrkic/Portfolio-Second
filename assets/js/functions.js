$('#toggle').click(function () {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
  $('body').toggleClass('no-scroll');
});