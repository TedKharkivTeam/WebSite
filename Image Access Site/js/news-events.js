$.fn.offsetRelative = function(top){
    var $this = $(this);
    var $parent = $this.offsetParent();
    var offset = $this.position();
    if(!top) return offset; // Didn't pass a 'top' element
    else if($parent.get(0).tagName == "BODY") return offset; // Reached top of document
    else if($(top,$parent).length) return offset; // Parent element contains the 'top' element we want the offset to be relative to
    else if($parent[0] == $(top)[0]) return offset; // Reached the 'top' element we want the offset to be relative to
    else { // Get parent's relative offset
        var parent_offset = $parent.offsetRelative(top);
        offset.top += parent_offset.top;
        offset.left += parent_offset.left;
        return offset;
    }
};
$.fn.positionRelative = function(top){
    return $(this).offsetRelative(top);
};

var items = $('.icon__img');
items.each(function(index) {
    var eventBlock = $(this);
    var link = eventBlock.find('a');
    var image = link.find('img');
    var content = eventBlock.find('.event_content');
    var parent = link.closest('.events__content-block');

    link.attr('data-popup-content', index);
    content.attr('id', 'event_content_' + index);

    content.css({position: 'absolute'}).appendTo(parent);

    link.mouseover(function (e) {
        content.stop(true, true).fadeIn(150);
    });
    link.mousemove(function (e) {
        content.css({top: link.offsetRelative('.events__content-block').top - image.height() / 2 - content.height() / 2});
    });
    link.mouseout(function (e) {
        content.stop(true, true).fadeOut(150);
    });
});