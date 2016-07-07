var model_validate_all = function() {
  model_validate('build-a-bscan_1');  
  model_validate('build-a-bscan_2');
  model_validate('build-a-bscan_3');
  model_validate('build-a-bscan_4');
  model_validate('build-a-bscan_5'); 
}
var option_validate_all = function() {
  option_validate('build-a-bscan_1');  
  option_validate('build-a-bscan_2');
  option_validate('build-a-bscan_3');
  option_validate('build-a-bscan_4');
  option_validate('build-a-bscan_5'); 
}
var reset_form_all = function(sys_id) {
  $('input.disc_code').val('');
  $('input.disc2_code').val('');
  $('input.disc_rate').val('0');
  $('input.disc2_rate').val('0');
  $('input.disc3_rate').val('0');
  $('input.disc4_rate').val('0');
  reset_build_form('build-a-bscan_1');
  $('#build-a-bscan_1 input.quantity').val(1);
  reset_build_form('build-a-bscan_2');
  reset_build_form('build-a-bscan_3');
  reset_build_form('build-a-bscan_4');
  reset_build_form('build-a-bscan_5'); 
}
var get_system_selections = function(sys_id) {
  var data = new Object;
  data.model = get_model(sys_id);
  data.ocr = $('#'+sys_id+' .features input.ocr:checked').val();
  data.dualpc = $('#'+sys_id+' .features input.dualpc:checked').val();  
  data.pc = $('#'+sys_id+' .features input.pc:checked').val();
  data.footpedal = $('#'+sys_id+' .features input.footpedal:checked').val();
  data.dpi = $('#'+sys_id+' .features input.dpi600:checked').val();
  data.color = $('#'+sys_id+' .features input.color:checked').val();  
  data.freeflowlite = $('#'+sys_id+' .features input.freeflowlite:checked').val();  
  data.freeflow = $('#'+sys_id+' .features input.freeflow:checked').val();  
  data.addlic = $('#'+sys_id+' .features input.addlic:checked').val();    
  data.dualvideo = $('#'+sys_id+' .features input.dualvideo:checked').val();
  data.neckview = $('#'+sys_id+' .features input.neckview:checked').val();
  
  // add 12 expansion option variables  
  data.expansion7 = 0;
  data.expansion8 = 0;
  data.expansion9 = 0;
  data.expansion10 = 0;
  data.expansion11 = 0;
  data.expansion12 = 0;
  data.expansion13 = 0;
  data.expansion14 = 0;
  data.expansion15 = 0;
  data.expansion16 = 0;
  data.expansion17 = 0;
  data.expansion18 = 0;
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
  
  $('#'+sys_id+' .feature .ocr').prop('checked', false);
  $('#'+sys_id+' .feature .dualpc').prop('checked', false);
  $('#'+sys_id+' .feature .pc').prop('checked', false);  
  $('#'+sys_id+' .feature .footpedal').prop('checked', false);    
  $('#'+sys_id+' .feature .color').prop('checked', true);
  $('#'+sys_id+' .feature .freeflowlite').prop('checked', false);
  $('#'+sys_id+' .feature .freeflow').prop('checked', false);
  $('#'+sys_id+' .service.one input').prop('checked', true);
  $('#'+sys_id+' .feature .addlic').prop('checked', false);
  $('#'+sys_id+' .feature .addlic').parent().addClass('hide'); 
  $('#'+sys_id+' .feature .addlic').addClass('hide');      
  
  $('#'+sys_id+' .feature .neckview').prop('checked', false);  
  $('#'+sys_id+' .feature .neckview').parent().addClass('hide'); 
  $('#'+sys_id+' .feature .neckview').addClass('hide');  
  
  $('#'+sys_id+' .feature .dpi600').prop('checked', false);    
  $('#'+sys_id+' .feature .dpi600').parent().addClass('hide'); 
  $('#'+sys_id+' .feature .dpi600').addClass('hide');        
  
  $('#'+sys_id+' .feature .dualvideo').prop('checked', false);  
    
  $('#'+sys_id+' .lic_note').addClass('invisible');  	
  $('#'+sys_id+' .feature.colorup p').text("Color");
  
  switch (model) {
    case "BookEdge":  

      break;
      
    case "ClickMini":    

      break;
      
    case "Bookeye4v1":  
      $('#'+sys_id+' .feature .color').prop('checked', false);    
      $('#'+sys_id+' .feature.colorup p').text("Color (upgrade from grayscale)");    
      $('#'+sys_id+' .feature .ocr').prop('checked', true);      
      $('#'+sys_id+' .feature .neckview').parent().removeClass('hide'); 
      $('#'+sys_id+' .feature .neckview').removeClass('hide');            
      $('#'+sys_id+' .feature .neckview').prop('checked', true);  
      break;
            
    case "Bookeye4v2":
      $('#'+sys_id+' .feature .color').prop('checked', false);    
      $('#'+sys_id+' .feature.colorup p').text("Color (upgrade from grayscale)");    
      $('#'+sys_id+' .feature .ocr').prop('checked', true);
      $('#'+sys_id+' .feature .neckview').parent().removeClass('hide'); 
      $('#'+sys_id+' .feature .neckview').removeClass('hide'); 
      $('#'+sys_id+' .feature .neckview').prop('checked', true);                   
      
      $('#'+sys_id+' .feature.dpi600 p').text("600dpi (upgrade from 400dpi)");    
      $('#'+sys_id+' .feature .dpi600').parent().removeClass('hide'); 
      $('#'+sys_id+' .feature .dpi600').removeClass('hide');              
      break;
      
    case "Bookeye4v3":
      $('#'+sys_id+' .feature .ocr').prop('checked', true);
      $('#'+sys_id+' .feature .neckview').parent().removeClass('hide'); 
      $('#'+sys_id+' .feature .neckview').removeClass('hide'); 
      $('#'+sys_id+' .feature .neckview').prop('checked', true);                   
      
      $('#'+sys_id+' .feature.dpi600 p').text("600dpi (upgrade from 400dpi)");    
      $('#'+sys_id+' .feature .dpi600').parent().removeClass('hide'); 
      $('#'+sys_id+' .feature .dpi600').removeClass('hide');                    
      break;      
      
    case "WT25":
     $('#'+sys_id+' .feature .ocr').prop('checked', true);
     
      $('#'+sys_id+' .feature.dpi600 p').text("600dpi");    
      $('#'+sys_id+' .feature .dpi600').parent().removeClass('hide'); 
      $('#'+sys_id+' .feature .dpi600').removeClass('hide');                         
      break;  
      
    case "BECM":
        $('#'+sys_id+' .feature .addlic').parent().removeClass('hide'); 
        $('#'+sys_id+' .feature .addlic').removeClass('hide');      
      break;              
  }
  $('#'+sys_id+' .summary .nameplate').addClass('hide');
  $('#'+sys_id+' .summary .nameplate.'+model).removeClass('hide');  
}


