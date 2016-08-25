(function() {
/*
 *  ----- animations -----
 */

const fps60 = 16.66;

// estimated function call delay
// they vary
const funcCallDelay = 3;

// DOM accepts integers only
const frameRate = Math.floor(fps60);

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
      duration = duration - frameRate - funcCallDelay;
      startLvl = startLvl + changePerFrame;

      setTimeout( _ => {
        iter();
      }, frameRate);
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
      duration = duration - frameRate - funcCallDelay;
      startPosition = startPosition + (pxPerFrame * direction);

      setTimeout( _ => {
        iter();
      }, frameRate);
    }
  })();
};

})();
