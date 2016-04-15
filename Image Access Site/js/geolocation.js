var animationDuration = 1500;



//==============================================================

var animatedBlock = null;
var preventDefaultAnimation = false;

var bscanPageRoot = '/Image Access Site/pages/Frames/Frame_2A.html';
var dlsgPageRoot = '/Image Access Site/pages/Frames/Frame_2B.html';

function glFromEdu() {
    var regexp = / \.edu|imageaccess\.com /ig;
    var referrer = document.referrer;

    if (referrer.search(regexp) != -1)
        return true;
    else
        return false;
}

function glAnimate() {
    var $block;
    var pageRoot;

    console.log(glFromEdu());

    if (glFromEdu() != false) {
        $block = $(".dlsgBlock");
        pageRoot = bscanPageRoot;
    }
    else {
        $block = $(".bscanBlock");
        pageRoot = dlsgPageRoot;
    }

    animateBlock($block, pageRoot);
}

function animateBlock(block, page_url) {
    block.css('z-index', 999).animate({width: '200%', top: 0}, animationDuration, function onAnimationComplete() { window.location = page_url; });
    block.find('.text-stripe').animate({fontSize: '60px'}, animationDuration);
    block.find('.heading').animate({fontSize: '58px'}, animationDuration);
    animatedBlock = block;
}

function resetImage($element) {
    $element.find('.text-stripe').stop(true, false);
    $element.find('.heading').stop(true, false);
    var defaultTop = $element.attr('data-default-top');
    var defaultWidth = $element.attr('data-default-width');

    $element.animate({width: defaultWidth, top: defaultTop}, animationDuration, function onAnimationComplete() { $element.css('z-index', 0); });
    $element.find('.text-stripe').animate({fontSize: '18px'}, animationDuration);
    $element.find('.heading').animate({fontSize: '16px'}, animationDuration);
    animatedBlock = null;
}

$(function () {
    var $container = $('#home-container').css({minHeight: '930px'});

    setTimeout(function () {
        $('.homepagepictures').each(function () {
            var $block = $(this);
            $block.css('top', $block.position().top + 86 + 'px');
            $block.attr('data-default-top', $block.position().top + 86 + 'px');
            $block.attr('data-default-width', $container.width() / 100 * 80 + 10 + 'px');
        })
            .addClass('animate-image')
            .css('width', $container.width() / 100 * 80 + 10 + 'px')
            .appendTo('body');

        setTimeout(function () {
            if(!preventDefaultAnimation) {
                glAnimate();
            }
        }, 4000);
    }, 50);

    $('.homepagepictures').click(function (e) {
        preventDefaultAnimation = true;
        var currentBlock = $(this);
        var blockId = currentBlock.attr('id');
        e.preventDefault();


        if(animatedBlock) {
            if(animatedBlock.attr('id') == blockId) {
                animatedBlock.css('z-index', 0).stop(true, false);

                resetImage(animatedBlock);
            } else {
                $('.homepagepictures').css('z-index', 0).stop(true, false);
                resetImage(animatedBlock);

                if(blockId == "dlsg-banner") {
                    animateBlock(currentBlock, dlsgPageRoot);
                } else {
                    animateBlock(currentBlock, bscanPageRoot);
                }
            }
        } else {
            if(blockId == "dlsg-banner") {
                animateBlock(currentBlock, dlsgPageRoot);
            } else {
                animateBlock(currentBlock, bscanPageRoot);
            }
        }        
    })
});
