date=2 Jan 2017 8:00
title=True Love's First Kiss
metakeys=first post,ergo-cms
metadesc=An eloquent introduction to the files.

###

This is the first post in ergo-cms. This was written in markdown.

This page, because it exists in the 'blog' folder, will use the `blog.html` layout applied to it. You can see the configuration for this in `config.ergo.js`. This is completely arbitary, of course. If we move this blog post elesewhere, then it will revert to using the default post type, which is `page`, which uses the `page.html` layout.

Both `blog.html` and `page.html` can be found in the '_layouts' folder and both of them have the same basic structure:


```
include:header.inc.html
content
include:footer.inc.html
```

Note, that the blog entry layout also does something interesting: it specifies a parameter to the included `header.inc.html`:

```
include:header.inc.html extracss:'blogpost'
```

What this does is add a default value for the `extracss` field, but only for blog posts. Our [second page](/blog/a-second-post.html) will deliberately overwrite that default value, with something else, as well as describing more features about the blog post layout.


