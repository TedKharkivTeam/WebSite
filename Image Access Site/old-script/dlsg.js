var setup_cycle = function() {
  $('.cycle').cycle({ 
    fx:     'scrollLeft', 
    speed:  'slow', 
    timeout: 12000, 
    pager:  '#cyclenav',
    pause: 0 
  });
  $('#cyclenav a').empty();  // clear out the numbers
  var sum=0;  // now fix the nav centering
  $('#cyclenav a').each( function(){ sum += $(this).width() + 12; });
  $('#cyclenav').css('left', (600 - (sum/2)) );
}
var reset_play_pause = function(){
  $('#cycle-control div').removeClass('active');
  $('#cycle-control .pause').addClass('active');
}

$(document).ready(function() {	
/*
  $('#product-5tab').function() {
	 $("ul.tabs").tabs("div.panes > div");
  });
  
  //not using overlay for product info tabs anymore
  //$("img[rel]").overlay();
  //$("ul.tabs").tabs("div.panes > div.pane");
*/  
  // alternating colors for table rows
  $('tr:odd').css('background-color', '#bdb');
  $('tr:even').css('background-color', '#fff');

  //tagflipper
  $('.block-tag').hide();
  $('.brochure-block').hover(function(){
   $(this).children('h1.block-tag').toggle();
  });   

  // set slideshow thumbstrip width
  var thumbcount = $('.g5-tab ul').children().size() *196;
  $(".g5-tab ul").css('width', thumbcount+'px');
  if (thumbcount > 1180 ) { $(".g5-tab").css('width', '1180px'); }
  
  // set family box width   
  var sum=0;
  $('.family-list ul li').each( function(){ sum += $(this).width() + 24; });
  $('.family-list ul').width( sum );

  // set lower-nav width   
  var sum=0;
  $('.lower-nav ul').each( function(){ sum += $(this).width() + 104; });
  $('.lower-nav ').width( sum );
  
  setup_cycle();
  reset_play_pause();
  
  $('#cycle-control div').click(function() {
    if ($(this).hasClass('active')) {
      if ($(this).hasClass('pause')) { $('.g5-pane:not(.hide) .cycle').cycle('pause');
      } else { $('.g5-pane:not(.hide) .cycle').cycle('resume'); }
      $('#cycle-control div').toggleClass('active');
    }
  });

  // hover, in, out events for buttons under the slideshow (main page)
  $(".f5-tab ul li").hover(function(){
		$(this).addClass('hover');
		}, function() {
		$(this).removeClass('hover');
	 })
   .mouseenter(function(){
    if ($(this).is(".active")) { return false; } 
		$(".f5-tab ul li").removeClass('active');
		$(this).addClass('active');
	  var elementid = $(this).attr("id") + "pane";
    $(".f5-pane").hide();
    $("div#"+elementid).show();     
   }).mouseleave(function(){
    var elementid = $(this).attr("id") + "pane"; 
   });  

  //select random starting place
  var numRand = Math.floor(Math.random() * 72);
  
  //news ticker
  $("#newsTicker").smoothDivScroll({
	  autoScrollingMode: "onStart",
	  autoScrollingDirection: "endlessLoopRight",
    autoScrollingStep: 1,
	  autoScrollingInterval: 10,
    startAtElementId: "QID" + numRand
  });
  
  $("#newsTicker").bind("mouseover", function () {
		$("#newsTicker").smoothDivScroll("stopAutoScrolling");
	});
  $("#newsTicker").bind("mouseout", function () {
		$("#newsTicker").smoothDivScroll("startAutoScrolling");
	});

});


  
