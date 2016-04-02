
	var page_url;
	var redirect_timer_id;

	var time_delay = 2000;
	var tick_delay = 1;
	var redirect_delay = time_delay + 500;

	function goNah(url){
	   location = url;
	}

    function ImageExpander(oThumb, sImgSrc, url) {
		// define url
		page_url = url;

        this.oThumb = oThumb;
        this.oThumb.expander = this;
        this.oThumb.onclick = function() {
            this.expander.expand();
        }
		 
        this.smallWidth = oThumb.offsetWidth;
        this.smallHeight = oThumb.offsetHeight;
        this.bExpand = true;
        this.bTicks = false;

        if (!window.aImageExpanders) {
            window.aImageExpanders = new Array();
        }

        window.aImageExpanders.push(this);
        this.oImg = new Image();
        this.oImg.expander = this;
        this.oImg.onload = function() {
            this.expander.onload();
        }

        this.oImg.src = sImgSrc;
    }

    ImageExpander.prototype.onload = function() {
        this.oDiv = document.createElement("div");
        document.body.appendChild(this.oDiv);
        this.oDiv.appendChild(this.oImg);
        this.oDiv.style.position = "absolute";
        this.oDiv.expander = this;

        this.oDiv.onclick = function() {
            this.expander.toggle();
            
            window.clearTimeout(redirect_timer_id);
            redirect_timer_id = window.setTimeout(goNah,
	    		redirect_delay,
	    		page_url); // twiced time delay
        };

        this.oImg.title = "CLICK TO REDUCE IMAGE";
        this.bigWidth = this.oImg.width;
        this.bigHeight = this.oImg.height;

        if (this.bExpand) {
            this.expand();

	        redirect_timer_id = window.setTimeout(goNah,
	    		redirect_delay,
	    		page_url); // twiced time delay
        }
        else {
            this.oDiv.style.visibility = "hidden";
            this.oImg.style.visibility = "hidden";
        }
    }

    ImageExpander.prototype.toggle = function() {
        this.bExpand = !this.bExpand;
        if (this.bExpand) {
            for (var i in window.aImageExpanders)
                if (window.aImageExpanders[i] !== this)
                    window.aImageExpanders[i].reduce();
        }
        else
        {
        	window.clearTimeout(redirect_timer_id);
        }
    }

    ImageExpander.prototype.expand = function() {
        this.bExpand = true;

        for (var i in window.aImageExpanders)
            if (window.aImageExpanders[i] !== this)
                window.aImageExpanders[i].reduce();

        if (!this.oDiv) return;

        this.oThumb.style.visibility = "hidden";
        this.x = this.oThumb.offsetLeft;
        this.y = this.oThumb.offsetTop;
        this.w = this.oThumb.clientWidth;
        this.h = this.oThumb.clientHeight;
        this.oDiv.style.left = this.x + "px";
        this.oDiv.style.top = this.y + "px";
        this.oImg.style.width = this.w + "px";
        this.oImg.style.height = this.h + "px";
        this.oDiv.style.visibility = "visible";
        this.oImg.style.visibility = "visible";

        if (!this.bTicks) {
            this.bTicks = true;
            var pThis = this;
            window.setTimeout(function() {
                pThis.tick();
            }, time_delay); // time delay
        }
    }
  
    ImageExpander.prototype.reduce = function() {
        this.bExpand = false;
    }

    // dark magic
    ImageExpander.prototype.tick = function() {
        var cw = document.body.clientWidth;
        var ch = document.body.clientHeight;
        var cx = document.body.scrollLeft + cw / 2;
        var cy = document.body.scrollTop + ch / 2;
        var tw, th, tx, ty;

        var click = true;

        if (this.bExpand) {
            tw = this.bigWidth;
            th = this.bigHeight;

            while( ( tw  === 1.4 * tx || th === 1.4 * ty) ){ // WHAT ???
                th *= cw / tw;
                tw = cw;
				
                tw *= ch / th;
                th = ch;
            }

            tx = cx - tw / 2 ;
            ty = cy - th / 2;
        }
        else {
            tw = this.smallWidth;
            th = this.smallHeight;
            tx = this.oThumb.offsetLeft;
            ty = this.oThumb.offsetTop;
        }

        var nHit = 0;
        var fMove = function(n, tn) {
            var dn = tn - n;
            if (Math.abs(dn) < 3) {
                nHit++;
                return tn;
            } else {
                return n + dn / 200 ;
            }
        }

        this.x = fMove(this.x, tx);
        this.y = fMove(this.y, ty);
        this.w = fMove(this.w, tw);
        this.h = fMove(this.h, th);
        this.oDiv.style.left = this.x + "px";
        this.oDiv.style.top = this.y + "px";
        this.oImg.style.width = this.w + "px";
        this.oImg.style.height = this.h + "px";
        
        if (!this.bExpand && (nHit == 4)) {
            this.oImg.style.visibility = "hidden";
            this.oDiv.style.visibility = "hidden";
            this.oThumb.style.visibility = "visible";
            this.bTicks = false;
        }

        if (this.bTicks) {
            var pThis = this;
            window.setTimeout(function() {
                pThis.tick();
            }, tick_delay); // tick delay
        }
    }
