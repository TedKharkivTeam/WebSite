 function openbox(id,tt) {
	var div = document.getElementById(id);
	var tt_div = document.getElementById(tt);
	if(div.style.display == 'block') {
		div.style.display = 'none';
	}
	else {
		div.style.display = 'block';
	}
  }
