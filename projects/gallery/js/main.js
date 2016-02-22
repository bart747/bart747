
(function() {

function gallery2step() {

  const imgFiles = {
    big: ["img/1.jpg", "img/2.jpg", "img/3.jpg"],
    small: ["img/1s.jpg", "img/2s.jpg", "img/3s.jpg"]
  };

  const imgFrames = {
    big: [$("div#pic-1"), $("div#pic-2"), $("div#pic-3")],
    small: [$("div#pic-mini-1"), $("div#pic-mini-2"), $("div#pic-mini-3")]
  };

  const placeholder = $("div#pic-1-placeholder");

  class image {
    constructor(file, divFrame) {
      this.file = file;
      this.divFrame = divFrame;
    }

    create() {
      let img = new Image();
      img.src = this.file;
      this.divFrame.append(img);
    }
 
    displayOn() {
      this.divFrame.removeClass("hidden");
    }
   
    displayOff() {
      this.divFrame.addClass("hidden");
    }

    highlightOn() {
      this.divFrame.addClass("pic-active");
    }

    highlightOff() {
      this.divFrame.removeClass("pic-active");
    }

    blurOn() {
      this.divFrame.addClass("blur");
    }

    blurOff() {
      this.divFrame.removeClass("blur");
    }
  }


  // start by creating thumbnails and placeholder from small jpg
  // - they'll show up faster than full size photos
  const imgPlaceholder = new image(imgFiles.small[0], placeholder);
  imgPlaceholder.create();

  const thumbnails = [];
  imgFrames.small.forEach( function(el, i) {
    thumbnails[i] = new image(imgFiles.small[i], imgFrames.small[i]);
    thumbnails[i].create();
    thumbnails[i].blurOn();
  });
  
  thumbnails[0].highlightOn();
  
  const imgsBig = [];
  imgFrames.big.forEach( function(el, i) {
    imgsBig[i] = new image(imgFiles.big[i], el);
  });
  
  imgsBig[0].create();
  imgsBig[0].displayOff();

  const aa = function(e) {
    thumbnails[e].highlightOn();
  };
 

  // wait with HD stuff until page is ready
  // so it will not 'steal' bandwidth
  window.onload = function() {

    thumbnails.forEach( function(el, i) {
      el.blurOff();
    });
    
    imgPlaceholder.displayOff();
    imgsBig[1].create();
    imgsBig[2].create();
    imgsBig.forEach( function(el) {
      el.displayOff();
    });
    imgsBig[0].displayOn();

    thumbnails.forEach( function(el, i) {
      el.divFrame.click( function() {

        thumbnails.forEach(function(el, i) {
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
}());
