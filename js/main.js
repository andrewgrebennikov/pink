var toggle = document.querySelector('.toggle');
var menu = document.querySelector('.header__nav');

toggle.addEventListener('click', function () {
    var checkWidth = $(window).width();
    if (menu.classList.contains('header__nav_close')) {
        menu.classList.remove('header__nav_close');
        menu.classList.add('header__nav_open');
    } else {
        menu.classList.remove('header__nav_open');
        menu.classList.add('header__nav_close');
    }
});

$(document).ready(function(){
    $(".slider__carousel").owlCarousel({
        singleItem : true,
        pagination : true,
        autoPlay : true,
        navigation : true,
        stopOnHover : true
    });
    
    $(window).resize(function(){
        var width = $(window).width();
        var height = $(window).height();
        var nav = $('.header__nav');
        if (width > 1199 && nav.hasClass('header__nav_open')) {
            nav.removeClass('header__nav_open');
            nav.addClass('header__nav_close');
        }
    });
    
    $(window).resize(function(){
        var width = $(window).width();
        var carousel = $(".rates__slider");
        if (width > 699) {
            carousel.data('owlCarousel').destroy();
            carousel.removeClass('owl-carousel');
        } else if (width < 699) {
            carousel.owlCarousel({
                singleItem : true,
                pagination : true,
                autoPlay : true,
                stopOnHover : true
            });
        }
    });
});