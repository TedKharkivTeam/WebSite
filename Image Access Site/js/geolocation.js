
// **********************************************************************************

// var test = "suchka.edu"; // testing purposes

var referrer = document.referrer;
var regexp = /.edu/ig;

var index = referrer.search(regexp);

// include autozoom.js
/*
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

include("js/autozoom.js");
*/

// last step - redirection
var imageRoot;
var pageRoot;

if (index != -1)
{
	imageRoot = 'images/bscan.jpg';
	pageRoot = 'pages/BscanPage.html';
}
else
{
	imageRoot = 'images/dlsg.jpg';
	pageRoot = 'pages/DlsgPage.html';
}

var ie = new ImageExpander(this, imageRoot, pageRoot);
this.href = 'javascript:void(0);';

console.log(index);
console.log(imageRoot);
console.log(pageRoot);

// **********************************************************************************
