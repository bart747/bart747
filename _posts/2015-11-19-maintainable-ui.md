---
layout: post
title: "Maintainable UI: How to Improve Code Editing with SASS"
date: 2015-11-10
---

I guarantee you that changes are unavoidable. And you can’t predict the future.
You also can’t solve problems in theory only, without prototyping.
So make your life easier and build things that are easy to edit.

Here are some examples of SASS based solutions that you can use to make UI more maintainable and “themable”.


## Variables

With SASS variables you can control your basic UI properties from one, organised file.
The obvious ones are font families, media queries, colors and sizes.

Here's quick example:

{% highlight scss %}

// fonts
$family:           "Source Sans Pro", sans-serif;

// colors
$txt:              #404040;
$blue:             #2233ff;
$red:              #ff3322;
$green:            #22ff33;

// sizes
$base-font-size:   18px;
$large-font-size:  21px;
$small-font-size:  16px;
$base-line-height: 1.6;

// breakepoints
$sm:               568px;
$md:               768px;
$lg:               1024px;

{% endhighlight %}

But hey, not all colors are equal. And when it comes to sizes, we can get much more.

{% highlight scss %}

// FONTS

$base-family:           "Source Sans Pro", sans-serif;
$mono-family:           "Droid Sans Mono", monospace;


// COLORS

// base
$txt:              #404040;
$blue:             #2233ff;
$red:              #ff3322;
$green:            #22ff33;

// branding
$brand-blue:       $blue;
$brand-gold:       #e5b23b;


// SIZES

$base-font-size:   18px;
$large-font-size:  21px;
$small-font-size:  16px;
$base-line-height: 1.6;

// marketing headlines;
$extra-fonts-size: 28px;

// rhythm unit (leading)
$u:                1rem * $base-line-height;


// BREAKEPOINTS
$sm:               568px;
$md:               768px;
$lg:               1024px;

{% endhighlight %}

### What's rhythm unit ($u)?

You can use $u for things like margins, padding, height and  line-height.
It will keep everything well aligned. It equals your default leading size.

For instance, when you have two different UI blocks (like media object) in-line,
it will prevent misalignment.
Just use it to set up margins and padding.
If there's a headline that's bigger than basic font size,
fit it into a line-hight that equals one $u.


## Mixins and Functions

If you use more than one font settings stack:

{% highlight scss %}

@mixin font-base {
  color: $text-color;
  font-family: $base-font-family;
  font-size:  $base-font-size;
  line-height: $base-line-height;
}

@mixin font-mono {
  color: $grey-dark;
  font-family: $mono-font-family;
  font-size: $small-font-size;
  line-height: 0.75 * $u;
  // 4 lines of code will give 3x default leading
}

{% endhighlight %}

Assets directory path helpers:

{% highlight Scss %}

$assets-dir: 'assets';

@function image($name) {
  @return url(../#{$assets-dir}/img/#{$name});
}

@function font($name) {
  @return url(../#{$assets-dir}/fonts/#{$name});

}

// usage
// .masthead {
//   background-image: image('clouds.svg');
// }

{% endhighlight %}

## Files

Lets assume that you spotted some problem with an article layout.
If your <code>.scss</code> files are big and complex, you'll need to do some little research before editing.
If you have a lot of well organised small ones...

- main (imports)
- variables
- mixins
- base (html and body properties, things like box-sizing)
- typography (global)
- grid
- menu
- masthead
- article
- avatar
- footer
- logo

...you know where to go.


## Helpers

It's good to have a <code>helpers.scss</code> file. It's a place to store classes and mixins like:

- .center,
- .bold,
- .hidden,
- .muted
- @mixin center

Little n' handy stuff.


## Conventions and Rules

Rules and conventions are better than total configurability.
Set main building blocks of your future product and stick to them.
It's better for your brain than playing with endless options.

### You're Doing too Much Anyway

Having max three extra colors beside your default text color is most of the time enough.

A grid system with only 4 classes: <code>.row, .half, .third, .quarter</code>, is often enough.

Having 3&ndash;4 font sizes is enough.

Building a gallery based on halves and quarters, or rule of thirds gives enough flexibility.

Your article page doesn't need a three column version.

One media-object layout with extra modifier classes is better than a few completely different ones.
Mod classes are something like this: <code>.photo-big,
.text-only, .secondary.</code>

That way your UI is more predictable for users and yourself.

### More on Typography
I like to limit myself to 3 font sizes.

1. There's a basic size.
2. A little bigger one that fits the same leading.
3. The biggest size (significantly) that fits exactly 2x basic leading.

Other hierarchy related things are solved by using different weights and colors.
That way I don't have to worry about typographic rhythm and spend a lot of time aligning things.

I also don't pair fonts. I pick one that is flexible and predictable.
Visual identity stuff is done mostly with colors, weights and placement.

Look at UIs of Twitter, Google search results and GitHub profiles. How many font sizes and families do you see at a glance.

## Stay Small
One of the biggest factors of maintainability is codebase size itself.
More code, more problems.
It's good to think about how particular element is useful.
Does it pay for itself.

## You Don't Know the Future
Maybe something complex will need to be modified.
Maybe your thing is not so great in some situations.
Maybe you won't remember how you figured it out.

**The whole point is to take advantage from uncertainty**.
