var model_validate_all = function() {
  model_validate('build-a-kic_1');  
  model_validate('build-a-kic_2');
  model_validate('build-a-kic_3');
  model_validate('build-a-kic_4');
  model_validate('build-a-kic_5'); 
}
var furniture_validate_all = function() {
  furniture_validate('build-a-kic_1');  
  furniture_validate('build-a-kic_2');
  furniture_validate('build-a-kic_3');
  furniture_validate('build-a-kic_4');
  furniture_validate('build-a-kic_5'); 
}
var option_validate_all = function() {
  option_validate('build-a-kic_1');  
  option_validate('build-a-kic_2');
  option_validate('build-a-kic_3');
  option_validate('build-a-kic_4');
  option_validate('build-a-kic_5'); 
}
var reset_form_all = function(sys_id) {
  $('input.disc_code').val('');
  $('input.disc2_code').val('');
  $('input.disc_rate').val('0');
  $('input.disc2_rate').val('0');
  $('input.disc3_rate').val('0');
  $('input.disc4_rate').val('0');
  reset_build_form('build-a-kic_1');
  $('#build-a-kic_1 input.quantity').val(1);
  reset_build_form('build-a-kic_2');
  reset_build_form('build-a-kic_3');
  reset_build_form('build-a-kic_4');
  reset_build_form('build-a-kic_5');
  $('select.select_country').val('us'); 
}
var set_roaming_all = function(){
  set_roaming('build-a-kic_1');  
  set_roaming('build-a-kic_2');
  set_roaming('build-a-kic_3');
  set_roaming('build-a-kic_4');
  set_roaming('build-a-kic_5'); 
}
var image_swap_all = function(){
  image_swap('build-a-kic_1');
  image_swap('build-a-kic_2');
  image_swap('build-a-kic_3');
  image_swap('build-a-kic_4');
  image_swap('build-a-kic_5');
}
var set_option_all = function(option, value) {
  set_option('build-a-kic_1', option, value);  
  set_option('build-a-kic_2', option, value);
  set_option('build-a-kic_3', option, value);
  set_option('build-a-kic_4', option, value);
  set_option('build-a-kic_5', option, value); 
}
var set_option = function(sys_id, option, value) {
  $('#'+sys_id+' .feature .'+option).prop('checked', value);
}
var get_system_selections = function(sys_id) {
  var data = new Object;
  data.model = get_model(sys_id);
  data.paint = $('#'+sys_id+' .colors input:radio:checked').val();
  data.furn = $('#'+sys_id+' .furniture input:radio:checked').val();
  data.ocr = $('#'+sys_id+' .features input.ocr:checked').val();
  data.tts = $('#'+sys_id+' .features input.tts:checked').val();
  data.adf = $('#'+sys_id+' .features input.adf:checked').val();
  data.adf2 = $('#'+sys_id+' .features input.adf2:checked').val();
  data.turbo = $('#'+sys_id+' .features input.turbo:checked').val();
  data.plus = $('#'+sys_id+' .features input.plus:checked').val();
  data.pc = $('#'+sys_id+' .features input.pc:checked').val();
  data.smartdock = $('#'+sys_id+' .features input.smartdock:checked').val();
  data.footpedal = $('#'+sys_id+' .features input.footpedal:checked').val();
  data.dpi = $('#'+sys_id+' .features input.dpi600:checked').val();
  data.color = $('#'+sys_id+' .features input.color:checked').val();
  data.dualpc = $('#'+sys_id+' .features input.dualpc:checked').val();
  data.dualvideo = $('#'+sys_id+' .features input.dualvideo:checked').val();  
  data.neckview = $('#'+sys_id+' .features input.neckview:checked').val();  
  data.manager = $('#'+sys_id+' .features input.manager:checked').val();  
  
  // add 6 expansion option variables  
  data.expansion5 = 0;
  data.expansion6 = 0;
  data.expansion7 = 0;
  data.expansion8 = 0;
  data.expansion9 = 0;
  //using expansion10 as bookeye export code (0 = we sell, 1 = we do not)
  data.intl = be_is_intl_roaming($('select.select_country').val());
  
  data.service = $('#'+sys_id+' .services input:radio:checked').val();
  data.qty = parseInt($('#'+sys_id+' input.quantity').val());     
  return data;
}
var get_system_selections_string = function(sys_id) {
  var data = get_system_selections(sys_id);
  var output = "";
  $.each(data, function(key,value) {
    //output = output + key + "=" + value + ";"
    output = output + value + ";"
  });

  return output;
}
var model_validate = function(sys_id) {
  var model = get_model(sys_id);
  var be_is_intl = be_is_intl_roaming($('select.select_country').val());
  
  $('#'+sys_id+' .feature .ocr').prop('checked', false);
  $('#'+sys_id+' .feature .turbo').prop('checked', false);
  $('#'+sys_id+' .feature .tts').prop('checked', false);
  $('#'+sys_id+' .feature .plus').prop('checked', false);
  $('#'+sys_id+' .feature .adf').prop('checked', false);
  $('#'+sys_id+' .feature .adf2').prop('checked', false);
  $('#'+sys_id+' .feature.adf2').addClass('hide');
  $('#'+sys_id+' .feature .pc').prop('checked', false);
  $('#'+sys_id+' .feature .smartdock').prop('checked', false);
  $('#'+sys_id+' .feature .footpedal').prop('checked', false);
  $('#'+sys_id+' .feature .dpi600').prop('checked', false);
  $('#'+sys_id+' .feature .color').prop('checked', false);
  $('#'+sys_id+' .feature .dualpc').prop('checked', false);
  $('#'+sys_id+' .feature .dualvideo').prop('checked', false);
  $('#'+sys_id+' .feature .neckview').prop('checked', false);
  $('#'+sys_id+' .service.one input').prop('checked', true);
  $('#'+sys_id+' .furniture .cabinet input').prop('checked', true);
  $('#'+sys_id+' .furniture .furn.wide_stand').addClass('hide');
  $('#'+sys_id+' .feature .manager').prop('checked', false);
  
  $('#'+sys_id+' .feature').removeClass('be_intl_disabled');  
    
  $('#'+sys_id+' .images .neck_view_note').addClass('hide');
  $('#'+sys_id+' .images .PC_note').addClass('hide');
  $('#'+sys_id+' .images .printer_note').addClass('hide');
  
  //reset international conditionally disabled stuff
  $('#'+sys_id+' .feature .neckview').prop('disabled',false);
  $('#'+sys_id+' .feature .footpedal').prop('disabled',false);
  $('#'+sys_id+' .feature .color').prop('disabled',false);
  $('#'+sys_id+' .feature .dpi600').prop('disabled',false);
  $('#'+sys_id+' .feature.neckview').removeClass("be_intl_disabled");
  $('#'+sys_id+' .feature.footpedal').removeClass("be_intl_disabled");
  $('#'+sys_id+' .feature.colorup').removeClass("be_intl_disabled");
  $('#'+sys_id+' .feature.dpi600').removeClass("be_intl_disabled");
  
  switch (model) {
    case "BookEdge":
        
     $('#'+sys_id+' .images .PC_note').css('marginTop' , '75px' ) ;             
     $('#'+sys_id+' .images .printer_note').css('marginTop' , '0px' ) ;             
     
     //alert( $('#'+sys_id+' .images .neck_view_note').css("marginTop" ) );       

      $('#'+sys_id+' .furn.cabinet p').text("K-Stand");
//      $('#'+sys_id+' .furn.tabletop.touch-on-top p').text("Tabletop");    
      $('#'+sys_id+' .furn.tabletop.touch_on_table p').text("Tabletop w/Touch & View Monitors"); 
      $('#'+sys_id+' .furn.tabletop.touch_only p').text("Tabletop w/ Single Touch Monitor");           
      
      $('#'+sys_id+' .color.Black input').prop('checked', true);
      $('#'+sys_id+' .color.Black').removeClass('hide');
      $('#'+sys_id+' .color.White').removeClass('hide');
      $('#'+sys_id+' .color.Pearl').addClass('hide');
	  
      $('#'+sys_id+' .furniture .tabletop').removeClass('hide');
      
      $('#'+sys_id+' .furn.tabletop.touch-on-top').addClass('hide');      
//      $('#'+sys_id+' .furn.tabletop.touch_on_table').addClass('hide');
//      $('#'+sys_id+' .furn.tabletop.touch_only').addClass('hide');
      
      $('#'+sys_id+' .feature .turbo').prop('checked', true);
      $('#'+sys_id+' .feature .plus').prop('checked', true);
      $('#'+sys_id+' .feature .dualpc').addClass('hide');
      
      $('#'+sys_id+' .feature .dualvideo').parent().removeClass('hide');       
      $('#'+sys_id+' .feature .dualvideo').removeClass('hide');
      
      $('#'+sys_id+' .feature .neckview').parent().addClass('hide');       
      $('#'+sys_id+' .feature .neckview').addClass('hide');  
      
      //$('#'+sys_id+' .images .printer_note').removeClass('hide');
                
      break;
    case "ClickMini":    
      $('#'+sys_id+' .images .PC_note').css('marginTop' , '25px' ) ;             
      
      $('#'+sys_id+' .furn.cabinet p').text("Click Mini Slim with K-Stand");    
      $('#'+sys_id+' .furn.tabletop.touch-on-top p').text("Click Mini Slim Tabletop"); 
      $('#'+sys_id+' .furn.tabletop.touch_on_table p').text("Tabletop w/Touch & View Monitors"); 
      $('#'+sys_id+' .furn.wide_stand p').text("Wide Stand w/Touch & View");
      $('#'+sys_id+' .furn.tabletop.touch_only p').text("Tabletop w/ Single Touch Monitor");           
    
      $('#'+sys_id+' .color.Black input').prop('checked', true);
      $('#'+sys_id+' .color.Black').removeClass('hide');
      $('#'+sys_id+' .color.Pearl').addClass('hide');
      $('#'+sys_id+' .color.White').addClass('hide');      
      $('#'+sys_id+' .furniture .tabletop').removeClass('hide');
      $('#'+sys_id+' .furniture .furn.wide_stand').removeClass('hide');
      $('#'+sys_id+' .feature .dualpc').addClass('hide');
      
      $('#'+sys_id+' .feature .dualvideo').parent().addClass('hide'); 
      $('#'+sys_id+' .feature .dualvideo').addClass('hide');
      
      $('#'+sys_id+' .feature .neckview').parent().addClass('hide');       
      $('#'+sys_id+' .feature .neckview').addClass('hide');  
      
      //$('#'+sys_id+' .images .printer_note').removeClass('hide');    	                     
      break;      
    case "Click":    
      $('#'+sys_id+' .images .PC_note').css('marginTop' , '25px' ) ;             
    
      $('#'+sys_id+' .furn.cabinet p').text("K-Legs w/ Touch-on-Top");
      $('#'+sys_id+' .furn.tabletop.touch-on-top p').text("Tabletop w/ Touch-on-Top"); 
      $('#'+sys_id+' .furn.tabletop.touch_on_table p').text("Tabletop w/Touch & View Monitors"); 
      $('#'+sys_id+' .furn.tabletop.touch_only p').text("Tabletop w/ Single Touch Monitor");           
          
      $('#'+sys_id+' .color.Black input').prop('checked', true);
      $('#'+sys_id+' .color.Pearl').addClass('hide');
      $('#'+sys_id+' .color.Black').removeClass('hide');
      $('#'+sys_id+' .color.White').removeClass('hide');
      $('#'+sys_id+' .furniture .tabletop').removeClass('hide');
      $('#'+sys_id+' .feature .dualpc').addClass('hide');
      
      $('#'+sys_id+' .feature .dualvideo').parent().addClass('hide'); 
      $('#'+sys_id+' .feature .dualvideo').addClass('hide');
	 
      $('#'+sys_id+' .feature .neckview').parent().addClass('hide');       
      $('#'+sys_id+' .feature .neckview').addClass('hide');      	 
      break;      
    case "Bookeye4":            
      $('#'+sys_id+' .feature.colorup p').text("Color (upgrade from grayscale)");
    
      $('#'+sys_id+' .feature.dualpc p').text("Dual-Monitor w/Wedge");
      
      $('#'+sys_id+' .furn.cabinet p').text("K-Cabinet");
//      $('#'+sys_id+' .furn.tabletop.touch-on-top p').text("Tabletop");    
      $('#'+sys_id+' .furn.tabletop.touch_on_table p').text("Tabletop - For Standing Use"); 
      $('#'+sys_id+' .furn.tabletop.touch_only p').text("Tabletop - For Sitting Use");        
                  
      $('#'+sys_id+' .color.White input').prop('checked', true); 
      $('#'+sys_id+' .color.Pearl').addClass('hide');
      $('#'+sys_id+' .color.Black').addClass('hide');
      $('#'+sys_id+' .color.White').removeClass('hide');
      $('#'+sys_id+' .feature .ocr').prop('checked', true);
      $('#'+sys_id+' .feature .tts').prop('checked', true);
	    $('#'+sys_id+' .furniture .tabletop').removeClass('hide');
	 
      $('#'+sys_id+' .furn.tabletop.touch-on-top').addClass('hide');      
//      $('#'+sys_id+' .furn.tabletop.touch_on_table').addClass('hide');
//      $('#'+sys_id+' .furn.tabletop.touch_only').addClass('hide'); 
      
      $('#'+sys_id+' .feature .dualvideo').parent().removeClass('hide'); 	 	 
      $('#'+sys_id+' .feature .dualvideo').removeClass('hide');
      
      $('#'+sys_id+' .feature .neckview').parent().addClass('hide');       
      $('#'+sys_id+' .feature .neckview').addClass('hide');
      
      //disable international stuff when req'd
      if (be_is_intl == 1) {
        $('#'+sys_id+' .feature .neckview').prop('disabled',true);
        $('#'+sys_id+' .feature .footpedal').prop('disabled',true);
        $('#'+sys_id+' .feature .color').prop('disabled',true);
        $('#'+sys_id+' .feature .dpi600').prop('disabled',true);
        $('#'+sys_id+' .feature.neckview').addClass("be_intl_disabled");
        $('#'+sys_id+' .feature.footpedal').addClass("be_intl_disabled");
        $('#'+sys_id+' .feature.colorup').addClass("be_intl_disabled");
        $('#'+sys_id+' .feature.dpi600').addClass("be_intl_disabled");
      }
             
      break;
      
    case "Bookeye4V3":
      $('#'+sys_id+' .feature.colorup p').text("Color");      
    
      $('#'+sys_id+' .furn.cabinet p').text("K-Table");
      //$('#'+sys_id+' .furn.tabletop.touch-on-top p').text("Tabletop");                
      $('#'+sys_id+' .furn.tabletop.touch_on_table p').text("Tabletop - For Standing Use"); 
      $('#'+sys_id+' .furn.tabletop.touch_only p').text("Tabletop - For Sitting Use");  
                  
      $('#'+sys_id+' .color.White input').prop('checked', true); 
      $('#'+sys_id+' .color.Pearl').addClass('hide');
      $('#'+sys_id+' .color.Black').addClass('hide');
      $('#'+sys_id+' .color.White').removeClass('hide');
      $('#'+sys_id+' .feature .ocr').prop('checked', true);
      $('#'+sys_id+' .feature .tts').prop('checked', true);
	    $('#'+sys_id+' .furniture .tabletop').removeClass('hide');
	       
      $('#'+sys_id+' .furn.tabletop.touch-on-top').addClass('hide');      
//      $('#'+sys_id+' .furn.tabletop.touch_on_table').addClass('hide');
//      $('#'+sys_id+' .furn.tabletop.touch_only').addClass('hide');  

      $('#'+sys_id+' .feature .dualvideo').parent().removeClass('hide');      	 
      $('#'+sys_id+' .feature .dualvideo').removeClass('hide');
      
      $('#'+sys_id+' .feature .neckview').parent().addClass('hide');       
      $('#'+sys_id+' .feature .neckview').addClass('hide');             

      $('#'+sys_id+' .feature .color').prop('checked',true);      
      //disable international stuff when req'd
      if (be_is_intl == 1) {
        $('#'+sys_id+' .feature .neckview').prop('disabled',true);
        $('#'+sys_id+' .feature .footpedal').prop('disabled',true);
        $('#'+sys_id+' .feature .color').prop('disabled',true);
        $('#'+sys_id+' .feature .dpi600').prop('disabled',true);
        $('#'+sys_id+' .feature.neckview').addClass("be_intl_disabled");
        $('#'+sys_id+' .feature.footpedal').addClass("be_intl_disabled");
        $('#'+sys_id+' .feature.colorup').addClass("be_intl_disabled");
        $('#'+sys_id+' .feature.dpi600').addClass("be_intl_disabled");
      }
      break;      
  }
  $('#'+sys_id+' .summary .nameplate').addClass('hide');
  $('#'+sys_id+' .summary .nameplate.'+model).removeClass('hide');  
}
var color_validate = function(sys_id) {
  var model = get_model(sys_id);
  if (model == "BookEdge") {
    if ($('#'+sys_id+' .color.Black input').prop('checked')) {
      $('#'+sys_id+' .feature .plus').prop('checked', true);
    } else {
      $('#'+sys_id+' .feature .plus').prop('checked', false);
    };
  };
}


