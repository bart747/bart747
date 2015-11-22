---
layout: post
title:  "Dealing with Multiple Hi-Res Images and Slow Internet Connection"
date:   2015-09-09
categories: 'how-to'
---


Loading time of large pictures (ca 1mb) on half decent wi-fi gives that unpleasant experience.
You're waiting, seeing slow, gradual painting and lots of blank spaces.

Here are tricks to make it better.

## Don't show all big images at once - build an interactive gallery

Two main reasons for that:

1. (Obvious) They are heavy, and more of them means more data to download and paint.
2. When you have two images on a page, time to upload the first one will be affected by upload of the second one.

On the begging, show only first "full-size" image and miniatures of the whole collection below it.

Miniatures can be lower quality than the big pictures and still look good.
That's because details like freckles on a face or dust on an object will
not be so visible.


![image optimization example]({{ localhost:4000 }}/img/img-opt1.jpg "image optimization example 1")
<br>
68k

![image optimization example]({{ localhost:4000 }}/img/img-opt2.jpg "image optimization example 2")
<br>
31k

![image optimization example]({{ localhost:4000 }}/img/img-opt3.jpg "image optimization example 3")
<br>
17.9k

## Use a miniature of first full-size photo as its background image

That way you will
shorten the time of blank space appearance.
A small background image will be loaded much faster.
It will be blurry because of its resolution, but it's better than blank
space. The loading process will **look** faster and smoother.

The miniature's size is important. The smaller the better.
So in some cases, where it's important that even miniatures show details well and are quite big,
it might not be the best idea. A miniature might slow down uploading process
of a big image too much.

To better see the difference between loading of a big picture and its miniature background,
use colorized (for example: a bit more blueish) version
of one of them. In dev tools use throttling option (2G, 3G, 4G) and disable cache.

## Place the first full-size photo and its background image by using HTML/CSS

It's faster than with JavaScript.

{% highlight html %}

<div class="img-first-big">
  <img src="img/img1.jpg">
</div>

<div class="img-second-big">
</div>

<div class="img-third-big">
</div>

{% endhighlight %}


{% highlight css %}

.img-first-big {
  background-image: url("/img/pic1-small.jpg");
}

{% endhighlight %}

## ...and serve the rest with the help of JavaScript

Loading everything in the same time would delay the appearance of the first image.
We need something that will upload the rest of images right after the first one.

<code>window.onload</code> event handler will be helpful.
It fires when a page is ready.

Simple example:

{% highlight js %}

// image sources
var img2big = "img/pic2.jpg";
var img2small = "img/pic2-small.jpg";
var img3big = "img/pic3.jpg";
...

// div frames for images
var frame1big = $("div.img-first-big");
var frame1small = $("div.img-first-small");
var frame2big = $("div.img-second-big");
var frame2small = $("div.img-second-small");
...

// helper to create new image element inside div frame
function imgCreate(source, frame) {
  img = new Image();
  img.src = source;
  return frame.append(img);
}

// when page is ready create image elements inside div frames
window.onload = function() {
  imgCreate(img2big, frame2big);
  imgCreate(img2small, frame2small);
  ...
}

// hide all big images except the first one
frame2big.addClass("hidden");
...

{% endhighlight %}

As you can see, I made all big images uploaded with JS hidden.
That way an user will not see all, or at least big part, of their loading process.
It's also because of how the gallery is meant to work.

BTW, it's good to know that there will be some small but significant time frame between moment where an user sees
the first big image and miniatures, and when he/she decides to see other full-size photos.

Now, to make gallery work right, you need to write some 'hide and show' thing like this:

{% highlight js %}
frame2small.click(function() {
  frame1big.addClass("hidden");
  frame2big.removeClass("hidden");
})
{% endhighlight %}

CSS animations will help changes look smoother. For example: 0.25s opacity change.

Use of them will also create one new problem. When you'll switch between images in that kind of gallery,
you will see that animations don't work properly with the first picture.
That's because of its background image that looks similar and doesn't use any animation.
As you may remember, it's used to make the loading process look faster.

The solution is to get rid of that background **after** everything is uploaded.

{% highlight js %}
window.onload = function() {
  imgCreate(img2big, frame2big);
  imgCreate(img1small, frame3small);
  imgCreate(img2small, frame4small);
  // remove background image
  frame1big.addClass("no-background");
}
{% endhighlight %}

## A few extra tips

<code> window.onload </code> - when the whole page is ready (images too)
([GlobalEventHandlers.onload](https://developer.mozilla.org/en/docs/Web/API/GlobalEventHandlers/onload) at MDN)

<code> document.onload </code> - when the DOM is ready (images might not be uploaded yet)

When you use a photo in two different places of a page, a browser will figure it out
and will not download it twice.

P.S.<br>
English is not my first language, so if you found some misleading error, please, let me know via email.
