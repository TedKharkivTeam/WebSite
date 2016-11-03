jQuery(function () {
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed:2000
    });
});