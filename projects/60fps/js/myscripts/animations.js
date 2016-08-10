(function() {
  "use strict";

  const svgObj = document.getElementById("svgGuitar");
  const strumBtn = document.getElementById("strumBtn");

  svgObj.addEventListener('load', function() { 


    /*
     *  ----- SVG graph related stuff -----
     */

    const svgGuitar = svgObj.contentDocument;
    const string = svgGuitar.getElementById("string1");
    const wire = {
      arr   :  [].slice
                  .call(svgGuitar
                  .getElementsByClassName("wire")),
      color :  "hsla(35, 10%, 50%, 1)"
    };

    // set frames per second as time period for 1 frame
    const fps60 = 16.66;
    const frameRate = fps60;

    const stringPath = string.getAttribute('d');
    // console.log(stringPath);

    function setWireColor(color) {
      wire.arr.forEach( el => {
        el.style.stroke = color;
      });
    }

    function setStringColor(color) {
      string.style.stroke = color;
    }

    function setStringCurve(position) {
      string.setAttribute("d",
        `m 200,632.36223 c 160,${position} 360,${position} 520,0`);
    }


    /*
     *  ----- animations -----
     */

    /*
     * time: 1000 is 1s;
     * hue: based on hsl notation - from 0 to 360;
     * startLvl: saturation start lvl - 0 is grayscale, 100 full color;
     * direction: 1 or -1;
     * colorFunc: function that sets the color of given element;
     */
    function saturation(time, hue, startLvl, direction, colorFunc) {
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
    }
    
    /*
     * time: 1000 is 1s;
     * position: starting point for movement animation;
     * pxPerFrame: how many px to move per 1 frame;
     * direction: 1 or -1;
     * pathFunc: function that sets the path (SVG) of a given element;
     */
    function animatePath(time, position, pxPerFrame, direction, pathFunc) {     

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
    }

    function colorizeWire() {
      saturation(600, 35, 0, 1, setWireColor);
      window.setTimeout( () => {
        saturation(900, 35, 100, -1, setWireColor);
      }, 850);
    } 
   
    function moveString() {
      animatePath(380, 0, 0.5, 1, setStringCurve);
      
      window.setTimeout( () => {
        animatePath(500, 11, 0.5, -1, setStringCurve);
        
        window.setTimeout( () => {
          animatePath(140, -4, 0.5, 1, setStringCurve);
        }, 500);

      }, 380);

    }
      
    function colorizeWireReset() {
      setWireColor(wire.color);
    }
  
    function moveStringReset() {
      setStringCurve(0);
    }

    colorizeWireReset();
    moveStringReset();

    strumBtn.addEventListener("click", () => {
      colorizeWire();
      moveString();
    }, false);

  });
}());
