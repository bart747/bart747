(function() {
/*
 *  ----- animations -----
 */

// set frames per second as time period for 1 frame
const fps60 = 16.66;
const frameRate = fps60;

/*
  * time: 1000 is 1s;
  * hue: based on hsl notation - from 0 to 360;
  * startLvl: saturation start lvl - 0 is grayscale, 100 full color;
  * direction: 1 or -1;
  * colorFunc: function that sets the color of given element;
  */
this.saturation = function(time, hue, startLvl, direction, colorFunc) {
  const gain = (100 / (time / frameRate)) * direction;
  // console.log("gain:" + gain);
  
  (function iter() {
    let color = `hsla(${hue}, ${startLvl}%, 50%, 1)`;

    if ( startLvl < 0 || startLvl > 100 ) {
      console.log("warning: color saturation lvl is out of range");
    }
    
    if (typeof colorFunc === "function") {
      colorFunc(color);
      // console.log(wire.arr[3].style.stroke);
    }

    /*
      * repeat with changed values
      * 0.01 is not a precise solution but good enough to trick the eye
      */
    if ( time > frameRate - 0.01) {
      time = time - frameRate;
      startLvl = startLvl + gain;

      setTimeout( () => {
        iter();
      }, frameRate);
    }
  }());
};

/*
  * time: 1000 is 1s;
  * position: starting point for movement animation;
  * pxPerFrame: how many px to move per 1 frame;
  * direction: 1 or -1;
  * pathFunc: function that sets the path (SVG) of a given element;
  */
this.animatePath = function(time, position, pxPerFrame, direction, pathFunc) {     

  (function iter() {

    if (typeof pathFunc === "function") {
      pathFunc(position);
      // console.log(string.getAttribute("d"));     
    }

    // repeat with changed values
    if ( time > frameRate - 0.01) { 
      time = time - frameRate;
      position = position + (pxPerFrame * direction);
      
      setTimeout( () => {
        iter();
      }, frameRate);
    }
  }());
};

})();

