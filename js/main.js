$(document).ready(() => {
    $('.viewed__items').slick({
        infinite: true,
        speed: 300,
        arrows: false,
        dots: false,
        slidesToShow: 4,
        responsive: [{
                breakpoint: 1144,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 425,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.main__items').slick({
        infinite: true,
        speed: 700,
        arrows: true,
        dots: false,
        initialSlide: 0,
        slidesToShow: 1
    });

    $('.header__menu').click(() => {
        $('.header__container').toggleClass('menu-open');
    });

    $('.title--open-1').click(() => {
        $('.item--1>.footer__menu').toggleClass('menu-open');
    });
    $('.title--open-2').click(() => {
        $('.item--2>.footer__menu').toggleClass('menu-open');
    });
    $('.title--open-3').click(() => {
        $('.item--3>.footer__menu').toggleClass('menu-open');
    });




});