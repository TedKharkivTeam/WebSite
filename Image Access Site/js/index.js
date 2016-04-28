var animationDuration = 1500;

var animatedBlock = null;
var preventDefaultAnimation = false;

var nonEduRedirectUrl = "pages/Frame_2A.html";
var eduRedirectUrl = "pages/Frame_8.html";

function isEduDocumentUrl() {
    var regexp = / \.edu|imageaccess\.com /ig;

    return regexp.test(document.referrer);
}

function glAnimate() {
    var $block;
    var pageRoot;

    if (isEduDocumentUrl()) {
        $block = $(".bscanBlock");
        pageRoot = eduRedirectUrl;
    } else {
        $block = $(".dlsgBlock");
        pageRoot = nonEduRedirectUrl;
    }

    animateBlock($block, pageRoot);
}

function animateBlock(block, pageUrl) {
    block.css("z-index", 999).animate({width: "200%", top: 0}, animationDuration, function () {
        window.location.href = pageUrl;
    });
    block.find(".text-stripe").animate({fontSize: "60px"}, animationDuration);
    block.find(".heading").animate({fontSize: "58px"}, animationDuration);
    animatedBlock = block;
}

function resetImage($element) {
    $element.find(".text-stripe").stop(true, false);
    $element.find(".heading").stop(true, false);
    var defaultTop = $element.attr("data-default-top");
    var defaultWidth = $element.attr("data-default-width");

    $element.animate({width: defaultWidth, top: defaultTop}, animationDuration, function () {
        $element.css("z-index", 0);
    });
    $element.find(".text-stripe").animate({fontSize: "18px"}, animationDuration);
    $element.find(".heading").animate({fontSize: "16px"}, animationDuration);
    animatedBlock = null;
}

$(function () {
    //.homepagepictures (margin-top = 70px + margin-bottom = 30px) * 2 = 200;
    var height = 200 + $('.homepagepictures').height() * 2;

    var $container = $("#home-container").css({minHeight: height < 900 ? 900 : height + "px"});
    console.log($container);

    setTimeout(function () {
        console.log('start shit');
        $(".homepagepictures").each(function () {
                var $block = $(this);
                $block.css("top", $block.position().top + 86 + "px");
                $block.attr("data-default-top", $block.position().top + 86 + "px");
                $block.attr("data-default-width", $container.width() / 100 * 80 + 10 + "px");
            })
            .addClass("animate-image")
            .css("width", $container.width() / 100 * 80 + 10 + "px")
            .appendTo("body");

        setTimeout(function () {
            if (!preventDefaultAnimation) {
                glAnimate();
            }
        }, 1000);
    }, 100);

    $(".homepagepictures").click(function (e) {
        preventDefaultAnimation = true;
        var currentBlock = $(this);
        var blockId = currentBlock.attr("id");
        e.preventDefault();

        var url = blockId !== "dlsg-banner" ? eduRedirectUrl : nonEduRedirectUrl;

        if (animatedBlock) {
            if (animatedBlock.attr("id") === blockId) {
                animatedBlock.css("z-index", 1).stop(true, false);

                resetImage(animatedBlock);
            } else {
                $(".homepagepictures").css("z-index", 0).stop(true, false);
                resetImage(animatedBlock);

                animateBlock(currentBlock, url);
            }
        } else {
            animateBlock(currentBlock, url);
        }
    });
});