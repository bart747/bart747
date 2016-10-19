---
layout: post
title: "On Lazy Load Overuse and What to Do Instead (sometimes)"
category: 
---

Lazy Load is a great idea, so it's overused frequently.
Do you remember that situations when you scrolled down
quickly to get to the middle part and what you saw is a blank space?

You can use threshold/offset option to fire the thing earlier, but people can scroll fast. 
If someone visits the site for, lets say,
the third time and knows that the part she wants is somewhere in the middle,
she will scroll down really, really fast.

An average user will think that website behaves weirdly, slow or unstable.

In that kind of situations it might be better to forget about typical Lazy Load.
You can do the UI the old way, or use some custom JS code. 

The simple trick that I like is to set up a couple of top images first, wait for them, than load the rest (no waiting for scroll-down).
The top images will get loaded faster than usual because they don't share the bandwidth with others.

Here's a very general example of the main mechanism:

{% highlight js %}

function loadImg(count) {
  if (count > 0) {
    setTimeout( _=> {

      // when last image from the TOP group is ready load the rest
      if (lastTopImg.complete) {
        bottomImg.forEach( el => {
          el.src = el.getAttribute("data-imgload");
        });
      
      // otherwise, run the function again
      // (process can be repeated until 'count' is 0)
      } else {
        loadImg(count - 1); 
      } 

    }, 200); // each iteration gives top images some time

    // if the last TOP image is not complete after all iterations,
    // load the rest of images anyway
  } else {        
    bottomImg.forEach( el => {
      el.src = el.getAttribute("data-imgload");
    });
  }

  loadImg(10);
{% endhighlight %}

The script forces bottom group of images to wait until the last image from the top group is complete.

It will not wait endlessly.
If after 10 iterations, where each waits for 200ms, the last top image is not complete,
the script will load the bottom group without waiting for anything. 

It's useful when connection is slow and a user starts to scroll down the page without waiting for images to load.
In that kind of situation the above the fold images are no longer a priority.

(I hope it's clear enough with my limited English skills.)