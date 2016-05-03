$(document).ready(function() {	
	
  // set lower-nav width   
  var sum=0;
  $('.lower-nav ul').each( function(){ sum += $(this).width() + 104; });
  $('.lower-nav ').width( sum );
  
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