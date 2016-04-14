// for debug

// include autozoom.js
// function include(url) {
//     var script = document.createElement('script');
//     script.src = url;
//     document.getElementsByTagName('head')[0].appendChild(script);
// }

// include("js/autozoom.js");

function glFromEdu() {
    var regexp = / \.edu|imageaccess\.com /ig;
    var referrer = document.referrer;

    if (referrer.search(regexp) != -1)
        return true;
    else
        return false;
}

function glAnimate() {
    var block;
    var imageRoot;
    var pageRoot;

    if (glFromEdu() == false) {
        block = $(".dlsgBlock");
        imageRoot = 'images/bscan.jpg';
        pageRoot = 'pages/BscanPage.html';
    }
    else {
        block = $(".bscanBlock");
        imageRoot = 'images/dlsg.jpg';
        pageRoot = 'pages/DlsgPage.html';
    }


}
