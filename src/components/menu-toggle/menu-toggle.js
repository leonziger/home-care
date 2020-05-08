import $ from 'jquery';

$('.burger').click(function() {
  $('.menu-toggle').toggleClass('menu-toggle_active');
  $('.main-header__nav').toggleClass('is-open');
  $('body').toggleClass('overflow-hidden');
});

$('#nav >ul li').each(function() {
  if($(this).find('.drop').length){
    $(this).addClass('has-drop');
  }
});

$('#nav li a').on('click', function(e){
  if($(this).siblings('.drop').length && !$(this).closest('li').hasClass('drop-open')){
    e.preventDefault();
    $(this).closest('li').addClass('drop-open');
    $(this).closest('li').siblings('li.drop-open').find('li.drop-open').removeClass('drop-open');
    $(this).closest('li').siblings('li.drop-open').removeClass('drop-open');
  }
});

