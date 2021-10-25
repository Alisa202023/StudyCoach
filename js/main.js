
window.addEventListener('resize', function() { //обновление по изменению ширины экрана
  var w = window.innerWidth;
  if (w > 860) {
    $('.header__menu ul').css('display', 'flex');
    $('.header').append( $('.header__buttons') ); 
  }
  if (w < 860) {
    $('.header__menu ul').css('display', 'block');
    $('.menu').append( $('.header__buttons') ); 
  }
});

$(document).ready(function(){
  var w = window.innerWidth;
  $('.menu-button').click(function(event){
    $('.menu-button')	.toggleClass('active'); 
  });

  if (w > 860) {
    $('.header').append( $('.header__buttons') ); 
  }
  if (w < 860) {
    $('.menu').append( $('.header__buttons') ); 
  }
});

$('.menu-button').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('overlay');
  $('body').toggleClass('main__scroll');
  $('.menu-button').toggleClass('menu-button-close');
  $('.header__menu ul').toggleClass('active');
  $('nav').toggleClass('active');  
  $('.header__buttons').toggleClass('active');
});

$('.menu-button-close').on('click', function(e) {
  e.preventDefault();
  $('.menu-button')	.toggleClass('active',false);
  $('.menu').toggleClass('overlay', false);
  $('body').toggleClass('main__scroll', false);
  $('.menu-button').toggleClass('menu-button-close', false); 
  $('.header__menu ul')	.toggleClass('active',false);
  $('nav')	.toggleClass('active',false);
  $('.header').append( $('.header__buttons') ); 
  $('.header__buttons').toggleClass('active', false);
});






