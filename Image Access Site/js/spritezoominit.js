$(function () {
    var halfWidth = $('.example').width() / 2;


    $(".zoom48c").spritezoom({
        border: 0,
        source: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/WT48C-600_RENDER_DIAGONAL_big.png",
        zSource: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/WT48C-600_RENDER_DIAGONAL_big1.png",
        layout: "right",
        title: "WideTEK 48C",
        width: halfWidth
    });
    $(".zoom4v1A").spritezoom({
        border: 0,
        source: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/BE4V1A_RENDER_DIAGONAL_big.png",
        zSource: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/BE4V1A_RENDER_DIAGONAL_big1.png",
        layout: "right",
        title: "Bookeye 4 V1",
        width: halfWidth
    });
    $(".zoom48").spritezoom({
        border: 0,
        source: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/WT48-600_RENDER_DIAGONAL_IPAD_big.png",
        zSource: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/WT48-600_RENDER_DIAGONAL_IPAD_big1.png",
        layout: "right",
        title: "WideTEK 48",
        width: halfWidth
    });
    $(".zoom44").spritezoom({
        border: 0,
        source: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/WT44-600_RENDER_DIAGONAL_IPAD_big.png",
        zSource: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/WT44-600_RENDER_DIAGONAL_IPAD_big1.png",
        layout: "right",
        title: "WideTEK 44",
        width: halfWidth
    });
    $(".zoom36DS").spritezoom({
        border: 0,
        source: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/WT36DS-200_RENDER_DIAGONAL_big.png",
        zSource: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/WT36DS-200_RENDER_DIAGONAL_big1.png",
        layout: "right",
        title: "WideTEK 36DS",
        width: halfWidth
    });
    $(".zoom36C").spritezoom({
        border: 0,
        source: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/WT36C-600_RENDER_DIAGONAL_big.png",
        zSource: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/WT36C-600_RENDER_DIAGONAL_big1.png",
        layout: "right",
        title: "WideTEK 36C",
        width: 550
    });
    $(".zoom36").spritezoom({
        border: 0,
        source: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/WT36-600_RENDER_DIAGONAL_big.png",
        zSource: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/WT36-600_RENDER_DIAGONAL_big1.png",
        layout: "right",
        title: "WideTEK 36",
        width: halfWidth
    });
    $(".zoom25").spritezoom({
        border: 0,
        source: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/WT25-600_RENDER_DIAGONAL_OPEN_big.png",
        zSource: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/WT25-600_RENDER_DIAGONAL_OPEN_big1.png",
        layout: "right",
        title: "WideTeEK 25",
        width: halfWidth
    });
    $(".zoom12").spritezoom({
        border: 0,
        source: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/WT12-600_RENDER_DIAGONAL_OPEN_big.png",
        zSource: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/WT12-600_RENDER_DIAGONAL_OPEN_big1.png",
        layout: "right",
        title: "WideTEK 12",
        width: halfWidth
    });
    $(".zoom4v3").spritezoom({
        border: 0,
        source: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/BE4V3_KIOSK_RENDER_DIAGONAL_big.png",
        zSource: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/BE4V3_KIOSK_RENDER_DIAGONAL_big1.png",
        layout: "right",
        title: "Bookeye 4 V3",
        width: halfWidth
    });
    $(".zoom4v2").spritezoom({
        border: 0,
        source: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/BE4V2_BASIC_RENDER_DIAGONAL_big.png",
        zSource: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/BE4V2_BASIC_RENDER_DIAGONAL_big1.png",
        layout: "right",
        title: "Bookeye 4 V2",
        width: halfWidth
    });
    $(".zoom4v1AC35").spritezoom({
        border: 0,
        source: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/BE4-SGS-V1-C35_Front_big.png",
        zSource: "http://upload.ted-kteam.com/IA/images/Scanners/spritezoom/BE4-SGS-V1-C35_Front_big1.png",
        layout: "right",
        title: "Bookeye 4 V1A C35",
        width: halfWidth
    });

    setTimeout(function () {
        var height = $('.example').height();
        $('.spritezoom-lens').css({
            'background-size': halfWidth + 'px ' + height + 'px'
        });

        $('.spritezoom-view').css({
            'background-size': halfWidth + 'px ' + height + 'px'
        });
    }, 1500);
});