var stopFrameRedirect = false;

function redirect(url) {
    if (!stopFrameRedirect) {
        window.location.href = url;
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
    setTimeout(onAnimationComplete, 2000);
}