var startTimeout = 700;
var animationDuration = 3000;
var imagesCount = 4;

var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function (callback) {
        return setTimeout(callback, 16.67);
    };

var animationPresets = {
    "preset_for_3_images": {
        "image_0": {
            stage1: {left: "0", top: "10px", width: "87%", height: "64%"},
            stage2: {left: "-11%", top: "0"}
        },
        "image_1": {
            stage1: {left: "52%", top: "10px", width: "65%", height: "80%"},
            stage2: {left: "50%", top: "16%"}
        },
        "image_2": {
            stage1: {top: "39%", left: "4%", width: "90%", height: "66%"},
            stage2: {top: "48%"}
        }
    },
    "preset_for_4_images": {
        "image_0": {
            stage1: {left: "-10%", top: "-4%", width: "52%", height: "52%"},
            stage2: {left: "-5%", top: "-10%"}
        },
        "image_1": {
            stage1: {left: "54%", top: "-6%", width: "48%", height: "48%"},
            stage2: {left: "48%", top: "-6%"}
        },
        "image_2": {
            stage1: {left: "-4%",  top: "52%", width: "48%", height: "48%"},
            stage2: {left: "-1%", top: "43%"}
        },
        "image_3": {
            stage1: {left: "51%", top: "52%", width: "50%", height: "50%"},
            stage2: {left: "48%", top: "43%"}
        }
    }
};

function aminate(onAnimationComplete) {
    $(document).ready(function () {
        var canvas = document.getElementById("animation-canvas");
        var context = canvas.getContext("2d");
        context.translate(0.5, 0.5);

        var allImages = $(".gallery-container .gallery-image");
        var $container = $(".gallery-container");
        var images = $(".gallery-container .animate-image");
        var animatedImages = [];
        imagesCount = images.length;

        // setting canvas height and width equals to container;
        var $canvas = $("#animation-canvas");
        setTimeout(function () {
            $canvas.attr("width", $container.width());
            $canvas.attr("height", $container.height());
        }, 500);

        function getPreset(count) {
            if (count === 3) {
                return animationPresets["preset_for_3_images"];
            } else {
                return animationPresets["preset_for_4_images"];
            }
        }

        (function animateImages(number, timeout) {
            setTimeout(function () {
                var preset = getPreset(number);
                images.each(function (index) {
                    var $defaultImage = $(this);
                    var $image = $(this).clone().addClass("animated-image-block").appendTo($container);
                    var $image2 = $(this).clone().appendTo($container);

                    var $imgPosition = $defaultImage.position();
                    var defaultWidth = $defaultImage.width();
                    var defaultHeight = $defaultImage.height();

                    $image.css({ left: $imgPosition.left, top: $imgPosition.top, "z-index": 20000 + index });
                    $image2.css({ left: $imgPosition.left, top: $imgPosition.top, "z-index": 10000 + index, position: "absolute" });
                    animatedImages.push({
                        default_position: $imgPosition,
                        default_width: defaultWidth,
                        default_height: defaultHeight,
                        clone_img: $image
                    });

                    $image.animate(preset["image_" + index].stage1, animationDuration, function onFirstStageComplete() {
                        $image.animate(preset["image_" + index].stage2, animationDuration / 3, onAnimationComplete);
                    });
                });
                $(".gallery-container .gallery-image:not(.animated-image-block)").fadeOut(animationDuration + 1000);
                $canvas.fadeOut(animationDuration + 1000);
                render();
            }, timeout);
        })(imagesCount, startTimeout);

        function render() {
            // clear canvas
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = "#35ea1c";
            if (animatedImages.length > 0) {
                animatedImages.forEach(function (img) {
                    var pointsObj = getImagePositions(img);
                    var startPoints = pointsObj.startPoints;
                    var endPoints = pointsObj.endPoints;

                    if (startPoints.center.top <= endPoints.center.top) {
                        if (startPoints.center.left >= endPoints.center.left) {
                            context.beginPath();
                            context.moveTo(endPoints.top_left.left, endPoints.top_left.top);
                            context.lineTo(startPoints.top_left.left, startPoints.top_left.top);
                            context.lineTo(startPoints.bottom_right.left, startPoints.bottom_right.top);
                            context.lineTo(endPoints.bottom_right.left, endPoints.bottom_right.top);
                            context.fill();
                        } else {
                            context.beginPath();
                            context.moveTo(endPoints.top_right.left, endPoints.top_right.top);
                            context.lineTo(startPoints.top_right.left, startPoints.top_right.top);
                            context.lineTo(startPoints.bottom_left.left, startPoints.bottom_left.top);
                            context.lineTo(endPoints.bottom_left.left, endPoints.bottom_left.top);
                            context.fill();
                        }
                    } else {
                        if (startPoints.center.left >= endPoints.center.left) {
                            // draw right to left rect
                            context.beginPath();
                            context.moveTo(endPoints.top_right.left, endPoints.top_right.top);
                            context.lineTo(startPoints.top_right.left, startPoints.top_right.top);
                            context.lineTo(startPoints.bottom_left.left, startPoints.bottom_left.top);
                            context.lineTo(endPoints.bottom_left.left, endPoints.bottom_left.top);
                            context.fill();
                        } else {
                            // draw left to right rect
                            context.beginPath();
                            context.moveTo(endPoints.top_left.left, endPoints.top_left.top);
                            context.lineTo(startPoints.top_left.left, startPoints.top_left.top);
                            context.lineTo(startPoints.bottom_right.left, startPoints.bottom_right.top);
                            context.fill();
                        }
                    }
                });
            }
            requestAnimationFrame(render);
        }

        function getImagePositions(obj) {
            // start data
            var startPos = obj.default_position;
            var startWidth = obj.default_width;
            var startHeight = obj.default_height;

            // current image data
            var imgPos = obj.clone_img.position();
            var imgWidth = obj.clone_img.width();
            var imgHeight = obj.clone_img.height();

            return {
                startPoints: { // bounding box for starting image
                    top_left: { top: startPos.top, left: startPos.left },
                    top_right: { top: startPos.top, left: startPos.left + startWidth },
                    bottom_left: { top: startPos.top + startHeight, left: startPos.left },
                    bottom_right: { top: startPos.top + startHeight, left: startPos.left + startWidth },
                    center: { top: startPos.top + startHeight / 2, left: startPos.left + startWidth / 2 }
                },
                endPoints: { // bounding box for animated image
                    top_left: { top: imgPos.top, left: imgPos.left },
                    top_right: { top: imgPos.top, left: imgPos.left + imgWidth },
                    bottom_left: { top: imgPos.top + imgHeight, left: imgPos.left },
                    bottom_right: { top: imgPos.top + imgHeight, left: imgPos.left + imgWidth },
                    center: { top: imgPos.top + imgHeight / 2, left: imgPos.left + imgWidth / 2 }
                }
            }
        }
    });
}