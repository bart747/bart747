---
layout: post
title: "Slow Jekyll Regeneration Trap"
date: 2015-12-27
---

I recently had a problem with my Jekyll site. It was way too
slow&mdash;around 1 minute per regeneration and much more for starting a server. 

I made some improvement by excluding a few files in _config.yml:

{% highlighter ruby %}
exclude: [file.js, somefolder, otherfolder]
{% endhighlight %}

It wasn't a big improvement so I kept digging.
I reinstalled gems.
Didn't help.

Then I found a solution that shortened the regeneration time to less than 0.2 second.
It was excluding even more stuff.

Beside the blog, I have also projects that use different node modules and other JS.  
One node_modules folder turned to be the painpoint. I didn't exclude it because
it was hidden somewhere deeper in the directory.

I reorganized a few things so now it's easy to locate and exclude unwanted
(when it comes to Jekyll's conversion) files.
