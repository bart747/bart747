---
layout: post
title: "On Lazy Load Overuse and What You can Do Instead"
date: 2016-10-19
category: 
---

Lazy Load is a great idea, so it's overused frequently.
Do you remember that situations when you scrolled down
quickly to get to the middle part and what you saw was a blank space?

You can use a threshold/offset option to fire the thing earlier, but people can scroll fast. 
If someone visits a site for, lets say,
the third time and knows that the part she wants is somewhere close to the bottom,
she will scroll down really, really fast.

In that kind of situations it might be better to forget about typical Lazy Load.

The simple trick that I like is to set up a couple of top images first,
wait for them,
than load the rest (no waiting for scroll-down).
The top images will get loaded faster than usual because they won't share the bandwidth with others.

Here's a very general example of the main mechanism:

{% highlight js %}

function loadBottomImgs(count) {
  if (count > 0) {
    setTimeout( _=> {

      // when last image from the TOP group is ready, load the rest
      if (lastTopImg.complete) {
        bottomImgs.forEach( el => {
          el.src = el.getAttribute("data-imgload");
        });
      
      // otherwise, run the function again
      } else {
        loadBottomImgs(count - 1); 
      } 

    }, 200); // each iteration gives top images some time

    // if the last top image is not complete after all iterations,
    // load the rest of images anyway
  } else {        
    bottomImgs.forEach( el => {
      el.src = el.getAttribute("data-imgload");
    });
  }

  loadBottomImgs(10);
{% endhighlight %}

The script forces bottom group of images to wait until the last image from the top group is complete.

If after 10 iterations, where each waits for 200ms, the last top image is not complete,
the script will load the bottom group without waiting for anything. 

It's useful when a connection is slow and a user starts to scroll down the page almost immediately.
In that kind of situation speed of above the fold content is no longer a priority.

It's not a universal method, but it's good to have it in a toolbox.

(I hope it's clear enough with my limited English skills.)