(function() {

/*
 *  ----- SVG graph related stuff -----
 */
const svgObj = document.getElementById("svgGuitar");
svgObj.addEventListener('load', function() {

  const svgGuitar = svgObj.contentDocument;
  const string = svgGuitar.getElementById("string1");
  const stringPath = string.getAttribute('d');
  const wire = [].slice
                .call(svgGuitar
                .getElementsByClassName("wire"));

  function setWireColor(color) {
    wire.forEach( el => {
      el.style.stroke = color;
      // console.log(wire[3].style.stroke);
    });
  }

  function setStringColor(color) {
    string.style.stroke = color;
  }

  function setStringCurve(position) {
    string.setAttribute("d",
      `m 200,632.36223 c 160,${position} 360,${position} 520,0`);
  }

  function colorizeWire() {
    saturation(600, 35, 0, 2.5, setWireColor);
    setTimeout( () => {
      saturation(800, 35, 100, -1.8, setWireColor);
    }, 860);
  }

  function moveString() {
    animatePath(380, 0, 0.45, 1, setStringCurve);

    setTimeout( () => {
      animatePath(600, 11, 0.45, -1, setStringCurve);

      setTimeout( () => {
        animatePath(240, -7, 0.45, 1, setStringCurve);
      }, 601);

    }, 381);

  }

  const strumBtn = document.getElementById("strumBtn");

  strumBtn.addEventListener("click", () => {
    colorizeWire();
    moveString();
  }, false);

  });
})();
