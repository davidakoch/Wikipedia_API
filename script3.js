
function getCategories(){

	var category = $('#category-term').val();
	//api url with search term
	var link = "https://en.wikipedia.org/w/api.php?action=parse&page=" + category + "&prop=categories&clshow=!hidden&format=json&callback=?"

	$.ajax({
		type:"GET",
		url:link,
		async:false,
		dataType: "json",
		success: function(data){
			//necessary to erase the old content
			$('#output').html('');

			for(var i=0;i<data.parse.categories.length;i++){

				var category_Word = data.parse.categories[i]["*"];
				var category_Link = "https://en.wikipedia.org/wiki/Category:" + category_Word

				$('#output').append("<li><a href= " + category_Link + ">" + category_Word + "</a></li>");
				//add an error message
				if(category_Link === "https://en.wikipedia.org/wiki/Category:All_article_disambiguation_pages"){
					alert("Please Note: Wikipedia does not offer disambiguation for categories. You're search term is probably too broad. To find the correct spelling of your specific article, try first looking it up in the article search box above")
				}	
				if(category_Link === "https://en.wikipedia.org/wiki/Category:Redirects_from_other_capitalisations"){
					alert("Categories are tempermental. Please provide proper capitalization.")
				}
			}	
		}	
	})
}


$(document).ready(function(){
	//when search button is clicked, run code
	$('#category-button').on('click', function(){
			getCategories();
	});

	$('#category-term').keypress(function(e){
		console.log(e)
		if(e.keyCode === 13){
			event.preventDefault();
			getCategories();
			$('#output').append("<li><a href= " + category_Link + ">" + category_Word + "</a></li>");
		}
	})	
});

	
