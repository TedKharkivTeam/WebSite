$(function () {
    $('.gallery-photo').gallery();

    if ($('.gallery').hasClass('gallery-video')) {
        $('.gallery-video').gallery();
    }

    if ($('.gallery').hasClass('gallery-pdf')) {
        $('.gallery-pdf').gallery();
    }
});