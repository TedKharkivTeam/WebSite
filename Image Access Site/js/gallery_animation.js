var startTimeout = 700;
var animationDuration = 3000;
var imagesCount = window.imagesCount;

animationPresets = {
    "preset_for_3_images": {
        "image_0": {
            stage1: {left: "0", top: "10px", width: "45%", height: "45%"},
            stage2: {left: "10%", top: "10%"}
        },
        "image_1": {
            stage1: {left: "52%", top: "10px", width: "45%", height: "45%"},
            stage2: {left: "48%", top: "10%"}
        },
        "image_2": {
            stage1: {top: "52%", left: "28%", width: "45%", height: "45%"},
            stage2: {top: "48%"}
        }
    },
    "preset_for_4_images": {
        "image_0": {
            stage1: {left: "0", top: "0", width: "48%", height: "48%"},
            stage2: {left: "1%", top: "1%"}
        },
        "image_1": {
            stage1: {left: "51%", top: "0", width: "48%", height: "48%"},
            stage2: {left: "50%", top: "1%"}
        },
        "image_2": {
            stage1: {left: "0",  top: "52%", width: "48%", height: "48%"},
            stage2: {left: "1%", top: "51%"}
        },
        "image_3": {
            stage1: {left: "51%", top: "52%", width: "48%", height: "48%"},
            stage2: {left: "50%", top: "51%"}
        }
    }
};

$(document).ready(function () {
    var $container = $(".gallery-container");
    var images = $(".gallery-container .gallery-image");

    var currentIndexes = [];
    var previousIndexes = [];

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateIndexes(number) {
        previousIndexes = currentIndexes;
        currentIndexes = [];

        for (var i = 0; i < number; i++) {
            var index = getRandomInt(0, images.length - 1);

            while (currentIndexes.contains(index) || previousIndexes.contains(index)) {
                index = getRandomInt(0, images.length - 1);
            }

            currentIndexes.push(index);
        }

        return currentIndexes;
    }

    function getPreset(count) {
        if (count == 3) {
            return animationPresets['preset_for_3_images'];
        } else {
            return animationPresets['preset_for_4_images'];
        }
    }

    function animateImages(number, timeout) {
        var reseted = false;
        var fadeIn = false;
        var imgs = [];

        generateIndexes(number);
        for (var k in currentIndexes) {
            if (currentIndexes.hasOwnProperty(k)) {
                imgs.push(images[currentIndexes[k]]);
            }
        }

        setTimeout(function () {
            var preset = getPreset(number);

            $(".gallery-container .gallery-image").fadeOut(animationDuration);
            imgs.forEach(function (img, index) {
                var $defaultImage = $(img);
                var $image = $(img).clone().addClass("animated").appendTo($container);
                var $imgPosition = $defaultImage.position();
                var $imgWidth = $defaultImage.width();
                var $imgHeight = $defaultImage.height();
                $image.css({left: $imgPosition.left, top: $imgPosition.top, "z-index": 20000 + index});

                $image.animate(preset["image_" + index].stage1, animationDuration, function onFirstStageComplete() {
                    $image.animate(preset["image_" + index].stage2, animationDuration, function onSecondStageComplete() {
                        setTimeout(function () {
                            if(!fadeIn) {
                                $(".gallery-container .gallery-image").fadeIn(animationDuration);
                                fadeIn = true;
                            }
                            $image.animate({
                                left: $imgPosition.left,
                                top: $imgPosition.top,
                                width: $imgWidth,
                                height: $imgHeight
                            }, animationDuration, function ResetImages() {
                                $image.remove();
                                if (!reseted) {
                                    reseted = true;
                                    animateImages(number, timeout);
                                }
                            });
                        }, timeout);
                    });
                });
            })

        }, timeout);
    }

    animateImages(imagesCount, startTimeout);
});

Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
};