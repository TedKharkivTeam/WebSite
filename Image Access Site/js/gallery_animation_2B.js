var startTimeout = 100;
var animationDuration = 3000;
var imagesCount = 4;
var defaultAtlasWidth = 605;

var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function (callback) {
        return setTimeout(callback, 16.67);
    };

//Total images count on frame
var totalImagesCount = 121;
//Animation presets
var animationPresets = {
    "preset_for_3_images": {
        "image_0": {
            stage1: {left: "-5%", top: "10px", width: "60%", height: "60%"},
            stage2: {left: "-2%", top: "-10px"}
        },
        "image_1": {
            stage1: {left: "52%", top: "4%", width: "52%", height: "52%"},
            stage2: {left: "46%", top: "16%"}
        },
        "image_2": {
            stage1: {top: "39%", left: "8%", width: "55%", height: "50%"},
            stage2: {top: "46%"}
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
            stage1: {left: "0", top: "52%", width: "48%", height: "48%"},
            stage2: {left: "3%", top: "47%"}
        },
        "image_3": {
            stage1: {left: "51%", top: "52%", width: "48%", height: "48%"},
            stage2: {left: "47%", top: "47%"}
        }
    }
};
//Starting positions to animate
var startingPositions = {
    'Image_0': {top: 11, left: 412.688},
    'Image_1': {top: 78.1875, left: 344.406},
    'Image_2': {top: 145.375, left: 6}
};

function animate(onAnimationComplete) {
    var canvas = document.getElementById("animation-canvas");
    var context = canvas.getContext("2d");
    context.translate(0.5, 0.5);

    var $container = $(".gallery-container");
    var containerScaleRatio = $container.width() / defaultAtlasWidth;
    var calculatedImageSizes = calculateImageSizes();
    var images = $(".gallery-container .animate-image");
    var animatedImages = [];
    imagesCount = images.length;

    function calculateImageSizes() {
        var imagesPerOneRow = Math.floor(Math.sqrt(totalImagesCount));
        var imageSize = (defaultAtlasWidth / imagesPerOneRow - 5) * containerScaleRatio;
        var marginSize = 5 * containerScaleRatio;

        return {
            width: imageSize,
            height: imageSize,
            marginRight: marginSize,
            marginBottom: marginSize
        }
    }

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
                $defaultImage
                    .css({
                        width: calculatedImageSizes.width,
                        height: calculatedImageSizes.height,
                        marginRight: calculatedImageSizes.marginRight,
                        marginBottom: calculatedImageSizes.marginBottom,
                        display: 'block'
                    });
                var $image = $(this).clone().addClass("animated-image-block").appendTo($container);
                var $image2 = $(this).clone().appendTo($container);
                $defaultImage.remove();
                var defaultWidth = calculatedImageSizes.width;
                var defaultHeight = calculatedImageSizes.height;

                startingPositions['Image_' + index].top *= containerScaleRatio;
                startingPositions['Image_' + index].left *= containerScaleRatio;

                $image.css({
                    left: startingPositions['Image_' + index].left,
                    top: startingPositions['Image_' + index].top,
                    "z-index": 20000 + index
                });
                $image2.css({
                    left: startingPositions['Image_' + index].left,
                    top: startingPositions['Image_' + index].top,
                    "z-index": 10000 + index,
                    position: "absolute"
                });


                animatedImages.push({
                    default_position: startingPositions['Image_' + index],
                    default_width: defaultWidth,
                    default_height: defaultHeight,
                    clone_img: $image
                });

                $image.animate(preset["image_" + index].stage1, animationDuration, function onFirstStageComplete() {
                    $image.animate(preset["image_" + index].stage2, animationDuration / 3, onAnimationComplete);
                });
            });
            $canvas.fadeOut(animationDuration + 1000);
            setTimeout(render, 400);
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
                top_left: {top: startPos.top, left: startPos.left},
                top_right: {top: startPos.top, left: startPos.left + startWidth},
                bottom_left: {top: startPos.top + startHeight, left: startPos.left},
                bottom_right: {top: startPos.top + startHeight, left: startPos.left + startWidth},
                center: {top: startPos.top + startHeight / 2, left: startPos.left + startWidth / 2}
            },
            endPoints: { // bounding box for animated image
                top_left: {top: imgPos.top, left: imgPos.left},
                top_right: {top: imgPos.top, left: imgPos.left + imgWidth},
                bottom_left: {top: imgPos.top + imgHeight, left: imgPos.left},
                bottom_right: {top: imgPos.top + imgHeight, left: imgPos.left + imgWidth},
                center: {top: imgPos.top + imgHeight / 2, left: imgPos.left + imgWidth / 2}
            }
        }
    }
}

function AnimateImagesLoading(callback) {
    var imagesPerSecond = 7;
    var rowsCount = Math.floor(Math.sqrt(totalImagesCount));
    var rowLoadTime = 1000 / imagesPerSecond * (rowsCount / imagesPerSecond);
    var rowHeight = $('.gallery-container').height() / rowsCount;
    var rows = [];

    for(var k = 0; k < rowsCount; k++) {
        var row = $('<div></div>').addClass('gallery-mask-stripe').css({height: rowHeight + (rowHeight / 10), top: rowHeight * k}).appendTo('.gallery-container');
        rows.push(row);
    }

    $('.gallery-hover').hide();
    rows.forEach(function (row, index) {
        setTimeout(function () {
            row.animate({left: '100%', width: 0}, rowLoadTime, function onAnimationFinished() {
                if(index == rows.length - 1) {
                    callback();
                }
                row.remove();
            });
        }, rowLoadTime * index);
    })
}

$(document).ready(function () {
    setTimeout(function () {
        AnimateImagesLoading(function () {
            animate(function () {
                simulateAnimation(function () {
                    redirect("Frame_2C.html");
                });
            });
        });
    }, 500);
});