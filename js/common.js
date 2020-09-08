/*  picturefill.js
-------------------------------------------------------*/
$(function () {
  document.createElement( 'picture' );
});


/*  toggle menu
-------------------------------------------------------*/
$(function(){
  $('#toggle').click(function() {
    $('.header__navi').toggleClass('is-open');
    $('#toggle').toggleClass('is-active');
  });
  $('.header__navi a').click( function () {
    $('#toggle').removeClass('is-active');
    $('.header__navi').removeClass('is-open');
  });
});


/*  acordion menu
-------------------------------------------------------*/

$(function(){
  $('.navi > div p').click(function(){
    $(this).next('.submenu-bg').slideToggle();
    $(this).toggleClass('is-open');
    $('.navi > div p').not($(this)).next('.submenu').slideUp();
  });
});


/* smooth scroll
------------------------------------- */

$(function() {
  var headerHight = $('#header').height();
  $('a[href^="#"]').click(function() {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "body" : href);
    var position = target.offset().top - headerHight;
    var speed = 500;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});


/*  scroll animation
-------------------------------------------------------*/

// inview
$(function() {
  $('.anim--scroll').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('is-show');
    } else {
      //$(this).removeClass('is-show');
    }
  });
});


/*  tab
-------------------------------------------------------*/

$(function(){
$('.schedule-tab').click(function () {
    $('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    $('.is-show').removeClass('is-show');
    const index = $(this).index();
    $('.schedule-panel').eq(index).fadeIn(300).addClass('is-show');
    $('.schedule-panel').not('.is-show').hide();
  });
});
