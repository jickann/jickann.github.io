// СМУЗ СКРОЛЛ
$('.smoothscroll').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
        window.location.hash = target;
    });
});


// карусель
$(document).ready(function(){
  $(".slide-one").owlCarousel({
    loop: false,
    smartSpeed: 600,
    autoplay: false,
    margin: 0,
    navText: ['<img src="img/arrow__left.png">', '<img src="img/arrow__right.png">'],
    responsive:{
        0:{
            items:2,
            dots: false,
            nav: true,
            margin: 30
        },
        1680:{
            items:3,
            dots: false,
            nav: true
        },
        1920:{
            items:3,
            dots: false,
            nav: true
        }
    }
    
  })
    $(".slide-two").owlCarousel({
        loop: true,
        smartSpeed: 500,
        autoplay: false,
        margin: 100,
        center: true,
        stagePadding: 40,
        navText: ['<img src="img/arrow__left.png">', '<img src="img/arrow__right.png">'],
        responsive:{
            0:{
                items:1,
                dots: false,
                nav: true,
                stagePadding: 420,
                margin: 450
            },
            1680:{
                items:3,
                dots: false,
                nav: true
            },
            1920:{
                stagePadding: 100,
                margin: 160,
                items:3,
                dots: false,
                nav: true
            }
        }
    
  })


    $(".slide-three").owlCarousel({
        loop: true,
        smartSpeed: 500,
        autoplay: true,
        margin: 60,
        center: true,
        navText: ['<img src="img/arrow__left_black.png">', '<img src="img/arrow__right_black.png">'],
        responsive:{
            0:{
                items:1,
                dots: false,
                nav: true,
                stagePadding: 390,
                margin: 390
            },
            1680:{
                items:3,
                dots: false,
                nav: true,
            },
            1920:{
                items:3,
                dots: false,
                nav: true,
                stagePadding: 70,
                margin: 130
            }
        }
    
  })
});


// PRELOADER
$(document).ready(function(){
    $(window).on('load', function () {
    $preloader = $('.loaderArea'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(200).fadeOut('slow');
  });
});


// MAP
ymaps.ready(init);
    var myMap;
    var myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [56.496090, 84.968427],
            zoom: 17
        });
    myPlacemark = new ymaps.Placemark(
        [56.496090, 84.968427],
        {},
        {
            preset: 'islands#icon',
            iconColor: '#f1161f'
        }
        );

    myMap.geoObjects.add(myPlacemark);

    }
    

// ANIMATE SCROLL
$(document).ready(function(){
    $(".about__left").animated("fadeInLeft");
    $(".about__right").animated("fadeInRight");
    $(".features__caption").animated("fadeInLeft");
    $(".features__carousel").animated("fadeInLeft");
    $(".offers__header").animated("fadeInDown");
    $(".sale").animated("fadeInLeft");
    $(".offers__carousel").animated("fadeInLeftBig");
    $(".offers__description").animated("fadeInUp");
    $(".offers__btn").animated("fadeInUp");
    $(".comments__brown").animated("fadeInDown");
    $(".comments__carousel").animated("fadeInRightBig");
    $(".footer__caption__left").animated("fadeInLeft");
    $(".footer__caption__map").animated("fadeInRight");
    $(".footer__caption__bottom").animated("fadeInDown");
});