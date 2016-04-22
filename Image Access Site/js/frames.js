var stopFrameRedirect = false;

function redirect(url) {
    if (!stopFrameRedirect) {
        $("div.content").fadeOut(5000, function () {
            window.location.href = url;
        });
    }
}

$(document).ready(function () {
    $(this).click(function () {
        stopFrameRedirect = true;
    }).keypress(function () {
        stopFrameRedirect = true;
    });
});

function simulateAnimation(onAnimationComplete) {
    setTimeout(onAnimationComplete, 4000);
}