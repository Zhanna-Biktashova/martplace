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


  var mixer = mixitup('.products__inner-box');
  
});