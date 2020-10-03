$(function(){

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

  

  $('.product-slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-arrow slick-next"><img src="/images/icons/next.png" alt=""></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="/images/icons/prev.png" alt=""></button>',
  });

  $('.products__inner-box2').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: '<button class="slick-arrow slick-next"><img src="/images/icons/next.png" alt=""></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="/images/icons/prev.png" alt=""></button>',
  });

  
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 500,
    from: 30,
    to: 300,
    prefix: "$"
});

$('.icon-th-list').on('click', function(){
  $('.products__item').addClass('list');
  $('.icon-th-list').addClass('active');
  $('.icon-th-large').removeClass('active');
});

$('.icon-th-large').on('click', function(){
  $('.products__item').removeClass('list');
  $('.icon-th-large').addClass('active');
  $('.icon-th-list').removeClass('active');
});


$('.menu__btn').on('click', function(){
  $('.menu__list').slideToggle();
});


$('.header__btn-menu').on('click', function(){
  $('.header__box').toggleClass('active');
});


$('.single-product__tabs .tab').on('click', function(event) {
  var id = $(this).attr('data-id');
    $('.single-product__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.single-product__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
  });


  $('input[type="radio"], select').styler();

  var mixer = mixitup('.products__inner-box');
  
});