var option_validate = function(sys_id) {
  var model = get_model(sys_id);		
  
  switch (model) {
    case "BookEdge":  
         $('#'+sys_id+' .feature .color').prop('checked', true);    
         $('#'+sys_id+' .lic_note').addClass('invisible');  	  
      break;
    case "ClickMini":    
         $('#'+sys_id+' .feature .color').prop('checked', true);    
         $('#'+sys_id+' .lic_note').addClass('invisible');  	  
      break;
    case "Bookeye4v3":
         $('#'+sys_id+' .feature .color').prop('checked', true);        
         $('#'+sys_id+' .lic_note').addClass('invisible');  	      
         $('#'+sys_id+' .feature .ocr').prop('checked', true);
         //TR, per TW, BE4V3 gets free foootpedal 2016.04.19
         $('#'+sys_id+' .feature .footpedal').prop('checked', true);
 	 
 //	 if( $('#'+sys_id+' .features input.dualpc:checked').val() )
 //	 {
 	   //if touch and view -> unselect neckview
 //	   $('#'+sys_id+' .feature .neckview').prop('checked', false);
 //	 }
      break;
    case "Bookeye4v2":
         $('#'+sys_id+' .lic_note').addClass('invisible');  	      
	       $('#'+sys_id+' .feature .ocr').prop('checked', true);
         //TR, per TW, BE4V2 gets free foootpedal 2016.04.19
         $('#'+sys_id+' .feature .footpedal').prop('checked', true);
                  
 //	 if( $('#'+sys_id+' .features input.dualpc:checked').val() )
 //	 {
 	   //if touch and view -> unselect neckview
 //	   $('#'+sys_id+' .feature .neckview').prop('checked', false);
 //	 }	 
      break;
    case "Bookeye4v1":
         $('#'+sys_id+' .lic_note').addClass('invisible');  	      
	 $('#'+sys_id+' .feature .ocr').prop('checked', true);
 //	 if( $('#'+sys_id+' .features input.dualpc:checked').val() )
 //	 {
 	   //if touch and view -> unselect neckview
 //	   $('#'+sys_id+' .feature .neckview').prop('checked', false);
 //	 }	 
      break;      
    case "WT25":
         $('#'+sys_id+' .feature .color').prop('checked', true);        
         $('#'+sys_id+' .feature .dpi600').prop('checked', true);        
         $('#'+sys_id+' .lic_note').addClass('invisible');  	      
	 $('#'+sys_id+' .feature .ocr').prop('checked', true);
      break;      
    case "BECM":
         $('#'+sys_id+' .feature .color').prop('checked', true);        
      if ( $('#'+sys_id+' .features .addlic input').prop('checked') )	
      {  	
  	$('#'+sys_id+' .lic_note').removeClass('invisible');  	
      }
      else
      {
  	$('#'+sys_id+' .lic_note').addClass('invisible');          
      }
      break;  
  }
    
	//need this one too, Bob
  image_swap( sys_id );
  //...
  swap_option_images( sys_id );   
  change_img_headings( sys_id ) ;
}

