---
layout: post
title: "Structuring HTML Form Validation Indicators"
date: 2016-10-24
---

Should I add a 'success' class to an input element or some other part of my form?
How to show an error indicator during live validation? How to manage a few different ways of validation?

Here's a code example that makes these problems simpler.
It makes adding CSS classes cleaner.
It allows you to make flexible JavaScript loops that can go through many different inputs easily and check them.
It support's many different ways of indicating errors. 

I'm showing code snippets first, than explaining them.

## Default input
{% highlight html %}
<div class="container-input validate">
  <label for="admin-email">
    Your Email
  </label>
  <span class="icon-error"></span>
  <span class="icon-success"></span>
  <input type="email"
         id="admin-email"
         autocomplete="email" required
  >
</div>
{% endhighlight %} 

Here's an example of JS loop that can check input values and much more:
{% highlight js %}
  inputContainers.forEach(elt => {
    let input = elt.getElementsByTagName("input")[0];
    ...
    if (input ...) { ... }
    ...
  });
{% endhighlight %} 

Because it goes through containers (DIVs), not inputs themselves,
we have easy access to everything inside them.
It can be, for instance, a label, an icon or a text below a field. 

In each iteration it can check what kind of input it's dealing with, and
than attache a proper method of validation.


## Input with an error indicator

The only difference is the last class name in the div element:
{% highlight html %}
<div class="container-input validate input-error">
  <label for="admin-email">
    Your Email
  </label>
  <span class="icon-error"></span>
  <span class="icon-success"></span>
  <input type="email"
         id="admin-email"
         autocomplete="email" required
  >
</div>
{% endhighlight %} 


Now, try to find which classes will be used: 
{% highlight css %}
/* icons */
.validate .icon-error,
.validate .icon-success {
  display: none;
}

.input-error .icon-error {
  color: $red;
  display: inline;
}

.input-success .icon-success {
  color: $green;
  display: inline;
}

/* text messages */
.validate .text-error,
.validate .text-success {
  display: none;
}

.input-error .text-error {
  display: block;
}

.input-success .text-success {
  display: block;
}
{% endhighlight %} 

As you can see, I can show the right icon in the right color by adding just one CSS class. 
Text messages work the same way.

Indicators are not displayed by default.
Only when the container has an *error* or a *success* class a browser will show some of them.

Manipulating CSS class names in only one DIV makes input validation easier.
The script has to tweak only one element to mark an error. 

## Short Conclusion
Good data structures make your work simpler.
When a structure is right, a procedure that uses it can be more straight forward.






