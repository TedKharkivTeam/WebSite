var startTimeout = 700;
var animationDuration = 3000;
var imagesCount = 4;

animationPresets = {
    "preset_for_3_images": {
        "image_0": {
            stage1: {left: "0", top: "10px", width: "45%", height: "45%"},
            stage2: {left: "10%", top: "10%"}
        },
        "image_1": {
            stage1: {left: "52%", top: "10px", width: "45%", height: "45%"},
            stage2: {left: "48%", top: "14%"}
        },
        "image_2": {
            stage1: {top: "52%", left: "28%", width: "45%", height: "45%"},
            stage2: {top: "48%"}
        }
    },
    "preset_for_4_images": {
        "image_0": {
            stage1: {left: "0", top: "0", width: "48%", height: "48%"},
            stage2: {left: "3%", top: "3%"}
        },
        "image_1": {
            stage1: {left: "51%", top: "0", width: "48%", height: "48%"},
            stage2: {left: "47%", top: "3%"}
        },
        "image_2": {
            stage1: {left: "0",  top: "52%", width: "48%", height: "48%"},
            stage2: {left: "3%", top: "47%"}
        },
        "image_3": {
            stage1: {left: "51%", top: "52%", width: "48%", height: "48%"},
            stage2: {left: "47%", top: "47%"}
        }
    }
};

$(document).ready(function () {
    var $container = $(".gallery-container");
    var images = $(".gallery-container .animate-image");
    imagesCount = images.length;

    function getPreset(count) {
        if (count == 3) {
            return animationPresets['preset_for_3_images'];
        } else {
            return animationPresets['preset_for_4_images'];
        }
    }

    (function animateImages(number, timeout) {
        setTimeout(function () {
            var preset = getPreset(number);
            console.log(images);

            $(".gallery-container .gallery-image").fadeOut(animationDuration);

            images.each(function (index) {
                var $defaultImage = $(this);
                var $image = $(this).clone().addClass("animated").appendTo($container);
                var $imgPosition = $defaultImage.position();
                $image.css({left: $imgPosition.left, top: $imgPosition.top, "z-index": 20000 + index});

                $image.animate(preset["image_" + index].stage1, animationDuration, function onFirstStageComplete() {
                    $image.animate(preset["image_" + index].stage2, animationDuration / 3);
                });
            })

        }, timeout);
    })(imagesCount, startTimeout);
});