var change_img_headings = function(sys_id) {
	    
  var model = get_model(sys_id);    
  var heading ="";
  var font_size = '15pt' ;
    
  switch (model) {
    case "BookEdge":  
        heading = "BSCAN ILL with BookEdge"; 
      break;
    case "ClickMini":    
	heading = "BSCAN ILL with Click Mini"; 
      break;
    case "Bookeye4v3":
	heading = "BSCAN ILL with Bookeye 4 V3"; 
      break;
    case "Bookeye4v2":
	heading = "BSCAN ILL with Bookeye 4 V2"; 
      break;
    case "Bookeye4v1":
	heading = "BSCAN ILL with Bookeye 4 V1"; 
      break;      
    case "WT25":
	heading = "BSCAN ILL with WideTEK 25"; 
      break;      
    case "BECM":
        font_size = '13pt' ;
	heading = "BSCAN ILL with Click Mini & BookEdge Combo <br> (BSCAN ILL will run either scanner)"; 
      break;  
  }        
    				 	
  if( $('#'+sys_id+' .features input.dualpc:checked').val() )
  {
       //touch & view
       if( model == "BECM" )
       {
         heading = heading + ' And Touch & View Monitors' ;
       }
       else
       {
       	 heading = heading + '<br> And Touch & View Monitors' ;
       }
  }    
  else    
  if( $('#'+sys_id+' .features input.pc:checked').val() )  
  {
       //single touch
       if( model == "BECM" )
       {       	
         heading = heading + ' And Single Touch Monitor' ;
       }
       else
       {
         heading = heading + '<br> And Single Touch Monitor' ;       	
       }
  }

  //images_for_slides-heading => img-heading
  $('#'+sys_id+' .images .img-heading p').css("font-size", font_size ); 
  $('#'+sys_id+' .images .img-heading p').html( heading );    //use html to keep the line break
    
}
	
var swap_option_images = function(sys_id) {			 	
    if( $('#'+sys_id+' .features input.freeflowlite:checked').val() )
    {
    	$('#'+sys_id+' .option-item.freeflowlite.nofade').removeClass('inactive');    	
    	$('#'+sys_id+' .option-item.freeflow.nofade').addClass('inactive');
    	$('#'+sys_id+' .option-item.freeflow.fade').addClass('inactive');    	
    } 
    else
    if( $('#'+sys_id+' .features input.freeflow:checked').val() )
    {
    	$('#'+sys_id+' .option-item.freeflow.nofade').removeClass('inactive');
    	$('#'+sys_id+' .option-item.freeflow.fade').addClass('inactive');
    	$('#'+sys_id+' .option-item.freeflowlite.nofade').addClass('inactive');    	
    } 
    else
    {
    	$('#'+sys_id+' .option-item.freeflowlite.nofade').addClass('inactive');    	
    	$('#'+sys_id+' .option-item.freeflow.nofade').addClass('inactive');
    	$('#'+sys_id+' .option-item.freeflow.fade').removeClass('inactive');
    }  
    if( $('#'+sys_id+' .features input.color:checked').val() )
    {
    	$('#'+sys_id+' .option-item.color.nofade').removeClass('inactive');
    	$('#'+sys_id+' .option-item.color.fade').addClass('inactive');
    } 
    else
    {
    	$('#'+sys_id+' .option-item.color.nofade').addClass('inactive');
    	$('#'+sys_id+' .option-item.color.fade').removeClass('inactive');
    }   
   
    if( $('#'+sys_id+' .features input.dpi600:checked').val() )
    {   	
    	$('#'+sys_id+' .option-item.dpi600.nofade').removeClass('inactive');
    	$('#'+sys_id+' .option-item.dpi600.fade').addClass('inactive');
    } 
    else
    {
    	$('#'+sys_id+' .option-item.dpi600.nofade').addClass('inactive');
    	$('#'+sys_id+' .option-item.dpi600.fade').removeClass('inactive');
    }
        
    if( $('#'+sys_id+' .features input.footpedal:checked').val() )
    {
    	$('#'+sys_id+' .option-item.footpedal.nofade').removeClass('inactive');
    	$('#'+sys_id+' .option-item.footpedal.fade').addClass('inactive');
    } 
    else
    {
    	$('#'+sys_id+' .option-item.footpedal.nofade').addClass('inactive');
    	$('#'+sys_id+' .option-item.footpedal.fade').removeClass('inactive');
    }           
}


