/**
 * Created by Sergey on 13.05.2016.
 */
function IsIE() {
    var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
        ms_ie = true;
    }

    return ms_ie;
}
onload = function () {
    if (IsIE()) {
        var rainbowTextDivs = document.getElementsByClassName("rainbow-text");

        for (var i = 0; i < 2;) {
            rainbowTextDivs[i].setAttribute("style", "color:black;text-align:center;");
            rainbowTextDivs[i].removeAttribute("class");
        }
    }
}