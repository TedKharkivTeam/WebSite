$(function () {
	//script for popups
	$('a.show_popup').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		return false;
	});

});	



 
