---
layout: post
title: "Form Error Messages that Don't Trigger Massive Reflow (Perf)"  
date: 2016-04-30
---

When a web form layout is changing&mdash;e.g., due to an error message&mdash;
there's a good chance it will trigger a [browser reflow](https://developers.google.com/speed/articles/reflow).
It has a negative impact on website performance.
I have a few tricks to significantly reduce it.

## Sample Problem (simplified)

Here's some example.
It shows how a simple,
one line error indicator can force a browser to recalculate almost
a whole layout.

Tip: Use 'paint flashing' option in your dev tools.
In this example you will see how the whole page blinks (massive reflow).
Then I will show you two solutions to reduce that effect.

  <form>
    <fieldset>
   
      <div class="input-line">
        <label for="one" >default</label>
        <input id="one"
               name="one"
               type="text">
          <span class="icon green octicon octicon-check hidden"></span>
          <span class="icon red octicon octicon-x blink hidden"></span>
        <div class="input-message hidden">invalid data</div>

      </div>

      <div class="input-line">
        <label for="two">error</label>
        <input id="two"
               class="input-error"
               name="two"
               type="text">
          <span class="icon green octicon octicon-check hidden"></span>
          <span class="icon red octicon octicon-x blink"></span>
        <div class="input-message hidden is-switchable">invalid data</div>
      </div>

      <div class="input-line">
        <label for="three" >success</label>
        <input id="three"
               class="input-success"
               name="three"
               type="text">
          <span class="icon green octicon octicon-check"></span>
          <span class="icon red octicon octicon-x blink hidden"></span>
        <div class="input-message hidden">invalid data</div>

      </div>

    </fieldset>
    
    <button class="btn-form-perf" type="button">add error message</button>
    <br>Yes, click here.

  </form>

Notice the difference in the distances between the input fields.
The tiny error message under the second field increased the height of the
form.

A moment of appearance of that kind of event triggers layout recalculation.
In other words: reflow.


## Solution 1 

  <form class="form-wrapper-small">
    <fieldset>
   
      <div class="input-line">
        <label for="one2" >default</label>
        <input id="one2"
               name="one"
               type="text">
          <span class="icon green octicon octicon-check hidden"></span>
          <span class="icon red octicon octicon-x blink hidden"></span>
        <div class="input-message hidden">invalid data</div>

      </div>

      <div class="input-line">
        <label for="two2">error</label>
        <input id="two2"
               class="input-error"
               name="two"
               type="text">
          <span class="icon green octicon octicon-check hidden"></span>
          <span class="icon red octicon octicon-x blink"></span>
        <div class="input-message hidden is-switchable">invalid data</div>
      </div>

      <div class="input-line">
        <label for="three2" >success</label>
        <input id="three2"
               class="input-success"
               name="three"
               type="text">
          <span class="icon green octicon octicon-check"></span>
          <span class="icon red octicon octicon-x blink hidden"></span>
        <div class="input-message hidden">invalid data</div>

      </div>

    </fieldset>
    
    <button class="btn-form-perf" type="button">add error message</button>

  </form>

Looks like nothing has changed, huh?

What I did is closing the form in a **fixed height wrapper**.
Notice the extra whitespace on the bottom&mdash;
the wrapper has to be a little bit taller than an expected maximum form height.

This way the change in the form layout can only trigger recalculation of
the wrapper content.
The rest of the page stays static.

(Tip: To dig deeper into the code of my examples use the dev tools'
inspector.)
  

## Solution 2

  <form>
    <fieldset>
   
      <div class="input-line input-line-fixed">
        <label for="one3" >default</label>
        <input id="one3"
               name="one"
               type="text">
          <span class="icon green octicon octicon-check hidden"></span>
          <span class="icon red octicon octicon-x blink hidden"></span>
        <div class="input-message hidden">invalid data</div>

      </div>

      <div class="input-line input-line-fixed">
        <label for="two3">error</label>
        <input id="two3"
               class="input-error"
               name="two"
               type="text">
          <span class="icon green octicon octicon-check hidden"></span>
          <span class="icon red octicon octicon-x blink"></span>
        <div class="input-message hidden is-switchable">invalid data</div>
      </div>

      <div class="input-line input-line-fixed">
        <label for="three3" >success</label>
        <input id="three3"
               class="input-success"
               name="three"
               type="text">
          <span class="icon green octicon octicon-check"></span>
          <span class="icon red octicon octicon-x blink hidden"></span>
        <div class="input-message hidden">invalid data</div>

      </div>

    </fieldset>

    <button class="btn-form-perf" type="button">add error message</button>

  </form>

The example above also contains fixed height wrappers.
There are three of them&mdash;one per stack of:
label + input + icon + error message.
The CSS class of these wrappers is <code>.input-line-fixed</code>.

Now the message triggers the reflow of the very small part of the document.
When you do something like that, your form has to have a decent amount of
whitespace between inputs.


## Which One?

The first solution is good when an error message can take a lot of place.
It will create extra whitespace on the bottom of a form.

The second solution is the most flexible when you know that error
messages are always one-liners.
It also demands an extra bit of default whitespace in-between form fields.


<script>
(function() {

const switchElsFormPerf = document
  .getElementsByClassName('is-switchable');

const switchFormPerfArr = [].slice.call(switchElsFormPerf);

const btnFormPerf = document.getElementsByClassName('btn-form-perf');

const btnFormPerfArr = [].slice.call(btnFormPerf);

btnFormPerfArr.forEach( function(el, index, arr) {
  el.addEventListener('click', function() { 
    switchFormPerfArr[index].classList.toggle('hidden');
  });
})


}());
</script>
