$(document).ready(function () {
    $('.tab-1').click(function (e) {
        e.preventDefault();
        $('.kat-tabs-links li').removeClass('active-tab');
        $('.tab-1').addClass('active-tab');
        $('.tabs-for-kat div').removeClass('tab-content-hide');
        $(".tab1").addClass('tab-content-hide');
    });

    $('.tab-2').click(function (e) {
        e.preventDefault();
        $('.kat-tabs-links li').removeClass('active-tab');
        $('.tab-2').addClass('active-tab');
        $('.tabs-for-kat div').removeClass('tab-content-hide');
        $(".tab2").addClass('tab-content-hide');
    });

    $('.tab-3').click(function (e) {
        e.preventDefault();
        $('.kat-tabs-links li').removeClass('active-tab');
        $('.tab-3').addClass('active-tab');
        $('.tabs-for-kat div').removeClass('tab-content-hide');
        $(".tab3").addClass('tab-content-hide');
    });

});