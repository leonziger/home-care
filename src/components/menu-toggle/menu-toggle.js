import $ from 'jquery';

$('.burger').click(function() {
  $('.menu-toggle').toggleClass('menu-toggle_active');
  // $('.main-header__nav').toggleClass('is-open');
  $('.main-menu').toggleClass('open');
  $('body').toggleClass('menu-open');
});

$('#nav >ul li').each(function() {
  if($(this).find('.drop').length){
    $(this).addClass('has-drop');
  }
});

$('#nav li a').on('click', function(e) {
  if ( $(this).closest('li').hasClass('has-drop') ) {
    e.preventDefault();
    const target = e.target.closest('li');

    $(target).toggleClass('open');
    if ($(target).hasClass('open')) {
      $('.drop').slideDown();
    } else {
      $('.drop').slideUp();
    }
  }
});
