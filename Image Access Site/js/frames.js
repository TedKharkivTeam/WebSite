var stopFrameRedirect = false;

function redirect(url) {
    if (!stopFrameRedirect) {
        window.location.href = url;
    }
}

function fadeIn(onAnimationComplete) {
    $(".content").hide();
    $(".content").fadeIn(4000, onAnimationComplete);
}

$(document).ready(function () {
    $(this).click(function () {
        stopFrameRedirect = true;
    }).keypress(function () {
        stopFrameRedirect = true;
    });
});

function simulateAnimation(onAnimationComplete, duration) {
    duration = duration || 4000;
    setTimeout(onAnimationComplete, duration);
}