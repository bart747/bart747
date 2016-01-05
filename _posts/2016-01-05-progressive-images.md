---
layout: post
title: "Progressive Image Exposure for Crappy Wi-Fi (with CSS Blur Filter and
Transition)"  
date: 2016-01-05
---

Waiting for pictures to be fully uploaded is annoying. To make my site
better, I figured out a trick that makes it a little bit better experience.

It's small. Takes around 22 lines of code&mdash;JS and CSS together. You don't
need to do anything with HTML, so it works nicely with Markdown posts.

Unfortunately, 'CSS filter' is actually not supported by any IE. 

My method is also kind of a compromise&mdash;it might not be right for your
problem.

## A Little Demo

Try to use it with disabled cache and simulate 1Mb/s
connection in dev. tools. Than compare it with faster setup. Read comments in the
console also.

![](/img/nasa.jpg "Logo Title Text 1")

![](/img/building.jpg "Logo Title Text 1")


## Here's the Code

I'll explain it later.

### JS

{% highlight js linenos %}

(function() {
 
// select all images in page content  
const imgAll = document.querySelectorAll('.page-content img');

// add blur effect to all selected images
[].forEach.call(imgAll, function(el) {
  el.classList.add('img-blur');   
});
console.log("blur added");

// if first image is "uploaded enough" remove blur effect  
if (imgAll[0].clientHeight > 220) {
  [].forEach.call(imgAll, function(el) {
    el.classList.remove('img-blur');   
    console.log('blur removed');
  });
}

// if not, remove blur effect after one second
// ( += css transition time )
else {
  setTimeout(function() {
    [].forEach.call(imgAll, function(el) {
      el.classList.remove('img-blur');   
    });
    console.log('blur removed (setTimeout, 1000)');
  }, 1000);
}

}());

{% endhighlight %}

### CSS

{% highlight scss %}

img {
  transition: all 1s ease; 
}

.post img {
  background: $grey;
  max-height: 600px;
  max-width: 600px;
}

.img-blur {
  filter: blur(6px);
}

{% endhighlight %}

## Explanation: 

### clientHeight

{% highlight js %}

if (imgAll[0].clientHeight > 220) {
  [].forEach.call(imgAll, function(el) {
    el.classList.remove('img-blur');   
    console.log('blur removed');
  });
}

{% endhighlight %}

The <code>'clientHeght > 220'</code> comparison checks if
the first image is "uploaded enough" at the time.
In other words,
I assume that if the picture is not bigger than 220px (height) when the script is in execution,
it's upload process is slow.

If you use small pictures, like avatars,
make sure that the script will select only big images.

### setTimeout

{% highlight js %}

else {
  setTimeout(function() {
    [].forEach.call(imgAll, function(el) {
      el.classList.remove('img-blur');   
    });
    console.log('blur removed (setTimeout, 1000)');
  }, 1000);
}

{% endhighlight %}


When the upload process is interpreted as slow, the blur effect will stay on
images for 1 second longer. Then it will be taken off with a nice transition
effect. That animation also takes 1 second.

{% highlight scss %}

img {
  transition: all 1s ease; 
}


{% endhighlight %}

### Why Not Use 'window.onload' Instead of 'clientHeight'?

<code>window.onload</code> will fire when a page is fully uploaded. Images
will become visible in full-size, but not perfectly sharp, a bit earlier.

So in this case <code>clientHeight</code> is faster.

Notice that CSS transition also takes time.

## It's So Imperfect

As you can see, with this kind of solution you have to make assumptions.

And CSS filter is unsupported by many browsers.  

When the internet connection is slow (1-2 Mb/s), the script will extend blur effect to 2
seconds (including transitions). It looks nicer than clunky, pixelated images.
On the other hand, if the connection is reaaaallly slow, 3 or 4 seconds might be better.
But why to focus on such edge case?

I decided to keep that 2s effect: 1s timeout + 1s transition.
In my experience it's pretty close to the sweet spot.

### Why Not to Use Something Like Medium.com Thing 

Their image animation looks really nice.
It's also relatively complex.
It looks like they use HTML5 canvas,
some blur filter and miniature image version as a temporary placeholder. 

I'm not so sure that it makes the load process faster. It might be different when it comes
to uploading many images per one page.

It's only my guesswork.

Anyhow, in my case,
I like to 'keep it simple' and spend more time on other problems.


