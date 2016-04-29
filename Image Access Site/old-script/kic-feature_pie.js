//-#kic_features-----------------------------------------------------------------------------------------------------------------------------------
var update_all_charts = function() {
  var bar_data = [];
  if ($('#pie_mat_tag').length >0) {
    $('#pie_mat').empty();
    options = setup_pie_chart('pie_mat','dummy');
    data = update_pie_chart_data('pie_mat');  
    bar_data.push(data);
    options.series[0].data = data;
    new Highcharts.Chart(options,function(){ $('#pie_mat').append('<p class="hide" id="pie_mat_tag"></p>');});
  } else {
    setTimeout("update_all_charts(pie_mat, pie_file, pie_copy, pie_ui, pie_it, bar_features);", 1);
  }
  if ($('#pie_file_tag').length >0) {
    $('#pie_file').empty();
    options = setup_pie_chart('pie_file','dummy');
    data = update_pie_chart_data('pie_file');  
    bar_data.push(data);
    options.series[0].data = data;
    new Highcharts.Chart(options,function(){ $('#pie_file').append('<p class="hide" id="pie_file_tag"></p>');});
  }
  if ($('#pie_copy_tag').length >0) {
    $('#pie_copy').empty();
    options = setup_pie_chart('pie_copy','dummy');
    data = update_pie_chart_data('pie_copy');  
    bar_data.push(data);
    options.series[0].data = data;
    new Highcharts.Chart(options,function(){ $('#pie_copy').append('<p class="hide" id="pie_copy_tag"></p>');});
  }
  if ($('#pie_ui_tag').length >0) {
    $('#pie_ui').empty();
    options = setup_pie_chart('pie_ui','dummy');
    data = update_pie_chart_data('pie_ui');  
    bar_data.push(data);
    options.series[0].data = data;
    new Highcharts.Chart(options,function(){ $('#pie_ui').append('<p class="hide" id="pie_ui_tag"></p>');});
  }
  if ($('#pie_it_tag').length >0) {
    $('#pie_it').empty();
    options = setup_pie_chart('pie_it','dummy');
    data = update_pie_chart_data('pie_it');  
    bar_data.push(data);
    options.series[0].data = data;
    new Highcharts.Chart(options,function(){ $('#pie_it').append('<p class="hide" id="pie_it_tag"></p>');});
  }
  if ($('#bar_features_tag').length >0) {
    $('#bar_features').empty();
    var options = setup_feature_bar_chart('real')
    var y = 0; 
    for (i=0;i<bar_data.length;i++){
      for (j=0;j<bar_data[i].length;j++){
        if (bar_data[i][j].x > 0) {
          //options.series.push({name:bar_data[i][j].name, data:[bar_data[i][j].y], color:[bar_data[i][j].color]});
          y += bar_data[i][j].y;
       }      
      }
    }
    var y_tag = y+' %';
    options.series[0] = {name:y_tag, data:[y], color:'#336'};
    new Highcharts.Chart(options,function(){ $('#bar_features').append('<p class="hide" id="bar_features_tag"></p>');});
  }     
}
var setup_feature_bar_chart = function(dummy) {   
  var options = { 
		chart: { type: 'column', renderTo: 'bar_features', animation:false },
		title: { text: null },
		tooltip: {
			formatter: function() { return '<b>'+ this.series.name +'</b>'; }
		},
		plotOptions: {
		  column: {          
        animation:false,
        dataLabels: {
          enabled: true,
          formatter: function() {
            return '<b>'+ this.y +'%</b>'
          },
          style: { 'font-size': '20px', 'color':'#333'},
          x:75,
          y:5
        } 
      }      
		},
		series: [{
			type: 'column',
			name: null
		}],
		credits: {
		  enabled: false
    },
    legend: {
      enabled: false      
    },
    xAxis: {
      categories: ['']
    },
    yAxis: {
      max: 100,
      title: {
        text: 'Feature Complete Percentage',
        style: {'font-weight':'bold', 'font-size': '22px','width': '250px'}
      },
      labels: {
			 style: {'font-weight':'bold', 'font-size': '17px','width': '250px'}
		  },
    },
    tooltip: {
      enabled: false,
      backgroundColor: '#FEFEFE' ,
      formatter: function() {
						return '<b>'+ this.series.name +'</b>';
			},
			style: { background: [255,255,255,1], opacity: 0.9}
    }
	}
	if (dummy == 'dummy') {
	  var data = default_pie_data('pie_mat');
	  options.series[0].data = data;
	};
	//var color = set_chart_color('bar_features');	
	//options.colors = color;
	return options;
}
var setup_pie_chart = function(target,dummy) {
  pie_title = '';
  switch (target) {
    case 'pie_mat':  pie_title = 'Material Handling and Optics'; break;
    case 'pie_file': pie_title = 'Output Formats'; break;
    case 'pie_copy': pie_title = 'Copier Replacement Capabilities'; break;
    case 'pie_ui':   pie_title = 'User Interface Features'; break;
    case 'pie_it':   pie_title = 'Image Processing Abilities'; break;
  }
  var options = { 
		chart: { renderTo: target, animation:false  },
		title: { 
      text: pie_title, 
      style: {'font-weight':'bold', 'font-size': '20px','width': '500px', 'text-decoration':'underline'} 
      //style: {'font-weight':'bold', 'font-size': '20px','width': '500px', 'color':'#666', 'stroke':'#ccc', 'stroke-width':'1', 'stroke-linecap':'round'}
    },
		plotOptions: {
			pie: {
				allowPointSelect: true,
				animation:false, 
//				center: [400, 150],
//        borderColor: '#ccc',
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					color: '#000000',
					connectorColor: '#000000',
					formatter: function() {
						return '<b>'+ this.point.name +'</b>';
				  },
			    style: {'font-weight':'bold', 'font-size': '17px','width': '250px'}
		    },
		    shadow: false,
				showInLegend: false
			}
		},
		series: [{
			type: 'pie',
			name: null
		}],
		credits: {
		  enabled: false
    },
    legend: {
      align: 'left',
      layout: 'vertical',
      floating: true      
    },
    tooltip: {
      enabled: false
    }
	};
	if (dummy == 'dummy') {
	  var data = default_pie_data(target);
	  options.series[0].data = data;
	}
  var color = set_chart_color(target);	
	options.colors = color;
	return options;
}
var set_chart_color = function(target) {
  //var color = ['#c69','#63c','#f90','#3c0','#933','#ff3','#0c9','#969','#600'];
  var color = ['#000a53','#531f1f','#8b6f13','#469b5c','#7a7e9c','#9f8a8a','#eebe20','#c8e9db'];
 /* switch (target) {
    case 'pie_file':
      color = ['#f00','#0f0','#00f','#a00','#0a0','#00a','#600','#060','#006']
      break;
    case 'pie_copy':
      color = ['#f00','#0f0','#00f','#a00','#0a0','#00a','#600','#060','#006']
      break;
    case 'pie_ui':
      color = ['#f00','#0f0','#00f','#a00','#0a0','#00a','#600','#060','#006']
      break;
    case 'pie_it':
      color = ['#a33','#018','#e88','#aac']
      break;
  } */
  return color;
}
var default_pie_data = function(target) {
  var data = [];  
  switch (target) {
    case 'pie_mat':
      data.push({id:'pie_mat101', name:'Oversize flat & Very Large Books (16x22, 17x24)', x:0, y: 4});
      data.push({id:'pie_mat102', name:'V-Cradle', x:0, y: 4});
      data.push({id:'pie_mat103', name:'Book Edge (flatbed with book edge)', x:0, y: 2});
      data.push({id:'pie_mat104', name:'Face Up', x:0, y: 7});
      data.push({id:'pie_mat105', name:'24 bit color', x:0, y: 2});
      data.push({id:'pie_mat106', name:'300 dpi', x:0, y: 2});
      data.push({id:'pie_mat107', name:'600 dpi', x:0, y: 2});
      break;
    case 'pie_file':
      data = [];
      data.push({id:'pie_file201', name:'Basic PDF, JPEG, PNG', x:0, y: 3});
      data.push({id:'pie_file202', name:'Searchable PDF, Editable Text (OCR)', x:0, y: 4});
      data.push({id:'pie_file203', name:'Audio (MP3)', x:0, y: 3});
      data.push({id:'pie_file204', name:'Google Docs, Cloud, Etc.', x:0, y: 1});
      data.push({id:'pie_file205', name:'USB, email, FTP, Admin Folder', x:0, y: 6});
      data.push({id:'pie_file206', name:'Tablets, eReaders & Smart Phones', x:0, y: 4});
      break;
    case 'pie_copy':
      data = [];
      data.push({id:'pie_copy301', name:'Collate', x:0, y: 2});
      data.push({id:'pie_copy302', name:'Black & White and Color', x:0, y: 4});
      data.push({id:'pie_copy303', name:'Dedicated Printer Support', x:0, y: 2});
      data.push({id:'pie_copy304', name:'Built-in Printer Shelf', x:0, y: 2});
      data.push({id:'pie_copy305', name:'Multiple Shared Printers', x:0, y: 1});
      data.push({id:'pie_copy306', name:'Support for "Charge for Print" Systems *', x:0, y: 7});
      break;
    case 'pie_ui':
      data = [];           
      data.push({id:'pie_ui401', name:'True2Touch\u2122', x:0, y: 4});
      data.push({id:'pie_ui402', name:'Separate Preview Screen', x:0, y: 4});
      data.push({id:'pie_ui403', name:'Full Size Preview', x:0, y: 4});
      data.push({id:'pie_ui404', name:'Large Touch Screen (17 to 23 inches)', x:0, y: 4});
      data.push({id:'pie_ui405', name:'ADA Hardware', x:0, y: 3});
      data.push({id:'pie_ui406', name:'ADA Software', x:0, y: 3});
      break;
    case 'pie_it':
      data = [];
      data.push({id:'pie_it501', name:'Clip', x:0, y: 3});
      data.push({id:'pie_it502', name:'Crop', x:0, y: 3});
      data.push({id:'pie_it503', name:'Split', x:0, y: 3});
      data.push({id:'pie_it504', name:'Rotate', x:0, y: 3});
      break;
  }
  return data;
}
var update_pie_chart_data = function (name){
  var dataset = build_feature_table(name);		
  for (var i=0;i<dataset.length;i++){
    if (dataset[i].x > 0) {
      dataset[i].sliced = false;
    } else {
      //dataset[i].color = '#d9d9d9';  // set to 'disabled' gray
      dataset[i].color = '#fff';  // set to 'missing' white
      //dataset[i].sliced = true;
      //dataset[i].dataLabel.style = {'font-weight':'normal'};
    }
  }        
	return dataset;
}
var build_feature_table = function(target) {
  var data = default_pie_data(target);
  var color = set_chart_color(target);
  $('.build-fieldset').each( function() {
    var sys_id = $(this).attr('id');
    //var sys_num = sys_id.substr(sys_id.length - 1);
    sys_data = get_system_selections(sys_id);
    if (sys_data.qty > 0) {
      switch (target) {
        case "pie_mat":
          if (sys_data.model == "BookEdge") {        
            data[2].x += 1; 
            data[4].x += 1;
            data[5].x += 1;
            //if (typeof sys_data.plus != 'undefined') {data[6].x += 1; }
            data[6].x += 1;      
          }
          if (sys_data.model == "ClickMini") {
            data[0].x += 1; 
            data[3].x += 1;
            data[4].x += 1;
            data[5].x += 1; 
          }          
          if (sys_data.model == "Click") {
            data[0].x += 1; 
            data[3].x += 1;
            data[4].x += 1;
            data[5].x += 1; 
          }
          if ( (sys_data.model == "Bookeye4") || (sys_data.model == "Bookeye4V3") ) {
            data[0].x += 1; 
            data[1].x += 1;
            data[3].x += 1;                
            if (sys_data.model == "Bookeye4V3") { data[4].x += 1; }           
            if (typeof sys_data.color != 'undefined') { data[4].x += 1; }
            data[5].x += 1;
            if (typeof sys_data.dpi != 'undefined') { data[6].x += 1; }        
          }
          break;
        case "pie_file":
          data[0].x += 1;
          data[3].x += 1;
          data[4].x += 1;
          data[5].x += 1;
          if (sys_data.model == "BookEdge") {
            if (typeof sys_data.ocr != 'undefined') { data[1].x += 1; }
            if (typeof sys_data.tts != 'undefined') { data[2].x += 1; }             
            data[4].x += 1;                 
          }
          if (sys_data.model == "ClickMini") {          
            if (typeof sys_data.ocr != 'undefined') { data[1].x += 1; }
            if (typeof sys_data.tts != 'undefined') { data[2].x += 1; }                        
          }          
          if (sys_data.model == "Click") {          
            if (typeof sys_data.ocr != 'undefined') { data[1].x += 1; }
            if (typeof sys_data.tts != 'undefined') { data[2].x += 1; }                        
          }
          if ( (sys_data.model == "Bookeye4") || (sys_data.model == "Bookeye4V3") ) {             //if BE4 V2 or BE4 V3
            data[1].x += 1;                 
            data[2].x += 1;      
          }
          break;
        case "pie_copy":
          data[0].x += 1;
          data[1].x += 1; 
          data[2].x += 1;
          if ( (sys_data.model != "Bookeye4") && (sys_data.model != "Bookeye4V3") ) {            	
            //if (sys_data.furn != 'Tabletop') { data[3].x += 1; }
            if (sys_data.furn.match(/Tabletop/) != 'Tabletop')
            if (sys_data.model != "Click")			//Bookedge+Cabinet and ClickMini+Cabinet has Built-in Printer shelf
            {
            	 data[3].x += 1; 
            }
          }  
          data[4].x += 1;
          data[5].x += 1;
          break;
        case "pie_ui":
          data[0].x += 1;
          data[2].x += 1; 
          data[3].x += 1;
          if (sys_data.model == "BookEdge") {
            data[5].x += 1;
          }  
          if ( (sys_data.model == "Bookeye4") || (sys_data.model == "Bookeye4V3") ) {
            data[1].x += 1;
            data[4].x += 1;         
          }
          break;
        case "pie_it":
          data[0].x += 1;
          data[1].x += 1; 
          data[2].x += 1; 
          data[3].x += 1;
          break;
      }  
    }
  });
  for (i=0;i<data.length;i++){
    data[i].color = color[i];
  }
  return data;
}
//-#kic_features-----------------------------------------------------------------------------------------------------------------------------------  
