var reset_play_pause = function(){
  $('#cycle-control div').removeClass('active');
  $('#cycle-control .pause').addClass('active');
}

var scrollToUpcomingEvent = function(){  
    
  var eventDateOrderNumber=0 ;
  var foundFirstDate = -1 ;
  var textDate ;

  var today = new Date() ;
  var dd = today.getDate();
  if(dd<10) {
    dd='0'+dd
  } 
  var mm = today.getMonth()+1 ; 
  if(mm<10) {
    mm='0'+mm
  }
  var yy = today.getFullYear();
  var formatedToday = yy.toString() + mm.toString() + dd.toString() ; 
      
  $('.formatted_end_date_YYYYMMDD').each( function(){         
    textDate = $(this).text();   
    
      if( foundFirstDate == -1 )
      {      	
        //compare dates in YYYYMMDD format )
        if( textDate >= formatedToday )
        {
      	  foundFirstDate = textDate ; 
        } 
        else
        {
      	    eventDateOrderNumber++ ;
        } 
      }      
  	        
  });   

  if( foundFirstDate == -1 )
  {
    foundFirstDate = 1 ;  //no upcomming event - force to scroll to last event
  }
            
  if( foundFirstDate != -1 )
  {
      var sumHeight = 0;
      var eventItemCount = 0 ;
      
      $('.event_item').each( function(){ 
      	if( eventItemCount < eventDateOrderNumber )
      	{      	  
          sumHeight += $(this).height() + 10 ;  
        }
        eventItemCount++ ;	      	
      }); 
                   
      $('#EventScroll').scrollTop(sumHeight);              
  }	        
}

$(document).ready(function() {	
  
  // gallery background
  //$(".viewport > .scrollable").scrollable({circular: true, speed:1500, easing: 'swing', autopause: 'false'}).autoscroll(3000);
  //$('#headline-scroll').scrollable({ vertical: true, speed: 1000});

  $('.cycle').cycle({ 
    fx:     'scrollLeft', 
    speed:  'slow', 
    timeout: 12000, 
    pager:  '#cyclenav',
    pause: 0 
  });
  // clear out the numbers
  $('#cyclenav a').empty();
  // now fix the nav centering
  var sum=0;
  $('#cyclenav a').each( function(){ sum += $(this).width() + 12; });
  $('#cyclenav').css('left', (600 - (sum/2)) );
  
  $('.news_item').click(function(){
    story = $(".news_content", this).html();
    $('#news_story_box').html(story);
    $('#news_story_box').append('<div class="close_btn">Close</div>');
    $('#news_story_box .close_btn').click(function(){
      $('#news_story_box').empty();
      $('#news_story_box').addClass('hide');
    });
    $('#news_story_box div.img-logo img.logo').load(function() {
        $('#news_story_box div.img-logo').css('height', $(this).height());
        $('#news_story_box div.img-logo').css('width', $(this).width());
    });

    $('#news_story_box').removeClass('hide'); 
  }); 
  
  $(".event_item").mouseenter(function(){
    $(".event_content").hide();
    $(".event_content", this).show('fast');
  });   
  $("#Events_exhibits").mouseleave(function(){
    $(".event_content").hide('fast');
  });
  
    // set lower-nav width   
  var sum=0;
  $('.lower-nav ul').each( function(){ sum += $(this).width() + 104; });
  $('.lower-nav ').width( sum );
  
  reset_play_pause();

  $('#cycle-control div').click(function() {
    if ($(this).hasClass('active')) {
      if ($(this).hasClass('pause')) { $('.cycle').cycle('pause');
      } else { $('.cycle').cycle('resume'); }
      $('#cycle-control div').toggleClass('active');
    }
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
	
  $('.formatted_end_date_YYYYMMDD').each( function(){ 	
  	$(this).hide()  	
       });	
  
});

$(window).load(function() {	
	scrollToUpcomingEvent();
});
