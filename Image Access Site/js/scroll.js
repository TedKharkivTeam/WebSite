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

    $(window).scroll(throttle(scrollSpy, 200));

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

    function throttle(fn, threshhold, scope) {
        threshhold || (threshhold = 250);
        var last,
            deferTimer;
        return function () {
            var context = scope || this;

            var now = +new Date,
                args = arguments;
            if (last && now < last + threshhold) {
                // hold on to it
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function () {
                    last = now;
                    fn.apply(context, args);
                }, threshhold);
            } else {
                last = now;
                fn.apply(context, args);
            }
        };
    }
});