var option_click_validate = function(sys_id , item_id ) {
  
  //disable the other monitor (radio-like behavior)
  if ($(item_id).hasClass('dualpc')) 
  {
    if( $('#'+sys_id+' .features input.dualpc:checked').val() )
    {
    	$('#'+sys_id+' .feature .pc').prop('checked', false);  
    }    
  }
  else
  if ($(item_id).hasClass('pc')) 
  {
    if( $('#'+sys_id+' .features input.pc:checked').val() )
    {
    	$('#'+sys_id+' .feature .dualpc').prop('checked', false);  
    }    
  }  
  
  //do not allow to select both FreeFlow versions (radio-like behavior)
  if ($(item_id).hasClass('freeflowlite')) 
  {
    if( $('#'+sys_id+' .features input.freeflowlite:checked').val() )
    {
    	$('#'+sys_id+' .feature .freeflow').prop('checked', false);  
    }    
  }
  else
  if ($(item_id).hasClass('freeflow')) 
  {
    if( $('#'+sys_id+' .features input.freeflow:checked').val() )
    {
    	$('#'+sys_id+' .feature .freeflowlite').prop('checked', false);  
    }    
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
    var url = "script/price-calc-bscan.asp";
    data1 = get_system_selections_string("build-a-bscan_1");
    data2 = get_system_selections_string("build-a-bscan_2");
    data3 = get_system_selections_string("build-a-bscan_3");
    data4 = get_system_selections_string("build-a-bscan_4");
    data5 = get_system_selections_string("build-a-bscan_5"); 

    if ( disc_rate == "") {
      disc_rate = "0";
    }
    
    $.get(url, { system1: data1, system2: data2, system3: data3, system4: data4, system5: data5, InsDcode: disc_rate}, 
      function(data) { 
        var systems = data.split("<br>")
        pricewrite("build-a-bscan_1",systems[0].split(";"));
        pricewrite("build-a-bscan_2",systems[1].split(";"));
        pricewrite("build-a-bscan_3",systems[2].split(";"));
        pricewrite("build-a-bscan_4",systems[3].split(";"));
        pricewrite("build-a-bscan_5",systems[4].split(";"));
        $('#notifier').addClass('hide');
        $('#notifier p').empty();      
        update_page_summary();
        //rebuild_value_chart();
        //update_all_charts(); 
      }
    );
        
  }
}
var pricewrite = function(sys_id,sys_data) {
  set_summary_field(sys_id,'baseprice','list',sys_data[0]);
  set_summary_field(sys_id,'option','OCR',sys_data[1]);
  set_summary_field(sys_id,'option','dualpc',sys_data[2]);
  set_summary_field(sys_id,'option','PC',sys_data[3]);
  set_summary_field(sys_id,'option','footpedal',sys_data[4]);
  set_summary_field(sys_id,'option','dpi600',sys_data[5]);
  set_summary_field(sys_id,'option','color',sys_data[6]);  
  set_summary_field(sys_id,'option','freeflowlite',sys_data[7]);
  set_summary_field(sys_id,'option','freeflow',sys_data[8]);
  set_summary_field(sys_id,'option','addlic',sys_data[9]);
  set_summary_field(sys_id,'option','dualvideo',sys_data[10]);
  set_summary_field(sys_id,'option','neckview',sys_data[11]);
/* expansion options go here  
  set_summary_field(sys_id,'option','empty',sys_data[17]);
  set_summary_field(sys_id,'option','empty',sys_data[18]);
  set_summary_field(sys_id,'option','empty',sys_data[19]);
  set_summary_field(sys_id,'option','empty',sys_data[20]);
  set_summary_field(sys_id,'option','empty',sys_data[21]);
  set_summary_field(sys_id,'option','empty',sys_data[22]);
  set_summary_field(sys_id,'option','empty',sys_data[23]);
 */
  set_summary_field(sys_id,'baseprice','sub',sys_data[24]);
  set_summary_field(sys_id,'totalprice','list',sys_data[27]);
  base = parseFloat($('#'+sys_id+' .totalprice.list .amount').html().replace(/[$,]+/g,""));
  set_summary_field(sys_id,'discount','inst',sys_data[58]);
  discount = parseFloat($('#'+sys_id+' .discount.inst .amount').html().replace(/[$,]+/g,""));

  set_summary_field(sys_id,'option','service',sys_data[59]);
  service = parseFloat($('#'+sys_id+' .option.service .amount').html().replace(/[$,]+/g,""));  
  set_summary_field(sys_id,'option','service5year',sys_data[60]);
  service5year = parseFloat($('#'+sys_id+' .option.service5year .amount').html().replace(/[$,]+/g,"")); 
  
  set_summary_field(sys_id,'totalprice','list',base);
  set_summary_field(sys_id,'totalprice','ad',sys_data[57]);
  set_summary_field(sys_id,'totalprice','final',base-discount+service);
  set_summary_field(sys_id,'totalprice','final5year',base-discount+service5year);
}
var image_swap = function(sys_id) {
  var model = get_model(sys_id);
  
  var dualpc = $('#'+sys_id+' .features input.dualpc:checked').val();
  var pc = $('#'+sys_id+' .features input.pc:checked').val();
      
  if (dualpc) { dualpc = 'dualpc'; } else { dualpc = 'nodualpc'; };   
  if (pc) { pc = 'pc'; } else { pc = 'nopc'; };   
    
  $('#'+sys_id+' .img-model').addClass('inactive');
  $('#'+sys_id+' .img-model.'+model+'.'+dualpc+'.'+pc).removeClass('inactive');
}
var reset_build_form = function(sys_id) {
  $('#'+sys_id+' .model.Bookeye4v2 input').prop('checked', true);
  $('#'+sys_id+' input.ocr').prop('checked', true);  
  $('#'+sys_id+' .img-model').addClass('inactive');
  $('#'+sys_id+' .img-model.Bookye4v2.nodualpc.nopc').removeClass('inactive');   
  $('#'+sys_id+' input.quantity').val(0);  
  $('#'+sys_id+' legend').siblings().addClass('hide');
  
  $('#'+sys_id+' .feature .addlic').parent().addClass('hide'); 
  $('#'+sys_id+' .feature .addlic').addClass('hide');        
  
  $('#'+sys_id+' .feature .neckview').parent().removeClass('hide'); 
  $('#'+sys_id+' .feature .neckview').removeClass('hide');                  
      
  $('#'+sys_id+' .lic_note').addClass('invisible');   
}
var set_testing_defaults = function() {
  $('#build-a-bscan_1 .model.BookEdge input').prop('checked', true);
  $('#build-a-bscan_1 input.quantity').val(7);
  model_validate('build-a-bscan_1'); option_validate('build-a-bscan_1');
  $('#build-a-bscan_2').addClass("print");
  $('#build-a-bscan_2 .model.ClickMini input').prop('checked', true);
  model_validate('build-a-bscan_2'); option_validate('build-a-bscan_2');
  $('#build-a-bscan_2 input.quantity').val(2);
  $('#build-a-bscan_3').addClass("print");
  $('#build-a-bscan_3 .model.Bookeye4v3 input').prop('checked', true);
  model_validate('build-a-bscan_3'); option_validate('build-a-bscan_3');
  $('#build-a-bscan_3 input.quantity').val(1);
  $('#build-a-bscan_4').addClass("print");
  $('#build-a-bscan_4 .model.Bookeye4v2 input').prop('checked', true);
  model_validate('build-a-bscan_4'); option_validate('build-a-bscan_4');
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
  var count_b4V3 = count_model_field('Bookeye4v3', 'input.quantity');    
  var count_b4V2 = count_model_field('Bookeye4v2', 'input.quantity');  
  var count_b4V1 = count_model_field('Bookeye4v1', 'input.quantity');  
  var count_wt25 = count_model_field('WT25', 'input.quantity');  
  var count_becm = count_model_field('BECM', 'input.quantity');  
  
  var count_all = count_be + count_bcm + count_b4V1 + count_b4V3 + count_b4V3 + count_wt25 + count_becm ; 
  $('.page-summary .qty.BookEdge').val(count_be);     
  $('.page-summary .qty.ClickMini').val(count_bcm);
  $('.page-summary .qty.Bookeye4v3').val(count_b4V3);
  $('.page-summary .qty.Bookeye4v2').val(count_b4V2);
  $('.page-summary .qty.Bookeye4v1').val(count_b4V1);
  $('.page-summary .qty.WT25').val(count_wt25);  
  $('.page-summary .qty.BECM').val(count_becm);  
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
  var sum =   parseFloat($('#build-a-bscan_1 '+field+' p.amount').html().replace(/[$,]+/g,""));
  sum = sum + parseFloat($('#build-a-bscan_2 '+field+' p.amount').html().replace(/[$,]+/g,""));
  sum = sum + parseFloat($('#build-a-bscan_3 '+field+' p.amount').html().replace(/[$,]+/g,""));
  sum = sum + parseFloat($('#build-a-bscan_4 '+field+' p.amount').html().replace(/[$,]+/g,""));
  sum = sum + parseFloat($('#build-a-bscan_5 '+field+' p.amount').html().replace(/[$,]+/g,""));
  if (isNaN(sum)) { sum = 0;};
  return sum;
}
var count_model_field = function(model,field) {
  var sum = 0; 
   
  if (model == $('#build-a-bscan_1 .models input:radio:checked').val()) { sum += parseInt($('#build-a-bscan_1 '+field).val()); }
  if (model == $('#build-a-bscan_2 .models input:radio:checked').val()) { sum += parseInt($('#build-a-bscan_2 '+field).val()); }
  if (model == $('#build-a-bscan_3 .models input:radio:checked').val()) { sum += parseInt($('#build-a-bscan_3 '+field).val()); }
  if (model == $('#build-a-bscan_4 .models input:radio:checked').val()) { sum += parseInt($('#build-a-bscan_4 '+field).val()); }
  if (model == $('#build-a-bscan_5 .models input:radio:checked').val()) { sum += parseInt($('#build-a-bscan_5 '+field).val()); }        
  return sum;
}
var get_model = function(sys_id) {
  var model = $('#'+sys_id+' .models input:radio:checked').val();
  return model;
}
var build_pricing = function(sys_id) {
  pricecheck();
}


