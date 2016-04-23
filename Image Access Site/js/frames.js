var stopFrameRedirect = false;

function redirect(url) {
    if (!stopFrameRedirect) {
        window.location.href = url;
    }
}

function fadeIn(onAnimationComplete) {
    $("div.content").hide();
    $("div.content").fadeIn(4000, onAnimationComplete);
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