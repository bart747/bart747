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

	
	const graph = __webpack_require__(1);
	const anim = __webpack_require__(2);
	const testHelp = __webpack_require__(3);


/***/ },
/* 1 */
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

	  function setStringColor(color) {
	    string.style.stroke = color;
	  }

	  function setStringCurve(position) {
	    string.setAttribute("d",
	      `m 200,632.36223 c 160,${position} 360,${position} 520,0`);
	  }

	  function colorizeWire() {
	    saturation(600, 35, 0, 2.6, setWireColor);
	    setTimeout( () => {
	      saturation(800, 35, 100, -2, setWireColor);
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

	  const strumBtn = document.getElementById("strumBtn");

	  strumBtn.addEventListener("click", () => {
	    colorizeWire();
	    moveString();
	  }, false);

	  });
	})();


/***/ },
/* 2 */
/***/ function(module, exports) {

	(function() {
	/*
	 *  ----- animations -----
	 */

	const fps60 = 16.66;
	const frameRate = fps60;

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
	      duration = duration - frameRate;
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
	      duration = duration - frameRate;
	      startPosition = startPosition + (pxPerFrame * direction);

	      setTimeout( _ => {
	        iter();
	      }, frameRate);
	    }
	  })();
	};

	})();


/***/ },
/* 3 */
/***/ function(module, exports) {

	(function() {

	dbgIsOn = true;
	this.dbg = (msg1, msg2, msg3) => {
	  if (dbgIsOn === true) {
	    console.log(msg1);
	    msg2 = (typeof msg2 === 'undefined') ? null : console.log(msg2);
	    msg2 = (typeof msg3 === 'undefined') ? null : console.log(msg3);
	  }
	};

	}());


/***/ }
/******/ ]);