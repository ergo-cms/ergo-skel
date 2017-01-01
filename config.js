/*
This is a minimal skeleton config for ergo cms. See online for more options
*/

module.exports = {

	  // Change the logging level to true or 1 or 2, if you like
	  verbose: false

	  //
	  // Uncomment this in order to use rsync
	//, rsync: { user: "username", host: "demosite.example.com", port: 22, dir: "/home/username/public_html" }, 
.
	//
	// These are default fields used by the simple templating engine, but can be overridden in each file
	, default_fields: {
		  base_url: "http://demosite.example.com"
		, title: "A Demo Site" // this goes in <title>tags generally, but also used in rss 
		, author: "Demo Author"
	  }
	  
	, default_post_type: "article"
	, post_types: {
		blog: {
			path: "blog"
			item_template: "blogentry.tem.html"
		  }
		, article: {
			  path: "article"
			, item_template: "articleentry.tem.html"
		}
	}
	
};
