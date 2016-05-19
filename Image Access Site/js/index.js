//All timings in milliseconds
var animationDuration = 1500;
var animationStartDelay = 2000;

//Urls to redirect
var nonEduRedirectUrl = "pages/Frame_8.html";
var eduRedirectUrl = "pages/Frame_2A.html";

'use strict';

$(document).ready(function () {
    //MISC Flags
    var preventDefaultAnimation = false;
    var currentAnimatedBlockName = null;
    var currentAnimatedBlock = null;

    var dlsgBlock, dlsgLogoBlock, dlsgDefaultWidth, dlsgDefaultPostions, dlsgLogoClone, bscanBlock, bscanLogoBlock, bscanDefaultWidth, bscanDefaultPostions, bscanLogoClone;

    //Prepare blocks for animation.
    setTimeout(function () {
        //Prepare DLSG block clone for animation
        dlsgBlock = $('#dlsg-banner');
        dlsgLogoBlock = $('#dlsg-banner .logo-block');
        dlsgDefaultWidth = dlsgLogoBlock.width();
        dlsgDefaultPostions = dlsgLogoBlock.position();

        dlsgLogoClone = dlsgLogoBlock.clone().appendTo("#home-container");
        dlsgLogoClone.css({
            position: 'absolute',
            zIndex: 1,
            width: dlsgDefaultWidth,
            top: dlsgDefaultPostions.top,
            left: dlsgDefaultPostions.left
        });
        dlsgLogoClone.find('img').css({width: '80%'});
        dlsgLogoClone.click(function (e) {
            e.preventDefault();
            onClickHandler('dlsg', dlsgLogoClone);
        });
        dlsgLogoBlock.css('opacity', 0.01);


        //Prepare BSCAN block clone for animation
        bscanBlock = $('#bscan-banner');
        bscanLogoBlock = $('#bscan-banner .logo-block');
        bscanDefaultWidth = bscanLogoBlock.width();
        bscanDefaultPostions = bscanLogoBlock.position();

        bscanLogoClone = bscanLogoBlock.clone().appendTo("#home-container");
        bscanLogoClone.css({
            position: 'absolute',
            zIndex: 1,
            width: bscanDefaultWidth,
            top: bscanDefaultPostions.top,
            left: bscanDefaultPostions.left
        });
        bscanLogoClone.find('img').css({width: '80%'});
        bscanLogoClone.click(function (e) {
            e.preventDefault();
            onClickHandler('bscan', bscanLogoClone);
        });
        bscanLogoBlock.css('opacity', 0.01);

    }, animationStartDelay - animationStartDelay / 4);

    /**
     * Animation for blocks.
     * @param blockName - block name.
     * @param pageUrl - pageUrl to redirect after animation
     * @param timeout - timeout before start animation
     */
    function animateBlock(blockName, pageUrl, timeout) {
        timeout = timeout || 0;

        setTimeout(function () {
            if (blockName == 'dlsg') {
                //Stop previous animation queue without forcing it to finish state
                dlsgLogoClone.stop(true, false);

                //Hide second block
                bscanLogoClone.fadeOut({duration: animationDuration, queue: false});
                //Animate block to new sizes and position
                dlsgLogoClone.css({opacity: 1}).animate({
                    top: 0,
                    left: 0,
                    width: '100%'
                }, animationDuration, function onAnimationComplete() {
                    window.location.href = pageUrl;
                });
            } else {
                //Stop previous animation queue without forcing it to finish state
                bscanLogoClone.stop(true, false);

                //Hide second block
                dlsgLogoClone.fadeOut({duration: animationDuration, queue: false});
                //Animate block to new sizes and position
                bscanLogoClone.css({opacity: 1}).animate({
                    top: 0,
                    left: 0,
                    width: '100%'
                }, animationDuration, function onAnimationComplete() {
                    window.location.href = pageUrl;
                });
            }

            //Hide background block
            dlsgBlock.stop(true, false);
            dlsgBlock.animate({opacity: 0}, animationDuration);
            bscanBlock.stop(true, false);
            bscanBlock.animate({opacity: 0}, animationDuration);
        }, timeout);
    }

    /**
     * Animation. Reset blocks to their default positions
     * @param blockName - block name.
     */
    function resetBlock(blockName) {
        if (blockName == 'dlsg') {
            //Stop previous animation queue without forcing it to finish state
            dlsgLogoClone.stop(true, false);
            bscanLogoClone.stop(true, false);

            //Animate block to default positions and sizes
            bscanLogoClone.fadeIn({duration: animationDuration, queue: false});
            dlsgLogoClone.animate({
                width: dlsgDefaultWidth,
                top: dlsgDefaultPostions.top,
                left: dlsgDefaultPostions.left
            }, animationDuration);
        } else {
            //Stop previous animation queue without forcing it to finish state
            bscanLogoClone.stop(true, false);
            dlsgLogoClone.stop(true, false);

            //Animate block to default positions and sizes
            dlsgLogoClone.fadeIn({duration: animationDuration, queue: false});
            bscanLogoClone.animate({
                width: bscanDefaultWidth,
                top: bscanDefaultPostions.top,
                left: bscanDefaultPostions.left
            }, animationDuration);
        }

        //Animate block to default positions and sizes
        dlsgBlock.stop(true, false);
        dlsgBlock.animate({opacity: 1}, animationDuration);
        bscanBlock.stop(true, false);
        bscanBlock.animate({opacity: 1}, animationDuration);
    }

    /**
     * Handler for click event from block.
     * @param blockName - block name.
     * @param blockElement - block element.
     */
    function onClickHandler(blockName, blockElement) {
        if (!preventDefaultAnimation) preventDefaultAnimation = true;

        var pageUrl;
        if (blockName == 'dlsg') {
            pageUrl = eduRedirectUrl;
        } else {
            pageUrl = nonEduRedirectUrl;
        }

        if (currentAnimatedBlockName) {
            if (currentAnimatedBlockName == blockName) {
                //Block already animated. Just stop animation.
                resetBlock(blockName);

                //We're gonna stop animation. Unset currentAnimatedBlockName flag.
                currentAnimatedBlockName = null;
                currentAnimatedBlock = null;
            } else {
                //Block is not animate but here is another animated block.
                //Stop existing animation and animate new block
                resetBlock(currentAnimatedBlockName);
                animateBlock(blockName, pageUrl, animationDuration / 2);

                //Set selected block as currently animated block
                currentAnimatedBlockName = blockName;
                currentAnimatedBlock = blockElement;
            }
        } else {
            //Animation isn't started yet. Start animation for block.
            animateBlock(blockName, pageUrl);

            //Set selected block as currently animated block
            currentAnimatedBlockName = blockName;
            currentAnimatedBlock = blockElement;
        }
    }

    /**
     * Check document referrer. If .edu or imageaccess.com exists in document.referrer;
     * @returns {boolean}
     */
    function isEduReferrerUrl() {
        var regexp = / \.edu|imageaccess\.com /ig;

        return !regexp.test(document.referrer);
    }

    /**
     * Function that resizing banners.
     */
    function resizeBanners() {
        dlsgDefaultWidth = dlsgLogoBlock.width();
        dlsgDefaultPostions = dlsgLogoBlock.position();
        dlsgLogoClone.css({
            width: dlsgDefaultWidth,
            top: dlsgDefaultPostions.top,
            left: dlsgDefaultPostions.left
        });

        bscanDefaultWidth = bscanLogoBlock.width();
        bscanDefaultPostions = bscanLogoBlock.position();
        bscanLogoClone.css({
            width: bscanDefaultWidth,
            top: bscanDefaultPostions.top,
            left: bscanDefaultPostions.left
        });
    }

    /**
     * Throttling function. Use it to decrease resource usage
     * (for example calling function trough throttle in resize event)
     * @param fn - callback function that will be throttled.
     * @param threshhold - throttling treshhold.
     * @param scope - scope that should be binded to callback
     * @returns {Function}
     */
    function throttle(fn, threshhold, scope) {
        threshhold || (threshhold = 250);
        var last,
            deferTimer;
        return function () {
            var context = scope || this;

            var now = +new Date,
                args = arguments;
            if (last && now < last + threshhold) {
                // hold on to it
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function () {
                    last = now;
                    fn.apply(context, args);
                }, threshhold);
            } else {
                last = now;
                fn.apply(context, args);
            }
        };
    }

    //Window resize event listener
    $(window).resize(throttle(resizeBanners, 250));

    //Start default animation.
    setTimeout(function () {
        if (preventDefaultAnimation) return 'Default animation stopped';

        //Check if visitor came from .edu/imageaccess.com sites
        if (isEduReferrerUrl()) {
            currentAnimatedBlockName = 'dlsg';
            currentAnimatedBlock = dlsgLogoClone;
            animateBlock('dlsg', eduRedirectUrl);
        } else {
            currentAnimatedBlockName = 'bscan';
            currentAnimatedBlock = bscanLogoClone;
            animateBlock('bscan', nonEduRedirectUrl);
        }
    }, animationStartDelay);
});