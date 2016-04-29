var workflow_validate_all = function() {
  workflow_validate('build-an-opus_1');  
  workflow_validate('build-an-opus_2');
  workflow_validate('build-an-opus_3');
  workflow_validate('build-an-opus_4');
  workflow_validate('build-an-opus_5'); 
}

var model_validate_all = function() {
  model_validate('build-an-opus_1');  
  model_validate('build-an-opus_2');
  model_validate('build-an-opus_3');
  model_validate('build-an-opus_4');
  model_validate('build-an-opus_5'); 
}
var option_validate_all = function() {
  option_validate('build-an-opus_1');  
  option_validate('build-an-opus_2');
  option_validate('build-an-opus_3');
  option_validate('build-an-opus_4');
  option_validate('build-an-opus_5'); 
}
var scanner_option_validate_all = function() {
  scanner_option_validate('build-an-opus_1');  
  scanner_option_validate('build-an-opus_2');
  scanner_option_validate('build-an-opus_3');
  scanner_option_validate('build-an-opus_4');
  scanner_option_validate('build-an-opus_5'); 
}

var reset_form_all = function(sys_id) {
  $('input.disc_code').val('');
  $('input.disc2_code').val('');
  $('input.disc_rate').val('0');
  $('input.disc2_rate').val('0');
  $('input.disc3_rate').val('0');
  $('input.disc4_rate').val('0');
  reset_build_form('build-an-opus_1');
  $('#build-an-opus_1 input.quantity').val(1);
  reset_build_form('build-an-opus_2');
  reset_build_form('build-an-opus_3');
  reset_build_form('build-an-opus_4');
  reset_build_form('build-an-opus_5'); 
}
var get_system_selections = function(sys_id) {
  var data = new Object;
  data.model = get_model(sys_id);
  data.pdf = $('#'+sys_id+' .features input.pdf:checked').val();  
  data.imagetreat = $('#'+sys_id+' .features input.imagetreat:checked').val();  
  data.ocr = $('#'+sys_id+' .features input.ocr:checked').val();
  data.batch = $('#'+sys_id+' .features input.batch:checked').val();  
  data.metadata = $('#'+sys_id+' .features input.metadata:checked').val();  
  data.workflow = $('#'+sys_id+' .features input.workflow:checked').val();  
  data.archive = $('#'+sys_id+' .features input.archive:checked').val();  
  data.migration = $('#'+sys_id+' .features input.migration:checked').val();    
  
  // add 15 expansion option variables  
  data.expansion4 = 0;  
  data.expansion5 = 0;
  data.expansion6 = 0;
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

var workflow_validate = function(sys_id) {
  var workflow = get_workflow(sys_id);
	
  $('#'+sys_id+' .feature .pdf').prop('checked', false);
  $('#'+sys_id+' .feature .imagetreat').prop('checked', false);  
  $('#'+sys_id+' .feature .ocr').prop('checked', false);
  $('#'+sys_id+' .feature .batch').prop('checked', false);  
  $('#'+sys_id+' .feature .metadata').prop('checked', false);  
  $('#'+sys_id+' .feature .workflow').prop('checked', false);
  $('#'+sys_id+' .feature .archive').prop('checked', false);  
  $('#'+sys_id+' .feature .migration').prop('checked', false);  
  $('#'+sys_id+' .service.one input').prop('checked', true);
  	
  switch (workflow) {
    case "Workflow":  
       $('#'+sys_id+' .feature .pdf').parent().removeClass('hide');
       $('#'+sys_id+' .feature .pdf').removeClass('hide');
       $('#'+sys_id+' .feature .imagetreat').parent().removeClass('hide');
       $('#'+sys_id+' .feature .imagetreat').removeClass('hide');
       $('#'+sys_id+' .feature .ocr').parent().removeClass('hide');
       $('#'+sys_id+' .feature .ocr').removeClass('hide');
       $('#'+sys_id+' .feature .batch').parent().removeClass('hide');
       $('#'+sys_id+' .feature .batch').removeClass('hide');
       $('#'+sys_id+' .feature .metadata').parent().removeClass('hide');
       $('#'+sys_id+' .feature .metadata').removeClass('hide');
       $('#'+sys_id+' .feature .workflow').parent().removeClass('hide');
       $('#'+sys_id+' .feature .workflow').removeClass('hide');
       $('#'+sys_id+' .feature .archive').parent().removeClass('hide');
       $('#'+sys_id+' .feature .archive').removeClass('hide');
       $('#'+sys_id+' .feature .migration').parent().removeClass('hide');              
       $('#'+sys_id+' .feature .migration').removeClass('hide');              
      break;
           
    case "Freeflow":  
       $('#'+sys_id+' .feature .pdf').parent().removeClass('hide');
       $('#'+sys_id+' .feature .pdf').removeClass('hide');
       $('#'+sys_id+' .feature .imagetreat').parent().removeClass('hide');
       $('#'+sys_id+' .feature .imagetreat').removeClass('hide');
       $('#'+sys_id+' .feature .ocr').parent().removeClass('hide');
       $('#'+sys_id+' .feature .ocr').removeClass('hide');
       $('#'+sys_id+' .feature .batch').parent().removeClass('hide');
       $('#'+sys_id+' .feature .batch').removeClass('hide');
       $('#'+sys_id+' .feature .metadata').parent().removeClass('hide');
       $('#'+sys_id+' .feature .metadata').removeClass('hide');
       $('#'+sys_id+' .feature .workflow').parent().removeClass('hide');
       $('#'+sys_id+' .feature .workflow').removeClass('hide');
       $('#'+sys_id+' .feature .archive').parent().removeClass('hide');
       $('#'+sys_id+' .feature .archive').removeClass('hide');
       $('#'+sys_id+' .feature .migration').parent().removeClass('hide');              
       $('#'+sys_id+' .feature .migration').removeClass('hide');              
  	$('#'+sys_id+' .feature .pdf').prop('checked', true);
  	$('#'+sys_id+' .feature .imagetreat').prop('checked', true);  
  	$('#'+sys_id+' .feature .ocr').prop('checked', true);
  	$('#'+sys_id+' .feature .batch').prop('checked', true);         
      break;
            
    case "Freeflowlite":             
       $('#'+sys_id+' .feature .pdf').parent().removeClass('hide');
       $('#'+sys_id+' .feature .pdf').removeClass('hide');
       $('#'+sys_id+' .feature .imagetreat').parent().removeClass('hide');
       $('#'+sys_id+' .feature .imagetreat').removeClass('hide');
       $('#'+sys_id+' .feature .ocr').parent().removeClass('hide');
       $('#'+sys_id+' .feature .ocr').removeClass('hide');
       $('#'+sys_id+' .feature .batch').parent().removeClass('hide');
       $('#'+sys_id+' .feature .batch').removeClass('hide');
       $('#'+sys_id+' .feature .metadata').parent().addClass('hide');
       $('#'+sys_id+' .feature .metadata').addClass('hide');
       $('#'+sys_id+' .feature .workflow').parent().addClass('hide');
       $('#'+sys_id+' .feature .workflow').addClass('hide');
       $('#'+sys_id+' .feature .archive').parent().addClass('hide');
       $('#'+sys_id+' .feature .archive').addClass('hide');
       $('#'+sys_id+' .feature .migration').parent().addClass('hide');              
       $('#'+sys_id+' .feature .migration').addClass('hide');                                    
      break;
      
  }	
	
}

var model_validate = function(sys_id) {
  var model = get_model(sys_id);
    
  $('#'+sys_id+' .scanner_option .footpedal').prop('checked', false);    
  $('#'+sys_id+' .scanner_option .color').prop('checked', true);   
   
  $('#'+sys_id+' .scanner_option .dpi600').prop('checked', false);    
  $('#'+sys_id+' .scanner_option .dpi600').parent().addClass('hide'); 
  $('#'+sys_id+' .scanner_option .dpi600').addClass('hide');           
   
  $('#'+sys_id+' .lic_note').addClass('invisible');  	
  $('#'+sys_id+' .scanner_option.colorup p').text("Color");
  
  switch (model) {
    case "BookEdge":  

      break;
           
    case "Bookeye4v1":  
      $('#'+sys_id+' .scanner_option .color').prop('checked', false);    
      $('#'+sys_id+' .scanner_option.colorup p').text("Color (upgrade from grayscale)");          
      break;
            
    case "Bookeye4v2": 
      $('#'+sys_id+' .scanner_option .color').prop('checked', false);    
      $('#'+sys_id+' .scanner_option.colorup p').text("Color (upgrade from grayscale)");    
      $('#'+sys_id+' .scanner_option.dpi600 p').text("600dpi (upgrade from 400dpi)");    
      $('#'+sys_id+' .scanner_option .dpi600').parent().removeClass('hide'); 
      $('#'+sys_id+' .scanner_option .dpi600').removeClass('hide');                             
      break;
      
    case "Bookeye4v3":    
      $('#'+sys_id+' .scanner_option.dpi600 p').text("600dpi (upgrade from 400dpi)");    
      $('#'+sys_id+' .scanner_option .dpi600').parent().removeClass('hide'); 
      $('#'+sys_id+' .scanner_option .dpi600').removeClass('hide');                          
      break;      
      
    case "WT25":          
      $('#'+sys_id+' .scanner_option.dpi600 p').text("600dpi");    
      $('#'+sys_id+' .scanner_option .dpi600').parent().removeClass('hide'); 
      $('#'+sys_id+' .scanner_option .dpi600').removeClass('hide');                             
      break;  
      
  }
  $('#'+sys_id+' .summary .nameplate').addClass('hide');
  $('#'+sys_id+' .summary .nameplate.'+model).removeClass('hide');  
}


var scanner_option_validate = function(sys_id) {
  var model = get_model(sys_id);		  

  switch (model) {
    case "BookEdge":  
      $('#'+sys_id+' .scanner_option .color').prop('checked', true);    
      break;
    
    case "Bookeye4v3":
      $('#'+sys_id+' .scanner_option .color').prop('checked', true);        
      break;
    case "Bookeye4v2":
         
      break;
    case "Bookeye4v1":
         
      break;      
    case "WT25":
         $('#'+sys_id+' .scanner_option .color').prop('checked', true);        
         $('#'+sys_id+' .scanner_option .dpi600').prop('checked', true);                 
      break;           
  }
         	
  swap_option_images( sys_id );     
}

var option_validate = function(sys_id) {
  var model = get_model(sys_id);		
  var workflow = get_workflow(sys_id);

  switch (model) {
    case "BookEdge":  
//         $('#'+sys_id+' .lic_note').addClass('invisible');  	  
      break;
    
    case "Bookeye4v3":
//         $('#'+sys_id+' .lic_note').addClass('invisible');  	      
// 	 $('#'+sys_id+' .feature .ocr').prop('checked', true);
      break;
    case "Bookeye4v2":
         
      break;
    case "Bookeye4v1":
         
      break;      
    case "WT25":
         
      break;           
  }
       
  if( workflow == "Freeflow" )
  {  
  	$('#'+sys_id+' .feature .pdf').prop('checked', true);
  	$('#'+sys_id+' .feature .imagetreat').prop('checked', true);  
  	$('#'+sys_id+' .feature .ocr').prop('checked', true);
  	$('#'+sys_id+' .feature .batch').prop('checked', true);    
  }	
  //swap_option_images( sys_id );   
  change_img_headings( sys_id ) ;
}

var change_img_headings = function(sys_id) {
	    
  var model = get_model(sys_id);    
  var heading ;
  var font_size = '15pt' ;
  
  var workflow_type = $('#'+sys_id+' .workflows input:radio:checked').val();  
    
  if( workflow_type == "Workflow" )
  {       
    heading = "Opus WorkFlow" ;
  }    
  else    
  if( workflow_type == "Freeflow" )
  {
    heading = "Opus FreeFlow" ;
  }
  else
  if( workflow_type == "Freeflowlite" )
  {
    heading = "Opus FreeFlow Lite" ;  	
  }
  else
  {
    heading = "Opus" ;	
  }
    
  switch (model) {
    case "BookEdge":  
        heading = heading + " with BookEdge"; 
      break;    
    case "Bookeye4v3":
	heading = heading + " with Bookeye V3"; 
      break;
    case "Bookeye4v2":
	heading = heading + " with Bookeye V2"; 
      break;
    case "Bookeye4v1":
	heading = heading + " with Bookeye V1"; 
      break;      
    case "WT25":
	heading = heading + " with WideTEK 25"; 
      break;      
  }            				 	

  $('#'+sys_id+' .images .img-heading p').css("font-size", font_size ); 
  $('#'+sys_id+' .images .img-heading p').html( heading );    //use html to keep the line break
    
}
	
var swap_option_images = function(sys_id) {			 	
    
    $('#'+sys_id+' .option-item.freeflowlite.nofade').addClass('inactive');    	
    $('#'+sys_id+' .option-item.freeflow.nofade').addClass('inactive');
    $('#'+sys_id+' .option-item.freeflow.fade').removeClass('inactive');
      
    if( $('#'+sys_id+' .scanner_options input.color:checked').val() )
    {
    	$('#'+sys_id+' .option-item.color.nofade').removeClass('inactive');
    	$('#'+sys_id+' .option-item.color.fade').addClass('inactive');
    } 
    else
    {
    	$('#'+sys_id+' .option-item.color.nofade').addClass('inactive');
    	$('#'+sys_id+' .option-item.color.fade').removeClass('inactive');
    }   
   
    if( $('#'+sys_id+' .scanner_options input.dpi600:checked').val() )
    {   	
    	$('#'+sys_id+' .option-item.dpi600.nofade').removeClass('inactive');
    	$('#'+sys_id+' .option-item.dpi600.fade').addClass('inactive');
    } 
    else
    {
    	$('#'+sys_id+' .option-item.dpi600.nofade').addClass('inactive');
    	$('#'+sys_id+' .option-item.dpi600.fade').removeClass('inactive');
    }
        
    if( $('#'+sys_id+' .scanner_options input.footpedal:checked').val() )
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
  
var itemNum = 0 ;

  //disable the other monitor (radio-like behavior)
  if ($(item_id).hasClass('pdf')) 
  {
    itemNum = 0 ;
    if( $('#'+sys_id+' .features input.pdf:checked').val() )
    {
    	itemNum = 1 ;
    }    
  }
  else
  if ($(item_id).hasClass('imagetreat')) 
  {
    itemNum = 1 ;
    if( $('#'+sys_id+' .features input.imagetreat:checked').val() )
    {
    	itemNum = 2 ;
    }    
  }
  else
  if ($(item_id).hasClass('ocr')) 
  {
    itemNum = 2 ;
    if( $('#'+sys_id+' .features input.ocr:checked').val() )
    {
    	itemNum = 3 ;
    }    
  }
  else
  if ($(item_id).hasClass('batch')) 
  {
    itemNum = 3 ;
    if( $('#'+sys_id+' .features input.batch:checked').val() )
    {
    	itemNum = 4 ;
    }    
  }
  else
  if ($(item_id).hasClass('metadata')) 
  {
    itemNum = 4 ;
    if( $('#'+sys_id+' .features input.metadata:checked').val() )
    {
    	itemNum = 5 ;
    }    
  }        
  else
  if ($(item_id).hasClass('workflow')) 
  {
    itemNum = 5 ;
    if( $('#'+sys_id+' .features input.workflow:checked').val() )
    {
    	itemNum = 6 ;
    }    
  } 
  else
  if ($(item_id).hasClass('archive')) 
  {
    itemNum = 6 ;
    if( $('#'+sys_id+' .features input.archive:checked').val() )
    {
    	itemNum = 7 ;
    }    
  }  
  else
  if ($(item_id).hasClass('migration')) 
  {
    itemNum = 7 ;
    if( $('#'+sys_id+' .features input.migration:checked').val() )
    {
    	itemNum = 8 ;
    }    
  }
  
  if( itemNum >= 1 )
  {
    $('#'+sys_id+' .feature .pdf').prop('checked', true);  	
  }
  else
  {
    $('#'+sys_id+' .feature .pdf').prop('checked', false);  	
  }   
  if( itemNum >= 2 )
  {
    $('#'+sys_id+' .feature .imagetreat').prop('checked', true);  	
  }
  else
  {
    $('#'+sys_id+' .feature .imagetreat').prop('checked', false);  	
  }  
  if( itemNum >= 3 )
  {
    $('#'+sys_id+' .feature .ocr').prop('checked', true);  	
  }
  else
  {
    $('#'+sys_id+' .feature .ocr').prop('checked', false);  	
  }     
  if( itemNum >= 4 )
  {
    $('#'+sys_id+' .feature .batch').prop('checked', true);  	
  }
  else
  {
    $('#'+sys_id+' .feature .batch').prop('checked', false);  	
  }   
  if( itemNum >= 5 )
  {
    $('#'+sys_id+' .feature .metadata').prop('checked', true);  	
  }
  else
  {
    $('#'+sys_id+' .feature .metadata').prop('checked', false);  	
  }
  if( itemNum >= 6 )
  {
    $('#'+sys_id+' .feature .workflow').prop('checked', true);  	
  }
  else
  {
    $('#'+sys_id+' .feature .workflow').prop('checked', false);  	
  }
  if( itemNum >= 7 )
  {
    $('#'+sys_id+' .feature .archive').prop('checked', true);  	
  }
  else
  {
    $('#'+sys_id+' .feature .archive').prop('checked', false);  	
  }
  if( itemNum >= 8 )
  {
    $('#'+sys_id+' .feature .migration').prop('checked', true);  	
  }
  else
  {
    $('#'+sys_id+' .feature .migration').prop('checked', false);  	
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
    var url = "script/price-calc-opus.asp";
    data1 = get_system_selections_string("build-an-opus_1");
    data2 = get_system_selections_string("build-an-opus_2");
    data3 = get_system_selections_string("build-an-opus_3");
    data4 = get_system_selections_string("build-an-opus_4");
    data5 = get_system_selections_string("build-an-opus_5"); 
    
    if ( disc_rate == "") {
      disc_rate = "0";
    }
    
    $.get(url, { system1: data1, system2: data2, system3: data3, system4: data4, system5: data5, InsDcode: disc_rate}, 
      function(data) { 
        var systems = data.split("<br>")
        pricewrite("build-an-opus_1",systems[0].split(";"));
        pricewrite("build-an-opus_2",systems[1].split(";"));
        pricewrite("build-an-opus_3",systems[2].split(";"));
        pricewrite("build-an-opus_4",systems[3].split(";"));
        pricewrite("build-an-opus_5",systems[4].split(";"));
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
  set_summary_field(sys_id,'option','pdf',sys_data[1]);
  set_summary_field(sys_id,'option','imagetreat',sys_data[2]);
  set_summary_field(sys_id,'option','ocr',sys_data[3]);  
  set_summary_field(sys_id,'option','batch',sys_data[4]);
  set_summary_field(sys_id,'option','metadata',sys_data[5]);
  set_summary_field(sys_id,'option','workflow',sys_data[6]);  
  set_summary_field(sys_id,'option','archive',sys_data[7]);
  set_summary_field(sys_id,'option','migration',sys_data[8]);
/* expansion options go here    
  set_summary_field(sys_id,'option','empty',sys_data[16]);
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
  $('#'+sys_id+' .workflow.Workflow input').prop('checked', true);	
  $('#'+sys_id+' .model.Bookeye4v2 input').prop('checked', true);
  $('#'+sys_id+' input.ocr').prop('checked', true);  
  $('#'+sys_id+' .img-model').addClass('inactive');
//  $('#'+sys_id+' .img-model.Bookye4v2.nodualpc.nopc').removeClass('inactive');   
  $('#'+sys_id+' input.quantity').val(0);  
  $('#'+sys_id+' legend').siblings().addClass('hide');  
//  $('#'+sys_id+' .lic_note').addClass('invisible'); 
}
var set_testing_defaults = function() {
  $('#build-an-opus_1 .model.BookEdge input').prop('checked', true);
  $('#build-an-opus_1 input.quantity').val(7);
  model_validate('build-an-opus_1'); option_validate('build-an-opus_1');
  $('#build-an-opus_2').addClass("print");
  $('#build-an-opus_2 .model.ClickMini input').prop('checked', true);
  model_validate('build-an-opus_2'); option_validate('build-an-opus_2');
  $('#build-an-opus_2 input.quantity').val(2);
  $('#build-an-opus_3').addClass("print");
  $('#build-an-opus_3 .model.Bookeye4v3 input').prop('checked', true);
  model_validate('build-an-opus_3'); option_validate('build-an-opus_3');
  $('#build-an-opus_3 input.quantity').val(1);
  $('#build-an-opus_4').addClass("print");
  $('#build-an-opus_4 .model.Bookeye4v2 input').prop('checked', true);
  model_validate('build-an-opus_4'); option_validate('build-an-opus_4');
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
  var count_b4V3 = count_model_field('Bookeye4v3', 'input.quantity');    
  var count_b4V2 = count_model_field('Bookeye4v2', 'input.quantity');  
  var count_b4V1 = count_model_field('Bookeye4v1', 'input.quantity');  
  var count_wt25 = count_model_field('WT25', 'input.quantity');    
  
  var count_all = count_be + count_b4V1 + count_b4V3 + count_b4V3 + count_wt25 ; 
  $('.page-summary .qty.BookEdge').val(count_be);       
  $('.page-summary .qty.Bookeye4v3').val(count_b4V3);
  $('.page-summary .qty.Bookeye4v2').val(count_b4V2);
  $('.page-summary .qty.Bookeye4v1').val(count_b4V1);
  $('.page-summary .qty.WT25').val(count_wt25);    
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
  var sum =   parseFloat($('#build-an-opus_1 '+field+' p.amount').html().replace(/[$,]+/g,""));
  sum = sum + parseFloat($('#build-an-opus_2 '+field+' p.amount').html().replace(/[$,]+/g,""));
  sum = sum + parseFloat($('#build-an-opus_3 '+field+' p.amount').html().replace(/[$,]+/g,""));
  sum = sum + parseFloat($('#build-an-opus_4 '+field+' p.amount').html().replace(/[$,]+/g,""));
  sum = sum + parseFloat($('#build-an-opus_5 '+field+' p.amount').html().replace(/[$,]+/g,""));
  if (isNaN(sum)) { sum = 0;};
  return sum;
}
var count_model_field = function(model,field) {
  var sum = 0; 
   
  if (model == $('#build-an-opus_1 .models input:radio:checked').val()) { sum += parseInt($('#build-an-opus_1 '+field).val()); }
  if (model == $('#build-an-opus_2 .models input:radio:checked').val()) { sum += parseInt($('#build-an-opus_2 '+field).val()); }
  if (model == $('#build-an-opus_3 .models input:radio:checked').val()) { sum += parseInt($('#build-an-opus_3 '+field).val()); }
  if (model == $('#build-an-opus_4 .models input:radio:checked').val()) { sum += parseInt($('#build-an-opus_4 '+field).val()); }
  if (model == $('#build-an-opus_5 .models input:radio:checked').val()) { sum += parseInt($('#build-an-opus_5 '+field).val()); }        
  return sum;
}
var get_model = function(sys_id) {
  var model = $('#'+sys_id+' .models input:radio:checked').val();
  return model;
}

var get_workflow = function(sys_id) {
  var workflow = $('#'+sys_id+' .workflows input:radio:checked').val();
  return workflow;
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
  var url = "script/load_block.asp"; 
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
  });  
    
  $('.discount_amt span.sb').click(function() { $('.qty-disc-table').toggleClass('hide'); });
  
  $('span.pricecheck').click(function() { 
    pricecheck();
  });

  $('.qty-disc-table').click(function() { $('.qty-disc-table').addClass('hide'); });
 
  $('.build-fieldset input').click(function(){
    var sys_id = $(this).parents('.build-fieldset').attr('id');
//here
    
    if ($(this).parent().hasClass('workflow')) { workflow_validate(sys_id); model_validate(sys_id); option_validate(sys_id); scanner_option_validate(sys_id);}            
    if ($(this).parent().hasClass('model')) { model_validate(sys_id); option_validate(sys_id); scanner_option_validate(sys_id);}
    if ($(this).parent().hasClass('feature')) {
    	 option_click_validate( sys_id , this ) ;    	 
    	 option_validate(sys_id); }

    if ($(this).parent().hasClass('scanner_option')) {    	 
    	 scanner_option_validate(sys_id); }    	     	 
    	 
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
  workflow_validate_all();
  model_validate_all();
  option_validate_all();
  scanner_option_validate_all();
  
  $('#build-an-opus_1').toggleClass('expand');
  $('#build-an-opus_1 legend').siblings().toggleClass('hide');
  image_swap('build-an-opus_1');
  
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
	
	
   //alert ($('#build-an-opus_2 optionlabel').hasClass('hide')) ;
   //alert ($('#build-an-opus_2 option-images').parent().hasClass('hide')) ;
   	
});

  