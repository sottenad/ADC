$(function(){
	$('.title span').click(function(){
		$(this).parent().siblings('ul').toggle();
	})
	$('input[type="checkbox"]').live('change', function(){
		var val = $(this).is(':checked');
		$(this).parent().parent().find('input[type="checkbox"]').attr('checked',val);
	})
	
	$('.show_checks').click(function(){
		var output = $('.output');
		$(output).empty();
		$('input:checked').each(function(){
			$(output).append($(this).val()+', ');
			
		});
	})
	
})











/*
function createChildren(val, e){
	
	$.ajax({
	  url: '/service/index.json',
	  data: val,
	  dataType: 'json',
	  success: function(data){
	  	createChildMarkup(data,e);
	  }
	});
}

function createChildMarkup(data,e){
	var ul = $('<ul>');	
	$(data).each(function(){
		var qs = makeQs(this);
		qs = qs.join("&")
		var isChecked = $(e).find('input[type="checkbox"]').is(':checked');
		var li = '<li data-value="'+qs+'">';
		
		//Track if parent is checked
		if(isChecked){
			li += '<input type="checkbox" checked val="test" />';
		}else{
			li += '<input type="checkbox" val="test" />';		
		}
		
		//Find what to display
		var theLabel = '';
		if(this.trim.length >0){
			theLabel = this.trim
		}else if(this.model.length >0){
		
		}else if(this.make.length >0){
		
		}else(this.year.length >0){
		
		}
		
		li += '<span class="find">'+qs+'</span></li>';
		$(ul).append(li);
	})
	
	$(e).append(ul);
}

function makeQs(params) {
  tail = [];
  $.each(params, function(key, value) {
    tail.push(key + "=" + encodeURIComponent(value));
  })
 return tail
}
*/