---
layout: post
title: "Progressive Image Load (With Blur and Transition)"  
date: 2015-01-05
---

My Jekyll site was way too slow recently.
It took around 1 minute per regeneration and much more for starting a server. 

I made some improvement by excluding a few files from the conversion.

_config.yml:
{% highlighter ruby %}
exclude: [file.js, somefolder, otherfolder]
{% endhighlight %}

It wasn't a big improvement so I kept digging.
I re-installed gems.
Didn't help.

Then I found a solution that shortened the regeneration time to less than 0.2 second.
It was excluding even more stuff.

Beside the blog, I have also projects that use different node modules and other JS.  
One 'node_modules' folder turned to be the painpoint. I didn't exclude it because
it was hidden somewhere deeper in the directory.

I reorganized a few things so now it's easy to locate and exclude unwanted
(when it comes to Jekyll's conversion process) files.
