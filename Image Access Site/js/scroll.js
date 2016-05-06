$(document).ready(function () {
    $(".leftsidemenu").find('a').on("click", function (event) {

        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500, function onAnimationFinished() {
            $('.selected').removeClass('selected');
            $(event.target).parent().addClass('selected');
        });
    });

    scrollSpy();

    $(window).scroll(scrollSpy);

    function scrollSpy() {
        //Getting scroll top offset (excluding header height);
        var fromTop = $(this).scrollTop() + $('header').outerHeight()+30;

        //Filter items. Getting only items with .top() value smaller than current fromTop position.
        var items = $('.scrollSpy').map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });

        //Removing previous class .selected from all items
        $('.selected').removeClass('selected');
        //And add this call only to the last filtered item.
        var id = $(items[items.length - 1]).attr('id');
        $("[href='#"+id+"']").parent().addClass('selected');
    }
});