var stopFrameRedirect = false;

function redirect(url) {
    if (!stopFrameRedirect) {
        $("div.content").fadeOut(2500, function () {
            window.location.href = url;
        });
    }
}

function fadeIn(onAnimationComplete) {
    $("div.content").hide();
    $("div.content").fadeIn(2500, onAnimationComplete);
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