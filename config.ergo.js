/*
This is a minimal skeleton config for ergo cms. See online for more options
*/

module.exports = {

	//
	// These are fields used by the theme
	default_fields: {
		site_url: "http://ergo.example.com/", // ALWAYS end with a '/'
		site_title: "Ergo",
		post_image: "/img/post-bg.jpg",
		title: "An ergo-cms skeleton", // this goes in <title>tags generally, but also used in rss 
		author: "Demo Author",

		social: {	// update/remove social entries that you don't use
			disqus: 'username',
			twitter: 'username',
			linkedin: 'username',
			github: 'username',
			facebook: 'username',
			pinterest: 'username',
			instagram: 'username',
		}
	},

	theme: "default", //sbs_clean_blog"
	plugin_options: {
		// textile: { breaks:false}
	},
	default_post_type: "page",
	post_types: {
		blog: {
			layout: "post.html", 
	  		//path: "blog", // ergo defaults to use 'blog'. 
			default_fields: {
				//	author: "The Blogger"
			},
		},
		page: {
			layout: "page.html",
		  	//path: "page", // ergo defaults to use 'page', but is ALSO the default_post_type
		}
	},
	
};
