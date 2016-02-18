
(function() {

function gallery2step() {

  const attr = {

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

  const image = {

    create: function(source, frame) {
      const img = new Image();
      img.src = source;
      frame.append(img);
    },

    hide: function(frame) {
      frame.addClass("hidden");
    },
    
    show: function(frame) {
      frame.removeClass("hidden");
    },

    highlightOn: function(frame) {
      frame.addClass("pic-active");
    },

    highlightOff: function(frame) {
      frame.removeClass("pic-active");
    },

    blurOn: function(frame) {
      frame.addClass("blur");
    },

    blurOff: function(frame) {
      frame.removeClass("blur");
    }

  };


  const imgSelector = {

    reset: function() {
      for (let i = 0; i < attr.imgNum; i += 1) {
        image.hide(attr.frames.full[i]);
        image.highlightOff(attr.frames.mini[i]);
      }
    },

    select: function(el) {
      attr.frames.mini[el].click(function() {
        imgSelector.reset();
        image.highlightOn(attr.frames.mini[el]);
        image.show(attr.frames.full[el]);
      });
    }
  };


  image.create(attr.images.mini[0], attr.placeholder);
  image.create(attr.images.full[0], attr.frames.full[0]);
  image.hide(attr.frames.full[0]);

  attr.frames.mini.forEach(function(element, index) {
    image.create(attr.images.mini[index], element);
    image.blurOn(element);
  });

  image.highlightOn(attr.frames.mini[0]);
  
  
  window.onload = function () {
  
    for (let i = 1; i < attr.imgNum; i += 1) {
      image.hide(attr.frames.full[i]);
      image.create(attr.images.full[i], attr.frames.full[i]);
    }

    image.hide(attr.placeholder);
    image.show(attr.frames.full[0]);

    for (let i = 0; i < attr.imgNum; i += 1 ) {
      image.blurOff(attr.frames.mini[i]);
      imgSelector.select(i);
    }
  };
  
}

gallery2step();

}());
