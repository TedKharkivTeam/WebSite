var setup_cycle = function(pane) {
  $('#'+pane+'-cycle').cycle({ 
    fx:     'scrollLeft', 
    speed:  'slow', 
    timeout: 12000, 
    pager:  '#'+pane+'-cyclenav',
    pause: 0 
  });
  $('#'+pane+'-cyclenav a').empty();  // clear out the numbers
  var sum=0;  // now fix the nav centering
  $('#'+pane+'-cyclenav a').each( function(){ sum += $(this).width() + 12; });
  $('#'+pane+'-cyclenav').css('left', (600 - (sum/2)) );
}
var reset_play_pause = function(){
  $('#cycle-control div').removeClass('active');
  $('#cycle-control .pause').addClass('active');
}

$(document).ready(function() {		   
  
  var sum=0;  // set lower-nav width
  $('.lower-nav ul').each( function(){ sum += $(this).width() + 104; });
  $('.lower-nav ').width( sum );
  
  // replacing 'scrollable' with 'cycle'
  setup_cycle('defaultpane');
  setup_cycle('KICpane');
  setup_cycle('ILLpane');
  setup_cycle('OPUSpane');
  setup_cycle('Scannerspane');
  setup_cycle('Eventspane');
  $('.cycle').cycle('pause');  //pause all slideshows
  $('#defaultpane .cycle').cycle('resume');
  reset_play_pause();

  $('#cycle-control div').click(function() {
    if ($(this).hasClass('active')) {
      if ($(this).hasClass('pause')) { $('.f5-pane:not(.hide) .cycle').cycle('pause');
      } else { $('.f5-pane:not(.hide) .cycle').cycle('resume'); }
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
    if ($(this).is(".active")) { 
      return false;
    } else { //$() 
    }
		$(".f5-tab ul li").removeClass('active');
		$(this).addClass('active');
	  var elementid = $(this).attr("id") + "pane";
	  var cycleid = $(this).attr("id") + "pane-cycle";
    $(".f5-pane").addClass('hide');
    $(".f5-pane#"+elementid).removeClass('hide');    
    $('.cycle').cycle('pause');
    $("#"+cycleid).cycle('resume');
    reset_play_pause();     
   });
  
  // things to reset when the mouse leaves the main area
  $("div.f5").mouseleave(function(){
    $(".f5-tab ul li").removeClass('active');
    $(".f5-pane").addClass('hide');
    $(".f5-pane#defaultpane").removeClass('hide');
    $('#defaultpane .cycle').cycle('resume');
    reset_play_pause();
  });
  
  $(".f5-pane").addClass('hide');
  $(".f5-pane#defaultpane").removeClass('hide');

  // collect some user agent stats to improve customer experience
  var winH = $(window).height();
  var winW = $(window).width();
  var docH = $(document).height();
  var docW = $(document).width();
  var url = "script/user-agent-data.asp"; 
  $.get(url, { winH:winH, winW:winW, docH:docH, docW:docW});

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