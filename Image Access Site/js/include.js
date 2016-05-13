// include header and footer
$(function () {
    $("#includeHeader").load("../includes/header.html");
    $("#includeFooter").load("../includes/footer.html");
});


// scrolled leftside menu
$(document).ready(function () {
    var menu = $(".leftsidemenu");
    var footerHeight = $('footer');

    $(window).scroll(function () {
        moveMenu();
    });

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