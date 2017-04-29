//once you've rearranged your code, you can put a separate
//ajax call into a new function which can be called on 
//document.ready

$(document).ready(function(){
	//when search button is clicked, run code
	$('#search-button').click(function(){
		//gets search input
		var searchTerm = $('#search-term').val();
		//api url with search term
		var link = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
		//api url with categories
		var categories = "https://en.wikipedia.org/w/api.php?action=opensearch&prop=categories=" + searchTerm + "&format=json&callback=?";
		//the AJAX call
		$.ajax({
			type:"GET",
			url:link,
			async:false,
			dataType: "json",
			success: function(data){
				//necessary to erase the old content
			$('#output').html('');
				//could just as easily be append
			for(var i=0;i<data[1].length;i++){
				$('#output').append("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
			}
				//empties the searh term from form box
			$('#search-term').val('');
			},
			//consider if this is really necessary
			error: function (errorMessage){
				alert("Mistake");
			}
		});

	});
});