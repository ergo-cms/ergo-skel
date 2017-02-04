/*
This is a minimal skeleton config for ergo cms. See online for more options
*/

module.exports = {

	//
	// These are fields used within the theme
	default_fields: {
		site_url: "http://ergo.example.com/", // ALWAYS end with a '/'
		site_title: "Your Site", // a short title
		title: "An ergo-cms skeleton", // this goes in <title>tags generally, but also used in rss 
		image: "page.jpg", // the default image to use.
		author_image: 'avatar.jpg', // in the /images/ folder
		//author: "Demo Author", // The default author
		author_url: '/about.html', // change this to 'authors.html' and edit below 'collate' settings if you have more than one author
		//tags_url: '/tags.html',
		//categories_url: '/categories.html',
		//feed_url: '/rss.xml',

		social: {	// update/remove social entries that you use
			disqus: 'username',
			twitter: 'username',
			linkedin: 'username',
			github: 'username',
			facebook: 'username',
			pinterest: 'username',
			instagram: 'username',
		}
	},

	theme: "ergo-simple",
	default_post_type: "page",
	post_types: {
		blog: {
			layout: "post.html", 
	  		//path: "blog", // ergo defaults to use 'blog'. 
			default_fields: {
				//	author: "The Blogger"
				image: "post.jpg", // the default image for all blog entries
			},
		},
		page: {
			layout: "page.html",
		  	//path: "page", // ergo defaults to use 'page', but is ALSO the default_post_type
		}
	},
	plugin_options: {
		// textile: { breaks:false}

		collate: {
			post_types: {
				blog: { as:"blog" },
			},
			fields: {
				// tags and categories are already automatically tracked in the above post_types (initially, 'blog')
				// Their url is tags.html and categories.html, but onlt if you've used at least ONE!


				// uncomment this to track authors 
				// author: { as: 'authors', base_name:'all' }, // Also, change 'author_url to '/authors.html', above
			}
		}
	}
	
};
