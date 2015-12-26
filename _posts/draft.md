---
layout: post
title: "Slow Jekyll Regeneration Trap"
date: 2015-12-27
---

I recently had a problem with my Jekyll site configuration. It was way too
slow&mdash;around 1 minute per regeneration and much more for starting a server. 

I made a little improvement by excluding some folders in _config.yml:

{% highlighter ruby %}
exclude: [file.js, somefolder, otherfolder]
{% endhighlight %}

It wasn't a big improvement so I kept digging.
I reinstalled gems.
Didn't help.

Then I found solution that shorten the regeneration time to less than a second.
It was reorganizing my file structure so I could exclude (just like before) more stuff. 

Beside the blog, I have also projects that use different stylesheets,
JS and other scripts.
I reorganised everything in the way that only strictly blog and homepage related
files are not excluded from the conversion. 

It looks like Jekyll needs a lot of time to iterate through some stuff. The
simpler, more standard file structure, the better.

## Line Numbers

{ highlight vim }

set number              " show line numbers
set numberwidth=4

{ endhighlight }
