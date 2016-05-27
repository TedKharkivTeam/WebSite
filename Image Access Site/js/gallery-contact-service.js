/**
 * Created by Богдан on 25.05.2016.
 */
jQuery(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        autoplaySpeed:2000
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed:2000
    });
    // $('.slider-nav--vertical').slick({
    //     slidesToShow: 5,
    //     slidesToScroll: 5,
    //     asNavFor: '.slider-for',
    //     arrows: false,
    //     centerMode: true,
    //     focusOnSelect: true,
    //     autoplay: true,
    //     autoplaySpeed:2000,
    //     vertical:true
    // });
});