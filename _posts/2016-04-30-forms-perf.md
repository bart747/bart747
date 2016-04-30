---
layout: post
title: "Form Error Messages that Don't Trigger Massive Reflow"  
date: 2016-04-30
---

In many web forms, when an error message appears it triggers reflow.
The form's height increases because of extra content so a big chunk of page
has to be re-arranged by a browser.
It's bad for general site performance.
It consumes a lot of CPU power.
Especially bad thing on cheap smartphones.

Here's how to minimize that effect.
Keep in mind that the way you write CSS can stand on your way.
Better keep it clean.

  <form>
    <fieldset>
   
      <div class="input-line">
        <label for="default" >default</label>
        <input class="input" type="number" name="default"> </input>
      </div>

      <div class="input-line">
        <label>error</label>
        <input class="input-error"> </input>
          <span class="icon red octicon octicon-x blink"></span>
        <div class="input-message">invalid data</div>
      </div>

      <div class="input-line">
        <label>success</label>
        <input class="input-success"> </input>
          <span class="icon green octicon octicon-check rotate"></span>
      </div>

    </fieldset>
    <button type="submitt">send now</button>

  </form>
