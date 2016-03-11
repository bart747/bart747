---
layout: post
title: "UI: Simple and Sane Toggle Buttons"  
date: 2016-03-10
---

Typical 'on-off' toggle button have more than 100 lines of CSS code.
That's a lot for for something like this. 
But maybe it's worth doing in some occasions?
Well, in some probably yes,
but in vast majority not.
And I mean cases where you really need some on-off switch.


## Usability

Your typical switch&mdash;with a moving part from left to right&mdash;
will often give you poor usability. The main problem here is a copy (a lot
of weird CSS is also pain). 

A common web button have a lot of place for a copy.
You can write an action premise in a few words.

When you're limited only to "on/off" it won't be very descriptive. 
Of course, you can write something more on a side, but it's not how a design 
pattern usually goes.

So it's good idea to stay with the typical, boring button design.
It's good for copy, and it's good for user habits.


## A Switch is Not a Check Box

Toggle buttons are sometimes used as a fancy version of check-boxes.
I think it's a bad idea.

If you want to CHECK some options, CHECK-boxes are
something natural.

When you think about toggle switch, you thing about something
that will start some action immediately.
For instance, lights will
be turned on or audio will be muted. It's like start and stop.
Check boxes are
not made for that.


## Demo

Since I don't want to use it as a check box, I'll use the <code>button</code>
HTML tag with a JS event listener.

I will have clear separation of concerns. Semantic HTML tag + CSS based visual
design + JS interaction. 

### Visuals (SCSS)

<button class="btn-neutral btn-switch-dot"> autocorrect </button>
<button class="btn-neutral btn-switch-dot is-on"> autocorrect </button>

{% highlight scss %}

// base class
button,
.btn {
  color: white;
  cursor: pointer;
  background-color: $blue;
  background-color: $grey;
  background-image: linear-gradient(
                    to bottom, $grey, $grey-dark);
  border: 0;
  border-radius: 3px;
  padding: 0.5em 1em;
  text-align: center;
  margin: 0.5rem 0;
  max-width: 12rem;

  &:hover, &:active {
    background-image: linear-gradient(
                      to bottom, $grey-dark, $grey-dark);
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
  &:after {
    position: relative;
    top: -2px;
    right: -5px;
    color: $grey;
    content: "."; // look ma, no icons
    font-size: 2.5rem;
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

<br>
<button class="btn-neutral btn-switch-icon"> 
  <span class="octicon octicon-mute"></span>
  mute
</button>
<button class="btn-neutral btn-switch-icon is-on"> 
  <span class="octicon octicon-mute"></span>
  mute
</button>

{% highlight scss %}
.btn-switch-icon .octicon  {
  position: relative;
  right: 5px;
  color: $grey;
  font-size: 1rem;
}

.is-on .octicon {
  color: $red-light;
  text-shadow: 0 0 5px;
}
{% endhighlight %}

## Interaction (JavaScript) 

<button class="btn-neutral btn-switch-dot is-switchable"> autocorrect </button>
<button class="btn-neutral btn-switch-icon is-switchable"> 
  <span class="octicon octicon-mute"></span>
  mute
</button>


{% highlight javascript %}

(function() {

const switchEls = document
  .getElementsByClassName('is-switchable')

const switchArr = [].slice.call(switchEls)

function addListener(el) {
  el.addEventListener('click', event =>
    el.classList.toggle('btn-switch-is-on'))
}

switchArr.forEach(addListener)

}())

{% endhighlight %}
