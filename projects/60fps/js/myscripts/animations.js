(function() {
/*
 *  ----- animations -----
 */

const fps60 = 16.66;
const fps66p6 = 15;

// estimated delay caused by scripting
// they vary
const scriptDelay = 2;

// DOM accepts integers only
const frameRate = fps66p6;

const frameDelay = frameRate - scriptDelay;


this.saturation = function(duration,
                           hue,
                           startLvl,
                           changePerFrame,
                           setColorFunc) {

  (function iter() {
    let color = `hsla(${hue}, ${startLvl}%, 50%, 1)`;

    if ( startLvl < 0 || startLvl > 100 ) {
      console.log("warning: color saturation lvl is out of range");
    }

    if (typeof setColorFunc === "function") {
      setColorFunc(color);
    }

    dbg("sturation: " + startLvl);

    if ( duration >= frameRate) {
      duration = duration - frameRate;
      startLvl = startLvl + changePerFrame;

      setTimeout( _ => {
        iter();
      }, frameDelay);
    }
  })();
};


this.animatePath = function(duration,
                            startPosition,
                            pxPerFrame,
                            direction,
                            setPathFunc) {

  (function iter() {

    if (typeof setPathFunc === "function") {
      setPathFunc(startPosition);
    }

    dbg("path position: " + startPosition);

    if ( duration >= frameRate) {
      duration = duration - frameRate;
      startPosition = startPosition + (pxPerFrame * direction);

      setTimeout( _ => {
        iter();
      }, frameDelay);
    }
  })();
};

})();
