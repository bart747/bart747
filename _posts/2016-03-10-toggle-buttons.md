---
layout: post
title: "UI: Simple and Sane Toggle Buttons"  
date: 2016-03-10
---

Typical 'on-off' toggle button has more than 100 lines of CSS code.
That's a lot for something like this. 
But maybe it's worth doing in some occasions?
Well, in some probably yes,
but in vast majority not.
And I mean cases where you really need some on-off switch.

When you're thinking about using a switch, consider something like this:

<button class="btn-switch-dot is-switchable"> autocorrect </button>

...or, in some ocassions:

<button class="btn-switch-icon is-switchable"> 
  <span class="octicon octicon-mute"></span>
  mute
</button>

Here's why...

## Usability

Your typical switch&mdash;with a moving part from left to right&mdash;will
often give you poor usability. The main problem here is a copy (a lot
of weird CSS is also annoying). 

A common web button has a lot of place for a copy.
You can write an action premise in a few words on it.

When you're limited only to "on/off" it won't be very descriptive. 
Of course, you can write something more on a side, but it's not how a design 
pattern usually goes. It can break the rhythm.

So it's a good idea to stay with the typical, boring button design.
It's good for copy, and it's good for user habits. It also means less code.


## A Switch is Not a Check Box

Toggle buttons are sometimes used as a fancy version of check-boxes.
It's a bad idea.

When you think about toggle switch, you thing about something
that will start some action immediately.
For instance, lights will
be turned on or audio will be muted. It's like start and stop.
Check boxes are not made for that.


# Example 

Since I don't want to use it as a check box, I'll use the 'button'
HTML tag with a JS event listener.

I will have clear separation of concerns. Semantic HTML tag + CSS based visual
design + JS interaction. 

## HTML and SCSS

### With no icon:

<button class="btn-switch-dot"> autocorrect </button>
<button class="btn-switch-dot is-on"> autocorrect </button>

HTML:
{% highlight html %}

<button class="btn-switch-dot"> autocorrect </button>

<button class="btn-switch-dot is-on"> autocorrect </button>

{% endhighlight %}

SCSS:
{% highlight scss %}

// base class
button,
.btn {
  outline: none;
  color: white;
  cursor: pointer;
  background: $blue;
  border: solid $blue-dark;
  border-width: 0 0 0.1em; 
  border-radius: 3px;
  padding: 0.4em 1em;
  text-align: center;
  margin: 0.5rem 0;
  max-width: 12rem;

  &:hover, &:active {
    background: $blue-dark;
    transition: 0.2s ease;
  }
  &:active {
    text-shadow: 0 0 5px;
  }
}
{% endhighlight %}

{% highlight scss %}

// complement

.btn-switch-dot {
  outline: none;
  &:before {
    position: relative;
    top: -2px;
    right: 5px;    
    color: $grey-light;
    content: "."; // look ma, no icons
    font-size: 2rem;
    font-weight: bold;
    line-height: 0;
  }
}

.btn-switch-dot.is-on {
  &:before {
    color: $green-light;
    text-shadow: 0 0 5px;
  }
}

{% endhighlight %}

### Icon example:

<button class="btn-switch-icon"> 
  <span class="octicon octicon-mute"></span>
  mute
</button>
<button class="btn-switch-icon is-on"> 
  <span class="octicon octicon-mute"></span>
  mute
</button>

HTML:
{% highlight html %}

<button class="btn-switch-icon"> 
  <span class="octicon octicon-mute"></span>
  mute
</button>

<button class="btn-switch-icon is-on"> 
  <span class="octicon octicon-mute"></span>
  mute
</button>

{% endhighlight %}

SCSS:
{% highlight scss %}

.btn-switch-icon .octicon  {
  position: relative;
  right: 5px;
  color: $grey-light;
  font-size: 1rem;
}

.is-on .octicon {
  color: $red-light;
  text-shadow: 0 0 5px;
}
{% endhighlight %}

## Interaction (JavaScript) 

<button class="btn-switch-dot is-switchable"> autocorrect </button>
<button class="btn-switch-icon is-switchable"> 
  <span class="octicon octicon-mute"></span>
  mute
</button>


{% highlight javascript %}

(function() {

const switchEls = document
  .getElementsByClassName('is-switchable');

const switchArr = [].slice.call(switchEls);

function addListener(el) {
  el.addEventListener('click', event =>
    // desired action here 
    el.classList.toggle('is-on'));
}

switchArr.forEach(addListener);

}());

{% endhighlight %}
