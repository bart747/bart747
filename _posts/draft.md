---
layout: post
title: "Customizable UI: How to Automate UI Editing with SASS Variables and Mixins"
date: 2015-11-10
categories: inspiration
---
Briefly:
Build with unavoidable change in mind.
Organize files, variables and mixins for your future self-assuming that you will need to redo some things.

There’s a lot of new things that CSS preprocessors offer.
You probably stumbled upon many fancy mixins and functions.
But the biggest problem with new, hot things (not so new anymore) is that not much of what you see is practical.
Usually it’s just fancy.

Here are some examples of solutions that you can use to make UI more maintainable and themable.

I guarantee you that changes are unavoidable. You can’t predict the future.
You also can’t solve problems in theory only, without prototyping.
So make your life easier and build things that are easy to edit.


## Basic variables
The obvious things are colors and sizes.

{% highlight sass %}

// colors
$blue:     #2233ff;
$red:      #ff3322;
$green:    #22ff33;
$orange:   #ff5511;

// sizes


{% end highlight %}


## Gradual increase/decrease by exponentiation

This is something that probably will not be usueful often, but sometimes it will save you a lot of coding time.

{% highlight sass %}

$base-size:         1.8rem;
$ratio:             1.33; // will give one-third increase/decrease
 
 
//  exponentiation - will be needed to calculate size:

@function pow($nr, $exp) {

  //  reset
  $value: $nr;

  //  multiply if positive
  @if $exp > 1 {
    @for $i from 2 through $exp {
      $value: $value * $nr; }
  }

  //  divide if negative
  @if $exp < 1 {
    @for $i from 0 through -$exp {
      $value: $value / $nr; }
  }

  @return $value
}


//  increase or decrease size 

@function size($nr) {
  @return $base-size * pow($ratio, $nr) // ta-da!
}


//  examples of use
//
// .sqare3 {
//   height: size(3);
//   width: size(3);
// }
// .sqare4 {
//   height: size(4);
//   width: size(4);
// }




//  auto headlines - h1-h5:

@for $i from 0 through 4 {
  #{h}#{5 - $i} {
    font-size: size($i);
  }
}


//  square size:

.sq3 {
  height: size(3);
  width: size(3);
  background: green;
}

.sq5 {
  height: size(5);
  width: size(5);
  background: orange;
}
{% end highlight %}



## The whole point is to take advantage from uncertainty

