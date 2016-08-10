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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aXRhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBjb25zdCBzdmdPYmogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN2Z0d1aXRhclwiKTtcbiAgY29uc3Qgc3RydW1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0cnVtQnRuXCIpO1xuXG4gIHN2Z09iai5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7IFxuXG4gICAgY29uc3Qgc3ZnR3VpdGFyID0gc3ZnT2JqLmNvbnRlbnREb2N1bWVudDtcbiAgICBjb25zdCBzdHJpbmcgPSBzdmdHdWl0YXIuZ2V0RWxlbWVudEJ5SWQoXCJzdHJpbmcxXCIpO1xuICAgIGNvbnN0IHdpcmUgPSB7XG4gICAgICBhcnIgICA6ICBbXS5zbGljZVxuICAgICAgICAgICAgICAgICAgLmNhbGwoc3ZnR3VpdGFyXG4gICAgICAgICAgICAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndpcmVcIikpLFxuICAgICAgY29sb3IgOiAgXCJoc2xhKDM1LCAxMCUsIDUwJSwgMSlcIlxuICAgIH07XG5cbiAgICAvLyBzZXQgZnJhbWVzIHBlciBzZWNvbmQgYXMgdGltZSBwZXJpb2QgZm9yIDEgZnJhbWVcbiAgICBjb25zdCBmcHM2MCA9IDE2LjY2O1xuICAgIGNvbnN0IGZyYW1lUmF0ZSA9IGZwczYwO1xuXG4gICAgZnVuY3Rpb24gc2V0V2lyZUNvbG9yKGNvbG9yKSB7XG4gICAgICB3aXJlLmFyci5mb3JFYWNoKCBlbCA9PiB7XG4gICAgICAgIGVsLnN0eWxlLnN0cm9rZSA9IGNvbG9yO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U3RyaW5nQ29sb3IoY29sb3IpIHtcbiAgICAgIHN0cmluZy5zdHlsZS5zdHJva2UgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmdQYXRoID0gc3RyaW5nLmdldEF0dHJpYnV0ZSgnZCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHN0cmluZ1BhdGgpO1xuXG4gICAgZnVuY3Rpb24gc2V0U3RyaW5nTW92ZW1lbnQocG9zaXRpb24pIHtcbiAgICAgIHN0cmluZy5zZXRBdHRyaWJ1dGUoXCJkXCIsXG4gICAgICAgIGBtIDIwMCw2MzIuMzYyMjMgYyAxNjAsJHtwb3NpdGlvbn0gMzYwLCR7cG9zaXRpb259IDUyMCwwYCk7XG4gICAgfVxuXG4gICAgLyogXG4gICAgICogZ2FpbiA9IGluY3JlYXNlIHBlciBmcmFtZVxuICAgICAqIHN0YXJ0THZsID0gc3RhcnRpbmcgbGV2ZWwgdGhhdCB3aWxsIGJlIGNoYW5nZWQgYnkgZ2FpblxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNhdHVyYXRpb24odGltZSwgdG9uZSwgc3RhcnRMdmwsIGRpcmVjdGlvbiwgZWxtdCkge1xuICAgICAgY29uc3QgZ2FpbiA9ICgxMDAgLyAodGltZSAvIGZyYW1lUmF0ZSkpICogZGlyZWN0aW9uO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJnYWluOlwiICsgZ2Fpbik7XG4gICAgICBcbiAgICAgIChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgICBsZXQgY29sb3IgPSBgaHNsYSgke3RvbmV9LCAke3N0YXJ0THZsfSUsIDUwJSwgMSlgO1xuXG4gICAgICAgIGlmICggc3RhcnRMdmwgPCAwIHx8IHN0YXJ0THZsID4gMTAwICkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwid2FybmluZzogY29sb3Igc2F0dXJhdGlvbiBsdmwgaXMgb3V0IG9mIHJhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodHlwZW9mIGVsbXQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGVsbXQoY29sb3IpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHdpcmUuYXJyWzNdLnN0eWxlLnN0cm9rZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXBlYXQgd2l0aCBjaGFuZ2VkIHZhbHVlc1xuICAgICAgICBpZiAoIHRpbWUgPiBmcmFtZVJhdGUgLSAwLjAxKSB7XG5cbiAgICAgICAgICB0aW1lID0gdGltZSAtIGZyYW1lUmF0ZTtcbiAgICAgICAgICBzdGFydEx2bCA9IHN0YXJ0THZsICsgZ2FpbjtcblxuICAgICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIGl0ZXIoKTtcbiAgICAgICAgICB9LCBmcmFtZVJhdGUpO1xuICAgICAgICB9XG4gICAgICB9KCkpO1xuICAgIH1cbiAgICBcbiAgICAvKiBcbiAgICAgKiBwb3NpdGlvbiA9IHN0YXJ0aW5nIHBvaW50IGZvciBtb3ZlbWVudCBhbmltYXRpb25cbiAgICAgKiBweFBlckZyYW1lID0gaG93IG1hbnkgcHggdG8gbW92ZSBwZXIgMSBmcmFtZSBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhbmltYXRlUGF0aCh0aW1lLCBwb3NpdGlvbiwgcHhQZXJGcmFtZSwgZGlyZWN0aW9uLCBlbG10KSB7ICAgICBcblxuICAgICAgKGZ1bmN0aW9uIGl0ZXIoKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlbG10ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBlbG10KHBvc2l0aW9uKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdHJpbmcuZ2V0QXR0cmlidXRlKFwiZFwiKSk7ICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlcGVhdCB3aXRoIGNoYW5nZWQgdmFsdWVzXG4gICAgICAgIGlmICggdGltZSA+IGZyYW1lUmF0ZSAtIDAuMDEpIHsgXG4gICAgICAgICAgXG4gICAgICAgICAgdGltZSA9IHRpbWUgLSBmcmFtZVJhdGU7XG4gICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiArIChweFBlckZyYW1lICogZGlyZWN0aW9uKTtcbiAgICAgICAgICBcbiAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBpdGVyKCk7XG4gICAgICAgICAgfSwgZnJhbWVSYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSgpKTtcbiAgICB9XG5cbiAgICBzZXRTdHJpbmdNb3ZlbWVudCgwKTtcblxuICAgIGZ1bmN0aW9uIGNvbG9yaXplV2lyZSgpIHtcbiAgICAgIHNhdHVyYXRpb24oNjAwLCAzNSwgMCwgMSwgc2V0V2lyZUNvbG9yKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgIHNhdHVyYXRpb24oOTAwLCAzNSwgMTAwLCAtMSwgc2V0V2lyZUNvbG9yKTtcbiAgICAgIH0sIDg1MCk7XG4gICAgfSBcbiAgICBcbiAgICBmdW5jdGlvbiBjb2xvcml6ZVdpcmVSZXNldCgpIHtcbiAgICAgIHNldFdpcmVDb2xvcih3aXJlLmNvbG9yKTtcbiAgICB9XG4gICBcblxuICAgIGZ1bmN0aW9uIG1vdmVTdHJpbmcoKSB7XG4gICAgICBhbmltYXRlUGF0aCgzODAsIDAsIDAuNSwgMSwgc2V0U3RyaW5nTW92ZW1lbnQpO1xuICAgICAgXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICBhbmltYXRlUGF0aCg1MDAsIDExLCAwLjUsIC0xLCBzZXRTdHJpbmdNb3ZlbWVudCk7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgIGFuaW1hdGVQYXRoKDE0MCwgLTQsIDAuNSwgMSwgc2V0U3RyaW5nTW92ZW1lbnQpO1xuICAgICAgICB9LCA1MDApO1xuXG4gICAgICB9LCAzODApO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZVN0cmluZ1Jlc2V0KCkge1xuICAgICAgc3RyaW5nLnNldEF0dHJpYnV0ZShcImRcIiwgYG0gMjAwLDYzMiBjIDE2MCwwIDM2MCwwIDUyMCwwYCk7XG4gICAgfVxuXG4gICAgY29sb3JpemVXaXJlUmVzZXQoKTtcbiAgICBtb3ZlU3RyaW5nUmVzZXQoKTtcblxuICAgIHN0cnVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb2xvcml6ZVdpcmUoKTtcbiAgICAgIG1vdmVTdHJpbmcoKTtcbiAgICB9LCBmYWxzZSk7XG5cbiAgfSk7XG59KCkpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
