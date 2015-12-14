"use strict";

(function () {

    var picNr = 3;

    var sources = {
        full: ["img/1.jpg", "img/2.jpg", "img/3.jpg"],
        mini: ["img/1s.jpg", "img/2s.jpg", "img/3s.jpg"]
    };

    // div frames for images
    var frames = {
        full: [$("div#pic-1"), $("div#pic-2"), $("div#pic-3")],
        mini: [$("div#pic-mini-1"), $("div#pic-mini-2"), $("div#pic-mini-3")]
    };

    // frame for image that will serve as placeholder until
    // first full size photo will be uploaded
    var placeholder = $("div#pic-1-placeholder");

    // helper to create IMG objects
    function imgCreate(source, frame) {
        var img = new Image();
        img.src = source;
        frame.append(img);
    }

    // create first miniature in placeholder frame
    // (miniatures are smaller so will appear earlier)
    imgCreate(sources.mini[0], placeholder);

    // create fist full size photo and hide it
    imgCreate(sources.full[0], frames.full[0]);
    frames.full[0].addClass("hidden");

    // create all miniatures in mini frames
    for (var i = 0; i < picNr; i += 1) {
        imgCreate(sources.mini[i], frames.mini[i]);
        frames.mini[i].addClass("blur");
    }

    // add 'active' css state class to first miniature
    frames.mini[0].addClass("pic-active");

    //  'ON CLICK' FUNCTIONALITY
    // add/remove on click css state classes in selected div frames
    function cssToggle(framesNr) {

        // select right div frames
        var main = frames.full[framesNr];
        var miniature = frames.mini[framesNr];

        miniature.click(function () {
            // reset css state classes before adding changes
            for (var i = 0; i < picNr; i += 1) {
                frames.full[i].addClass("hidden");
                frames.mini[i].removeClass("pic-active");
            }

            // add/remove proper css state classes to selected image frames
            miniature.addClass("pic-active");
            main.removeClass("hidden");
        });
    }

    // fire at the end of the document loading process
    function atPageReady() {
        window.onload = function () {

            // create all full size except the first one (already created)
            for (var i = 1; i < picNr; i += 1) {

                // hide them upfront
                frames.full[i].addClass("hidden");
                imgCreate(sources.full[i], frames.full[i]);
            }

            // hide placeholder and show full size image
            placeholder.addClass("hidden");
            frames.full[0].removeClass("hidden");

            // remove blur effect and apply cssToggle function to all image frames
            for (var i = 0; i < picNr; i += 1) {
                frames.mini[i].removeClass("blur");
                cssToggle(i);
            }
        };
    }

    atPageReady();
})();