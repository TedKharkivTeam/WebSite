$(function() {
	// get container for the wizard and initialize its exposing
	var wizard = $("#wizard").expose({color: '#789', lazy: true});

	// enable exposing on the wizard
	wizard.click(function() {
		$(this).expose().load();
	});

	// enable tabs that are contained within the wizard
	$("ul.tabs", wizard).tabs("div.panes > div", function(event, index) {

		/* now we are inside the onBeforeClick event */

		// ensure that the "terms" checkbox is checked.
		var terms = $("#terms");
		if (index > 0 && !terms.get(0).checked)  {
			terms.parent().addClass("error");

			// when false is returned, the user cannot advance to the next tab
			//return false;
		}

		// everything is ok. remove possible red highlight from the terms
		terms.parent().removeClass("error");
	});

	

	// get handle to the tabs API
	var api = $("ul.tabs", wizard).data("tabs");

	// "next tab" button
	$("button.next", wizard).click(function() {
		api.next();
	});

	// "previous tab" button
	$("button.prev", wizard).click(function() {
		api.prev();
	});

});
