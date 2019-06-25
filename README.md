# wikipedia_api

This is my attempt at a Wikipedia API. It has two search fields. The first is to search for Wikipedia Articles. The second search field finds an article’s categories. I created four javascript files for the api. Script1 was replicating someone else’s code to retrieve articles using Wikipedia’s API. Script2 refactored that code to make only one function call. 

In script3, I created the getCategories function to retrieve an article’s categories. It involved creating a new API call to a new link. Then, I created a for loop which iterated through all of an articles’ categories and appended it to the DOM. Wikipedia articles don’t provide disambiguation for categories as they do for articles. Therefore, the script has alert messages if  one of the categories is “All article disambiguation pages.” In addition, Wikipedia’s categories do not correct for capitalization mistakes. If a proper name isn’t capitalized, no categories will be returned. I added an if statement to return an alert reminding the user to provide proper categorization in such a case. 

The code for Script 4 was written to improve the Wikipedia API. First, it does not include hidden categories. In order to do that we had to make two separate API calls. The first one retrieves the Page ID of a Wikipedia article. Then, the code makes a second API call with a new link containing the Page ID; but this one only retrieves non-hidden categories. Unfortunately, the data returned contains no underscores so they weren’t links. I used the regular expression match method to add underscores to all returned categories; thus turning them to links. I also added alerts for faulty capitalization, a need for disambiguation or if an article does not exist. This is a work in progress, so not all the bugs have been corrected, but it should work for most articles you provide. 


here is the link:

https://davidakoch.github.io/Wikipedia_API/


