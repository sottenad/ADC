
$(function(){


var selectedYear = $('#year').val();
		$.ajax({
			url: "http://localhost:3000/service/index.json?year="+selectedYear,
			success: function(data){
				var b = $('#make');
				$(b).empty();
				$(data).each(function(){
					$(b).append('<option value="'+this.make+'">'+this.make+"</option>");
				})
			}
		})	

	$('#year').change(function(){
		var selectedYear = $(this).val();
		$.ajax({
			url: "http://localhost:3000/service/index.json?year="+selectedYear,
			success: function(data){
				var b = $('#make');
				$(b).empty();
				$(data).each(function(){
					$(b).append('<option value="'+this.make+'">'+this.make+"</option>");
				})
			}
		})	
		
		//Empty the others
		$("#make").empty();
		$("#model").empty();
		
	});
	
	$('#make').change(function(){
		var selectedYear = $('#year').val();
		var selectedMake = $(this).val();
		$.ajax({
			url: "http://localhost:3000/service/index.json?year="+selectedYear+"&make="+selectedMake,
			success: function(data){
				var b = $('#model');
				$(b).empty();
				$(data).each(function(){
					$(b).append('<option value="'+this.model+'">'+this.model+"</option>");
				})
			}
		})	
		
		//Hide the trim
	});
	
	$('#model').change(function(){
		var selectedYear = $('#year').val();
		var selectedMake = $('#make').val();
		var selectedModel = $(this).val();
		$.ajax({
			url: "http://localhost:3000/service/index.json?year="+selectedYear+"&make="+selectedMake+"&model="+selectedModel,
			success: function(data){
				if(data.length>0){
					var b = $('#trim');
					$(b).show();
					$(b).empty();
					$(data).each(function(){
						$(b).append('<option value="'+this.trim+'">'+this.trim+"</option>");
					})
				}
			}
		})	
		//Hide the trim
	});
	
	
	
	//Create user session variables
	$('.save').click(function(){
		var selectedYear = $('#year').val();
		var selectedMake = $('#make').val();
		var selectedModel = $('#model').val();
		var selectedTrim = $('#trim').val();
		
		var storeUrl = "http://localhost:3000/home/store.json?year="+selectedYear+"&make="+selectedMake+"&model="+selectedModel+"&trim="+selectedTrim;
		
		$.ajax({
			url: storeUrl,
			success: function(data){
				console.log(data)
				window.location.reload();
			}
		});
	});
		
})