{
date:"2012-06-21",
seo: "blog/a-first-post.html",
title: "True Love's First Kiss",
metakeys:"first post,ergo-cms"
}
This is the first post in ergo-cms. This was written in markdown.

By default, this page, because it exists in the 'blog' folder will have the `blogentry.tem.html` applied to it, which has been set up in `config.js`. This is completely arbitary, of course. If we move this file elesewhere, then it will revert to using the default type, which is 'articleentry.tem.html'.

Both `blogentry.tem.html` and `articleentry.tem.html` can be found in the _layouts folder and both of them have the same basic structure:

	{include:header.inc.html}
	{content}
	{include:footer.inc.html}

Although the blogentry does something interesting, it specifies a parameter to the included `header.inc.html`:

	{include:header.inc.html extracss='blogpost'}

This serves to default a default value for the `extracss` field, but only for blog posts. Our [second page](/blog/a-second-post.html) will deliberately overwrite that default value.

