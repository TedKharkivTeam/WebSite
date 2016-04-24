$(document).ready(function () {
    $("#slide_contact").responsiveSlides({
        namespace: "list",
        timeout: 10000,
        startTimeout: 5000
    });
});
$(document).ready(function () {
    $("#slide_contact2").responsiveSlides({
        namespace: "list",
        timeout: 10000
    });
});

(function ($, window, i) {
    $.fn.responsiveSlides = function (options) {
        // Default settings
        var settings = $.extend({
            auto: true,             // Boolean: Animate automatically, true or false
            speed: 500,             // Integer: Speed of the transition, in milliseconds
            timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
            pager: false,           // Boolean: Show pager, true or false
            nav: false,             // Boolean: Show navigation, true or false
            random: true,          // Boolean: Randomize the order of the slides, true or false
            pause: false,           // Boolean: Pause on hover, true or false
            pauseControls: true,    // Boolean: Pause when hovering controls, true or false
            prevText: "Previous",   // String: Text for the "previous" button
            nextText: "Next",       // String: Text for the "next" button
            maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
            navContainer: "",       // Selector: Where auto generated controls should be appended to, default is after the <ul>
            manualControls: "",     // Selector: Declare custom pager navigation
            namespace: "rslides",   // String: change the default namespace used
            before: $.noop,         // Function: Before callback
            after: $.noop           // Function: After callback
        }, options);

        return this.each(function () {
            // Index for namespacing
            i++;

            var $this = $(this),

                // Local variables
                vendor,

                // Helpers
                index = 0,
                $slide = $this.children(),
                length = $slide.size(),
                fadeTime = parseFloat(settings.speed),
                waitTime = parseFloat(settings.timeout),
            maxw = parseFloat(settings.maxwidth),

            // Namespacing
            namespace = settings.namespace,
            namespaceIdx = namespace + i, // Classes
            visibleClass = namespaceIdx + "_on",
            slideClassPrefix = namespaceIdx + "_s",

            // Styles for visible and hidden slides
            visible = { "float": "left", position: "relative", opacity: 1, zIndex: 2 },
            hidden = { "float": "none", position: "absolute", opacity: 0, zIndex: 1 },

            // Detect transition support
            supportsTransitions = (function () {
                var docBody = document.body || document.documentElement;
                var styles = docBody.style;
                var prop = "transition";
                if (typeof styles[prop] === "string") {
                    return true;
                }
                // Tests for vendor specific prop
                vendor = ["Moz", "Webkit", "Khtml", "O", "ms"];
                prop = prop.charAt(0).toUpperCase() + prop.substr(1);
                var j;
                for (j = 0; j < vendor.length; j++) {
                    if (typeof styles[vendor[j] + prop] === "string") {
                        return true;
                    }
                }
                return false;
            })(),

            // Fading animation
            slideTo = function (idx) {
                settings.before(idx);
                // If CSS3 transitions are supported
                if (supportsTransitions) {
                    $slide
                        .removeClass(visibleClass)
                        .css(hidden)
                        .eq(idx)
                        .addClass(visibleClass)
                        .css(visible);
                    index = idx;
                    setTimeout(function () {
                        settings.after(idx);
                    }, fadeTime);
                    // If not, use jQuery fallback
                } else {
                    $slide
                        .stop()
                        .fadeOut(fadeTime, function () {
                            $(this)
                                .removeClass(visibleClass)
                                .css(hidden)
                                .css("opacity", 1);
                        })
                        .eq(idx)
                        .fadeIn(fadeTime, function () {
                            $(this)
                                .addClass(visibleClass)
                                .css(visible);
                            settings.after(idx);
                            index = idx;
                        });
                }
            };

            // Random order
            if (settings.random) {
                $slide.sort(function () {
                    return (Math.round(Math.random()) - 0.5);
                });
                $this
                    .empty()
                    .append($slide);
            }

            // Add ID's to each slide
            $slide.each(function (i) {
                this.id = slideClassPrefix + i;
            });

            // Add max-width and classes
            $this.addClass(namespace + " " + namespaceIdx);
            if (options && options.maxwidth) {
                $this.css("max-width", maxw);
            }

            // Hide all slides, then show first one
            $slide
                .hide()
                .css(hidden)
                .eq(0)
                .addClass(visibleClass)
                .css(visible)
                .show();

            // CSS transitions
            if (supportsTransitions) {
                $slide
                    .show()
                    .css({
                        // -ms prefix isn't needed as IE10 uses prefix free version
                        "-webkit-transition": "opacity " + fadeTime + "ms ease-in-out",
                        "-moz-transition": "opacity " + fadeTime + "ms ease-in-out",
                        "-o-transition": "opacity " + fadeTime + "ms ease-in-out",
                        "transition": "opacity " + fadeTime + "ms ease-in-out"
                    });
            }

            // Only run if there's more than one slide
            if ($slide.size() > 1) {
                // Make sure the timeout is at least 100ms longer than the fade
                if (waitTime < fadeTime + 100) {
                    return;
                }

                var animateSlides = function () {
                    // Clear the event queue
                    $slide.stop(true, true);

                    var idx = index + 1 < length ? index + 1 : 0;

                    slideTo(idx);
                };

                // Auto cycle
                if (settings.auto) {
                    if (settings.startTimeout) {
                        setTimeout(function () {
                            animateSlides();
                            setInterval(animateSlides, waitTime);
                        }, settings.startTimeout);
                    } else {
                        setInterval(animateSlides, waitTime);
                    }
                }
            }

            // Max-width fallback
            if (typeof document.body.style.maxWidth === "undefined" && options.maxwidth) {
                var widthSupport = function () {
                    $this.css("width", "100%");
                    if ($this.width() > maxw) {
                        $this.css("width", maxw);
                    }
                };

                // Init fallback
                widthSupport();
                $(window).bind("resize", function () {
                    widthSupport();
                });
            }
        });
    };
})(jQuery, this, 0);