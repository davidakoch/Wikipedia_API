//i believe this is me trying to rewrite the code in script.js to better code


function getSearchTerms(){
	//gets search input
	var searchTerm = $('#search-term').val();
	//api url with search term
	var link = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";	

	$.ajax({
		type:"GET",
		url:link,
		async:false,
		dataType: "json",
			success: function(data){
				//necessary to erase the old content
				$('#output').html('');

				for(var i=0;i<data[1].length;i++){
					$('#output').append("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
				}
				//empties search term field
				$('#search-term').val('');
			//searchTerm
			},
			error: function (errorMessage){
				alert("Mistake");
			}	
	});
}

$(document).ready(function(){
	//when search button is clicked, run code
	$('#search-button').on('click', function(){
		getSearchTerms();
	});
	//when enter button is pressed, run function
	$('#search-term').keypress(function(e){
		if(e.keyCode === 13){
			event.preventDefault();
			getSearchTerms();
		}
	})
});

