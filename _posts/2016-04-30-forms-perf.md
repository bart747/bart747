---
layout: post
title: "Form Error Messages that Don't Trigger Massive Reflow"  
date: 2016-04-30
---


## Sample Problem (simplified)

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

  </form>

Notice the difference in the distances between the input fields.
The tiny error message under the second field increased the height of the
form.
A moment of appearance of that kind of event triggers layout recalculation.
In other words: reflow.

Tip: Use 'paint flashing' option in your dev tools. You will see how the
whole page blinks in this example, and how I will reduce this effect
in the next ones.

Here's the markup:

{% highlight html %}
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
      <div class="input-message">invalid data</div>
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

  <button type="submit">send now</button>

</form>

{% endhighlight %}

## Solution 1 

  <form class="form-wrapper-small">
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

  </form>

Looks like nothing has changed?
What I did is closing the form in a **fixed height wrapper**. Notice the extra
whitespace on the bottom&mdash;the wrapper has to be a little bit bigger than
expected maximum form height.

This way the change in the form layout will only trigger recalculation of
the wrapper content. The rest of a page will stay static.

(Tip: To dig deeper into the code of my examples use the dev tools'
inspector.)
  

## Solution 2

  <form>
    <fieldset>
   
      <div class="input-line input-line-fixed">
        <label for="one" >default</label>
        <input id="one"
               name="one"
               type="text">
          <span class="icon green octicon octicon-check hidden"></span>
          <span class="icon red octicon octicon-x blink hidden"></span>
        <div class="input-message hidden">invalid data</div>

      </div>

      <div class="input-line input-line-fixed">
        <label for="two">error</label>
        <input id="two"
               class="input-error"
               name="two"
               type="text">
          <span class="icon green octicon octicon-check hidden"></span>
          <span class="icon red octicon octicon-x blink"></span>
        <div class="input-message hidden is-switchable">invalid data</div>
      </div>

      <div class="input-line input-line-fixed">
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

  </form>

This example also uses fixed height boxes. This time it's not the whole
form. I only closed small groups of elements: input + icons + error
message. The CSS class of that wrapper is <code>.input-line-fixed</code>. 

## Which One?

Both methods can be good choices.
It depends on circumstances.

The second solution is the most flexible when you know that error messages are
always one-liners. It also demands an extra bit of default whitespace in-between
form fields.

The first solution is good when an error message can take a lot of place.
It will create extra whitespace on the bottom of a form.

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
