---
layout: post
title: "A Hint on How to Speed Up Jekyll Regeneration"
date: 2015-12-27
---

My Jekyll site was way too slow recently.
It took around 1 minute per regeneration and much more for starting a server. 

I made some improvement by excluding a few files from the conversion.

_config.yml:
{% highlight ruby %}
exclude: [file.js, somefolder, otherfolder, ...]
{% endhighlight %}

It wasn't a big improvement so I kept digging.
I re-installed gems.
Didn't help.

Then I found a solution that shortened the regeneration time to less than 0.2 second.
It was excluding even more stuff.

Beside the blog,
I have also projects that use different node modules and other JS.
One 'node_modules' folder turned to be the pain point. I didn't exclude it because
it was hidden somewhere deeper in the directory.

I reorganized my files so now it's easy to locate that kind of stuff.
{% highlight ruby %}
exclude: [file.js, somefolder, projects/*/node_modules, ...]
{% endhighlight %}

