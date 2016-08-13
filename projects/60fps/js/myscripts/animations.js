(function() {
/*
 *  ----- animations -----
 */

const fps60 = 16.66;
const frameRate = fps60;

this.saturation = function(duration,
                           hue,
                           startLvl,
                           direction,
                           setColorFunc) {
  const gain = (100 / (duration / frameRate)) * direction;
  dbg("gain:" + gain);
  
  (function iter() {
    let color = `hsla(${hue}, ${startLvl}%, 50%, 1)`;

    if ( startLvl < 0 || startLvl > 100 ) {
      console.log("warning: color saturation lvl is out of range");
    }
    
    if (typeof setColorFunc === "function") {
      setColorFunc(color);
    }

    dbg("sturation: " + startLvl);

    // 0.01 is not a precise solution but good enough to trick the eye
    if ( duration > frameRate - 0.01) {
      duration = duration - frameRate;
      startLvl = startLvl + gain;

      setTimeout( () => {
        iter();
      }, frameRate);
    }
  }());
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

    if ( duration > frameRate - 0.01) { 
      duration = duration - frameRate;
      startPosition = startPosition + (pxPerFrame * direction);
      
      setTimeout( () => {
        iter();
      }, frameRate);
    }
  }());
};

})();

