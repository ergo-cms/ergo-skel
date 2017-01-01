# Ergo CMS Skeleton

This is a default skeleton website to serve as what could be the basis for your CMS/blog.

What you get, technically:

* The choice of markdown and/or textile as a rendering language
* A simple templating system

What you get, as a result:

* A simple blog/cms
* rss feed
* static pages
* rsync upload

... although all of this comes from the base funcionality of ergo-cli, the command-line version of ergo-cms

## Installation & Setup
You have two ways to work with ergo-cms (if you're not using one of the GUI versions):

1. Using ergo-cli globally
1. Use npm to work ergo-cli from this project

Use the former method if you plan to do a lot of work from the command line. As a once off installation task, simply type:

    npm install ergo-cli -g
    ergo init "demo site"
    cd "demo site"

From here onwards, you only need to type `ergo` at the command line to build, view and deploy your website.

If however, you're reluctant to do this, can simply clone this website and work with ergo in a more sandboxed manner:

    git clone https://github.com/ergo-cms/ergo-skel.git "demo site"
    cd "demo site"
    
... and instead of typing `ergo <command>`, you type `npm run <command> --` instead. It's up to you.

## First Steps

After creating the website, go to the source folder and start writing. You will see that this skeleton project has set a couple of demonstration pages so that you get an idea of what to you can do.

## Building && Publishing

When you're ready to see the fruits of your labour, you can build your website using `ergo build` or `npm run build`. This will process any file changes and build your website into the `public` folder.

If you want to see how your website will look when you publish it, type `ergo view` or `npm run view` and the point your browser to http://localhost:8181

If you're ready to publish your work to a remote site, run `ergo deploy` or `npm run deploy`. You will need to make changes to your config.js before doing so. There are comments in the file about how to work with rsync.





