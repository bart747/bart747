"use strict";

(function () {

  function gallery2step() {

    var attr = {

      imgNum: 3,

      images: {
        full: ["img/1.jpg", "img/2.jpg", "img/3.jpg"],
        mini: ["img/1s.jpg", "img/2s.jpg", "img/3s.jpg"]
      },

      frames: {
        full: [$("div#pic-1"), $("div#pic-2"), $("div#pic-3")],
        mini: [$("div#pic-mini-1"), $("div#pic-mini-2"), $("div#pic-mini-3")]
      },

      placeholder: $("div#pic-1-placeholder")

    };

    var image = {

      create: function create(source, frame) {
        var img = new Image();
        img.src = source;
        frame.append(img);
      },

      hide: function hide(frame) {
        frame.addClass("hidden");
      },

      show: function show(frame) {
        frame.removeClass("hidden");
      },

      highlightOn: function highlightOn(frame) {
        frame.addClass("pic-active");
      },

      highlightOff: function highlightOff(frame) {
        frame.removeClass("pic-active");
      },

      blurOn: function blurOn(frame) {
        frame.addClass("blur");
      },

      blurOff: function blurOff(frame) {
        frame.removeClass("blur");
      }

    };

    var imgSelector = {

      reset: function reset() {
        for (var i = 0; i < attr.imgNum; i += 1) {
          image.hide(attr.frames.full[i]);
          image.highlightOff(attr.frames.mini[i]);
        }
      },

      applyTo: function applyTo(el) {
        attr.frames.mini[el].click(function () {
          imgSelector.reset();
          image.highlightOn(attr.frames.mini[el]);
          image.show(attr.frames.full[el]);
        });
      }
    };

    // start by creating placeholder from first thumbnail
    // because it'll be loaded the fastest
    image.create(attr.images.mini[0], attr.placeholder);
    image.create(attr.images.full[0], attr.frames.full[0]);
    image.hide(attr.frames.full[0]);

    attr.frames.mini.forEach(function (element, index) {
      image.create(attr.images.mini[index], element);
      image.blurOn(element);
    });

    image.highlightOn(attr.frames.mini[0]);

    // all full size images except the first one are loaded after a page is ready
    // that way they don't "steal" bandwidth
    window.onload = function () {

      for (var i = 1; i < attr.imgNum; i += 1) {
        image.hide(attr.frames.full[i]);
        image.create(attr.images.full[i], attr.frames.full[i]);
      }

      image.hide(attr.placeholder);
      image.show(attr.frames.full[0]);

      for (var i = 0; i < attr.imgNum; i += 1) {
        image.blurOff(attr.frames.mini[i]);
        imgSelector.applyTo(i);
      }
    };
  }

  gallery2step();
})();