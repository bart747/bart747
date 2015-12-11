(function() {

const picNr = 3;

// pic sources - full size and miniatures
const picBigSrc = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
const picMiniSrc = ["img/1s.jpg", "img/2s.jpg", "img/3s.jpg"];

// div frames for images - should be already created in HTML file
const framesBig = [$("div#pic-1"), $("div#pic-2"), $("div#pic-3")];
const framesMini = [$("div#pic-mini-1"), $("div#pic-mini-2"), $("div#pic-mini-3")];

// frame for image that will serve as placeholder until
// first full size photo will be uploaded
const placeholder = $("div#pic-1-placeholder");

// helper to create IMG objects
function imgCreate(source, frame) {
    const img = new Image();
    img.src = source;
    frame.append(img);
}

// create selected images at start
(function imgLoadAtStart() {

    // first miniature in full size frame
    // (miniatures are smaller so will appear earlier)
    imgCreate(picMiniSrc[0], placeholder);

    // fist full size and hide it
    imgCreate(picBigSrc[0], framesBig[0]);
    framesBig[0].addClass("hidden");

    // all miniatures in mini frames
    for (var i = 0; i < picNr; i += 1) {
        imgCreate(picMiniSrc[i], framesMini[i]);
    }
})();

// create selected images when page is ready
(function imgLoadAtPageReady() {
    window.onload = function () {


      // all full size except the first one (already created)
      for (var i = 1; i < picNr; i += 1) {

          // hide them upfront
          framesBig[i].addClass("hidden");
          imgCreate(picBigSrc[i], framesBig[i]);
       }

      // hide placeholder and show full size image
      placeholder.addClass("hidden");
      framesBig[0].removeClass("hidden");
    };
})();

// add 'active' css state class to first miniature
framesMini[0].addClass("pic-active");


//
//  'ON CLICK' FUNCTIONALITY
//
// add/remove on click css state classes in selected div frames
function cssToggle(framesNr) {

    // select right div frames
    let big = framesBig[framesNr];
    let mini = framesMini[framesNr];

    mini.click(function() {
        // reset css state classes before adding changes
        for (var i=0; i<picNr; i+=1) {
            framesBig[i].addClass("hidden");
            framesMini[i].removeClass("pic-active");
    }

    // add/remove proper css state classes to selected image frames
    mini.addClass("pic-active");
    big.removeClass("hidden");
    })
}

// apply cssToggle function to all image frames
for (var i=0; i<picNr; i+=1) {
    cssToggle(i);
}

})();
