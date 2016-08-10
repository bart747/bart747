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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgY29uc3Qgc3ZnT2JqID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdmdHdWl0YXJcIik7XG4gIGNvbnN0IHN0cnVtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHJ1bUJ0blwiKTtcblxuICBzdmdPYmouYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkgeyBcblxuICAgIGNvbnN0IHN2Z0d1aXRhciA9IHN2Z09iai5jb250ZW50RG9jdW1lbnQ7XG4gICAgY29uc3Qgc3RyaW5nID0gc3ZnR3VpdGFyLmdldEVsZW1lbnRCeUlkKFwic3RyaW5nMVwiKTtcbiAgICBjb25zdCB3aXJlID0ge1xuICAgICAgYXJyICAgOiAgW10uc2xpY2VcbiAgICAgICAgICAgICAgICAgIC5jYWxsKHN2Z0d1aXRhclxuICAgICAgICAgICAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3aXJlXCIpKSxcbiAgICAgIGNvbG9yIDogIFwiaHNsYSgzNSwgMTAlLCA1MCUsIDEpXCJcbiAgICB9O1xuXG4gICAgLy8gc2V0IGZyYW1lcyBwZXIgc2Vjb25kIGFzIHRpbWUgcGVyaW9kIGZvciAxIGZyYW1lXG4gICAgY29uc3QgZnBzNjAgPSAxNi42NjtcbiAgICBjb25zdCBmcmFtZVJhdGUgPSBmcHM2MDtcblxuICAgIGZ1bmN0aW9uIHNldFdpcmVDb2xvcihjb2xvcikge1xuICAgICAgd2lyZS5hcnIuZm9yRWFjaCggZWwgPT4ge1xuICAgICAgICBlbC5zdHlsZS5zdHJva2UgPSBjb2xvcjtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFN0cmluZ0NvbG9yKGNvbG9yKSB7XG4gICAgICBzdHJpbmcuc3R5bGUuc3Ryb2tlID0gY29sb3I7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nUGF0aCA9IHN0cmluZy5nZXRBdHRyaWJ1dGUoJ2QnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzdHJpbmdQYXRoKTtcblxuICAgIGZ1bmN0aW9uIHNldFN0cmluZ01vdmVtZW50KHBvc2l0aW9uKSB7XG4gICAgICBzdHJpbmcuc2V0QXR0cmlidXRlKFwiZFwiLFxuICAgICAgICBgbSAyMDAsNjMyLjM2MjIzIGMgMTYwLCR7cG9zaXRpb259IDM2MCwke3Bvc2l0aW9ufSA1MjAsMGApO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogdGltZTogMTAwMCBpcyAxcztcbiAgICAgKiBodWU6IGJhc2VkIG9uIGhzbCBub3RhdGlvbiAtIGZyb20gMCB0byAzNjA7XG4gICAgICogc3RhcnRMdmw6IHNhdHVyYXRpb24gc3RhcnQgbHZsIC0gMCBpcyBncmF5c2NhbGUsIDEwMCBmdWxsIGNvbG9yO1xuICAgICAqIGRpcmVjdGlvbjogMSBvciAtMTtcbiAgICAgKiBjb2xvckZ1bmM6IGZ1bmN0aW9uIHRoYXQgc2V0cyB0aGUgY29sb3Igb2YgZ2l2ZW4gZWxlbWVudDtcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzYXR1cmF0aW9uKHRpbWUsIGh1ZSwgc3RhcnRMdmwsIGRpcmVjdGlvbiwgY29sb3JGdW5jKSB7XG4gICAgICBjb25zdCBnYWluID0gKDEwMCAvICh0aW1lIC8gZnJhbWVSYXRlKSkgKiBkaXJlY3Rpb247XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImdhaW46XCIgKyBnYWluKTtcbiAgICAgIFxuICAgICAgKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgIGxldCBjb2xvciA9IGBoc2xhKCR7aHVlfSwgJHtzdGFydEx2bH0lLCA1MCUsIDEpYDtcblxuICAgICAgICBpZiAoIHN0YXJ0THZsIDwgMCB8fCBzdGFydEx2bCA+IDEwMCApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIndhcm5pbmc6IGNvbG9yIHNhdHVyYXRpb24gbHZsIGlzIG91dCBvZiByYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHR5cGVvZiBjb2xvckZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGNvbG9yRnVuYyhjb2xvcik7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cod2lyZS5hcnJbM10uc3R5bGUuc3Ryb2tlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIHJlcGVhdCB3aXRoIGNoYW5nZWQgdmFsdWVzXG4gICAgICAgICAqIDAuMDEgaXMgbm90IGEgcHJlY2lzZSBzb2x1dGlvbiBidXQgZ29vZCBlbm91Z2ggdG8gdHJpY2sgdGhlIGV5ZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCB0aW1lID4gZnJhbWVSYXRlIC0gMC4wMSkge1xuICAgICAgICAgIHRpbWUgPSB0aW1lIC0gZnJhbWVSYXRlO1xuICAgICAgICAgIHN0YXJ0THZsID0gc3RhcnRMdmwgKyBnYWluO1xuXG4gICAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgaXRlcigpO1xuICAgICAgICAgIH0sIGZyYW1lUmF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0oKSk7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICogdGltZTogMTAwMCBpcyAxcztcbiAgICAgKiBwb3NpdGlvbjogc3RhcnRpbmcgcG9pbnQgZm9yIG1vdmVtZW50IGFuaW1hdGlvbjtcbiAgICAgKiBweFBlckZyYW1lOiBob3cgbWFueSBweCB0byBtb3ZlIHBlciAxIGZyYW1lO1xuICAgICAqIGRpcmVjdGlvbjogMSBvciAtMTtcbiAgICAgKiBwYXRoRnVuYzogZnVuY3Rpb24gdGhhdCBzZXRzIHRoZSBwYXRoIChTVkcpIG9mIGEgZ2l2ZW4gZWxlbWVudDtcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhbmltYXRlUGF0aCh0aW1lLCBwb3NpdGlvbiwgcHhQZXJGcmFtZSwgZGlyZWN0aW9uLCBwYXRoRnVuYykgeyAgICAgXG5cbiAgICAgIChmdW5jdGlvbiBpdGVyKCkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGF0aEZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHBhdGhGdW5jKHBvc2l0aW9uKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdHJpbmcuZ2V0QXR0cmlidXRlKFwiZFwiKSk7ICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlcGVhdCB3aXRoIGNoYW5nZWQgdmFsdWVzXG4gICAgICAgIGlmICggdGltZSA+IGZyYW1lUmF0ZSAtIDAuMDEpIHsgXG4gICAgICAgICAgdGltZSA9IHRpbWUgLSBmcmFtZVJhdGU7XG4gICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiArIChweFBlckZyYW1lICogZGlyZWN0aW9uKTtcbiAgICAgICAgICBcbiAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBpdGVyKCk7XG4gICAgICAgICAgfSwgZnJhbWVSYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSgpKTtcbiAgICB9XG5cbiAgICBzZXRTdHJpbmdNb3ZlbWVudCgwKTtcblxuICAgIGZ1bmN0aW9uIGNvbG9yaXplV2lyZSgpIHtcbiAgICAgIHNhdHVyYXRpb24oNjAwLCAzNSwgMCwgMSwgc2V0V2lyZUNvbG9yKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgIHNhdHVyYXRpb24oOTAwLCAzNSwgMTAwLCAtMSwgc2V0V2lyZUNvbG9yKTtcbiAgICAgIH0sIDg1MCk7XG4gICAgfSBcbiAgICBcbiAgICBmdW5jdGlvbiBjb2xvcml6ZVdpcmVSZXNldCgpIHtcbiAgICAgIHNldFdpcmVDb2xvcih3aXJlLmNvbG9yKTtcbiAgICB9XG4gICBcbiAgICBmdW5jdGlvbiBtb3ZlU3RyaW5nKCkge1xuICAgICAgYW5pbWF0ZVBhdGgoMzgwLCAwLCAwLjUsIDEsIHNldFN0cmluZ01vdmVtZW50KTtcbiAgICAgIFxuICAgICAgd2luZG93LnNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgYW5pbWF0ZVBhdGgoNTAwLCAxMSwgMC41LCAtMSwgc2V0U3RyaW5nTW92ZW1lbnQpO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICBhbmltYXRlUGF0aCgxNDAsIC00LCAwLjUsIDEsIHNldFN0cmluZ01vdmVtZW50KTtcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgfSwgMzgwKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVTdHJpbmdSZXNldCgpIHtcbiAgICAgIHN0cmluZy5zZXRBdHRyaWJ1dGUoXCJkXCIsIGBtIDIwMCw2MzIgYyAxNjAsMCAzNjAsMCA1MjAsMGApO1xuICAgIH1cblxuICAgIGNvbG9yaXplV2lyZVJlc2V0KCk7XG4gICAgbW92ZVN0cmluZ1Jlc2V0KCk7XG5cbiAgICBzdHJ1bUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29sb3JpemVXaXJlKCk7XG4gICAgICBtb3ZlU3RyaW5nKCk7XG4gICAgfSwgZmFsc2UpO1xuXG4gIH0pO1xufSgpKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
