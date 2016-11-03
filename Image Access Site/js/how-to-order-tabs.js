$(document).ready(function () {

    $('.content-wrapper > div').hide();
    var firstElem = $('.content-wrapper > div')[0];
    $(firstElem).show();
    $($('.content-links li')[0]).addClass('active-link');
    $('.content-links li').each(function (i) {
        $(this).click(function (e) {
            e.preventDefault();
            if ($(this).hasClass('active-link')){

            } else {
                $('.content-links li').removeClass('active-link');
                $(this).addClass('active-link');
                $('.content-wrapper > div').each(function (j) {
                    if (j == i) {
                        $('.content-wrapper > div').hide(1700);
                        $(this).show(1700);
                    }
                })
            }
        });
    });
});