var get_PC_note = function(desktop_type) {
  var pc_note ;
  if( desktop_type == 2 )  
  {
  	// Touch&View
    pc_note = "Note: A PC is required.  A built-in Intel PC can be purchased from DLSG or your IT department can purchase an ultra-small PC with the following minimum specifications: Intel Core i5, 8GB DDR3, 500GB HDD, Windows 8.1 Pro 64-bit, Height: 2.6inch, Width: 9.9inch, Depth: 10inch" ;
  }
  else
  {
  	// TouchOnly
    pc_note = "Note: A PC is required. A built-in Intel PC can be purchased from DLSG or your IT department can purchase a PC. Here are the minimum specifications for ultra-small PCs that form fit to the cabinet: Intel Core i5, 8GB DDR3, 500GB HDD, Windows 8.1 Pro 64-bit, Height: 2.6inch, Width: 9.9inch, Depth: 10inch" ;
  }
  
  return pc_note;
}


var furniture_validate = function(sys_id) {
  var model = get_model(sys_id); 
  
  if( $('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked')  ) 
  {
     $('#'+sys_id+' .feature.dualpc p').text("24'' Touch & View Monitors");
  }
  else
  if( $('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked')  ) 
  {
     $('#'+sys_id+' .feature.dualpc p').text("24'' Touch Monitor w/ Stand");     	
  }
  
  switch (model) {
    case "BookEdge":  	     
        if (      ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') ) 
                 ||  ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked') )    )     
        {
          $('#'+sys_id+' .images .printer_note').addClass('hide');
          
    	  $('#'+sys_id+' .feature .dualpc').parent().removeClass('hide'); 
	  $('#'+sys_id+' .feature .dualpc').removeClass('hide');
	  $('#'+sys_id+' .feature.dualpc input').prop('checked', true);
	}
	else
	{
	  //$('#'+sys_id+' .images .printer_note').removeClass('hide');
		
	  $('#'+sys_id+' .feature.dualpc input').prop('checked', false);				
    	  $('#'+sys_id+' .feature .dualpc').parent().addClass('hide'); 
	  $('#'+sys_id+' .feature .dualpc').addClass('hide');
	}	  
                
        $('#'+sys_id+' .images .PC_note').addClass('hide');   
        if (      ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') ) 
              ||  ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked') )    )  
     	{     	   	
          if ( ! $('#'+sys_id+' .feature .dualvideo').prop('checked') ) {                              	            
            if ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') ) 
            {              
              $('#'+sys_id+' .images .PC_note p').text( get_PC_note(2) );
            }
            else
            {                            
              $('#'+sys_id+' .images .PC_note p').text( get_PC_note(3) );
            }                                                 
            $('#'+sys_id+' .images .PC_note').removeClass('hide');
          } 
        }        	  	  	
    break ;
    case "ClickMini":
      var furn = get_furn(sys_id);  	     
      $('#'+sys_id+' .images .PC_note').addClass('hide');
      if (($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked')) || ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked')) || ($('#'+sys_id+' .furn.wide_stand input').prop('checked'))) {
     	  $('#'+sys_id+' .images .printer_note').addClass('hide');
     	  $('#'+sys_id+' .feature .dualvideo').parent().removeClass('hide'); 
		    $('#'+sys_id+' .feature .dualvideo').removeClass('hide');      	
		    //if($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked')){
		      $('#'+sys_id+' .feature .dualvideo').prop('checked', true);
        //  }
        //  else {
		    //    $('#'+sys_id+' .feature .dualvideo').prop('checked', false);		  		                         
        //    $('#'+sys_id+' .images .PC_note p').text( get_PC_note(3) );            	  
		    //    $('#'+sys_id+' .images .PC_note').removeClass('hide');
		    //  }
		    $('#'+sys_id+' .feature .dualpc').parent().removeClass('hide'); 
	      $('#'+sys_id+' .feature .dualpc').removeClass('hide');
	      $('#'+sys_id+' .feature.dualpc input').prop('checked', true);				
	    }
	    else {
	      //if	($('#'+sys_id+' .furn.tabletop.touch-on-top input').prop('checked')) {
        if (($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked')) || ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked')) || ($('#'+sys_id+' .furn.wide_stand input').prop('checked'))) {
	        $('#'+sys_id+' .images .printer_note').addClass('hide');	
	      } 
        else {
	        //$('#'+sys_id+' .images .printer_note').removeClass('hide');
	      }
	   	  $('#'+sys_id+' .feature .dualvideo').prop('checked', false);
	      $('#'+sys_id+' .feature .dualvideo').parent().addClass('hide');
	      $('#'+sys_id+' .feature .dualvideo').addClass('hide');			   	
	      //$('#'+sys_id+' .feature.dualpc input').prop('checked', false);				
    	  //$('#'+sys_id+' .feature .dualpc').parent().addClass('hide'); 
	      //$('#'+sys_id+' .feature .dualpc').addClass('hide');		
	    } ;
      if ((furn == "touch_only") || (furn == "touch_on_table") || (furn == "wide_stand")) {				        
          $('#'+sys_id+' .feature .dualpc').prop('checked', true);              	
		      $('#'+sys_id+' .feature .dualpc').parent().removeClass('hide'); 
		      $('#'+sys_id+' .feature .dualpc').removeClass('hide');
          $('#'+sys_id+' .feature .dualvideo').prop('checked', true);
          $('#'+sys_id+' .feature .dualvideo').parent().removeClass('hide'); 
		      $('#'+sys_id+' .feature .dualvideo').removeClass('hide');
        } else {
		      $('#'+sys_id+' .feature .dualpc').parent().addClass('hide');
		      $('#'+sys_id+' .feature .dualpc').addClass('hide');
		      $('#'+sys_id+' .feature .dualpc').prop('checked', false);		
        }; 	   	                   	        
      break ;  	
    case "Click":     
           $('#'+sys_id+' .images .PC_note').addClass('hide');
           if (      ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') ) 
                 ||  ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked') )    ) 
     	   {
		$('#'+sys_id+' .feature .dualvideo').parent().removeClass('hide'); 
		$('#'+sys_id+' .feature .dualvideo').removeClass('hide');   
		
		if($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') )
		{
		  $('#'+sys_id+' .feature .dualvideo').prop('checked', true);	
		}
		else
		{
		  $('#'+sys_id+' .feature .dualvideo').prop('checked', false);			                            
                  $('#'+sys_id+' .images .PC_note p').text( get_PC_note(3) );            	
		  $('#'+sys_id+' .images .PC_note').removeClass('hide');
		}
    	     $('#'+sys_id+' .feature .dualpc').parent().removeClass('hide'); 
	     $('#'+sys_id+' .feature .dualpc').removeClass('hide');
	     $('#'+sys_id+' .feature.dualpc input').prop('checked', true);										  	
	   }
	   else
	   {
     	     $('#'+sys_id+' .feature .dualvideo').prop('checked', false);
	     $('#'+sys_id+' .feature .dualvideo').parent().addClass('hide');
	     $('#'+sys_id+' .feature .dualvideo').addClass('hide');	   	
		
	     $('#'+sys_id+' .feature.dualpc input').prop('checked', false);				
    	     $('#'+sys_id+' .feature .dualpc').parent().addClass('hide'); 
	     $('#'+sys_id+' .feature .dualpc').addClass('hide');				
	   } ;          	     	  	        
    break ;  	

    case "Bookeye4":  
      $('#'+sys_id+' .images .PC_note').addClass('hide');
      if (      ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') ) 
          ||  ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked') )    ) { 
	     $('#'+sys_id+' .feature .dualpc').parent().removeClass('hide'); 
	     $('#'+sys_id+' .feature .dualpc').removeClass('hide');
	     $('#'+sys_id+' .feature .dualvideo').parent().removeClass('hide'); 
	     $('#'+sys_id+' .feature .dualvideo').removeClass('hide');
	     $('#'+sys_id+' .feature.dualpc input').prop('checked', true);
		  
	     if ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked') )
	     {		     
                $('#'+sys_id+' .images .PC_note').css('marginTop' , '5px' ) ;             	     	
	     	  
	     	$('#'+sys_id+' .feature .neckview').prop('checked', true);
                $('#'+sys_id+' .feature .neckview').parent().removeClass('hide');       
                $('#'+sys_id+' .feature .neckview').removeClass('hide'); 
                $('#'+sys_id+' .images .neck_view_note').removeClass('hide');                 
             } else {
             	
             	$('#'+sys_id+' .images .PC_note').css('marginTop' , '25px' ) ;             
             	
             	$('#'+sys_id+' .feature .neckview').prop('checked', false);
                $('#'+sys_id+' .feature .neckview').parent().addClass('hide');       
                $('#'+sys_id+' .feature .neckview').addClass('hide'); 
                $('#'+sys_id+' .images .neck_view_note').addClass('hide');             	                
             } ;
             
             if ( ! $('#'+sys_id+' .feature .dualvideo').prop('checked') ) {                       
               if ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') ) 
               {              
                 $('#'+sys_id+' .images .PC_note p').text( get_PC_note(2) );
               }
               else
               {                            
                 $('#'+sys_id+' .images .PC_note p').text( get_PC_note(3) );
               }                              
               
               $('#'+sys_id+' .images .PC_note').removeClass('hide');
          }              
             
      } else {
		$('#'+sys_id+' .feature .dualpc').parent().addClass('hide');
		$('#'+sys_id+' .feature .dualpc').addClass('hide');
//		$('#'+sys_id+' .feature .dualvideo').parent().addClass('hide');
//		$('#'+sys_id+' .feature .dualvideo').addClass('hide');
		$('#'+sys_id+' .feature .dualvideo').parent().removeClass('hide'); 
		$('#'+sys_id+' .feature .dualvideo').removeClass('hide');		
		$('#'+sys_id+' .feature .dualpc').prop('checked', false);
//		$('#'+sys_id+' .feature .dualvideo').prop('checked', false);   } ;  

                $('#'+sys_id+' .feature .neckview').prop('checked', false);
                $('#'+sys_id+' .feature .neckview').parent().addClass('hide');       
                $('#'+sys_id+' .feature .neckview').addClass('hide');   
                $('#'+sys_id+' .images .neck_view_note').addClass('hide');               
  	     };
  	      	       
    break ;
  
    case "Bookeye4V3":  
      $('#'+sys_id+' .images .PC_note').addClass('hide');
      if (      ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') ) 
          ||  ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked') )    ) { 
	     $('#'+sys_id+' .feature .dualpc').parent().removeClass('hide'); 
	     $('#'+sys_id+' .feature .dualpc').removeClass('hide');
	     $('#'+sys_id+' .feature .dualvideo').parent().removeClass('hide'); 
	     $('#'+sys_id+' .feature .dualvideo').removeClass('hide');
	     $('#'+sys_id+' .feature.dualpc input').prop('checked', true);
		  
	     if ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked') )
	     {	
	     	$('#'+sys_id+' .images .PC_note').css('marginTop' , '5px' ) ;             	     	
	     	  
	     	$('#'+sys_id+' .feature .neckview').prop('checked', true);
                $('#'+sys_id+' .feature .neckview').parent().removeClass('hide');       
                $('#'+sys_id+' .feature .neckview').removeClass('hide'); 
                $('#'+sys_id+' .images .neck_view_note').removeClass('hide');                 
             } else {
             	
             	$('#'+sys_id+' .images .PC_note').css('marginTop' , '25px' ) ;             
             	
             	$('#'+sys_id+' .feature .neckview').prop('checked', false);
                $('#'+sys_id+' .feature .neckview').parent().addClass('hide');       
                $('#'+sys_id+' .feature .neckview').addClass('hide'); 
                $('#'+sys_id+' .images .neck_view_note').addClass('hide');             	                
             } ;
             
             if ( ! $('#'+sys_id+' .feature .dualvideo').prop('checked') ) {                       
               if ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') ) 
               {              
                 $('#'+sys_id+' .images .PC_note p').text( get_PC_note(2) );
               }
               else
               {                            
                 $('#'+sys_id+' .images .PC_note p').text( get_PC_note(3) );
               }                              
               
               $('#'+sys_id+' .images .PC_note').removeClass('hide');
          }              
             
      } else {
		$('#'+sys_id+' .feature .dualpc').parent().addClass('hide');
		$('#'+sys_id+' .feature .dualpc').addClass('hide');
//		$('#'+sys_id+' .feature .dualvideo').parent().addClass('hide');
//		$('#'+sys_id+' .feature .dualvideo').addClass('hide');
		$('#'+sys_id+' .feature .dualvideo').parent().removeClass('hide'); 
		$('#'+sys_id+' .feature .dualvideo').removeClass('hide');		
		$('#'+sys_id+' .feature .dualpc').prop('checked', false);
//		$('#'+sys_id+' .feature .dualvideo').prop('checked', false);   } ;  

                $('#'+sys_id+' .feature .neckview').prop('checked', false);
                $('#'+sys_id+' .feature .neckview').parent().addClass('hide');       
                $('#'+sys_id+' .feature .neckview').addClass('hide');   
                $('#'+sys_id+' .images .neck_view_note').addClass('hide');               
  	     };
  	      	       
    break ;
  }
}
var option_validate = function(sys_id) {
    var model = get_model(sys_id);
    var flmanager = $('#'+sys_id+' .features input.manager:checked').val();
    // make all sys_id match the current status of fleet manager
    //$('#'+sys_id+' .feature .manager').prop('checked', flmanager);
    set_option_all('manager', flmanager);
    
    $('#'+sys_id+' .feature .turbo').parent().addClass('hide');
    $('#'+sys_id+' .feature .plus').parent().addClass('hide');
    $('#'+sys_id+' .feature .pc').parent().addClass('hide');
    $('#'+sys_id+' .feature .dpi600').parent().addClass('hide');
    $('#'+sys_id+' .feature .dualpc').parent().addClass('hide');
//    $('#'+sys_id+' .feature .dualvideo').parent().addClass('hide');
    $('#'+sys_id+' .feature .color').parent().addClass('hide');
    switch (model) {
      case "BookEdge": 
        $('#'+sys_id+' .feature .turbo').parent().removeClass('hide');
        $('#'+sys_id+' .feature .plus').parent().removeClass('hide');
//        $('#'+sys_id+' .feature .pc').parent().removeClass('hide');
        if ($('#'+sys_id+' .feature .plus').prop('checked')) {
          $('#'+sys_id+' .color.Black input').prop('checked', true);
        } else {
          $('#'+sys_id+' .color.White input').prop('checked', true);
        };    
        
        
        if ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked') )
        {        	
          if ($('#'+sys_id+' .feature .dualvideo').prop('checked') ) {
             $('#'+sys_id+' .images .PC_note').addClass('hide');       	             
          } else {         	             
             $('#'+sys_id+' .images .PC_note p').text( get_PC_note(3) );            
             $('#'+sys_id+' .images .PC_note').removeClass('hide');          		  		                 
          }               
        }
        else
        if ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') ) 
        {
         if ($('#'+sys_id+' .feature .dualvideo').prop('checked') ) {
             $('#'+sys_id+' .images .PC_note').addClass('hide');       	             
         } else {         	            
             $('#'+sys_id+' .images .PC_note p').text( get_PC_note(2) );             
             $('#'+sys_id+' .images .PC_note').removeClass('hide');          		  		                 
         }        	
        }
        else
        {
          $('#'+sys_id+' .images .PC_note').addClass('hide');	
        }
                                             		
        if (      ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') ) 
              ||  ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked') )    ) {				        
                  $('#'+sys_id+' .feature .dualpc').prop('checked', true);              	
		  $('#'+sys_id+' .feature .dualpc').parent().removeClass('hide'); 
		  $('#'+sys_id+' .feature .dualpc').removeClass('hide');
        } else {
		$('#'+sys_id+' .feature .dualpc').parent().addClass('hide');
		$('#'+sys_id+' .feature .dualpc').addClass('hide');
		$('#'+sys_id+' .feature .dualpc').prop('checked', false);		
        };        
        
                      		          
        break;
        
      case "ClickMini":
        //what a mess...
        /*      
        if ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked')) {
          if ($('#'+sys_id+' .feature .dualvideo').prop('checked')) {
            $('#'+sys_id+' .images .PC_note').addClass('hide');       	             
          } else {         	                                        
            $('#'+sys_id+' .images .PC_note p').text( get_PC_note(3) );             
            $('#'+sys_id+' .images .PC_note').removeClass('hide');          		  		                 
          }               
        } else if ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked')) {
          if ($('#'+sys_id+' .feature .dualvideo').prop('checked')) {
            $('#'+sys_id+' .images .PC_note').addClass('hide');       	             
          } else {         	             
            $('#'+sys_id+' .images .PC_note p').text( get_PC_note(2) );            
            $('#'+sys_id+' .images .PC_note').removeClass('hide');          		  		                 
          }        	
        } else {
        */
        $('#'+sys_id+' .images .PC_note').addClass('hide');                     //this may need to be changed back to conditional if "TG forced PC option" below is overruled	        
        var furn = get_furn(sys_id);
        if ((furn == "touch_only") || (furn == "touch_on_table") || (furn == "wide_stand")) {				        
          $('#'+sys_id+' .feature .dualpc').prop('checked', true);              	
		      $('#'+sys_id+' .feature .dualpc').parent().removeClass('hide'); 
		      $('#'+sys_id+' .feature .dualpc').removeClass('hide');
          $('#'+sys_id+' .feature .dualvideo').prop('checked', true);           //just make the PC a forced option for now, per TG 7/11/2016
          $('#'+sys_id+' .feature .dualvideo').parent().removeClass('hide'); 
		      $('#'+sys_id+' .feature .dualvideo').removeClass('hide');
        } else {
		      $('#'+sys_id+' .feature .dualpc').parent().addClass('hide');
		      $('#'+sys_id+' .feature .dualpc').addClass('hide');
		      $('#'+sys_id+' .feature .dualpc').prop('checked', false);		
        };        
        
        break;
        
      case "Click":
        if ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked') )
        {
         if ($('#'+sys_id+' .feature .dualvideo').prop('checked') ) {
             $('#'+sys_id+' .images .PC_note').addClass('hide');
         } else {                                        
             $('#'+sys_id+' .images .PC_note p').text( get_PC_note(3) );                 
             $('#'+sys_id+' .images .PC_note').removeClass('hide');          		  		                 
         }      
        }
        else
        if ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') ) 
        {
         if ($('#'+sys_id+' .feature .dualvideo').prop('checked') ) {
             $('#'+sys_id+' .images .PC_note').addClass('hide');       	             
         } else {         	             
             $('#'+sys_id+' .images .PC_note p').text( get_PC_note(2) );            
             $('#'+sys_id+' .images .PC_note').removeClass('hide');          		  		                 
         }        	
        }
        else        
        {
          $('#'+sys_id+' .images .PC_note').addClass('hide');	
        }      
        
        if (      ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') ) 
              ||  ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked') )    ) {				        
                  $('#'+sys_id+' .feature .dualpc').prop('checked', true);              	
		  $('#'+sys_id+' .feature .dualpc').parent().removeClass('hide'); 
		  $('#'+sys_id+' .feature .dualpc').removeClass('hide');
        } else {
		$('#'+sys_id+' .feature .dualpc').parent().addClass('hide');
		$('#'+sys_id+' .feature .dualpc').addClass('hide');
		$('#'+sys_id+' .feature .dualpc').prop('checked', false);		
        };        
        break;
                        
      case "Bookeye4":
        $('#'+sys_id+' .feature .dpi600').parent().removeClass('hide');
        $('#'+sys_id+' .feature .color').parent().removeClass('hide');        
        $('#'+sys_id+' .feature .ocr').prop('checked', true);
        $('#'+sys_id+' .feature .tts').prop('checked', true);
		$('#'+sys_id+' .feature .dualpc').prop('checked', true);
        if (      ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') ) 
              ||  ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked') )    ) {				        
		  $('#'+sys_id+' .feature .dualpc').parent().removeClass('hide'); 
		  $('#'+sys_id+' .feature .dualpc').removeClass('hide');
//		  $('#'+sys_id+' .feature .dualvideo').parent().removeClass('hide'); 
//		  $('#'+sys_id+' .feature .dualvideo').removeClass('hide');		  
        } else {
		$('#'+sys_id+' .feature .dualpc').parent().addClass('hide');
		$('#'+sys_id+' .feature .dualpc').addClass('hide');
//		$('#'+sys_id+' .feature .dualvideo').parent().removeClass('hide');
//		$('#'+sys_id+' .feature .dualvideo').removeClass('hide');
		$('#'+sys_id+' .feature .dualpc').prop('checked', false);		
        }; 
                
        if ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked') )
        {
//          $('#'+sys_id+' .feature .neckview').prop('checked', true);
        	        	
          if ($('#'+sys_id+' .feature .dualvideo').prop('checked') ) {
             $('#'+sys_id+' .images .PC_note').addClass('hide');       	             
          } else {         	                                        
             $('#'+sys_id+' .images .PC_note p').text( get_PC_note(3) );             
             $('#'+sys_id+' .images .PC_note').removeClass('hide');          		  		                 
          }               
        }
        else
        if ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') ) 
        {
         if ($('#'+sys_id+' .feature .dualvideo').prop('checked') ) {
             $('#'+sys_id+' .images .PC_note').addClass('hide');       	             
         } else {         	                          
             $('#'+sys_id+' .images .PC_note p').text( get_PC_note(2) );             
             $('#'+sys_id+' .images .PC_note').removeClass('hide');          		  		                 
         }        	
        }
        else
        {
          $('#'+sys_id+' .images .PC_note').addClass('hide');	
        }
        
        if ($('#'+sys_id+' .feature .neckview').prop('checked') ) {
             $('#'+sys_id+' .images .neck_view_note').removeClass('hide');                     		  		  
        } else {
             $('#'+sys_id+' .images .neck_view_note').addClass('hide');          		  		                 
        }        
                
        break;
      case "Bookeye4V3":
        $('#'+sys_id+' .feature .dpi600').parent().removeClass('hide');
        $('#'+sys_id+' .feature .color').parent().removeClass('hide');
        $('#'+sys_id+' .feature .color').prop('checked', true);
        
        $('#'+sys_id+' .feature .ocr').prop('checked', true);
        $('#'+sys_id+' .feature .tts').prop('checked', true);
		$('#'+sys_id+' .feature .dualpc').prop('checked', true);		
        if (      ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') ) 
              ||  ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked') )    ) {				        
		  $('#'+sys_id+' .feature .dualpc').parent().removeClass('hide'); 
		  $('#'+sys_id+' .feature .dualpc').removeClass('hide');
//		  $('#'+sys_id+' .feature .dualvideo').parent().removeClass('hide'); 
//		  $('#'+sys_id+' .feature .dualvideo').removeClass('hide');
        } else {
		$('#'+sys_id+' .feature .dualpc').parent().addClass('hide');
		$('#'+sys_id+' .feature .dualpc').addClass('hide');
//		$('#'+sys_id+' .feature .dualvideo').parent().removeClass('hide');
//		$('#'+sys_id+' .feature .dualvideo').removeClass('hide');
		$('#'+sys_id+' .feature .dualpc').prop('checked', false);		
        }; 
                  
        if ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked') )
        {        	
//          $('#'+sys_id+' .feature .neckview').prop('checked', true);
        	
          if ($('#'+sys_id+' .feature .dualvideo').prop('checked') ) {
             $('#'+sys_id+' .images .PC_note').addClass('hide');       	             
          } else {         	                                        
             $('#'+sys_id+' .images .PC_note p').text( get_PC_note(3) );             
             $('#'+sys_id+' .images .PC_note').removeClass('hide');          		  		                 
          }               
        }
        else
        if ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked') ) 
        {
         if ($('#'+sys_id+' .feature .dualvideo').prop('checked') ) {
             $('#'+sys_id+' .images .PC_note').addClass('hide');       	             
         } else {         	                          
             $('#'+sys_id+' .images .PC_note p').text( get_PC_note(2) );             
             $('#'+sys_id+' .images .PC_note').removeClass('hide');          		  		                 
         }        	
        }
        else
        {
          $('#'+sys_id+' .images .PC_note').addClass('hide');	
        }
        
        if ($('#'+sys_id+' .feature .neckview').prop('checked') ) {
             $('#'+sys_id+' .images .neck_view_note').removeClass('hide');          		  		  
        } else {
             $('#'+sys_id+' .images .neck_view_note').addClass('hide');          		  		  
        }        
                     
        break;        
    }        
}
var quantity_validate = function(sys_id) {
  $('#'+sys_id).removeClass('print');
  var qty = parseInt($('#'+sys_id+' input.quantity').val());  
  if (isNaN(qty)) { qty = 0; }  
  if (qty > 0) { $('#'+sys_id).addClass('print'); }
  $('#'+sys_id+' input.quantity').val(qty);
  return qty;
}
var get_discount = function() {
  var disc_code1 = $('input.disc_code').val();    
  var url = "script/discount-code.asp";      
  $.get(url, { DisCode: disc_code1 }, function(data) { $('.disc_rate').val(data); build_pricing();});
  url = "script/customer-list.asp"; 
  $.get(url, { DisCode: disc_code1 }, function(data) { $('#K-19').append(data); }); 
}
var pricecheck = function() {
  var busy = $('#notifier p').html();
  if ( busy == "") {
    $('#notifier p').append('Checking server for current pricing...');
    $('#notifier').removeClass('hide');
    var disc_rate = $('.disc_rate').val();
    var url = "script/price-calc.asp";           
    data1 = get_system_selections_string("build-a-kic_1");
    data2 = get_system_selections_string("build-a-kic_2");
    data3 = get_system_selections_string("build-a-kic_3");
    data4 = get_system_selections_string("build-a-kic_4");
    data5 = get_system_selections_string("build-a-kic_5"); 
    
    if ( disc_rate == "") {
      disc_rate = "0";
    }
    
    $.get(url, { system1: data1, system2: data2, system3: data3, system4: data4, system5: data5, InsDcode: disc_rate}, 
      function(data) { 
        var systems = data.split("<br>")    ;         
        pricewrite("build-a-kic_1",systems[0].split(";"));
        pricewrite("build-a-kic_2",systems[1].split(";"));
        pricewrite("build-a-kic_3",systems[2].split(";"));
        pricewrite("build-a-kic_4",systems[3].split(";"));
        pricewrite("build-a-kic_5",systems[4].split(";"));
        $('#notifier').addClass('hide');
        $('#notifier p').empty();      
        update_page_summary();
        rebuild_value_chart();
        update_all_charts(); 
      }
    );
        
  }
}

var pricewrite = function(sys_id,sys_data) {
  set_summary_field(sys_id,'baseprice','list',sys_data[0]);
  set_summary_field(sys_id,'option','paint',sys_data[1]);
  set_summary_field(sys_id,'option','furniture',sys_data[2]);
  set_summary_field(sys_id,'option','OCR',sys_data[3]);
  set_summary_field(sys_id,'option','TTS',sys_data[4]);
  set_summary_field(sys_id,'option','adf',sys_data[5]);
  set_summary_field(sys_id,'option','adf2',sys_data[6]);
  set_summary_field(sys_id,'option','turbo',sys_data[7]);
  set_summary_field(sys_id,'option','plus',sys_data[8]);
  set_summary_field(sys_id,'option','PC',sys_data[9]);
  set_summary_field(sys_id,'option','smartdock',sys_data[10]);
  set_summary_field(sys_id,'option','footpedal',sys_data[11]);
  set_summary_field(sys_id,'option','dpi600',sys_data[12]);
  set_summary_field(sys_id,'option','color',sys_data[13]);
  set_summary_field(sys_id,'option','dualpc',sys_data[14]);
  set_summary_field(sys_id,'option','dualvideo',sys_data[15]);
  set_summary_field(sys_id,'option','neckview',sys_data[16]);
/* expansion options go here    
  set_summary_field(sys_id,'option','empty',sys_data[19]);
  set_summary_field(sys_id,'option','empty',sys_data[20]);
  set_summary_field(sys_id,'option','empty',sys_data[21]);
  set_summary_field(sys_id,'option','empty',sys_data[22]);
  set_summary_field(sys_id,'option','empty',sys_data[23]);
 */
  set_summary_field(sys_id,'baseprice','sub',sys_data[24]);
  set_summary_field(sys_id,'totalprice','list',sys_data[27]);
  //insert fleet manager setup/install amount here
  set_summary_field(sys_id,'option','flmansetup',sys_data[47]); //[17] is unit list, [47] is potentially discounted extended amount
  flmansetup = parseFloat($('#'+sys_id+' .option.flmansetup .amount').text().replace(/[$,]+/g,""));
  if (isNaN(flmansetup)) { flmansetup = 0;};   // borking prevention on "$0.00"
  
  base = parseFloat($('#'+sys_id+' .totalprice.list .amount').text().replace(/[$,]+/g,""));
  set_summary_field(sys_id,'discount','inst',sys_data[58]);
  discount = parseFloat($('#'+sys_id+' .discount.inst .amount').text().replace(/[$,]+/g,""));

  set_summary_field(sys_id,'option','service',sys_data[59]);
  service = parseFloat($('#'+sys_id+' .option.service .amount').text().replace(/[$,]+/g,""));  
  set_summary_field(sys_id,'option','service5year',sys_data[60]);
  service5year = parseFloat($('#'+sys_id+' .option.service5year .amount').text().replace(/[$,]+/g,""));
  //insert fleet manager subscription amount here
  set_summary_field(sys_id,'option','flmansub',sys_data[48]); //[18] is unit list, [48] is potentially discounted extended amount
  flmansub = parseFloat($('#'+sys_id+' .option.flmansub .amount').text().replace(/[$,]+/g,""));
  if (isNaN(flmansub)) { flmansub = 0;};   // borking prevention on "$0.00"
  //also, update text label to match service plan duration
  serviceduration = $('#'+sys_id+' .services input:radio:checked').val();
  switch (serviceduration) {
    case "one":
      flmansublabel = "Fleet Manager (1yr.)";
      break;
    case "three":
      flmansublabel = "Fleet Manager (3yr.)";
      break;
    case "five":
      flmansublabel = "Fleet Manager (5yr.)";
      break;
  }
  $('#'+sys_id+' .option.flmansub p.label').text(flmansublabel);
  
  
  set_summary_field(sys_id,'totalprice','list',base);
  // this price needs the fleet management setup added
  //set_summary_field(sys_id,'totalprice','ad',sys_data[57]);
  set_summary_field(sys_id,'totalprice','ad',base-discount+flmansetup);
  
  //set_summary_field(sys_id,'totalprice','final',base-discount+service);
  set_summary_field(sys_id,'totalprice','final',base-discount+service+flmansetup+flmansub);
  set_summary_field(sys_id,'totalprice','final5year',base-discount+service5year);
}

var image_swap = function(sys_id) {
  var model = get_model(sys_id);
  var paint = $('#'+sys_id+' .colors input:radio:checked').val();  
  var furn = $('#'+sys_id+' .furniture input:radio:checked').val();
  var adf = $('#'+sys_id+' .features input.adf:checked').val();
  var footpedal = $('#'+sys_id+' .features input.footpedal:checked').val();
  var smartdock = $('#'+sys_id+' .features input.smartdock:checked').val();
  var dualpc = $('#'+sys_id+' .features input.dualpc:checked').val();
  var neckview = $('#'+sys_id+' .features input.neckview:checked').val();
  
  if (adf) { adf = 'adf'; } else { adf = 'noadf'; };
  if (footpedal) { footpedal = 'footpedal'; } else { footpedal = 'nofootpedal'; };
  if (smartdock) { smartdock = 'smartdock'; } else { smartdock = 'nosmartdock'; };
  if (dualpc) { dualpc = 'dualpc'; } else { dualpc = 'nodualpc'; };
  if (neckview) { neckview = 'neckview'; } else { neckview = 'noneckview'; };  
   
  //$('#'+sys_id+' .images_for_slides-model').addClass('inactive');
  $('#'+sys_id+' .img-model').addClass('inactive');
  
  /*
  if( ( model != 'ClickMini' ) && ( model != 'Click' ) && ( model != 'BookEdge' ) && ( model != 'Bookeye4V3' ))
  {
    // rename value to old value to avoid renaming already existing image files  	
    if( furn.match(/Tabletop/) == 'Tabletop' )  //Tabletop1, Tabletop2, Tabletop3 -> Tabletop
    {
      furn = "Tabletop"	;
    }	
  }
  */
  
  if(    (( model == 'Bookeye4V3' ) && (furn == 'Tabletop3' ))
      || (( model == 'Bookeye4' ) && (furn == 'Tabletop3' ))     )
  {
    // handle neckview flag just for BE4 V3 and V2
    //$('#'+sys_id+' .images_for_slides-model.'+model+'.'+paint+'.'+furn+'.'+adf+'.'+footpedal+'.'+smartdock+'.'+dualpc+'.'+neckview).removeClass('inactive');    
    $('#'+sys_id+' .img-model.'+model+'.'+paint+'.'+furn+'.'+adf+'.'+footpedal+'.'+smartdock+'.'+dualpc+'.'+neckview).removeClass('inactive');
  }
  else
  {
    //$('#'+sys_id+' .images_for_slides-model.'+model+'.'+paint+'.'+furn+'.'+adf+'.'+footpedal+'.'+smartdock+'.'+dualpc).removeClass('inactive');	
    $('#'+sys_id+' .img-model.'+model+'.'+paint+'.'+furn+'.'+adf+'.'+footpedal+'.'+smartdock+'.'+dualpc).removeClass('inactive');
  }
}

//like this, Bob...
var lower_kic_visibility_swap = function() {
    //find best model selected with non-zero qty
  var best_model = get_best_model();
    //reset all brochure content to hidden state
  $('.brochure-block').addClass("hide");    
    //turn on the ones we want
  $('.brochure-block.'+best_model).removeClass("hide");
}


var reset_build_form = function(sys_id) {
  $('#'+sys_id+' .model.Bookeye4 input').prop('checked', true);
  $('#'+sys_id+' .color.White input').prop('checked', true);
  $('#'+sys_id+' .furn.cabinet input').prop('checked', true);
  $('#'+sys_id+' input.ocr').prop('checked', true);
  $('#'+sys_id+' input.tts').prop('checked', true);
  $('#'+sys_id+' .images_for_slides-model').addClass('inactive');
  $('#'+sys_id+' .images_for_slides-model.Bookye4.White.furniture').removeClass('inactive');   
  $('#'+sys_id+' input.quantity').val(0);  
  $('#'+sys_id+' legend').siblings().addClass('hide');
}
var set_testing_defaults = function() {
  $('#build-a-kic_1 .model.BookEdge input').prop('checked', true);
  $('#build-a-kic_1 input.quantity').val(7);
  $('#build-a-kic_2').addClass("print");
  $('#build-a-kic_2 .model.Click input').prop('checked', true);
  model_validate('build-a-kic_2'); option_validate('build-a-kic_2');
  $('#build-a-kic_2 input.quantity').val(2);
  $('#build-a-kic_3').addClass("print");
  $('#build-a-kic_3 .model.Bookeye4 input').prop('checked', true);
  model_validate('build-a-kic_3'); option_validate('build-a-kic_3');
  $('#build-a-kic_3 input.quantity').val(1);
  $('#build-a-kic_4').addClass("print");
  $('#build-a-kic_4 .model.BookEdge input').prop('checked', true);
  model_validate('build-a-kic_4'); option_validate('build-a-kic_4');
  $('#build-a-kic_4 .color.White input').prop('checked', true);
  $('#build-a-kic_4 input.ocr').prop('checked', true);
  $('#build-a-kic_4 input.tts').prop('checked', true);
  $('#build-a-kic_4 input.plus').prop('checked', true);
  $('#build-a-kic_4 input.five').prop('checked', true);
  $('#build-a-kic_4 input.quantity').val(1);
}
var set_summary_field = function(sys_id, type, option, cost) {
  $('#'+sys_id+' .summary .'+type+'.'+option+'').addClass('hide');
  $('#'+sys_id+' .summary .'+type+'.'+option+' .amount').html(cost).formatCurrency();
  if ((cost > 0 || type == 'discount') && (option != 'final5year') && (option != 'service5year')) {  
    $('#'+sys_id+' .summary .'+type+'.'+option+'').removeClass('hide'); 
  }
  //these should never be hidden, even if 0
  $('#'+sys_id+' .summary .totalprice.list').removeClass('hide');
  $('#'+sys_id+' .summary .totalprice.ad').removeClass('hide');
  $('#'+sys_id+' .summary .option.service').removeClass('hide');
  $('#'+sys_id+' .summary .totalprice.final').removeClass('hide');
}    
var update_page_summary = function() {
  page_summary_count_all();
  page_summary_money();
}
var page_summary_count_all = function() {
  var count_be = count_model_field('BookEdge', 'input.quantity');
  var count_bcm = count_model_field('ClickMini', 'input.quantity'); 
  var count_bc = count_model_field('Click', 'input.quantity'); 
  var count_b4V2 = count_model_field('Bookeye4', 'input.quantity');    
  var count_b4V3 = count_model_field('Bookeye4V3', 'input.quantity');  
  var count_all = count_be + count_bcm+ count_bc + count_b4V2 + count_b4V3; 
  $('.page-summary .qty.BookEdge').val(count_be);     
  $('.page-summary .qty.ClickMini').val(count_bcm);
  $('.page-summary .qty.Click').val(count_bc);     
  $('.page-summary .qty.Bookeye4').val(count_b4V2 + count_b4V3);
  $('.page-summary .qty.previous').val($('.page-summary .qty.all').val());
  $('.page-summary .qty.all').val(count_all);
}

var page_summary_money = function() {
  var total_list = sum_price('.totalprice.list') + sum_price('.option.service');
  var total_discount = sum_price('.discount.inst');
  var total_price = sum_price('.totalprice.final');
  $('.page-summary .list_price input').val(total_list).formatCurrency();   
  $('.page-summary .discount_amt input').val(total_discount).formatCurrency();
  $('.page-summary .discount_price input').val(total_price).formatCurrency();
}
var sum_price = function(field) {
  var sum =   parseFloat($('#build-a-kic_1 '+field+' p.amount').text().replace(/[$,]+/g,""));
  sum = sum + parseFloat($('#build-a-kic_2 '+field+' p.amount').text().replace(/[$,]+/g,""));
  sum = sum + parseFloat($('#build-a-kic_3 '+field+' p.amount').text().replace(/[$,]+/g,""));
  sum = sum + parseFloat($('#build-a-kic_4 '+field+' p.amount').text().replace(/[$,]+/g,""));
  sum = sum + parseFloat($('#build-a-kic_5 '+field+' p.amount').text().replace(/[$,]+/g,""));
  if (isNaN(sum)) { sum = 0;};
  return sum;
}
var count_model_field = function(model,field) {
  var sum = 0; 
   
  if (model == $('#build-a-kic_1 .models input:radio:checked').val()) { sum += parseInt($('#build-a-kic_1 '+field).val()); }
  if (model == $('#build-a-kic_2 .models input:radio:checked').val()) { sum += parseInt($('#build-a-kic_2 '+field).val()); }
  if (model == $('#build-a-kic_3 .models input:radio:checked').val()) { sum += parseInt($('#build-a-kic_3 '+field).val()); }
  if (model == $('#build-a-kic_4 .models input:radio:checked').val()) { sum += parseInt($('#build-a-kic_4 '+field).val()); }
  if (model == $('#build-a-kic_5 .models input:radio:checked').val()) { sum += parseInt($('#build-a-kic_5 '+field).val()); }        
  return sum;
}
var get_model = function(sys_id) {
  var model = $('#'+sys_id+' .models input:radio:checked').val();
  return model;
}
var get_furn = function(sys_id) {
  var furn = "";
  if ($('#'+sys_id+' .furn.tabletop.touch_only input').prop('checked')) { furn = "touch_only"; };
  if ($('#'+sys_id+' .furn.tabletop.touch_on_table input').prop('checked')) { furn = "touch_on_table"; };
  if ($('#'+sys_id+' .furn.wide_stand input').prop('checked')) { furn = "wide_stand"; };
  return furn;
}
var get_best_model = function() {
  var model = "none";
  var count_be = count_model_field('BookEdge', 'input.quantity');
  var count_bcm = count_model_field('ClickMini', 'input.quantity'); 
  var count_bc = count_model_field('Click', 'input.quantity'); 
  var count_b4V3 = count_model_field('Bookeye4V3', 'input.quantity');
  var count_b4V2 = count_model_field('Bookeye4', 'input.quantity');    
  if (count_be  > 0) { model = "bookedge"}
  if (count_bcm > 0) { model = "click-mini"}
  if (count_bc  > 0) { model = "click"}
  if (count_b4V3 > 0) { model = "bookeye"}
  if (count_b4V2 > 0) { model = "bookeye"}
  return model;
}

var build_pricing = function(sys_id) {

// bob commented out	
  pricecheck();
 
  /*
  update_page_summary();
  rebuild_value_chart();
  update_all_charts();
  */
  /*
  if (sys_id != 'all') {
    price_update(sys_id);
    build_discount_table();
    price_apply_discounts(sys_id);
    update_page_summary();    
  };
  var disc_d = parseFloat($('ul.summary').find('p.qtydiscamt').html()); 
  var disc_s = parseFloat($('.discount_amt input').val().replace(/[$,]+/g,""));
  if (disc_d != disc_s || sys_id == 'all') {
    price_update_all();
    build_discount_table();
    price_apply_discounts_all();
    update_page_summary();
  }
  rebuild_value_chart();
  update_all_charts();
  */
}

//-#kic_value--------------------------------------------------------------------------------------------------------------------------------------
var rebuild_value_chart = function() {
  //update_device_usage();
  regen_site_capacity();
  recalc_labor_wtavg();
  update_unitcosts();
  update_5years();
  build_all_bars();
}
var reset_value_form = function() {
  $('#kic_value .inputs input.owned.copier').val(0);
  $('#kic_value .inputs input.owned.bookedge').val(0);
  $('#kic_value .inputs input.owned.ClickMini').val(0);
  $('#kic_value .inputs input.owned.Click').val(0);
  $('#kic_value .inputs input.owned.bookeye').val(1);
  $('#usage_slider').slider('option', 'value', 50);
  $('#time_slider').slider('option', 'value', 5);
  update_device_usage();
  reset_value_device_table();
  reset_labor_table();
}
var reset_value_device_table = function() {
  $('#kic_value tr.copier .scan_rate').val(4.4);
  $('#kic_value tr.bookedge .scan_rate').val(6.9);
  $('#kic_value tr.ClickMini .scan_rate').val(20.0);
  $('#kic_value tr.Click .scan_rate').val(14.7);
  $('#kic_value tr.bookeye .scan_rate').val(17.5);
  reset_equipment_cost();
  $('#kic_value tr.copier .paper_usage_rate').val(100);
  $('#kic_value tr.bookedge .paper_usage_rate').val(10);
  $('#kic_value tr.ClickMini .paper_usage_rate').val(10);
  $('#kic_value tr.Click .paper_usage_rate').val(10);
  $('#kic_value tr.bookeye .paper_usage_rate').val(10);
  $('#kic_value .variables input.cost.labor').val(41);
  $('#kic_value .variables input.cost.paper').val(0.04).formatCurrency({roundToDecimalPlace:2});
  $('#kic_value .variables input.cost.toner').val(0.06).formatCurrency({roundToDecimalPlace:2});
}
var reset_equipment_cost = function() {
  $('#kic_value tr.copier .equipment_cost').val('8,000').formatCurrency({roundToDecimalPlace:2});
  $('#kic_value tr.bookedge .equipment_cost').val('7,296.47').formatCurrency({roundToDecimalPlace:2});
  $('#kic_value tr.ClickMini .equipment_cost').val('7,656.58').formatCurrency({roundToDecimalPlace:2});
  $('#kic_value tr.Click .equipment_cost').val('16,287.74').formatCurrency({roundToDecimalPlace:2});
  $('#kic_value tr.bookeye .equipment_cost').val('28,505.69').formatCurrency({roundToDecimalPlace:2});
}
var reset_labor_table = function() {
  set_labor_row('.student.lower',12,10,10);
  set_labor_row('.student.upper',15,13.33,30);
  set_labor_row('.student.grad',30,20,40);
  set_labor_row('.student.doc',40,25,10);
  set_labor_row('.faculty',50,0,10);
  $('#time_slider').slider('option', 'value', 5);
  recalc_labor_wtavg();
}
var set_labor_row = function(id, market_value, edu_cost, usage_by_user) {
  var slide = ($('#time_slider').slider('option', 'value'));
  var scale = labor_slider_value(slide);
  $('#kic_value .variables '+id+' input.market_value').val(market_value).formatCurrency({roundToDecimalPlace:2});
  $('#kic_value .variables '+id+' input.edu_cost').val(edu_cost).formatCurrency({roundToDecimalPlace:2});
  $('#kic_value .variables '+id+' input.usage_by_user').val(usage_by_user);
  market_value = market_value / scale;
  $('#kic_value .variables '+id+' input.market_base').val(market_value);
  edu_cost = edu_cost / scale;
  $('#kic_value .variables '+id+' input.edu_base').val(edu_cost);
}
var labor_slider_value = function(slide) {
  var scale = 0;
  switch (slide) {
    case 0:  scale = (0.80); break;
    case 1:  scale = (0.88); break;
    case 2:  scale = (0.97); break;
    case 3:  scale = (1.07); break;
    case 4:  scale = (1.18); break;
    case 5:  scale = (1.30); break;
    case 6:  scale = (1.43); break;
    case 7:  scale = (1.57); break;
    case 8:  scale = (1.73); break;
    case 9:  scale = (1.90); break;
    case 10: scale = (2.09); break;
  }
  return scale;
}
var labor_slider_update = function() {
  var scale=1, slide=0, base=0, dolla=0;
  slide = ($('#time_slider').slider('option', 'value'));   
  scale = labor_slider_value(slide);
  $('.tablewrap.labor tr.calc').each(function(){
    base = parseFloat($(this).find('.market_base').val());
    dolla = base * scale;
    $(this).find('input.market_value').val(dolla).formatCurrency({roundToDecimalPlace:2});
    base = parseFloat($(this).find('.edu_base').val());
    dolla = base * scale;
    $(this).find('input.edu_cost').val(dolla).formatCurrency({roundToDecimalPlace:2});
  }); 
}
var recalc_labor_wtavg = function() {
  var wtavg = 0, mkt = 0, edu = 0, urate = 0,line_wtavg = 0,total_pct = 0;
  $('#kic_value .tablewrap.labor tr').each(function(){    
    if ($(this).hasClass('calc')) {
      mkt = parseFloat($(this).find('.market_value').val().replace(/[$,]+/g,""));
      edu = parseFloat($(this).find('.edu_cost').val().replace(/[$,]+/g,""));
      urate = parseFloat($(this).find('.usage_by_user').val().replace(/[$,]+/g,""));
      line_wtavg = (mkt+edu)*(urate/100);
      $(this).find('.weighted_cost').val(line_wtavg).formatCurrency({roundToDecimalPlace:2});
      wtavg += line_wtavg;
      total_pct += urate;
    }
  });
  $('#kic_value .tablewrap.labor tr input.currency').formatCurrency({roundToDecimalPlace:2});
  $('#kic_value .tablewrap.labor tr.summary input.wtavg').val(wtavg).formatCurrency({roundToDecimalPlace:2});
  $('#kic_value .variables .costs input.cost.labor').val(wtavg).formatCurrency({roundToDecimalPlace:2});
  $('#kic_value .tablewrap.labor th.col4 p').empty().html(total_pct);
  if (total_pct != 100) {
    $('#kic_value .tablewrap.labor th.col4 p').addClass('flag'); 
  } else {
    $('#kic_value .tablewrap.labor th.col4 p').removeClass('flag');
  }
}
var regen_site_capacity = function() {
  var qty_copier = 0;
  var qty_bookedge = parseInt($('.page-summary .sys-count input.qty.BookEdge').val());
  var qty_ClickMini = parseInt($('.page-summary .sys-count input.qty.ClickMini').val());
  var qty_Click = parseInt($('.page-summary .sys-count input.qty.Click').val());  
  var qty_bookeye = parseInt($('.page-summary .sys-count input.qty.Bookeye4').val());
  if (isNaN(qty_copier))    { qty_copier = 0;    }
  if (isNaN(qty_bookedge))  { qty_bookedge = 0;  }
  if (isNaN(qty_ClickMini)) { qty_ClickMini = 0; }
  if (isNaN(qty_Click)) { qty_Click = 0; }
  if (isNaN(qty_bookeye))   { qty_bookeye = 0;   }
  $('#kic_value .inputs input.owned.copier').val(qty_copier);
  $('#kic_value .inputs input.owned.bookedge').val(qty_bookedge);
  $('#kic_value .inputs input.owned.ClickMini').val(qty_ClickMini);
  $('#kic_value .inputs input.owned.Click').val(qty_Click);
  $('#kic_value .inputs input.owned.bookeye').val(qty_bookeye);
  var cap_copier = qty_copier * parseInt($('#kic_value .variables tr.copier input.capacity').val().replace(/[$,]+/g,""));
  var cap_bookedge = qty_bookedge * parseInt($('#kic_value .variables tr.bookedge input.capacity').val().replace(/[$,]+/g,""));  
  var cap_ClickMini = qty_ClickMini * parseInt($('#kic_value .variables tr.ClickMini input.capacity').val().replace(/[$,]+/g,""));    
  var cap_Click = qty_Click * parseInt($('#kic_value .variables tr.Click input.capacity').val().replace(/[$,]+/g,""));
  var cap_bookeye = qty_bookeye * parseInt($('#kic_value .variables tr.bookeye input.capacity').val().replace(/[$,]+/g,""));
  var total_cap = cap_copier + cap_bookedge + cap_ClickMini + cap_Click + cap_bookeye;
  total_cap = $.formatNumber(total_cap, {format:"#,###", locale:"us"});
  $('#kic_value .variables input.annual.capacity').val(total_cap);  
  $('#kic_value #graph_header p.caption.usage').empty().html('At a usage rate of '+total_cap+' pages per year');
  $('#kic_value tr.copier .equipment_cost').formatCurrency({roundToDecimalPlace:2});
  $('#kic_value tr.bookedge .equipment_cost').formatCurrency({roundToDecimalPlace:2});
  $('#kic_value tr.ClickMini .equipment_cost').formatCurrency({roundToDecimalPlace:2});  
  $('#kic_value tr.Click .equipment_cost').formatCurrency({roundToDecimalPlace:2});
  $('#kic_value tr.bookeye .equipment_cost').formatCurrency({roundToDecimalPlace:2});
}  
var update_device_usage = function() {
  var scale=1, cap=0,usage=0;
  usage = ($('#usage_slider').slider('option', 'value'))/100;   
  if (usage < .5) {
    scale = (usage + 0.5);
  } else {
    scale = ((usage-0.5)*2)+1;
  } 
  cap = $.formatNumber((40000*scale), {format:"#,###", locale:"us"}); 
  $('#kic_value tr.copier input.capacity').val(cap); 
  $('#kic_value tr.bookedge input.capacity').val(cap);
  cap = $.formatNumber((80000*scale), {format:"#,###", locale:"us"});
  $('#kic_value tr.ClickMini input.capacity').val(cap);
  cap = $.formatNumber((60000*scale), {format:"#,###", locale:"us"});
  $('#kic_value tr.Click input.capacity').val(cap);
  cap = $.formatNumber((100000*scale), {format:"#,###", locale:"us"});
  $('#kic_value tr.bookeye input.capacity').val(cap);  
}
var update_unitcosts = function() {
  var total_cap = parseFloat($('#kic_value .variables input.annual.capacity').val().replace(/[$,]+/g,""));
  var qty_copier = parseInt($('#kic_value .inputs input.owned.copier').val());
  var qty_bookedge = parseInt($('#kic_value .inputs input.owned.bookedge').val());
  var qty_ClickMini = parseInt($('#kic_value .inputs input.owned.ClickMini').val());  
  var qty_Click = parseInt($('#kic_value .inputs input.owned.Click').val());
  var qty_bookeye = parseInt($('#kic_value .inputs input.owned.bookeye').val());
  var labor1 = (qty_copier    * parseFloat($('#kic_value .variables tr.copier input.capacity').val().replace(/[$,]+/g,"")))    / parseFloat($('#kic_value .variables tr.copier input.scan_rate').val());  //minutes of labor for device 1
  var labor2 = (qty_bookedge  * parseFloat($('#kic_value .variables tr.bookedge input.capacity').val().replace(/[$,]+/g,"")))  / parseFloat($('#kic_value .variables tr.bookedge input.scan_rate').val());  //minutes of labor for device 2
  var labor3 = (qty_ClickMini * parseFloat($('#kic_value .variables tr.ClickMini input.capacity').val().replace(/[$,]+/g,""))) / parseFloat($('#kic_value .variables tr.ClickMini input.scan_rate').val());  //minutes of labor for device 3
  var labor4 = (qty_Click * parseFloat($('#kic_value .variables tr.Click input.capacity').val().replace(/[$,]+/g,""))) / parseFloat($('#kic_value .variables tr.Click input.scan_rate').val());  //minutes of labor for device 4
  var labor5 = (qty_bookeye   * parseFloat($('#kic_value .variables tr.bookeye input.capacity').val().replace(/[$,]+/g,"")))   / parseFloat($('#kic_value .variables tr.bookeye input.scan_rate').val());  //minutes of labor for device 5    
  var paper1 = (qty_copier    * parseFloat($('#kic_value .variables tr.copier input.capacity').val().replace(/[$,]+/g,"")))    * (parseFloat($('#kic_value .variables tr.copier input.paper_usage_rate').val())/100);
  var paper2 = (qty_bookedge  * parseFloat($('#kic_value .variables tr.bookedge input.capacity').val().replace(/[$,]+/g,"")))  * (parseFloat($('#kic_value .variables tr.bookedge input.paper_usage_rate').val())/100);
  var paper3 = (qty_ClickMini * parseFloat($('#kic_value .variables tr.ClickMini input.capacity').val().replace(/[$,]+/g,""))) * (parseFloat($('#kic_value .variables tr.ClickMini input.paper_usage_rate').val())/100);
  var paper4 = (qty_Click * parseFloat($('#kic_value .variables tr.Click input.capacity').val().replace(/[$,]+/g,""))) * (parseFloat($('#kic_value .variables tr.Click input.paper_usage_rate').val())/100);
  var paper5 = (qty_bookeye   * parseFloat($('#kic_value .variables tr.bookeye input.capacity').val().replace(/[$,]+/g,"")))   * (parseFloat($('#kic_value .variables tr.bookeye input.paper_usage_rate').val())/100);  
  
  var rate_labor = parseFloat($('#kic_value .variables input.cost.labor').val().replace(/[$,]+/g,"")); // per hour
  var total_labor = ((labor1+labor2+labor3+labor4+labor5)/60)*rate_labor;
  var unit_labor = 0; 
  if (total_cap != 0) { unit_labor = total_labor / total_cap;} ;
  var paper = parseFloat($('#kic_value .variables input.cost.paper').val().replace(/[$,]+/g,""));
  var toner = parseFloat($('#kic_value .variables input.cost.toner').val().replace(/[$,]+/g,""));
  var unit_consumable = paper + toner;
  var total_consumable = unit_consumable * (paper1+paper2+paper3+paper4+paper5);
  $('#kic_value .variables input.annual.labor').val(total_labor).formatCurrency({roundToDecimalPlace:2});
  $('#kic_value .variables input.unitcost.labor').val(unit_labor).formatCurrency();
  $('#kic_value .variables input.unitcost.consumable').val(unit_consumable).formatCurrency();
  $('#kic_value .variables input.annual.consumable').val(total_consumable).formatCurrency({roundToDecimalPlace:0});
}
var build_5year = function(device) {
  var total_cap = parseFloat($('#kic_value .variables input.annual.capacity').val().replace(/[$,]+/g,""));
  if (isNaN(total_cap)) {total_cap = 0;};
  var device_cap = parseFloat($('#kic_value .variables tr.'+device+' input.capacity').val().replace(/[$,]+/g,""));
  var equipment_required = total_cap / device_cap;
  equipment_required = Math.ceil(equipment_required);
  var dev_name = 'Photocopier';
  switch (device) {
    case 'bookedge': dev_name = 'KIC BookEdge'; break;
    case 'Click': dev_name = 'KIC Click&trade;'; break;
    case 'bookeye': dev_name = 'KIC Bookeye 4'; break;
  }
  if (equipment_required > 1) { dev_name = dev_name +'s'; }
  var annual_cap = equipment_required * device_cap; 
  var total_equipment = equipment_required * parseFloat($('#kic_value .variables tr.'+device+' input.equipment_cost').val().replace(/[$,]+/g,""));
  var rate_labor = parseFloat($('#kic_value .variables input.cost.labor').val().replace(/[$,]+/g,"")); // per hour
  var total_labor = (((total_cap / parseFloat($('#kic_value .variables tr.'+device+' input.scan_rate').val().replace(/[$,]+/g,""))) / 60) * rate_labor);
  total_labor = total_labor.toFixed(2) *5;
  var paper = total_cap * (parseFloat($('#kic_value .variables tr.'+device+' input.paper_usage_rate').val())/100);
  var unit_consumable = parseFloat($('#kic_value .variables input.unitcost.consumable').val().replace(/[$,]+/g,""));
  var total_consumable = 5*paper * unit_consumable;
  var total_5year = total_equipment + total_labor + total_consumable;
  $('#kic_value .summary .'+device+' p.grouplabel').empty().html(equipment_required+' '+dev_name);
  $('#kic_value .summary .'+device+' input.fiveyear.equipment').val(total_equipment).formatCurrency({roundToDecimalPlace:2});
  $('#kic_value .summary .'+device+' input.fiveyear.labor').val(total_labor).formatCurrency({roundToDecimalPlace:2});
  $('#kic_value .summary .'+device+' input.fiveyear.consumable').val(total_consumable).formatCurrency({roundToDecimalPlace:2});
  $('.summary .'+device+' input.fiveyear.total').val(total_5year).formatCurrency({roundToDecimalPlace:2});
  $('.summary .'+device+' p.sublabel').empty();
  if (annual_cap != total_cap){
    annual_cap = $.formatNumber(annual_cap, {format:"#,###", locale:"us"});
    $('.summary .'+device+' p.sublabel').text('*actual usage '+annual_cap+' pages/year');    
  }
}
var build_5year_mix = function() {
  var total_cap = parseFloat($('#kic_value .variables input.annual.capacity').val().replace(/[$,]+/g,""));
  var cost_copier = parseInt($('#kic_value .inputs input.owned.copier').val()) * parseFloat($('#kic_value .variables tr.copier input.equipment_cost').val().replace(/[$,]+/g,""));
  var cost_bookedge = parseInt($('#kic_value .inputs input.owned.bookedge').val()) * parseFloat($('#kic_value .variables tr.bookedge input.equipment_cost').val().replace(/[$,]+/g,""));
  var cost_ClickMini = parseInt($('#kic_value .inputs input.owned.ClickMini').val()) * parseFloat($('#kic_value .variables tr.ClickMini input.equipment_cost').val().replace(/[$,]+/g,""));  
  var cost_Click = parseInt($('#kic_value .inputs input.owned.Click').val()) * parseFloat($('#kic_value .variables tr.Click input.equipment_cost').val().replace(/[$,]+/g,""));
  var cost_bookeye = parseInt($('#kic_value .inputs input.owned.bookeye').val()) * parseFloat($('#kic_value .variables tr.bookeye input.equipment_cost').val().replace(/[$,]+/g,""));
  var total_equipment = cost_copier+cost_bookedge+cost_ClickMini+cost_Click+cost_bookeye;
  //-- should we force 5-year maintenance for consistent comparison, or just use the user selected service plan?
  //var total_build = parseFloat($('.page-summary .discount_price input').val().replace(/[$,]+/g,""));
  var total_build = sum_price('.totalprice.final5year');
  //----
  var total_labor = 5*parseFloat($('#kic_value .variables input.annual.labor').val().replace(/[$,]+/g,""));  
  var total_consumable = 5*parseFloat($('.variables input.annual.consumable').val().replace(/[$,]+/g,""));
  
  //var total_5year = total_equipment + total_labor + total_consumable;
  var total_5year = total_build + total_labor + total_consumable;
  //$('#kic_value .summary .mix input.fiveyear.equipment').val(total_equipment).formatCurrency({roundToDecimalPlace:0});
  $('#kic_value .summary .mix input.fiveyear.equipment').val(total_build).formatCurrency({roundToDecimalPlace:2});
  $('#kic_value .summary .mix input.fiveyear.labor').val(total_labor).formatCurrency({roundToDecimalPlace:2});
  $('#kic_value .summary .mix input.fiveyear.consumable').val(total_consumable).formatCurrency({roundToDecimalPlace:2});
  $('#kic_value .summary .mix input.fiveyear.total').val(total_5year).formatCurrency({roundToDecimalPlace:2});
}
var update_5years = function() {
  build_5year('copier');
  build_5year('bookedge');
  build_5year('Click');
  build_5year('bookeye');
  build_5year_mix();
}
var build_all_bars = function() {
  var max_cost = get_max_package_cost();
  build_bar('copier',max_cost);
  build_bar('bookedge',max_cost);
  build_bar('Click',max_cost);
  build_bar('bookeye',max_cost);
  build_bar('mix',max_cost);
  sort_list();
}
var get_summary_total = function(device) {
  var total = parseFloat($('#kic_value .summary .'+device+' input.fiveyear.total').val().replace(/[$,]+/g,""));
  return total;
}
var build_sort_li = function(device) {
  var total = get_summary_total(device);
  var total_copier = get_summary_total('copier');
  var total_bookedge = get_summary_total('bookedge');
  var total_Click = get_summary_total('Click');
  var total_bookeye = get_summary_total('bookeye');
  var total_mix = get_summary_total('mix');
  var pos_flag = 5;
  //stupid sort...  
  switch (device) {
   case 'copier':
    if (total_mix <= total_copier) {pos_flag = 0;}
    if (total_mix > total_copier) {pos_flag = 1;}
    break;
   case 'bookedge':
    if (total_mix <= total_bookedge) {pos_flag = 1;}
    if (total_mix > total_bookedge) {pos_flag = 2;}
    break; 
   case 'Click':
    if (total_mix <= total_Click) {pos_flag = 2;}
    if (total_mix > total_Click) {pos_flag = 3;}
    break;
   case 'bookeye':
    if (total_mix <= total_bookeye) {pos_flag = 3;}
    if (total_mix > total_bookeye) {pos_flag = 4;}
    break; 
   case 'mix':  
    if (total_mix <= total_copier) {pos_flag = 1;}  
    if (total_mix <= total_bookedge) {pos_flag = 2;}
    if (total_mix <= total_Click) {pos_flag = 3;}
    if (total_mix <= total_bookeye) {pos_flag = 4;}
    break;
  }  
  $('#kic_value .variables ul').append('<li><p class="pos_flag">'+pos_flag+'</p><p class="device">'+device+'</p><p class="total">'+total+'</p></li>');
}
var sort_list = function() {
  $('#kic_value .variables ul').empty();  
  build_sort_li('copier');
  build_sort_li('bookedge');
  build_sort_li('Click');
  build_sort_li('bookeye');
  build_sort_li('mix');
  $('#kic_value .variables ul li').sortElements(function(a,b) {
    var a1 = parseFloat($(a).find('p.total').text());
    var b1 = parseFloat($(b).find('p.total').text());
    if (a1 == b1) {
      a1 = parseFloat($(a).find('p.device').text()) 
      b1 = parseFloat($(b).find('p.device').text())
    }
    return a1 > b1 ? -1 : 1;
  });
  var i = 0;
  $('#kic_value .variables li').each(function(){
    var l_pos = i*220;
    var device = $(this).find('p.device').text();
    $('#kic_value .cell_wrap.'+device).animate({left: l_pos},1000);
    $('#kic_value .summary .'+device).animate({left: l_pos},1000);
    i = i+1;
  });  
}
var build_bar = function(device,max_cost) {
  var max_height = parseInt(300 + (Math.sqrt(max_cost)/3));
  var bar_equipment = 0, bar_labor = 0, bar_consumable = 0;
  if (max_height > 600) { max_height = 600; }
  var total_equipment = $('#kic_value .summary .'+device+' input.fiveyear.equipment').val().replace(/[$,]+/g,"");
  var total_labor = $('#kic_value .summary .'+device+' input.fiveyear.labor').val().replace(/[$,]+/g,"");
  var total_consumable = $('#kic_value .summary .'+device+' input.fiveyear.consumable').val().replace(/[$,]+/g,"");
  var total = $('#kic_value .summary .'+device+' input.fiveyear.total').val().replace(/[$,]+/g,"");
  var total_cap = parseFloat($('#kic_value .variables input.annual.capacity').val().replace(/[$,]+/g,""));
  var device_annual_cap = parseFloat($('#kic_value .summary .'+device+' p.sublabel').text().replace(/[$,*\/(a-z)]+/g,""));
  if (isNaN(device_annual_cap)) { device_annual_cap = total_cap }
  var unit_cost = total / (device_annual_cap*5);
  if (total != 0) {
    var savings = max_cost - total;
    var scale = total / max_cost;
    if (isNaN(scale)) {scale=0;};
    bar_equipment = parseInt((total_equipment/total)*scale*max_height);
    var equipment_label = parseInt(((bar_equipment/2)-8));
    bar_labor = parseInt((total_labor/total)*scale*max_height);
    var labor_label = parseInt(((bar_labor/2)-8));
    bar_consumable = parseInt((total_consumable/total)*scale*max_height);
    var consumable_label = parseInt(((bar_consumable/2)-8));
    var top_fill = max_height - (bar_equipment+bar_labor+bar_consumable)+40;
    var top_fill_label = top_fill -40;
    $('#cost_graph .'+device+' div.top_fill').animate({height: top_fill}, 1000);
    $('#cost_graph .'+device+' div.vertical.max').empty();
    $('#cost_graph .'+device+' div.vertical.max').append('<p class="unit_cost">'+unit_cost+'</p>');
    $('#cost_graph .'+device+' div.vertical.max p.unit_cost').formatCurrency({roundToDecimalPlace:3});
    $('#cost_graph .'+device+' div.vertical.max p.unit_cost').append('/page');
    $('#cost_graph .'+device+' div.vertical.max').animate({top: top_fill_label},1000);    
    //$('#cost_graph .'+device+' div.vertical.max').css({top: top_fill_label});
    $('#cost_graph .'+device+' div.vertical.max').append('<p class="total">'+total+'</p>');
    $('#cost_graph .'+device+' div.vertical.max p.total').formatCurrency({roundToDecimalPlace:0});
    $('#cost_graph .'+device+' div.cell_comp.bar_equip .bar_cover').empty();
    $('#cost_graph .'+device+' div.cell_comp.bar_equip .bar_cover').append('<p class="label">'+total_equipment+'</p>');
    $('#cost_graph .'+device+' div.cell_comp.bar_equip .bar_cover p').formatCurrency({roundToDecimalPlace:0}).animate({top: equipment_label},1000);    
    $('#cost_graph .'+device+' div.cell_comp.bar_paper .bar_cover').empty();
    $('#cost_graph .'+device+' div.cell_comp.bar_paper .bar_cover').append('<p class="label">'+total_consumable+'</p>');
    $('#cost_graph .'+device+' div.cell_comp.bar_paper .bar_cover p').formatCurrency({roundToDecimalPlace:0}).animate({top: consumable_label},1000);    
    $('#cost_graph .'+device+' div.cell_comp.bar_labor .bar_cover').empty();
    $('#cost_graph .'+device+' div.cell_comp.bar_labor .bar_cover').append('<p class="label">'+total_labor+'</p>');
    $('#cost_graph .'+device+' div.cell_comp.bar_labor .bar_cover p').formatCurrency({roundToDecimalPlace:0}).animate({top: labor_label},1000);    
    if (device_annual_cap > total_cap) {$('#cost_graph .'+device+' div.vertical.max p.total').append('*'); }     
    if (total != max_cost) {
      var sav_label = ((top_fill-50)/2)-25;
      $('#cost_graph .'+device+' div.top_fill').html('<p class="money">'+savings+'</p>');
      $('#cost_graph .'+device+' div.top_fill p.money').formatCurrency({roundToDecimalPlace:0});
      $('#cost_graph .'+device+' div.top_fill').append('<p class="sub">five year savings</p>');
      $('#cost_graph .'+device+' div.top_fill p.money').animate({top: sav_label},1000);
      $('#cost_graph .'+device+' div.top_fill p.sub').animate({top: (sav_label+20)},1000);
    } else {
      $('#cost_graph .'+device+' div.top_fill').empty();
    }
  } else {
    $('#cost_graph .'+device+' div.top_fill').animate({height: max_height}, 1000);
    $('#cost_graph .'+device+' div.vertical.max').animate({top: max_height},1000);    
    $('#cost_graph .'+device+' div.top_fill p.money').animate({top: max_height},1000);
    $('#cost_graph .'+device+' div.top_fill p.sub').animate({top: max_height},1000);    
  }    
  $('#cost_graph .'+device+' div.bar_labor').animate({height: bar_labor}, 1000);
  $('#cost_graph .'+device+' div.bar_paper').animate({height: bar_consumable}, 1000);
  $('#cost_graph .'+device+' div.bar_equip').animate({height: bar_equipment}, 1000);
}
var get_max_package_cost = function(){
  var max_cost = 0, package_cost = 0, package = '';
  $('#kic_value .summary > div').each(function(){
    package_cost = parseFloat($(this).find('input.fiveyear.total').val().replace(/[$,]+/g,""));
    if (package_cost > max_cost) {
      package = $(this).attr('class');
      max_cost = package_cost;
    };
  });
  var max_height = parseInt(300 + (Math.sqrt(max_cost)/3))+40;
  if (max_height > 640) { max_height = 640; }  
  $('#kic_value #cost_graph').animate({height:max_height}, 1000);
  var total_cap = parseFloat($('#kic_value .variables input.annual.capacity').val().replace(/[$,]+/g,""));
  var green_bar_cost = total_cap *.1*5;
  var scale = 0;
  if (max_cost > 0) { scale = green_bar_cost / max_cost; }
  var green_bar_top = scale*(max_height-40);
$('#kic_value #cost_graph .green-line p.greencost').empty().html(green_bar_cost).formatCurrency({roundToDecimalPlace:0}).append('<br> 5-Year Cost <br> ($0.10/page)');  
  $('#kic_value #cost_graph .green-line').animate({bottom:green_bar_top}, 1000);
  return max_cost; 
}
//-#kic_value--------------------------------------------------------------------------------

var fade_highlight = function() {
  time = 800;
  $('.flabel p.caption').animate({color:"#300"},time).animate({color:"#e11"},time);
  $('span.flabel').animate({color:"#e11"},time).animate({color:"#000"},time);
}
var load_feature_table = function() {
  var url = "builder/script/load_block.asp"; 
  $.get(url, {Request: 'kic-feature-table.html'}, function(data) {
    $('#feature_footnotes').html(data);
    $('#feature_footnotes p.headline').click(function() {
      $(this).parent().toggleClass('expand');
      $(this).parent().find('.headline.caption').toggleClass('hide');
      $(this).parent().find('.variables').toggleClass('hide');
    });
    $('#feature_footnotes').removeClass('hide');
  });
}

var load_lower = function(){
  var url = "script/load_block.asp";     
  $.get(url, {Request: 'build-your-kic-lower.html'}, function(data) { 
    $('#kic_value').after(data);
    $('iframe', window.parent.document).height('29200px'); 
    lower_kic_visibility_swap();
  });
}

var set_roaming = function(sys_id){
  var be_is_intl = be_is_intl_roaming($('select.select_country').val());
  var show_disc_call_box = show_disc_call($('select.select_country').val());
  if (show_disc_call_box) {
    $('#build_your_kic .page-summary .flabel').removeClass('hide');
    } else {
      $('#build_your_kic .page-summary .flabel').addClass('hide');
    };  
  var model = get_model(sys_id);
  if (be_is_intl) {
    switch (model) {
      case "Bookeye4":
        $('#'+sys_id+' .intl_roaming').removeClass('hide');
        $('#'+sys_id+' .local_roaming').addClass('hide');
        $('#'+sys_id+' .blotter.Bookeye4V2').removeClass('hide');
        $('#'+sys_id+' .blotter.Bookeye4V3').addClass('hide');
        $('#'+sys_id+' #scannerfuzz').removeClass('hide');
        break;
      case "Bookeye4V3":
        $('#'+sys_id+' .intl_roaming').removeClass('hide');
        $('#'+sys_id+' .local_roaming').addClass('hide');
        $('#'+sys_id+' .blotter.Bookeye4V2').addClass('hide');
        $('#'+sys_id+' .blotter.Bookeye4V3').removeClass('hide');
        $('#'+sys_id+' #scannerfuzz').removeClass('hide');
        break;
      default:
        $('#'+sys_id+' .intl_roaming').removeClass('hide');
        $('#'+sys_id+' .scanner_list_intl.intl_roaming').addClass('hide');
        $('#'+sys_id+' .local_roaming').addClass('hide');
        $('#'+sys_id+' #scannerfuzz').addClass('hide');
    };
  } else {
    $('#'+sys_id+' .intl_roaming').addClass('hide');
    $('#'+sys_id+' .local_roaming').removeClass('hide');
    $('#'+sys_id+' #scannerfuzz').addClass('hide');
  };
}

var show_disc_call = function(country_id) {
  var show_disc_call = 0;
  switch (country_id) {
    case "ca": show_disc_call = 1; break;
    case "gu": show_disc_call = 1; break;
    case "mp": show_disc_call = 1; break;
    case "pr": show_disc_call = 1; break;
    case "vi": show_disc_call = 1; break;
    case "us": show_disc_call = 1; break;
  };
  return show_disc_call;
}


var be_is_intl_roaming = function(country_id) {
  var be_is_intl = 0;
  switch (country_id) {
    case "ca": be_is_intl = 0; break;
    case "gu": be_is_intl = 0; break;
    case "mp": be_is_intl = 0; break;
    case "pr": be_is_intl = 0; break;
    case "vi": be_is_intl = 0; break;
    case "us": be_is_intl = 0; break;
    
    case "ai": be_is_intl = 0; break;
    case "ag": be_is_intl = 0; break;
    case "aw": be_is_intl = 0; break;
    case "bs": be_is_intl = 0; break;
    case "bb": be_is_intl = 0; break;
    case "vg": be_is_intl = 0; break;
    case "ky": be_is_intl = 0; break;
    case "cu": be_is_intl = 0; break;
    case "dm": be_is_intl = 0; break;
    case "do": be_is_intl = 0; break;
    case "gd": be_is_intl = 0; break;
    case "gp": be_is_intl = 0; break;
    case "ht": be_is_intl = 0; break;
    case "jm": be_is_intl = 0; break;
    case "mq": be_is_intl = 0; break;
    case "ms": be_is_intl = 0; break;
    case "an": be_is_intl = 0; break;
    case "kn": be_is_intl = 0; break;
    case "lc": be_is_intl = 0; break;
    case "vc": be_is_intl = 0; break;
    case "tt": be_is_intl = 0; break;
    case "tc": be_is_intl = 0; break;
    
    case "bz": be_is_intl = 0; break;
    case "cr": be_is_intl = 0; break;
    case "sv": be_is_intl = 0; break;
    case "gt": be_is_intl = 0; break;
    case "hn": be_is_intl = 0; break;
    case "mx": be_is_intl = 0; break;
    case "ni": be_is_intl = 0; break;
    case "pa": be_is_intl = 0; break;
    
    case "ar": be_is_intl = 1; break;
    case "bo": be_is_intl = 0; break;
    case "br": be_is_intl = 1; break;
    case "cl": be_is_intl = 1; break;
    case "co": be_is_intl = 1; break;
    case "ec": be_is_intl = 1; break;
    case "gf": be_is_intl = 1; break;
    case "gy": be_is_intl = 1; break;
    case "py": be_is_intl = 1; break;
    case "pe": be_is_intl = 1; break;
    case "sr": be_is_intl = 1; break;
    case "uy": be_is_intl = 1; break;
    case "ve": be_is_intl = 1; break;
    
    case "al": be_is_intl = 1; break;
    case "ad": be_is_intl = 1; break;
    case "am": be_is_intl = 1; break;
    case "at": be_is_intl = 1; break;
    case "by": be_is_intl = 1; break;
    case "be": be_is_intl = 1; break;
    case "ba": be_is_intl = 1; break;
    case "bg": be_is_intl = 1; break;
    case "hr": be_is_intl = 1; break;
    case "cz": be_is_intl = 1; break;
    case "dk": be_is_intl = 1; break;
    case "ee": be_is_intl = 1; break;
    case "fo": be_is_intl = 1; break;
    case "fi": be_is_intl = 1; break;
    case "fr": be_is_intl = 1; break;
    case "ge": be_is_intl = 1; break;
    case "de": be_is_intl = 1; break;
    case "gi": be_is_intl = 1; break;
    case "gr": be_is_intl = 1; break;
    case "gg": be_is_intl = 1; break;
    case "hu": be_is_intl = 1; break;
    case "is": be_is_intl = 1; break;
    case "ie": be_is_intl = 1; break;
    case "im": be_is_intl = 1; break;
    case "it": be_is_intl = 1; break;
    case "je": be_is_intl = 1; break;
    case "lv": be_is_intl = 1; break;
    case "li": be_is_intl = 1; break;
    case "lt": be_is_intl = 1; break;
    case "lu": be_is_intl = 1; break;
    case "mk": be_is_intl = 1; break;
    case "mt": be_is_intl = 1; break;
    case "md": be_is_intl = 1; break;
    case "mc": be_is_intl = 1; break;
    case "nl": be_is_intl = 1; break;
    case "no": be_is_intl = 1; break;
    case "pl": be_is_intl = 1; break;
    case "pt": be_is_intl = 1; break;
    case "ro": be_is_intl = 1; break;
    case "sm": be_is_intl = 1; break;
    case "rs": be_is_intl = 1; break;
    case "sk": be_is_intl = 1; break;
    case "si": be_is_intl = 1; break;
    case "es": be_is_intl = 1; break;
    case "se": be_is_intl = 1; break;
    case "ch": be_is_intl = 1; break;
    case "ua": be_is_intl = 1; break;
    case "gb": be_is_intl = 1; break;
    
    case "dz": be_is_intl = 1; break;
    case "ao": be_is_intl = 1; break;
    case "bj": be_is_intl = 1; break;
    case "bm": be_is_intl = 1; break;
    case "bw": be_is_intl = 1; break;
    case "bf": be_is_intl = 1; break;
    case "bi": be_is_intl = 1; break;
    case "cm": be_is_intl = 1; break;
    case "cv": be_is_intl = 1; break;
    case "cf": be_is_intl = 1; break;
    case "td": be_is_intl = 1; break;
    case "km": be_is_intl = 1; break;
    case "cd": be_is_intl = 1; break;
    case "cg": be_is_intl = 1; break;
    case "ci": be_is_intl = 1; break;
    case "dj": be_is_intl = 1; break;
    case "eg": be_is_intl = 1; break;
    case "gq": be_is_intl = 1; break;
    case "er": be_is_intl = 1; break;
    case "et": be_is_intl = 1; break;
    case "ga": be_is_intl = 1; break;
    case "gm": be_is_intl = 1; break;
    case "gh": be_is_intl = 1; break;
    case "gl": be_is_intl = 1; break;
    case "gn": be_is_intl = 1; break;
    case "gw": be_is_intl = 1; break;
    case "ke": be_is_intl = 1; break;
    case "ls": be_is_intl = 1; break;
    case "lr": be_is_intl = 1; break;
    case "ly": be_is_intl = 1; break;
    case "mg": be_is_intl = 1; break;
    case "mw": be_is_intl = 1; break;
    case "ml": be_is_intl = 1; break;
    case "mr": be_is_intl = 1; break;
    case "mu": be_is_intl = 1; break;
    case "yt": be_is_intl = 1; break;
    case "ma": be_is_intl = 1; break;
    case "mz": be_is_intl = 1; break;
    case "na": be_is_intl = 1; break;
    case "ne": be_is_intl = 1; break;
    case "ng": be_is_intl = 1; break;
    case "re": be_is_intl = 1; break;
    case "rw": be_is_intl = 1; break;
    case "sh": be_is_intl = 1; break;
    case "st": be_is_intl = 1; break;
    case "sn": be_is_intl = 1; break;
    case "sc": be_is_intl = 1; break;
    case "sl": be_is_intl = 1; break;
    case "so": be_is_intl = 1; break;
    case "za": be_is_intl = 1; break;
    case "pm": be_is_intl = 1; break;
    case "sd": be_is_intl = 1; break;
    case "sz": be_is_intl = 1; break;
    case "tz": be_is_intl = 1; break;
    case "tg": be_is_intl = 1; break;
    case "tn": be_is_intl = 1; break;
    case "ug": be_is_intl = 1; break;
    case "eh": be_is_intl = 1; break;
    case "zm": be_is_intl = 1; break;
    case "zw": be_is_intl = 1; break;
    
    case "bh": be_is_intl = 1; break;
    case "cy": be_is_intl = 1; break;
    case "gz": be_is_intl = 1; break;
    case "iq": be_is_intl = 1; break;
    case "il": be_is_intl = 1; break;
    case "jo": be_is_intl = 1; break;
    case "kw": be_is_intl = 1; break;
    case "lb": be_is_intl = 1; break;
    case "om": be_is_intl = 1; break;
    case "qa": be_is_intl = 1; break;
    case "sa": be_is_intl = 1; break;
    case "sy": be_is_intl = 1; break;
    case "tr": be_is_intl = 1; break;
    case "ae": be_is_intl = 1; break;
    case "we": be_is_intl = 1; break;
    case "ye": be_is_intl = 1; break;
    
    case "af": be_is_intl = 1; break;
    case "az": be_is_intl = 1; break;
    case "bd": be_is_intl = 1; break;
    case "bt": be_is_intl = 1; break;
    case "bn": be_is_intl = 1; break;
    case "bu": be_is_intl = 1; break;
    case "kh": be_is_intl = 1; break;
    case "cn": be_is_intl = 1; break;
    case "tl": be_is_intl = 1; break;
    case "hk": be_is_intl = 1; break;
    case "in": be_is_intl = 1; break;
    case "id": be_is_intl = 1; break;
    case "ir": be_is_intl = 1; break;
    case "jp": be_is_intl = 1; break;
    case "kz": be_is_intl = 1; break;
    case "kp": be_is_intl = 1; break;
    case "kr": be_is_intl = 1; break;
    case "kg": be_is_intl = 1; break;
    case "la": be_is_intl = 1; break;
    case "mo": be_is_intl = 1; break;
    case "my": be_is_intl = 1; break;
    case "mv": be_is_intl = 1; break;
    case "mn": be_is_intl = 1; break;
    case "np": be_is_intl = 1; break;
    case "pk": be_is_intl = 1; break;
    case "ph": be_is_intl = 1; break;
    case "ru": be_is_intl = 1; break;
    case "sg": be_is_intl = 1; break;
    case "lk": be_is_intl = 1; break;
    case "tw": be_is_intl = 1; break;
    case "tj": be_is_intl = 1; break;
    case "th": be_is_intl = 1; break;
    case "tm": be_is_intl = 1; break;
    case "uz": be_is_intl = 1; break;
    case "vn": be_is_intl = 1; break;
    
    case "au": be_is_intl = 1; break;
    case "nz": be_is_intl = 1; break;

  };
  return be_is_intl;
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
$(document).ready(function() {		
	$('.intro p.warning').remove();
  
	var ua = $.browser;

  // set lower-nav width   
  var sum=0;
  $('.lower-nav ul').each( function(){ sum += $(this).width() + 104; });
  $('.lower-nav ').width( sum );
  
  $('.build-fieldset legend').click( function() {
    $(this).siblings().toggleClass('hide');
    $(this).parents('.build-fieldset').toggleClass('expand');
    //update iframe height
    hval = $(document).height();
    $('iframe', window.parent.document).height(hval);
    lower_kic_visibility_swap();
  });
  
  $('.discount_amt span.sb').click(function() { $('.qty-disc-table').toggleClass('hide'); });
  
  $('span.pricecheck').click(function() { 
  	
// bob commented out  	
    pricecheck();
  });

  $('.qty-disc-table').click(function() { $('.qty-disc-table').addClass('hide'); });
 
  $('.build-fieldset input').click(function(){
    var sys_id = $(this).parents('.build-fieldset').attr('id');
//here
                
    if ($(this).parent().hasClass('model')) { model_validate(sys_id); option_validate(sys_id); lower_kic_visibility_swap() ; }
    if ($(this).parent().hasClass('color')) { color_validate(sys_id); }
    if ($(this).parent().hasClass('furn')) { furniture_validate(sys_id); }
    if ($(this).parent().hasClass('feature')) { option_validate(sys_id); }
    if ($(this).hasClass('quantity')) {  
    } else {
      image_swap(sys_id);
      build_pricing();
    }
    set_roaming(sys_id); 
  });
  $('.build-fieldset input.quantity').change(function(){
    var sys_id = $(this).parents('.build-fieldset').attr('id'); 
    build_pricing();
  }).blur(function(){
    var sys_id = $(this).parents('.build-fieldset').attr('id'); 
    build_pricing(sys_id);
  });
  $('input.apply-discount').click(function(){
    $('.discount-box p.notification').empty();
    $('.discount-box p.notification').append('Waiting for Discount Code validation...');
    $('.discount-box p.notification').removeClass('hide');
    get_discount();    
  });
  $('.discount-rates').ajaxComplete(function() {

    $('.discount-box p.notification').empty();
    $('p.caption.sysdisc').empty();  
    if ($('.disc_rate').val() != 0) {
      $('.discount-box p.notification').append('Discount Code Applied!');
      $('p.caption.sysdisc').append('(Discount Applied)');
      //$('div.flabel').addClass('hide');
      //build_pricing();
    } else {
      $('.discount-box p.notification').append('Sorry, Invalid Discount Code');
      $('p.caption.sysdisc').append('Call for Your Institutional Discount!');
      //$('div.flabel').removeClass('hide');
      //$('#K-19').empty();
    }
    //build_pricing('all');
  });

  /*
  $('.summary .discount.inst').mouseenter(function(){
    if ($('.disc_rate').val() == 0) {
      $('.page-summary .flabel').effect('shake',{ times:2, distance:10 },100);
    };
    $('span.flabel').addClass('highlight');
    fade_highlight();
  }).mouseleave(function(){
    $('span.flabel').removeClass('highlight');
  });
  $('#build_your_kic .page-summary .flabel').mouseenter(function(){
    $('span.flabel').addClass('highlight');
    fade_highlight(); 
  }).mouseleave(function(){
    $('span.flabel').removeClass('highlight');
  });
  */
  
  $('select.select_country').change(function(){
    model_validate_all();
    set_roaming_all();
    pricecheck();
  });
    
  //value---------------------  
  $('#kic_value .inputs input, #kic_value .variables input').change(function(){ rebuild_value_chart(); });  
  
  $('#usage_slider').slider({ animate: true, min: 0, max: 100, value: 50, step: 10, change: function(event, ui) { update_device_usage(); rebuild_value_chart(); }});
  $('#time_slider').slider({ animate: true, min: 0, max: 10, value: 5, step: 1, change: function(event, ui) { labor_slider_update(); rebuild_value_chart(); }});
  $('#usage_slider').slider('option', 'value', 50);
  $('#time_slider').slider('option', 'value', 5);
      
  $('#kic_value .intro .reset').click(function() { reset_value_form(); });
  $('#kic_value .tablewrap.device tr.summary p.reset').click(function() { update_device_usage(); reset_value_device_table(); rebuild_value_chart(); });  
  $('#kic_value .tablewrap.labor tr.summary p.reset').click(function() { reset_labor_table(); rebuild_value_chart(); });
  $('#footnotes p.headline').click(function() {
    $(this).parent().toggleClass('expand');
    $(this).parent().find('.headline.caption').toggleClass('hide');
    $(this).parent().find('.variables').toggleClass('hide');
  });
  //rebuild_value_chart();
  //value---------------------
  
  //$('tbody tr:odd').css('background-color', '#bdb');
  //$('tbody tr:even').css('background-color', '#fff');
 
  if ( ua.msie && ua.version.slice(0,1) == '8') {
    //alert(ua.version.slice(0,1));  
    var pie_mat, pie_file, pie_copy, pie_ui, pie_it, bar_features;
  }
  pie_mat = new Highcharts.Chart(setup_pie_chart('pie_mat'),function(){ $('#pie_mat').append('<p class="hide" id="pie_mat_tag"></p>'); });
  pie_file = new Highcharts.Chart(setup_pie_chart('pie_file'),function(){ $('#pie_file').append('<p class="hide" id="pie_file_tag"></p>'); });
  pie_copy = new Highcharts.Chart(setup_pie_chart('pie_copy'),function(){ $('#pie_copy').append('<p class="hide" id="pie_copy_tag"></p>'); });
  pie_ui = new Highcharts.Chart(setup_pie_chart('pie_ui'),function(){ $('#pie_ui').append('<p class="hide" id="pie_ui_tag"></p>'); });
  pie_it = new Highcharts.Chart(setup_pie_chart('pie_it'),function(){ $('#pie_it').append('<p class="hide" id="pie_it_tag"></p>'); });
  bar_features = new Highcharts.Chart(setup_feature_bar_chart('dummy'),function(){ $('#bar_features').append('<p class="hide" id="bar_features_tag"></p>'); });
  //$('#bar_features div.highcharts-container').css('overflow','visible');
 
  
  reset_value_form();
  reset_form_all();
  model_validate_all();
  furniture_validate_all();
  option_validate_all();
  $('#build-a-kic_1').toggleClass('expand');
  $('#build-a-kic_1 legend').siblings().toggleClass('hide');
  lower_kic_visibility_swap();
  //image_swap('build-a-kic_1');
  //no Bob, like this...
  image_swap_all();
  set_roaming_all();
  
  build_pricing();  
  
  //$('#kic_features div ul').addClass('hide');
   
  setTimeout('load_feature_table()', 3000);
  setTimeout('load_lower()', 5000);
  
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

  