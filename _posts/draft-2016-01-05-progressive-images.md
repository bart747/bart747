---
layout: post
title: "Progressive Image Exposure for Crappy Wi-Fi (with CSS Blur Filter
Animation)"  
date: 2016-01-05
---

Seeing clunky, pixelated images at page start doesn't make good
first impression.
To make my site
better, I figured out a trick that makes it a little bit better experience.
<br>(edited: 08.01.2016)

## Good Sides

Looks cool.
Will improve UX a little bit.
It's relatively small.
Takes around 50 lines of code, 1,7kb&mdash;JS and CSS together.
You don't
need to do anything with HTML, so it works nicely with Markdown posts.

## Bad Sides

Unfortunately, 'CSS filter' is actually not supported by any IE. 

My method is also kind of a compromise&mdash;it might not be right for your
problem. It doesn't revolutionize anything, you can live without it.

## A Little Demo

Try to use it with disabled cache and simulate 1Mb/s
connection in dev. tools. Than compare it with faster setup. Read comments in the
console also.

![](/img/nasa.jpg)

![](/img/building.jpg)


## Here's the Code

I'll explain it later.

### JS

{% highlight js %}

(function() {
 
// select all images in page content  
const imgAll = document.querySelectorAll('.post img');

// set image upload threshold 
// - minimum height (in px) of IMG element which signals that
// image is at least partly uploaded
// 
// in my CSS, min. IMG height is set at 250px
// so 260 threshold will be fine 
const imgThreshold = 260;
const imgLen = imgAll.length;

// setTiemout sets acceptable delay of rendering process
setTimeout(function() {

  // if there's only one image
  if (imgAll[0] !== undefined &&
    imgAll[1] === undefined) {

    console.log("img 0 threshold: " + imgAll[0].clientHeight);
    // if it's not loading fast enough, 
    // add proper blur animation
    if (imgAll[0].clientHeight < imgThreshold) {

      imgAll[0].classList.add('img-blur-1');   
      console.log('img 0: blur 1');
    }
  }

  // if there are two or more images, add proper blur animations 
  else if (imgAll[1] !== undefined) {
      
      console.log("img 0 threshold: " + imgAll[0].clientHeight);
      console.log("img 1 threshold: " + imgAll[1].clientHeight);

    // when only first image is loading fast enough
    if (imgAll[0].clientHeight > imgThreshold &&
      imgAll[1].clientHeight < imgThreshold) {

      imgAll[0].classList.add('img-blur-1');   
      console.log('img 0: blur 1');

      for ( let i = 1; i < imgLen; i += 1 ) {
        imgAll[i].classList.add('img-blur-2');   
      }   
      console.log('img rest: blur 2');
    }

    // when all images are not loading fast enough
    else if (imgAll[0].clientHeight < imgThreshold &&
      imgAll[1].clientHeight < imgThreshold) {

      imgAll[0].classList.add('img-blur-2');   
      console.log('img 0: blur 2');

      for ( let i = 1; i < imgLen; i += 1 ) {
        imgAll[i].classList.add('img-blur-3');   
      }   
      console.log('img rest: blur 3');
    }
  }

}, 100);

}());

{% endhighlight %}

### CSS

{% highlight scss %}

.post img {
  background: $grey;
  margin: 0 auto;
  max-width: 600px;
  min-height: 250px;
  height: auto;
  width: 100%;
}

.img-blur-1 {
  animation-duration: 0.75s;
  animation-name: img-blur; 
}

.img-blur-2 {
  animation-duration: 1.5s;
  animation-name: img-blur; 
}

.img-blur-3 {
  animation-duration: 1.75s;
  animation-name: img-blur; 
}

@keyframes img-blur { 

  from {
    filter: blur(7px);
  }

  to {
    filter: blur(0);
  }

}

{% endhighlight %}

## Explanation: 

### clientHeight

{% highlight js %}

  if (imgAll[0].clientHeight < imgThreshold) {

    imgAll[0].classList.add('img-blur-1');   
    console.log('img 0: blur 1');
  }

{% endhighlight %}

The <code>'clientHeght > imgThreshold'</code> comparison checks if
the first image is "downloaded enough" at the time.
In other words,
I assume that if the picture is not bigger than 260px (height)
when the script is in execution, it's load process is slow.

If you use small pictures, like avatars,
make sure that the script will select only big images.

### Why 3 Different Blur Animations?

I assumed that most of the time images are pixelated or 'unfinished'
for about a second.
Sometimes that process is quicker, sometimes much longer.

Without focusing on edge cases, I made 3 different animations for different load
speeds.

Of course it's a compromise. Won't help much with really slow Internet
connection.

### Why Not Use 'window.onload' Instead of 'clientHeight'?

<code>window.onload</code> will fire when a page is fully uploaded. Images
will become visible in full-size, but not necessarily perfectly sharp, earlier.

So in this case <code>clientHeight</code> is faster.

Notice that CSS animations also take time,
so <code>window.onload</code> would actually delay the appearance of pictures.

## It's So Imperfect

As you can see, with this kind of solution you have to make assumptions.

And CSS filter is unsupported by many browsers.  

When the internet connection is slow (ca 1-4 Mb/s),
the script will add blur effect that lasts around 0.5-1.75 second.
It looks nicer than clunky, pixelated images and smooths the paint process.
On the other hand, if the connection is reaaaallly slow,
longer animation might be better.
But why to focus on such edge case?

In my experience 0.5-2s is pretty close to the sweet spot.

### Why Not to Use Something Like Medium.com Thing 

Their image animation looks really nice.
It's also relatively complex.
It looks like they use HTML5 canvas,
some blur filter and miniature image version as a temporary placeholder. 

I'm not so sure that it makes the load process faster. It might be different when it comes
to uploading many images per one page.

It's only my guesswork.

Anyhow, in my case,
I like to 'keep it simple' (relatively) and spend more time on other problems.

