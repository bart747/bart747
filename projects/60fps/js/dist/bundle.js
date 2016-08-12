/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const anim = __webpack_require__(1);
	const graph = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

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



/***/ },
/* 2 */
/***/ function(module, exports) {

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
	    // graph.setWireColor("hsla(200, 50, 50%, 1)");
	    // set frames per second as time period for 1 frame

	    function setStringColor(color) {
	      string.style.stroke = color;
	    }

	    function setStringCurve(position) {
	      string.setAttribute("d",
	        `m 200,632.36223 c 160,${position} 360,${position} 520,0`);
	    }

	    function colorizeWire() {
	      saturation(600, 35, 0, 1, setWireColor);
	      setTimeout( () => {
	        saturation(900, 35, 100, -1, setWireColor);
	      }, 850);
	    } 
	   
	    function moveString() {
	      animatePath(380, 0, 0.5, 1, setStringCurve);
	      
	      setTimeout( () => {
	        animatePath(500, 11, 0.5, -1, setStringCurve);
	        
	        setTimeout( () => {
	          animatePath(140, -4, 0.5, 1, setStringCurve);
	        }, 500);

	      }, 380);

	    }
	      
	   // function colorizeWireReset() {
	   //   setWireColor(wire.color);
	   // }
	  
	    function moveStringReset() {
	     // setStringCurve(0);
	    }

	   // colorizeWireReset();
	  //  moveStringReset();

	    const strumBtn = document.getElementById("strumBtn");

	    strumBtn.addEventListener("click", () => {
	      colorizeWire();
	      moveString();
	    }, false);

	  });
	})();


/***/ }
/******/ ]);