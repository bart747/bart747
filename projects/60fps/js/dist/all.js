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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGNvbnN0IHN2Z09iaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ZnR3VpdGFyXCIpO1xuICBjb25zdCBzdHJ1bUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RydW1CdG5cIik7XG5cbiAgc3ZnT2JqLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHsgXG5cblxuICAgIC8qXG4gICAgICogIC0tLS0tIFNWRyBncmFwaCByZWxhdGVkIHN0dWZmIC0tLS0tXG4gICAgICovXG5cbiAgICBjb25zdCBzdmdHdWl0YXIgPSBzdmdPYmouY29udGVudERvY3VtZW50O1xuICAgIGNvbnN0IHN0cmluZyA9IHN2Z0d1aXRhci5nZXRFbGVtZW50QnlJZChcInN0cmluZzFcIik7XG4gICAgY29uc3Qgd2lyZSA9IHtcbiAgICAgIGFyciAgIDogIFtdLnNsaWNlXG4gICAgICAgICAgICAgICAgICAuY2FsbChzdmdHdWl0YXJcbiAgICAgICAgICAgICAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2lyZVwiKSksXG4gICAgICBjb2xvciA6ICBcImhzbGEoMzUsIDEwJSwgNTAlLCAxKVwiXG4gICAgfTtcblxuICAgIC8vIHNldCBmcmFtZXMgcGVyIHNlY29uZCBhcyB0aW1lIHBlcmlvZCBmb3IgMSBmcmFtZVxuICAgIGNvbnN0IGZwczYwID0gMTYuNjY7XG4gICAgY29uc3QgZnJhbWVSYXRlID0gZnBzNjA7XG5cbiAgICBjb25zdCBzdHJpbmdQYXRoID0gc3RyaW5nLmdldEF0dHJpYnV0ZSgnZCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHN0cmluZ1BhdGgpO1xuXG4gICAgZnVuY3Rpb24gc2V0V2lyZUNvbG9yKGNvbG9yKSB7XG4gICAgICB3aXJlLmFyci5mb3JFYWNoKCBlbCA9PiB7XG4gICAgICAgIGVsLnN0eWxlLnN0cm9rZSA9IGNvbG9yO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U3RyaW5nQ29sb3IoY29sb3IpIHtcbiAgICAgIHN0cmluZy5zdHlsZS5zdHJva2UgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTdHJpbmdDdXJ2ZShwb3NpdGlvbikge1xuICAgICAgc3RyaW5nLnNldEF0dHJpYnV0ZShcImRcIixcbiAgICAgICAgYG0gMjAwLDYzMi4zNjIyMyBjIDE2MCwke3Bvc2l0aW9ufSAzNjAsJHtwb3NpdGlvbn0gNTIwLDBgKTtcbiAgICB9XG5cblxuICAgIC8qXG4gICAgICogIC0tLS0tIGFuaW1hdGlvbnMgLS0tLS1cbiAgICAgKi9cblxuICAgIC8qXG4gICAgICogdGltZTogMTAwMCBpcyAxcztcbiAgICAgKiBodWU6IGJhc2VkIG9uIGhzbCBub3RhdGlvbiAtIGZyb20gMCB0byAzNjA7XG4gICAgICogc3RhcnRMdmw6IHNhdHVyYXRpb24gc3RhcnQgbHZsIC0gMCBpcyBncmF5c2NhbGUsIDEwMCBmdWxsIGNvbG9yO1xuICAgICAqIGRpcmVjdGlvbjogMSBvciAtMTtcbiAgICAgKiBjb2xvckZ1bmM6IGZ1bmN0aW9uIHRoYXQgc2V0cyB0aGUgY29sb3Igb2YgZ2l2ZW4gZWxlbWVudDtcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzYXR1cmF0aW9uKHRpbWUsIGh1ZSwgc3RhcnRMdmwsIGRpcmVjdGlvbiwgY29sb3JGdW5jKSB7XG4gICAgICBjb25zdCBnYWluID0gKDEwMCAvICh0aW1lIC8gZnJhbWVSYXRlKSkgKiBkaXJlY3Rpb247XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImdhaW46XCIgKyBnYWluKTtcbiAgICAgIFxuICAgICAgKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgIGxldCBjb2xvciA9IGBoc2xhKCR7aHVlfSwgJHtzdGFydEx2bH0lLCA1MCUsIDEpYDtcblxuICAgICAgICBpZiAoIHN0YXJ0THZsIDwgMCB8fCBzdGFydEx2bCA+IDEwMCApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIndhcm5pbmc6IGNvbG9yIHNhdHVyYXRpb24gbHZsIGlzIG91dCBvZiByYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHR5cGVvZiBjb2xvckZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGNvbG9yRnVuYyhjb2xvcik7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cod2lyZS5hcnJbM10uc3R5bGUuc3Ryb2tlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIHJlcGVhdCB3aXRoIGNoYW5nZWQgdmFsdWVzXG4gICAgICAgICAqIDAuMDEgaXMgbm90IGEgcHJlY2lzZSBzb2x1dGlvbiBidXQgZ29vZCBlbm91Z2ggdG8gdHJpY2sgdGhlIGV5ZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCB0aW1lID4gZnJhbWVSYXRlIC0gMC4wMSkge1xuICAgICAgICAgIHRpbWUgPSB0aW1lIC0gZnJhbWVSYXRlO1xuICAgICAgICAgIHN0YXJ0THZsID0gc3RhcnRMdmwgKyBnYWluO1xuXG4gICAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgaXRlcigpO1xuICAgICAgICAgIH0sIGZyYW1lUmF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0oKSk7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICogdGltZTogMTAwMCBpcyAxcztcbiAgICAgKiBwb3NpdGlvbjogc3RhcnRpbmcgcG9pbnQgZm9yIG1vdmVtZW50IGFuaW1hdGlvbjtcbiAgICAgKiBweFBlckZyYW1lOiBob3cgbWFueSBweCB0byBtb3ZlIHBlciAxIGZyYW1lO1xuICAgICAqIGRpcmVjdGlvbjogMSBvciAtMTtcbiAgICAgKiBwYXRoRnVuYzogZnVuY3Rpb24gdGhhdCBzZXRzIHRoZSBwYXRoIChTVkcpIG9mIGEgZ2l2ZW4gZWxlbWVudDtcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhbmltYXRlUGF0aCh0aW1lLCBwb3NpdGlvbiwgcHhQZXJGcmFtZSwgZGlyZWN0aW9uLCBwYXRoRnVuYykgeyAgICAgXG5cbiAgICAgIChmdW5jdGlvbiBpdGVyKCkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGF0aEZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHBhdGhGdW5jKHBvc2l0aW9uKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdHJpbmcuZ2V0QXR0cmlidXRlKFwiZFwiKSk7ICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlcGVhdCB3aXRoIGNoYW5nZWQgdmFsdWVzXG4gICAgICAgIGlmICggdGltZSA+IGZyYW1lUmF0ZSAtIDAuMDEpIHsgXG4gICAgICAgICAgdGltZSA9IHRpbWUgLSBmcmFtZVJhdGU7XG4gICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiArIChweFBlckZyYW1lICogZGlyZWN0aW9uKTtcbiAgICAgICAgICBcbiAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBpdGVyKCk7XG4gICAgICAgICAgfSwgZnJhbWVSYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSgpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb2xvcml6ZVdpcmUoKSB7XG4gICAgICBzYXR1cmF0aW9uKDYwMCwgMzUsIDAsIDEsIHNldFdpcmVDb2xvcik7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICBzYXR1cmF0aW9uKDkwMCwgMzUsIDEwMCwgLTEsIHNldFdpcmVDb2xvcik7XG4gICAgICB9LCA4NTApO1xuICAgIH0gXG4gICBcbiAgICBmdW5jdGlvbiBtb3ZlU3RyaW5nKCkge1xuICAgICAgYW5pbWF0ZVBhdGgoMzgwLCAwLCAwLjUsIDEsIHNldFN0cmluZ0N1cnZlKTtcbiAgICAgIFxuICAgICAgd2luZG93LnNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgYW5pbWF0ZVBhdGgoNTAwLCAxMSwgMC41LCAtMSwgc2V0U3RyaW5nQ3VydmUpO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICBhbmltYXRlUGF0aCgxNDAsIC00LCAwLjUsIDEsIHNldFN0cmluZ0N1cnZlKTtcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgfSwgMzgwKTtcblxuICAgIH1cbiAgICAgIFxuICAgIGZ1bmN0aW9uIGNvbG9yaXplV2lyZVJlc2V0KCkge1xuICAgICAgc2V0V2lyZUNvbG9yKHdpcmUuY29sb3IpO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gbW92ZVN0cmluZ1Jlc2V0KCkge1xuICAgICAgc2V0U3RyaW5nQ3VydmUoMCk7XG4gICAgfVxuXG4gICAgY29sb3JpemVXaXJlUmVzZXQoKTtcbiAgICBtb3ZlU3RyaW5nUmVzZXQoKTtcblxuICAgIHN0cnVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb2xvcml6ZVdpcmUoKTtcbiAgICAgIG1vdmVTdHJpbmcoKTtcbiAgICB9LCBmYWxzZSk7XG5cbiAgfSk7XG59KCkpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
