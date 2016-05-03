var $j = jQuery.noConflict();
$j(function() {
    SlideShowScroller.initialize();
});
var SlideShowScroller = (function() {
    var _scrollerApi;
    var _scrollerConfig;
    var _isPaused = false;
    var _timerInterval;
    var initialize = function() {
        configureScrollable();
        $j('a.play').bind('click', playButtonClickHandler);
        setTimeout(easingHandler, 4000);
        resetTimer();
        startTimer();
    }
    var startTimer = function() {
        setInterval(autoPlayHandler, 4000);
    }
    var resetTimer = function() {
        _timerInterval = 8;
    }
    var configureScrollable = function() {
        /*var root = $j("div#Feature").scrollable({*/
        var root = $j(".f5-pane > .scrollable").scrollable({
            easing: 'easeInOutQuart',
            items: '.scroll_items',
            speed: 4000,
            steps: 1,
            circular: true,
            onSeek: onSeekHandler
        });
        $j.easing.easeInOutQuart = function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
        _scrollerApi = root.data("scrollable");
        _scrollerConfig = _scrollerApi.getConf();
    }
    var onSeekHandler = function() {
        resetTimer();
    }
    var playButtonClickHandler = function() {
        if (_isPaused) {
            _isPaused = false;
        } else {
            _isPaused = true;
        }
        resetTimer();
        $j(this).toggleClass('hover');
    }
    var autoPlayHandler = function() {
        if (_isPaused) return;
        _timerInterval--;
        if (_timerInterval < 1) {
            _scrollerApi.next();
            resetTimer();
        }
    }
    var easingHandler = function() {
        _scrollerApi.move(6);
        _scrollerConfig.easing = 'swing';
        _scrollerConfig.speed = 800;
    }
    return {
        initialize: initialize
    }
})();