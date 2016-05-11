$(document).ready(function () {
    var menu = $(".leftsidemenu");
    var footerHeight = $('footer');
    var defaultOffsetTop = menu.offset().top;
    var links = menu.find('a');

    links.each(function (index) {
        $(this).on("click", function (event) {

            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id = $(this).attr('href');
            var top = 0;

            if (index != 0) {
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            }


            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500, function onAnimationFinished() {
                $('.selected').removeClass('selected');
                $(event.target).parent().addClass('selected');
            });
        });
    });

    scrollSpy();

    $(window).scroll(throttle(scrollSpy, 150));

    $(window).scroll(function () {
        moveMenu();
    });

    function scrollSpy() {
        //Getting scroll top offset (excluding header height);
        var fromTop = $(this).scrollTop() + $('header').outerHeight() + 30;

        //Filter items. Getting only items with .top() value smaller than current fromTop position.
        var items = $('.scrollSpy').map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });

        //Removing previous class .selected from all items
        $('.selected').removeClass('selected');
        //And add this call only to the last filtered item.
        var id = $(items[items.length - 1]).attr('id');
        $("[href='#" + id + "']").parent().addClass('selected');
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

    function moveMenu() {
        var newOffset = $(window).scrollTop();
        if (newOffset > 0) {
            var maxNewOffset = $('.content').height() - menu.height() - footerHeight.height();
            if (newOffset > maxNewOffset) {
                menu.css({top: maxNewOffset});
            } else {
                menu.css({top: newOffset});
            }
        } else {
            menu.css({top: 0});
        }
    }
});