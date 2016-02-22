"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

  function gallery2step() {

    var imgFiles = {
      big: ["img/1.jpg", "img/2.jpg", "img/3.jpg"],
      small: ["img/1s.jpg", "img/2s.jpg", "img/3s.jpg"]
    };

    var imgFrames = {
      big: [$("div#pic-1"), $("div#pic-2"), $("div#pic-3")],
      small: [$("div#pic-mini-1"), $("div#pic-mini-2"), $("div#pic-mini-3")]
    };

    var placeholder = $("div#pic-1-placeholder");

    var image = (function () {
      function image(file, divFrame) {
        _classCallCheck(this, image);

        this.file = file;
        this.divFrame = divFrame;
      }

      _createClass(image, [{
        key: "create",
        value: function create() {
          var img = new Image();
          img.src = this.file;
          this.divFrame.append(img);
        }
      }, {
        key: "displayOn",
        value: function displayOn() {
          this.divFrame.removeClass("hidden");
        }
      }, {
        key: "displayOff",
        value: function displayOff() {
          this.divFrame.addClass("hidden");
        }
      }, {
        key: "highlightOn",
        value: function highlightOn() {
          this.divFrame.addClass("pic-active");
        }
      }, {
        key: "highlightOff",
        value: function highlightOff() {
          this.divFrame.removeClass("pic-active");
        }
      }, {
        key: "blurOn",
        value: function blurOn() {
          this.divFrame.addClass("blur");
        }
      }, {
        key: "blurOff",
        value: function blurOff() {
          this.divFrame.removeClass("blur");
        }
      }]);

      return image;
    })();

    // start by creating thumbnails and placeholder from small jpg
    // - they'll show up faster than full size photos

    var imgPlaceholder = new image(imgFiles.small[0], placeholder);
    imgPlaceholder.create();

    var thumbnails = [];
    imgFrames.small.forEach(function (el, i) {
      thumbnails[i] = new image(imgFiles.small[i], imgFrames.small[i]);
      thumbnails[i].create();
      thumbnails[i].blurOn();
    });

    thumbnails[0].highlightOn();

    var imgsBig = [];
    imgFrames.big.forEach(function (el, i) {
      imgsBig[i] = new image(imgFiles.big[i], el);
    });

    imgsBig[0].create();
    imgsBig[0].displayOff();

    // wait with HD stuff until page is ready
    // so it will not 'steal' bandwidth
    window.onload = function () {

      thumbnails.forEach(function (el, i) {
        el.blurOff();
      });

      imgPlaceholder.displayOff();
      imgsBig[1].create();
      imgsBig[2].create();
      imgsBig.forEach(function (el) {
        el.displayOff();
      });
      imgsBig[0].displayOn();

      thumbnails.forEach(function (el, i) {
        el.divFrame.click(function () {

          // reset
          thumbnails.forEach(function (el, i) {
            imgsBig[i].displayOff();
            el.highlightOff();
          });

          el.highlightOn();
          imgsBig[i].displayOn();
        });
      });
    };
  }

  gallery2step();
})();