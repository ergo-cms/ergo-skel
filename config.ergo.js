/*
This is a minimal skeleton config for ergo cms. See online for more options
*/

module.exports = {
	  //
	  // Uncomment this in order to use rsync
	//, rsync: { user: "username", host: "demosite.example.com", port: 22, dir: "/home/username/public_html" }, 

	//
	// These are default fields used by the simple templating engine, but can be overridden in each file
	default_fields: {
		  site_url: "http://ergo.example.com/" // ALWAYS end with a '/'
		, title: "An ergo-cms skeleton" // this goes in <title>tags generally, but also used in rss 
		, author: "Demo Author"
		, your_disqus_username: 'your_disqus_username_goes_here'
		//, content_short: '{content}'.substr(0,300)+'...<a href="/{uri}">More &gt;&gt;</a>'
		//, long_title: '{title}'
	  }
	, plugins: "default" // == simpletag,textile,marked
	, plugin_options: {
		textile: {breaks:true}
	  }
	//, verbose:2
	, log_options: {
	 	// 'ergo-lib':{verbose:2}
	 	//, match_file: /(rss.tem.xml)/
	}

	//, default_extension: "html"
	, default_post_type: "page"
	, post_types: {
		blog: {
			  layout: "blog.html"
		  //, path: "blog" // ergo defaults to use 'blog'. specify to change
			, default_fields: {
				author: "The Blogger"
			}
		  }
		, page: {
			  layout: "page.html"
		  //, path: "page" // ergo defaults to use 'page', but since it's ALSO the default_post_type, it's still used if not in this folder
		}
	}
	
};
