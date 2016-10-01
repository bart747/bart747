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

	'use strict';

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	(function () {

	  var switchEls = document.getElementsByClassName('is-switchable');

	  var switchArr = [].slice.call(switchEls);

	  function addListener(el) {
	    el.addEventListener('click', function (event) {
	      return el.classList.toggle('is-on');
	    });
	  }

	  switchArr.forEach(addListener);
	})();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	(function () {
	  var doc = document;

	  var toggleMenu = [].slice.call(doc.getElementsByClassName('menu-toggle'));

	  var btnNonSubmit = [].slice.call(doc.getElementsByClassName('btn-prevent'));

	  if (btnNonSubmit[0]) {
	    btnNonSubmit.forEach(function (el) {
	      el.addEventListener('click', function (_) {
	        return false;
	      });
	    });
	  }

	  toggleMenu.forEach(function (el) {

	    var btn = el.getElementsByClassName('menu-toggle-btn');
	    var content = el.getElementsByClassName('menu-toggle-content');

	    btn[0].addEventListener('click', function (_) {
	      btn[0].classList.toggle('toggle-is-on');
	      content[0].classList.toggle('hidden');
	    });
	  });
	})();

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	(function () {

	  var inputDivs = [].slice.call(document.getElementsByClassName("validate"));

	  function onKeyupValid(container, input) {
	    input.addEventListener('keyup', function (_) {
	      if (input.validity.valid) {
	        container.classList.remove('input-error');
	        container.classList.add('input-success');
	      } else {
	        container.classList.add('input-error');
	        container.classList.remove('input-success');
	      }

	      validReset(container, input);
	    });
	  }

	  function validReset(container, input) {
	    if (input.value.length < 1) {
	      container.classList.remove('input-error');
	      container.classList.remove('input-success');
	    }
	  }

	  if (inputDivs[0]) {

	    inputDivs.forEach(function (el) {
	      var input = el.getElementsByTagName("input")[0];

	      if (input) {

	        input.addEventListener('blur', function (_) {

	          onKeyupValid(el, input);

	          if (input.validity.patternMismatch) {

	            el.classList.add('input-error');
	            el.classList.remove('input-success');
	          }if (input.validity.valid) {
	            el.classList.add('input-success');
	          }if (input.validity.valid && el.classList.contains('input-error')) {
	            el.classList.remove('input-error');
	            el.classList.add('input-success');
	          }

	          validReset(el, input);
	        });

	        if (input.classList.contains("input-password")) {
	          el.addEventListener('keyup', function (_) {
	            if (input.value.length >= 8) {
	              el.classList.add('input-success');
	              el.classList.remove('input-error');
	              onKeyupValid(el, input);
	            }
	          });
	        }
	      }
	    });
	  }
	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	(function () {

	  var doc = document;

	  var formsToggle = [].slice.call(doc.getElementsByClassName('forms-toggle'));

	  formsToggle.forEach(function (el) {

	    var btn = el.getElementsByClassName('form-switch');
	    var formSignIn = el.getElementsByClassName('form-sign-in');
	    var formSignUp = el.getElementsByClassName('form-sign-up');

	    function hideShow() {
	      formSignIn[0].classList.toggle('hidden');
	      formSignUp[0].classList.toggle('hidden');
	    }

	    btn[0].addEventListener('click', function (_) {
	      hideShow();
	    });

	    btn[1].addEventListener('click', function (_) {
	      hideShow();
	    });
	  });
	})();

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	(function () {

	  var homeDiv = document.getElementsByClassName('home');
	  var postDiv = document.getElementsByClassName('post');
	  var blogDiv = document.getElementsByClassName('blog');
	  var homeLink = document.getElementsByClassName('link-home');
	  var blogLink = document.getElementsByClassName('link-blog');

	  window.onload = function () {

	    //if (homeDiv[0] !== undefined) {
	    //  homeLink[0].classList.add("link-active");
	    //}

	    if (postDiv[0] !== undefined || blogDiv[0] !== undefined) {
	      blogLink[0].classList.add('link-active');
	    }
	    // console.log(homeDiv); console.log(homeLink);
	    // console.log(postDiv); console.log(blogLink);
	  };
	})();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	(function () {
	  "use strict";

	  var l = __webpack_require__(12);

	  var doc = document;
	  var editors = doc.getElementsByClassName("editable");
	  console.log(editors[0]);

	  var editorCSS = {
	    window: "editor-window",
	    writer: "editor-writer",
	    reader: "editor-reader"
	  };

	  var btnCSS = {
	    edit: "editor-btn-edit",
	    waiting: "editor-btn-waiting",
	    save: "editor-btn-save",
	    cancel: "editor-btn-cancel"
	  };

	  var CSShidden = "hidden";

	  // states are mutable
	  var writerState = {
	    display: false, // initial
	    content: "*empty note*" };

	  var readerState = {
	    display: true, // initial
	    content: "*empty note*" };

	  var btnState = {
	    save: false };

	  var dateNames = {
	    recent: "just a moment ago",
	    days1: "1 day ago",
	    days2: "2 days ago"
	    // ... 
	  };

	  var note = "Joey seems interested in the Pro plan.\n              He was talking about organizing his team.\n              I'll meet with him tomorrow.";

	  readerState.content = note;
	  writerState.content = note;

	  // creater reader window
	  var readerUi = doc.createElement("div");
	  var newNote = doc.createTextNode(readerState.content);
	  readerUi.classList.add(editorCSS.reader);
	  readerUi.appendChild(newNote);

	  // creater writer window
	  var writerUi = doc.createElement("div");
	  var newNoteCopy = doc.createTextNode(writerState.content);
	  writerUi.classList.add(editorCSS.writer);
	  writerUi.setAttribute("contenteditable", "true");
	  writerUi.appendChild(newNoteCopy);

	  // append reader and writer to editor window
	  var editorWindow = editors[0].getElementsByClassName(editorCSS.window);
	  var editorFragment = document.createDocumentFragment();
	  editorFragment.appendChild(readerUi);
	  editorFragment.appendChild(writerUi);
	  editorWindow[0].appendChild(editorFragment);

	  function showEditorState() {

	    if (readerState.display === true) {
	      writerUi.classList.add(CSShidden);
	      readerUi.classList.remove(CSShidden);
	    } else {
	      writerUi.classList.remove(CSShidden);
	      readerUi.classList.add(CSShidden);
	    }
	  }
	  showEditorState();

	  function editorToggle() {
	    // change states
	    writerState.display = l.toggleBool(writerState.display);
	    readerState.display = l.toggleBool(readerState.display);
	    btnState.save = l.toggleBool(btnState.save);
	    //console.log("writer disp: " + writerState.display);
	    //console.log("reader dips: " + readerState.display);
	    //console.log("button save: " + btnState.save);

	    // show right window
	    showEditorState();

	    // transform buttons (edit/save)
	    if (btnState.save === true) {
	      btn[0].classList.add(btnCSS.save);
	      btnCancel[0].classList.remove(CSShidden);
	    } else {
	      btn[0].classList.remove(btnCSS.save);
	      btnCancel[0].classList.add(CSShidden);
	    }
	  }

	  function editorSave() {
	    if (btnState.save === true) {
	      readerState.content = l.getUpdatedContent(readerState.content, writerUi.textContent);
	      // console.log(readerState.content);
	      readerUi.textContent = readerState.content;
	    }
	  }

	  function editorUpdate() {
	    writerState.content = readerState.content;
	    writerUi.textContent = writerState.content;
	  }

	  var btn = editors[0].getElementsByClassName(btnCSS.edit);
	  var btnCancel = editors[0].getElementsByClassName(btnCSS.cancel);

	  // create edit button functionality
	  btn[0].addEventListener('click', function (_) {
	    editorSave();
	    editorUpdate();
	    editorToggle();
	  });

	  // create cancel btn functionality
	  btnCancel[0].addEventListener('click', function (_) {
	    editorToggle();
	  });
	})();

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	/*jshint browser:true */
	/*!
	* FitVids 1.1
	*
	* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
	* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
	* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
	*
	*/

	;(function ($) {

	  'use strict';

	  $.fn.fitVids = function (options) {
	    var settings = {
	      customSelector: null,
	      ignore: null
	    };

	    if (!document.getElementById('fit-vids-style')) {
	      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
	      var head = document.head || document.getElementsByTagName('head')[0];
	      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
	      var div = document.createElement("div");
	      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
	      head.appendChild(div.childNodes[1]);
	    }

	    if (options) {
	      $.extend(settings, options);
	    }

	    return this.each(function () {
	      var selectors = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', 'object', 'embed'];

	      if (settings.customSelector) {
	        selectors.push(settings.customSelector);
	      }

	      var ignoreList = '.fitvidsignore';

	      if (settings.ignore) {
	        ignoreList = ignoreList + ', ' + settings.ignore;
	      }

	      var $allVideos = $(this).find(selectors.join(','));
	      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
	      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

	      $allVideos.each(function () {
	        var $this = $(this);
	        if ($this.parents(ignoreList).length > 0) {
	          return; // Disable FitVids on this video.
	        }
	        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
	          return;
	        }
	        if (!$this.css('height') && !$this.css('width') && (isNaN($this.attr('height')) || isNaN($this.attr('width')))) {
	          $this.attr('height', 9);
	          $this.attr('width', 16);
	        }
	        var height = this.tagName.toLowerCase() === 'object' || $this.attr('height') && !isNaN(parseInt($this.attr('height'), 10)) ? parseInt($this.attr('height'), 10) : $this.height(),
	            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
	            aspectRatio = height / width;
	        if (!$this.attr('name')) {
	          var videoName = 'fitvid' + $.fn.fitVids._count;
	          $this.attr('name', videoName);
	          $.fn.fitVids._count++;
	        }
	        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', aspectRatio * 100 + '%');
	        $this.removeAttr('height').removeAttr('width');
	      });
	    });
	  };

	  // Internal counter for unique video names.
	  $.fn.fitVids._count = 0;

	  // Works with either jQuery or Zepto
	})(window.jQuery || window.Zepto);

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	(function () {

	  $(".fit-vid").fitVids();
	})();

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	(function () {

	  var vid = document.getElementsByClassName(".video");
	})();

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	// Generated by CoffeeScript 1.10.0
	(function () {
	  var $,
	      cardFromNumber,
	      cardFromType,
	      cards,
	      defaultFormat,
	      formatBackCardNumber,
	      formatBackExpiry,
	      formatCardNumber,
	      formatExpiry,
	      formatForwardExpiry,
	      formatForwardSlashAndSpace,
	      hasTextSelected,
	      luhnCheck,
	      reFormatCVC,
	      reFormatCardNumber,
	      reFormatExpiry,
	      reFormatNumeric,
	      replaceFullWidthChars,
	      restrictCVC,
	      restrictCardNumber,
	      restrictExpiry,
	      restrictNumeric,
	      safeVal,
	      setCardType,
	      slice = [].slice,
	      indexOf = [].indexOf || function (item) {
	    for (var i = 0, l = this.length; i < l; i++) {
	      if (i in this && this[i] === item) return i;
	    }return -1;
	  };

	  $ = window.jQuery || window.Zepto || window.$;

	  $.payment = {};

	  $.payment.fn = {};

	  $.fn.payment = function () {
	    var args, method;
	    method = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    return $.payment.fn[method].apply(this, args);
	  };

	  defaultFormat = /(\d{1,4})/g;

	  $.payment.cards = cards = [{
	    type: 'visaelectron',
	    patterns: [4026, 417500, 4405, 4508, 4844, 4913, 4917],
	    format: defaultFormat,
	    length: [16],
	    cvcLength: [3],
	    luhn: true
	  }, {
	    type: 'maestro',
	    patterns: [5018, 502, 503, 56, 58, 639, 6220, 67],
	    format: defaultFormat,
	    length: [12, 13, 14, 15, 16, 17, 18, 19],
	    cvcLength: [3],
	    luhn: true
	  }, {
	    type: 'forbrugsforeningen',
	    patterns: [600],
	    format: defaultFormat,
	    length: [16],
	    cvcLength: [3],
	    luhn: true
	  }, {
	    type: 'dankort',
	    patterns: [5019],
	    format: defaultFormat,
	    length: [16],
	    cvcLength: [3],
	    luhn: true
	  }, {
	    type: 'visa',
	    patterns: [4],
	    format: defaultFormat,
	    length: [13, 16],
	    cvcLength: [3],
	    luhn: true
	  }, {
	    type: 'mastercard',
	    patterns: [51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27],
	    format: defaultFormat,
	    length: [16],
	    cvcLength: [3],
	    luhn: true
	  }, {
	    type: 'amex',
	    patterns: [34, 37],
	    format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
	    length: [15],
	    cvcLength: [3, 4],
	    luhn: true
	  }, {
	    type: 'dinersclub',
	    patterns: [30, 36, 38, 39],
	    format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
	    length: [14],
	    cvcLength: [3],
	    luhn: true
	  }, {
	    type: 'discover',
	    patterns: [60, 64, 65, 622],
	    format: defaultFormat,
	    length: [16],
	    cvcLength: [3],
	    luhn: true
	  }, {
	    type: 'unionpay',
	    patterns: [62, 88],
	    format: defaultFormat,
	    length: [16, 17, 18, 19],
	    cvcLength: [3],
	    luhn: false
	  }, {
	    type: 'jcb',
	    patterns: [35],
	    format: defaultFormat,
	    length: [16],
	    cvcLength: [3],
	    luhn: true
	  }];

	  cardFromNumber = function cardFromNumber(num) {
	    var card, i, j, len, len1, p, pattern, ref;
	    num = (num + '').replace(/\D/g, '');
	    for (i = 0, len = cards.length; i < len; i++) {
	      card = cards[i];
	      ref = card.patterns;
	      for (j = 0, len1 = ref.length; j < len1; j++) {
	        pattern = ref[j];
	        p = pattern + '';
	        if (num.substr(0, p.length) === p) {
	          return card;
	        }
	      }
	    }
	  };

	  cardFromType = function cardFromType(type) {
	    var card, i, len;
	    for (i = 0, len = cards.length; i < len; i++) {
	      card = cards[i];
	      if (card.type === type) {
	        return card;
	      }
	    }
	  };

	  luhnCheck = function luhnCheck(num) {
	    var digit, digits, i, len, odd, sum;
	    odd = true;
	    sum = 0;
	    digits = (num + '').split('').reverse();
	    for (i = 0, len = digits.length; i < len; i++) {
	      digit = digits[i];
	      digit = parseInt(digit, 10);
	      if (odd = !odd) {
	        digit *= 2;
	      }
	      if (digit > 9) {
	        digit -= 9;
	      }
	      sum += digit;
	    }
	    return sum % 10 === 0;
	  };

	  hasTextSelected = function hasTextSelected($target) {
	    var ref;
	    if ($target.prop('selectionStart') != null && $target.prop('selectionStart') !== $target.prop('selectionEnd')) {
	      return true;
	    }
	    if ((typeof document !== "undefined" && document !== null ? (ref = document.selection) != null ? ref.createRange : void 0 : void 0) != null) {
	      if (document.selection.createRange().text) {
	        return true;
	      }
	    }
	    return false;
	  };

	  safeVal = function safeVal(value, $target) {
	    var cursor, error, error1, last;
	    try {
	      cursor = $target.prop('selectionStart');
	    } catch (error1) {
	      error = error1;
	      cursor = null;
	    }
	    last = $target.val();
	    $target.val(value);
	    if (cursor !== null && $target.is(":focus")) {
	      if (cursor === last.length) {
	        cursor = value.length;
	      }
	      $target.prop('selectionStart', cursor);
	      return $target.prop('selectionEnd', cursor);
	    }
	  };

	  replaceFullWidthChars = function replaceFullWidthChars(str) {
	    var chars, chr, fullWidth, halfWidth, i, idx, len, value;
	    if (str == null) {
	      str = '';
	    }
	    fullWidth = '０１２３４５６７８９';
	    halfWidth = '0123456789';
	    value = '';
	    chars = str.split('');
	    for (i = 0, len = chars.length; i < len; i++) {
	      chr = chars[i];
	      idx = fullWidth.indexOf(chr);
	      if (idx > -1) {
	        chr = halfWidth[idx];
	      }
	      value += chr;
	    }
	    return value;
	  };

	  reFormatNumeric = function reFormatNumeric(e) {
	    return setTimeout(function () {
	      var $target, value;
	      $target = $(e.currentTarget);
	      value = $target.val();
	      value = replaceFullWidthChars(value);
	      value = value.replace(/\D/g, '');
	      return safeVal(value, $target);
	    });
	  };

	  reFormatCardNumber = function reFormatCardNumber(e) {
	    return setTimeout(function () {
	      var $target, value;
	      $target = $(e.currentTarget);
	      value = $target.val();
	      value = replaceFullWidthChars(value);
	      value = $.payment.formatCardNumber(value);
	      return safeVal(value, $target);
	    });
	  };

	  formatCardNumber = function formatCardNumber(e) {
	    var $target, card, digit, length, re, upperLength, value;
	    digit = String.fromCharCode(e.which);
	    if (!/^\d+$/.test(digit)) {
	      return;
	    }
	    $target = $(e.currentTarget);
	    value = $target.val();
	    card = cardFromNumber(value + digit);
	    length = (value.replace(/\D/g, '') + digit).length;
	    upperLength = 16;
	    if (card) {
	      upperLength = card.length[card.length.length - 1];
	    }
	    if (length >= upperLength) {
	      return;
	    }
	    if ($target.prop('selectionStart') != null && $target.prop('selectionStart') !== value.length) {
	      return;
	    }
	    if (card && card.type === 'amex') {
	      re = /^(\d{4}|\d{4}\s\d{6})$/;
	    } else {
	      re = /(?:^|\s)(\d{4})$/;
	    }
	    if (re.test(value)) {
	      e.preventDefault();
	      return setTimeout(function () {
	        return $target.val(value + ' ' + digit);
	      });
	    } else if (re.test(value + digit)) {
	      e.preventDefault();
	      return setTimeout(function () {
	        return $target.val(value + digit + ' ');
	      });
	    }
	  };

	  formatBackCardNumber = function formatBackCardNumber(e) {
	    var $target, value;
	    $target = $(e.currentTarget);
	    value = $target.val();
	    if (e.which !== 8) {
	      return;
	    }
	    if ($target.prop('selectionStart') != null && $target.prop('selectionStart') !== value.length) {
	      return;
	    }
	    if (/\d\s$/.test(value)) {
	      e.preventDefault();
	      return setTimeout(function () {
	        return $target.val(value.replace(/\d\s$/, ''));
	      });
	    } else if (/\s\d?$/.test(value)) {
	      e.preventDefault();
	      return setTimeout(function () {
	        return $target.val(value.replace(/\d$/, ''));
	      });
	    }
	  };

	  reFormatExpiry = function reFormatExpiry(e) {
	    return setTimeout(function () {
	      var $target, value;
	      $target = $(e.currentTarget);
	      value = $target.val();
	      value = replaceFullWidthChars(value);
	      value = $.payment.formatExpiry(value);
	      return safeVal(value, $target);
	    });
	  };

	  formatExpiry = function formatExpiry(e) {
	    var $target, digit, val;
	    digit = String.fromCharCode(e.which);
	    if (!/^\d+$/.test(digit)) {
	      return;
	    }
	    $target = $(e.currentTarget);
	    val = $target.val() + digit;
	    if (/^\d$/.test(val) && val !== '0' && val !== '1') {
	      e.preventDefault();
	      return setTimeout(function () {
	        return $target.val("0" + val + " / ");
	      });
	    } else if (/^\d\d$/.test(val)) {
	      e.preventDefault();
	      return setTimeout(function () {
	        var m1, m2;
	        m1 = parseInt(val[0], 10);
	        m2 = parseInt(val[1], 10);
	        if (m2 > 2 && m1 !== 0) {
	          return $target.val("0" + m1 + " / " + m2);
	        } else {
	          return $target.val(val + " / ");
	        }
	      });
	    }
	  };

	  formatForwardExpiry = function formatForwardExpiry(e) {
	    var $target, digit, val;
	    digit = String.fromCharCode(e.which);
	    if (!/^\d+$/.test(digit)) {
	      return;
	    }
	    $target = $(e.currentTarget);
	    val = $target.val();
	    if (/^\d\d$/.test(val)) {
	      return $target.val(val + " / ");
	    }
	  };

	  formatForwardSlashAndSpace = function formatForwardSlashAndSpace(e) {
	    var $target, val, which;
	    which = String.fromCharCode(e.which);
	    if (!(which === '/' || which === ' ')) {
	      return;
	    }
	    $target = $(e.currentTarget);
	    val = $target.val();
	    if (/^\d$/.test(val) && val !== '0') {
	      return $target.val("0" + val + " / ");
	    }
	  };

	  formatBackExpiry = function formatBackExpiry(e) {
	    var $target, value;
	    $target = $(e.currentTarget);
	    value = $target.val();
	    if (e.which !== 8) {
	      return;
	    }
	    if ($target.prop('selectionStart') != null && $target.prop('selectionStart') !== value.length) {
	      return;
	    }
	    if (/\d\s\/\s$/.test(value)) {
	      e.preventDefault();
	      return setTimeout(function () {
	        return $target.val(value.replace(/\d\s\/\s$/, ''));
	      });
	    }
	  };

	  reFormatCVC = function reFormatCVC(e) {
	    return setTimeout(function () {
	      var $target, value;
	      $target = $(e.currentTarget);
	      value = $target.val();
	      value = replaceFullWidthChars(value);
	      value = value.replace(/\D/g, '').slice(0, 4);
	      return safeVal(value, $target);
	    });
	  };

	  restrictNumeric = function restrictNumeric(e) {
	    var input;
	    if (e.metaKey || e.ctrlKey) {
	      return true;
	    }
	    if (e.which === 32) {
	      return false;
	    }
	    if (e.which === 0) {
	      return true;
	    }
	    if (e.which < 33) {
	      return true;
	    }
	    input = String.fromCharCode(e.which);
	    return !!/[\d\s]/.test(input);
	  };

	  restrictCardNumber = function restrictCardNumber(e) {
	    var $target, card, digit, value;
	    $target = $(e.currentTarget);
	    digit = String.fromCharCode(e.which);
	    if (!/^\d+$/.test(digit)) {
	      return;
	    }
	    if (hasTextSelected($target)) {
	      return;
	    }
	    value = ($target.val() + digit).replace(/\D/g, '');
	    card = cardFromNumber(value);
	    if (card) {
	      return value.length <= card.length[card.length.length - 1];
	    } else {
	      return value.length <= 16;
	    }
	  };

	  restrictExpiry = function restrictExpiry(e) {
	    var $target, digit, value;
	    $target = $(e.currentTarget);
	    digit = String.fromCharCode(e.which);
	    if (!/^\d+$/.test(digit)) {
	      return;
	    }
	    if (hasTextSelected($target)) {
	      return;
	    }
	    value = $target.val() + digit;
	    value = value.replace(/\D/g, '');
	    if (value.length > 6) {
	      return false;
	    }
	  };

	  restrictCVC = function restrictCVC(e) {
	    var $target, digit, val;
	    $target = $(e.currentTarget);
	    digit = String.fromCharCode(e.which);
	    if (!/^\d+$/.test(digit)) {
	      return;
	    }
	    if (hasTextSelected($target)) {
	      return;
	    }
	    val = $target.val() + digit;
	    return val.length <= 4;
	  };

	  setCardType = function setCardType(e) {
	    var $target, allTypes, card, cardType, val;
	    $target = $(e.currentTarget);
	    val = $target.val();
	    cardType = $.payment.cardType(val) || 'unknown';
	    if (!$target.hasClass(cardType)) {
	      allTypes = function () {
	        var i, len, results;
	        results = [];
	        for (i = 0, len = cards.length; i < len; i++) {
	          card = cards[i];
	          results.push(card.type);
	        }
	        return results;
	      }();
	      $target.removeClass('unknown');
	      $target.removeClass(allTypes.join(' '));
	      $target.addClass(cardType);
	      $target.toggleClass('identified', cardType !== 'unknown');
	      return $target.trigger('payment.cardType', cardType);
	    }
	  };

	  $.payment.fn.formatCardCVC = function () {
	    this.on('keypress', restrictNumeric);
	    this.on('keypress', restrictCVC);
	    this.on('paste', reFormatCVC);
	    this.on('change', reFormatCVC);
	    this.on('input', reFormatCVC);
	    return this;
	  };

	  $.payment.fn.formatCardExpiry = function () {
	    this.on('keypress', restrictNumeric);
	    this.on('keypress', restrictExpiry);
	    this.on('keypress', formatExpiry);
	    this.on('keypress', formatForwardSlashAndSpace);
	    this.on('keypress', formatForwardExpiry);
	    this.on('keydown', formatBackExpiry);
	    this.on('change', reFormatExpiry);
	    this.on('input', reFormatExpiry);
	    return this;
	  };

	  $.payment.fn.formatCardNumber = function () {
	    this.on('keypress', restrictNumeric);
	    this.on('keypress', restrictCardNumber);
	    this.on('keypress', formatCardNumber);
	    this.on('keydown', formatBackCardNumber);
	    this.on('keyup', setCardType);
	    this.on('paste', reFormatCardNumber);
	    this.on('change', reFormatCardNumber);
	    this.on('input', reFormatCardNumber);
	    this.on('input', setCardType);
	    return this;
	  };

	  $.payment.fn.restrictNumeric = function () {
	    this.on('keypress', restrictNumeric);
	    this.on('paste', reFormatNumeric);
	    this.on('change', reFormatNumeric);
	    this.on('input', reFormatNumeric);
	    return this;
	  };

	  $.payment.fn.cardExpiryVal = function () {
	    return $.payment.cardExpiryVal($(this).val());
	  };

	  $.payment.cardExpiryVal = function (value) {
	    var month, prefix, ref, year;
	    ref = value.split(/[\s\/]+/, 2), month = ref[0], year = ref[1];
	    if ((year != null ? year.length : void 0) === 2 && /^\d+$/.test(year)) {
	      prefix = new Date().getFullYear();
	      prefix = prefix.toString().slice(0, 2);
	      year = prefix + year;
	    }
	    month = parseInt(month, 10);
	    year = parseInt(year, 10);
	    return {
	      month: month,
	      year: year
	    };
	  };

	  $.payment.validateCardNumber = function (num) {
	    var card, ref;
	    num = (num + '').replace(/\s+|-/g, '');
	    if (!/^\d+$/.test(num)) {
	      return false;
	    }
	    card = cardFromNumber(num);
	    if (!card) {
	      return false;
	    }
	    return (ref = num.length, indexOf.call(card.length, ref) >= 0) && (card.luhn === false || luhnCheck(num));
	  };

	  $.payment.validateCardExpiry = function (month, year) {
	    var currentTime, expiry, ref;
	    if ((typeof month === 'undefined' ? 'undefined' : _typeof(month)) === 'object' && 'month' in month) {
	      ref = month, month = ref.month, year = ref.year;
	    }
	    if (!(month && year)) {
	      return false;
	    }
	    month = $.trim(month);
	    year = $.trim(year);
	    if (!/^\d+$/.test(month)) {
	      return false;
	    }
	    if (!/^\d+$/.test(year)) {
	      return false;
	    }
	    if (!(1 <= month && month <= 12)) {
	      return false;
	    }
	    if (year.length === 2) {
	      if (year < 70) {
	        year = "20" + year;
	      } else {
	        year = "19" + year;
	      }
	    }
	    if (year.length !== 4) {
	      return false;
	    }
	    expiry = new Date(year, month);
	    currentTime = new Date();
	    expiry.setMonth(expiry.getMonth() - 1);
	    expiry.setMonth(expiry.getMonth() + 1, 1);
	    return expiry > currentTime;
	  };

	  $.payment.validateCardCVC = function (cvc, type) {
	    var card, ref;
	    cvc = $.trim(cvc);
	    if (!/^\d+$/.test(cvc)) {
	      return false;
	    }
	    card = cardFromType(type);
	    if (card != null) {
	      return ref = cvc.length, indexOf.call(card.cvcLength, ref) >= 0;
	    } else {
	      return cvc.length >= 3 && cvc.length <= 4;
	    }
	  };

	  $.payment.cardType = function (num) {
	    var ref;
	    if (!num) {
	      return null;
	    }
	    return ((ref = cardFromNumber(num)) != null ? ref.type : void 0) || null;
	  };

	  $.payment.formatCardNumber = function (num) {
	    var card, groups, ref, upperLength;
	    num = num.replace(/\D/g, '');
	    card = cardFromNumber(num);
	    if (!card) {
	      return num;
	    }
	    upperLength = card.length[card.length.length - 1];
	    num = num.slice(0, upperLength);
	    if (card.format.global) {
	      return (ref = num.match(card.format)) != null ? ref.join(' ') : void 0;
	    } else {
	      groups = card.format.exec(num);
	      if (groups == null) {
	        return;
	      }
	      groups.shift();
	      groups = $.grep(groups, function (n) {
	        return n;
	      });
	      return groups.join(' ');
	    }
	  };

	  $.payment.formatExpiry = function (expiry) {
	    var mon, parts, sep, year;
	    parts = expiry.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/);
	    if (!parts) {
	      return '';
	    }
	    mon = parts[1] || '';
	    sep = parts[2] || '';
	    year = parts[3] || '';
	    if (year.length > 0) {
	      sep = ' / ';
	    } else if (sep === ' /') {
	      mon = mon.substring(0, 1);
	      sep = '';
	    } else if (mon.length === 2 || sep.length > 0) {
	      sep = ' / ';
	    } else if (mon.length === 1 && mon !== '0' && mon !== '1') {
	      mon = "0" + mon;
	      sep = ' / ';
	    }
	    return mon + sep + year;
	  };
	}).call(undefined);

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	(function () {

	  // format card form inputs
	  $('.cc-num-input').payment('formatCardNumber');
	  $('.cc-exp-input').payment('formatCardExpiry');
	  $('.cc-cvc-input').payment('formatCardCVC');

	  //
	  // general helpers:
	  //

	  // add error css class 
	  function addErr(input) {
	    $(input).removeClass('input-success');
	    $(input).addClass('input-error');
	  }

	  // add success css class
	  function addOk(input) {
	    $(input).removeClass('input-error');
	    $(input).addClass('input-success');
	  }

	  // show input error icon
	  function showInputErrIcon(input, iconSuc, iconErr) {
	    if ($(input).hasClass('input-error')) {
	      $(iconSuc).addClass('hidden');
	      $(iconErr).removeClass('hidden');
	    }
	  }

	  // show input success icon
	  function showInputOkIcon(input, iconSuc, iconErr) {
	    if ($(input).hasClass('input-success')) {
	      $(iconSuc).removeClass('hidden');
	      $(iconErr).addClass('hidden');
	    }
	  }

	  // reset input icons
	  function resetInput(input, iconSuc, iconErr) {
	    $(input).removeClass('input-error');
	    $(iconSuc).addClass('hidden');
	    $(iconErr).addClass('hidden');
	    $(input).removeClass('input-success');
	  }

	  // card number css classes setting
	  var cardNum = {
	    input: '.cc-num-input',
	    type: '.cc-type',
	    iconOk: '.cc-num-icon-success',
	    iconErr: '.cc-num-icon-error'
	  };
	  //
	  // check stuff
	  //

	  // check CARD NUMBER 
	  (function checkCardNum() {

	    // highlight selected card type (brand)
	    function markCardType(name) {
	      if ($(cardNum.input).hasClass(name)) {
	        $(cardNum.type + '.' + name).addClass('txt-highlight');
	      }
	    }

	    // reset card type highlight
	    function resetCardType() {
	      $(cardNum.type).removeClass('txt-highlight');
	    }

	    // validate card number input
	    function validCardNum() {

	      // get card number
	      var cardValue = $(cardNum.input).val();

	      // validate card number
	      var cardValid = $.payment.validateCardNumber(cardValue);

	      // add proper indicators to valid/invalid number
	      if (cardValid === true) {
	        addOk(cardNum.input);
	        showInputOkIcon(cardNum.input, cardNum.iconOk, cardNum.iconErr);
	      }
	      if (cardValid === false) {
	        addErr(cardNum.input);
	        showInputErrIcon(cardNum.input, cardNum.iconOk, cardNum.iconErr);
	      }
	      // console.log(cardValid);
	    }

	    // listen to card number input
	    $(cardNum.input).on('input', function () {

	      // when input is long enough...
	      if ($(this).val().length > 1) {

	        // highlight proper card type name
	        resetCardType();
	        markCardType('visa');
	        markCardType('mastercard');
	        markCardType('amex');
	        markCardType('discover');

	        // validate number according to statements
	        if ($(this).hasClass('amex') && $(this).val().length === 17) {
	          validCardNum();
	          // console.log($(this).val().length);
	        }

	        if ($(this).hasClass('identified') && $(this).val().length === 19) {
	          validCardNum();
	          // console.log($(this).val().length);
	        }

	        // reset input indicators according to statements
	        if ($(this).hasClass('amex') && $(this).val().length < 17) {
	          resetInput(this, cardNum.iconOk, cardNum.iconErr);
	          // console.log($(this).val().length);
	        }

	        if ($(this).hasClass('amex') === false && $(this).val().length < 19) {
	          resetInput(this, cardNum.iconOk, cardNum.iconErr);
	          // console.log($(this).val().length);
	        }

	        // show error if unknown
	        if ($(this).hasClass('unknown')) {
	          addErr(this);
	          showInputErrIcon(this, cardNum.iconOk, cardNum.iconErr);
	        }
	      } else {
	        resetInput(this, cardNum.iconOk, cardNum.iconErr);
	        resetCardType();
	      }
	    });
	  })();

	  (function checkExpDate() {

	    // card expiry number css classes setting
	    var cardExp = {
	      input: '.cc-exp-input',
	      iconOk: '.cc-exp-icon-success',
	      iconErr: '.cc-exp-icon-error'
	    };

	    // validate number
	    function validExp() {

	      var expDate = $(cardExp.input).payment('cardExpiryVal');
	      var expValid = $.payment.validateCardExpiry(expDate.month, expDate.year);

	      // add proper indicators to valid/invalid number
	      if (expValid === true) {
	        addOk(cardExp.input);
	        showInputOkIcon(cardExp.input, cardExp.iconOk, cardExp.iconErr);
	      }

	      if (expValid === false) {
	        addErr(cardExp.input);
	        showInputErrIcon(cardExp.input, cardExp.iconOk, cardExp.iconErr);
	      }
	      // console.log(expValid);
	    }

	    // listen to input
	    $(cardExp.input).on('input', function () {

	      // validate number when it's long enough
	      if ($(this).val().length === 7 || $(this).val().length === 9) {
	        validExp();
	      }

	      // otherwise, reset indicators
	      else {
	          resetInput(this, cardExp.iconOk, cardExp.iconErr);
	        }
	    });
	  })();

	  (function cvcCheck() {

	    var cardCVC = {
	      input: '.cc-cvc-input',
	      iconOk: '.cc-cvc-icon-success',
	      iconErr: '.cc-cvc-icon-error'
	    };

	    // validate number
	    function cvcCheck(input) {
	      var cvcNum = $(cardCVC.input).val();
	      var cvcValid = $.payment.validateCardCVC(cvcNum);

	      // add proper indicators to valid/invalid number

	      if (cvcValid === true) {
	        addOk(cardCVC.input);
	        showInputOkIcon(cardCVC.input, cardCVC.iconOk, cardCVC.iconErr);
	      }
	      if (cvcValid === false) {
	        addErr(cardCVC.input);
	        showInputErrIcon(cardCVC.input, cardCVC.iconOk, cardCVC.iconErr);
	      }
	      // console.log(cvcValid);
	    }

	    // listen to input
	    $(cardCVC.input).on('input', function () {

	      // validate number when it's long enough
	      if ($(cardNum.input).hasClass('amex')) {
	        if ($(cardCVC.input).val().length > 3) {
	          cvcCheck(this);
	        } else {
	          resetInput(this, cardCVC.iconOk, cardCVC.iconErr);
	        }
	      } else if ($(this).val().length === 3) {
	        cvcCheck(this);
	      }

	      // otherwise, reset indicators
	      else {
	          resetInput(this, cardCVC.iconOk, cardCVC.iconErr);
	        }
	    });
	  })();
	})();

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	var _exports = module.exports = {};

	function testFn(a, b) {
	  x = a + b;
	  return x;
	}

	function toggleBool(el) {
	  if (el === false) {
	    el = !false;
	  } else {
	    el = !true;
	  }
	  return el;
	}

	function getUpdatedContent(sourceOld, sourceNew) {
	  if (sourceOld != sourceNew) {
	    return sourceNew;
	  } else {
	    return sourceOld;
	  }
	}

	_exports.testFn = testFn;
	_exports.toggleBool = toggleBool;
	_exports.getUpdatedContent = getUpdatedContent;

/***/ }
/******/ ]);