var fade_highlight = function() {
  time = 800;
  $('.flabel p.caption').animate({color:"#300"},time).animate({color:"#e11"},time);
  $('span.flabel').animate({color:"#e11"},time).animate({color:"#000"},time);
}

/*
var load_lower = function(){
  var url = "old-script/load_block.asp"; 
  $.get(url, {Request: 'build-your-kic-lower.html'}, function(data) { $('.lower-nav').before(data); });
}
*/

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
  });  
    
  $('.discount_amt span.sb').click(function() { $('.qty-disc-table').toggleClass('hide'); });
  
  $('span.pricecheck').click(function() { 
    pricecheck();
  });

  $('.qty-disc-table').click(function() { $('.qty-disc-table').addClass('hide'); });
 
  $('.build-fieldset input').click(function(){
    var sys_id = $(this).parents('.build-fieldset').attr('id');
//here
                
    if ($(this).parent().hasClass('model')) { model_validate(sys_id); option_validate(sys_id); }
    if ($(this).parent().hasClass('feature')) {
    	 option_click_validate( sys_id , this ) ;
    	 option_validate(sys_id); }
    if ($(this).hasClass('quantity')) {  
    } else {
      image_swap(sys_id);
      build_pricing();
    } 
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
  
  reset_form_all(); 
  model_validate_all();  
  option_validate_all();
  $('#build-a-bscan_1').toggleClass('expand');
  $('#build-a-bscan_1 legend').siblings().toggleClass('hide');
  image_swap('build-a-bscan_1');
  
  build_pricing();  
 
  //$('#kic_features div ul').addClass('hide');
  
  //setTimeout('load_feature_table()', 3000);
  //setTimeout('load_lower()', 5000);
  
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
	
	
   //alert ($('#build-a-bscan_2 optionlabel').hasClass('hide')) ;
   //alert ($('#build-a-bscan_2 option-images').parent().hasClass('hide')) ;
       	   	
});

  