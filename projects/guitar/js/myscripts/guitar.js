(function() {
  "use strict";

  const svgObj = document.getElementById("svgGuitar");
  const strumBtn = document.getElementById("strumBtn");

  svgObj.addEventListener('load', function() { 

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

    function setWireColor(color) {
      wire.arr.forEach( el => {
        el.style.stroke = color;
      });
    }

    function setStringColor(color) {
      string.style.stroke = color;
    }

    const stringPath = string.getAttribute('d');
    // console.log(stringPath);

    function setStringMovement(position) {
      string.setAttribute("d",
        `m 200,632.36223 c 160,${position} 360,${position} 520,0`);
    }

    /* 
     * gain = increase per frame
     * startLvl = starting level that will be changed by gain
     */
    function saturation(time, tone, startLvl, direction, elmt) {
      const gain = (100 / (time / frameRate)) * direction;
      // console.log("gain:" + gain);
      
      (function iter() {
        let color = `hsla(${tone}, ${startLvl}%, 50%, 1)`;

        if ( startLvl < 0 || startLvl > 100 ) {
          console.log("warning: color saturation lvl is out of range");
        }
        
        if (typeof elmt === "function") {
          elmt(color);
          // console.log(wire.arr[3].style.stroke);
        }

        // repeat with changed values
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
     * position = starting point for movement animation
     * pxPerFrame = how many px to move per 1 frame 
     */
    function animatePath(time, position, pxPerFrame, direction, elmt) {     

      (function iter() {

        if (typeof elmt === "function") {
          elmt(position);
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

    setStringMovement(0);

    function colorizeWire() {
      saturation(600, 35, 0, 1, setWireColor);
      window.setTimeout( () => {
        saturation(900, 35, 100, -1, setWireColor);
      }, 850);
    } 
    
    function colorizeWireReset() {
      setWireColor(wire.color);
    }
   

    function moveString() {
      animatePath(380, 0, 0.5, 1, setStringMovement);
      
      window.setTimeout( () => {
        animatePath(500, 11, 0.5, -1, setStringMovement);
        
        window.setTimeout( () => {
          animatePath(140, -4, 0.5, 1, setStringMovement);
        }, 500);

      }, 380);

    }

    function moveStringReset() {
      string.setAttribute("d", `m 200,632 c 160,0 360,0 520,0`);
    }

    colorizeWireReset();
    moveStringReset();

    strumBtn.addEventListener("click", () => {
      colorizeWire();
      moveString();
    }, false);

  });
}());
