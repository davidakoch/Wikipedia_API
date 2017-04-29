function getCategories(){

	var category = $('#category-term').val();
	//api url with search term
	var link = "https://en.wikipedia.org/w/api.php?action=parse&page=" + category + "&format=json&callback=?"
		
	$.ajax({
		type:"GET",
		url:link,
		async:true,
		dataType: "json",
		success: function(data){
			if(data.parse.categories.length===0){
				alert("This Wikipedia page does not have categories")
			}

			for(var i=0;i<data.parse.categories[i]["*"].length;i++){
				var searchCategories = data.parse.categories
				if(searchCategories[i]["*"] === "All_disambiguation_pages"){
					alert("Please Note: Wikipedia does not offer disambiguation for categories. You're search term is probably too broad. To find the correct spelling of your specific article, try first looking it up in the article search box above")
				}	
					else if (searchCategories[i]["*"] === "Disambiguation_pages"){
					alert("Please Note: Wikipedia does not offer disambiguation for categories. You're search term is probably too broad. To find the correct spelling of your specific article, try first looking it up in the article search box above")
				}
					else if (searchCategories[i]["*"] === "Redirects_from_other_capitalisations"){
					alert("Categories are tempermental. Please provide proper capitalization.")
				}				
					break;
			}

				var pageId = data.parse.pageid;
				var nextLink = "https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids=" + pageId + "&prop=categories&clshow=!hidden&format=json&callback=?"

				$.ajax({
					type:"GET",
					url:nextLink,
					async:true,
					dataType: "json",
					success: function(data){
						//necessary to erase the old content
						$('#output').html('');
							//When accessing numbers in objects, or if you need to get an item in an object based off of a variable, 
							//use bracket notation
						for(var i=0;i<data.query.pages[pageId].categories.length;i++){
							var category_Word = data.query.pages[pageId].categories[i].title;
							var category_String = category_Word.replace(/\s/g,'_')
							var category_Link = "https://en.wikipedia.org/wiki/" + category_String
							$('#output').append("<li><a href= " + category_Link + " target=_blank>" + category_Word + "</a></li>");
						}
					}
				})			
		}	
	})	

	$.ajax({
		type:"GET",
		url:link,
		async:true,
		dataType: "json",
		success: function(data){
			if(data.error.code === "missingtitle"){
				alert ("This page does not exist on Wikipedia. Try the search box above.")
			}
		}
	})		
}

$(document).ready(function(){
	//when search button is clicked, run code
	$('#category-button').on('click', function(){
			$('#output').html('');
			getCategories();
	});

	$('#category-term').keypress(function(e){
		if(e.keyCode === 13){
			event.preventDefault();
			$('#output').html('');
			getCategories();
		}
	})	
});

	