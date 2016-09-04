!function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){"use strict";e(1),e(2),e(3),e(4),e(5),e(6)},function(t,n){"use strict";!function(){function t(t){t.addEventListener("click",function(n){return t.classList.toggle("is-on")})}var n=document.getElementsByClassName("is-switchable"),e=[].slice.call(n);e.forEach(t)}()},function(t,n){"use strict";!function(){var t=document,n=[].slice.call(t.getElementsByClassName("menu-toggle")),e=[].slice.call(t.getElementsByClassName("btn-prevent"));e[0]&&e.forEach(function(t){t.addEventListener("click",function(t){return!1})}),n.forEach(function(t){var n=t.getElementsByClassName("menu-toggle-btn"),e=t.getElementsByClassName("menu-toggle-content");n[0].addEventListener("click",function(t){n[0].classList.toggle("toggle-is-on"),e[0].classList.toggle("hidden")})})}()},function(t,n){"use strict";!function(){var t=[].slice.call(document.getElementsByClassName("validate"));t[0]&&t.forEach(function(t){t.addEventListener("focusout",function(n){t.validity.patternMismatch?(t.classList.add("input-error"),t.addEventListener("keyup",function(n){t.validity.valid?t.classList.remove("input-error"):t.classList.add("input-error")})):t.validity.valid&&t.classList.contains("input-error")&&t.classList.remove("input-error")})})}()},function(t,n){"use strict";!function(){var t=(document.getElementsByClassName("home"),document.getElementsByClassName("post")),n=document.getElementsByClassName("blog"),e=(document.getElementsByClassName("link-home"),document.getElementsByClassName("link-blog"));window.onload=function(){void 0===t[0]&&void 0===n[0]||e[0].classList.add("link-active")}}()},function(t,n){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};(function(){var t,n,r,i,a,o,s,c,u,l,h,p,f,d,m,v,g,y,C,$,E,k,x,w,T=[].slice,L=[].indexOf||function(t){for(var n=0,e=this.length;n<e;n++)if(n in this&&this[n]===t)return n;return-1};t=window.jQuery||window.Zepto||window.$,t.payment={},t.payment.fn={},t.fn.payment=function(){var n,e;return e=arguments[0],n=2<=arguments.length?T.call(arguments,1):[],t.payment.fn[e].apply(this,n)},a=/(\d{1,4})/g,t.payment.cards=i=[{type:"visaelectron",patterns:[4026,417500,4405,4508,4844,4913,4917],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"maestro",patterns:[5018,502,503,56,58,639,6220,67],format:a,length:[12,13,14,15,16,17,18,19],cvcLength:[3],luhn:!0},{type:"forbrugsforeningen",patterns:[600],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"dankort",patterns:[5019],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"visa",patterns:[4],format:a,length:[13,16],cvcLength:[3],luhn:!0},{type:"mastercard",patterns:[51,52,53,54,55,22,23,24,25,26,27],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"amex",patterns:[34,37],format:/(\d{1,4})(\d{1,6})?(\d{1,5})?/,length:[15],cvcLength:[3,4],luhn:!0},{type:"dinersclub",patterns:[30,36,38,39],format:/(\d{1,4})(\d{1,6})?(\d{1,4})?/,length:[14],cvcLength:[3],luhn:!0},{type:"discover",patterns:[60,64,65,622],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"unionpay",patterns:[62,88],format:a,length:[16,17,18,19],cvcLength:[3],luhn:!1},{type:"jcb",patterns:[35],format:a,length:[16],cvcLength:[3],luhn:!0}],n=function(t){var n,e,r,a,o,s,c,u;for(t=(t+"").replace(/\D/g,""),e=0,a=i.length;e<a;e++)for(n=i[e],u=n.patterns,r=0,o=u.length;r<o;r++)if(c=u[r],s=c+"",t.substr(0,s.length)===s)return n},r=function(t){var n,e,r;for(e=0,r=i.length;e<r;e++)if(n=i[e],n.type===t)return n},f=function(t){var n,e,r,i,a,o;for(a=!0,o=0,e=(t+"").split("").reverse(),r=0,i=e.length;r<i;r++)n=e[r],n=parseInt(n,10),(a=!a)&&(n*=2),n>9&&(n-=9),o+=n;return o%10===0},p=function(t){var n;return null!=t.prop("selectionStart")&&t.prop("selectionStart")!==t.prop("selectionEnd")||!(null==("undefined"!=typeof document&&null!==document&&null!=(n=document.selection)?n.createRange:void 0)||!document.selection.createRange().text)},x=function(t,n){var e,r,i,a;try{e=n.prop("selectionStart")}catch(i){r=i,e=null}if(a=n.val(),n.val(t),null!==e&&n.is(":focus"))return e===a.length&&(e=t.length),n.prop("selectionStart",e),n.prop("selectionEnd",e)},y=function(t){var n,e,r,i,a,o,s,c;for(null==t&&(t=""),r="０１２３４５６７８９",i="0123456789",c="",n=t.split(""),a=0,s=n.length;a<s;a++)e=n[a],o=r.indexOf(e),o>-1&&(e=i[o]),c+=e;return c},g=function(n){return setTimeout(function(){var e,r;return e=t(n.currentTarget),r=e.val(),r=y(r),r=r.replace(/\D/g,""),x(r,e)})},m=function(n){return setTimeout(function(){var e,r;return e=t(n.currentTarget),r=e.val(),r=y(r),r=t.payment.formatCardNumber(r),x(r,e)})},c=function(e){var r,i,a,o,s,c,u;if(a=String.fromCharCode(e.which),/^\d+$/.test(a)&&(r=t(e.currentTarget),u=r.val(),i=n(u+a),o=(u.replace(/\D/g,"")+a).length,c=16,i&&(c=i.length[i.length.length-1]),!(o>=c||null!=r.prop("selectionStart")&&r.prop("selectionStart")!==u.length)))return s=i&&"amex"===i.type?/^(\d{4}|\d{4}\s\d{6})$/:/(?:^|\s)(\d{4})$/,s.test(u)?(e.preventDefault(),setTimeout(function(){return r.val(u+" "+a)})):s.test(u+a)?(e.preventDefault(),setTimeout(function(){return r.val(u+a+" ")})):void 0},o=function(n){var e,r;if(e=t(n.currentTarget),r=e.val(),8===n.which&&(null==e.prop("selectionStart")||e.prop("selectionStart")===r.length))return/\d\s$/.test(r)?(n.preventDefault(),setTimeout(function(){return e.val(r.replace(/\d\s$/,""))})):/\s\d?$/.test(r)?(n.preventDefault(),setTimeout(function(){return e.val(r.replace(/\d$/,""))})):void 0},v=function(n){return setTimeout(function(){var e,r;return e=t(n.currentTarget),r=e.val(),r=y(r),r=t.payment.formatExpiry(r),x(r,e)})},u=function(n){var e,r,i;if(r=String.fromCharCode(n.which),/^\d+$/.test(r))return e=t(n.currentTarget),i=e.val()+r,/^\d$/.test(i)&&"0"!==i&&"1"!==i?(n.preventDefault(),setTimeout(function(){return e.val("0"+i+" / ")})):/^\d\d$/.test(i)?(n.preventDefault(),setTimeout(function(){var t,n;return t=parseInt(i[0],10),n=parseInt(i[1],10),n>2&&0!==t?e.val("0"+t+" / "+n):e.val(i+" / ")})):void 0},l=function(n){var e,r,i;if(r=String.fromCharCode(n.which),/^\d+$/.test(r))return e=t(n.currentTarget),i=e.val(),/^\d\d$/.test(i)?e.val(i+" / "):void 0},h=function(n){var e,r,i;if(i=String.fromCharCode(n.which),"/"===i||" "===i)return e=t(n.currentTarget),r=e.val(),/^\d$/.test(r)&&"0"!==r?e.val("0"+r+" / "):void 0},s=function(n){var e,r;if(e=t(n.currentTarget),r=e.val(),8===n.which&&(null==e.prop("selectionStart")||e.prop("selectionStart")===r.length))return/\d\s\/\s$/.test(r)?(n.preventDefault(),setTimeout(function(){return e.val(r.replace(/\d\s\/\s$/,""))})):void 0},d=function(n){return setTimeout(function(){var e,r;return e=t(n.currentTarget),r=e.val(),r=y(r),r=r.replace(/\D/g,"").slice(0,4),x(r,e)})},k=function(t){var n;return!(!t.metaKey&&!t.ctrlKey)||32!==t.which&&(0===t.which||(t.which<33||(n=String.fromCharCode(t.which),!!/[\d\s]/.test(n))))},$=function(e){var r,i,a,o;if(r=t(e.currentTarget),a=String.fromCharCode(e.which),/^\d+$/.test(a)&&!p(r))return o=(r.val()+a).replace(/\D/g,""),i=n(o),i?o.length<=i.length[i.length.length-1]:o.length<=16},E=function(n){var e,r,i;if(e=t(n.currentTarget),r=String.fromCharCode(n.which),/^\d+$/.test(r)&&!p(e))return i=e.val()+r,i=i.replace(/\D/g,""),!(i.length>6)&&void 0},C=function(n){var e,r,i;if(e=t(n.currentTarget),r=String.fromCharCode(n.which),/^\d+$/.test(r)&&!p(e))return i=e.val()+r,i.length<=4},w=function(n){var e,r,a,o,s;if(e=t(n.currentTarget),s=e.val(),o=t.payment.cardType(s)||"unknown",!e.hasClass(o))return r=function(){var t,n,e;for(e=[],t=0,n=i.length;t<n;t++)a=i[t],e.push(a.type);return e}(),e.removeClass("unknown"),e.removeClass(r.join(" ")),e.addClass(o),e.toggleClass("identified","unknown"!==o),e.trigger("payment.cardType",o)},t.payment.fn.formatCardCVC=function(){return this.on("keypress",k),this.on("keypress",C),this.on("paste",d),this.on("change",d),this.on("input",d),this},t.payment.fn.formatCardExpiry=function(){return this.on("keypress",k),this.on("keypress",E),this.on("keypress",u),this.on("keypress",h),this.on("keypress",l),this.on("keydown",s),this.on("change",v),this.on("input",v),this},t.payment.fn.formatCardNumber=function(){return this.on("keypress",k),this.on("keypress",$),this.on("keypress",c),this.on("keydown",o),this.on("keyup",w),this.on("paste",m),this.on("change",m),this.on("input",m),this.on("input",w),this},t.payment.fn.restrictNumeric=function(){return this.on("keypress",k),this.on("paste",g),this.on("change",g),this.on("input",g),this},t.payment.fn.cardExpiryVal=function(){return t.payment.cardExpiryVal(t(this).val())},t.payment.cardExpiryVal=function(t){var n,e,r,i;return r=t.split(/[\s\/]+/,2),n=r[0],i=r[1],2===(null!=i?i.length:void 0)&&/^\d+$/.test(i)&&(e=(new Date).getFullYear(),e=e.toString().slice(0,2),i=e+i),n=parseInt(n,10),i=parseInt(i,10),{month:n,year:i}},t.payment.validateCardNumber=function(t){var e,r;return t=(t+"").replace(/\s+|-/g,""),!!/^\d+$/.test(t)&&(e=n(t),!!e&&(r=t.length,L.call(e.length,r)>=0&&(e.luhn===!1||f(t))))},t.payment.validateCardExpiry=function(n,r){var i,a,o;return"object"===("undefined"==typeof n?"undefined":e(n))&&"month"in n&&(o=n,n=o.month,r=o.year),!(!n||!r)&&(n=t.trim(n),r=t.trim(r),!!/^\d+$/.test(n)&&(!!/^\d+$/.test(r)&&(1<=n&&n<=12&&(2===r.length&&(r=r<70?"20"+r:"19"+r),4===r.length&&(a=new Date(r,n),i=new Date,a.setMonth(a.getMonth()-1),a.setMonth(a.getMonth()+1,1),a>i)))))},t.payment.validateCardCVC=function(n,e){var i,a;return n=t.trim(n),!!/^\d+$/.test(n)&&(i=r(e),null!=i?(a=n.length,L.call(i.cvcLength,a)>=0):n.length>=3&&n.length<=4)},t.payment.cardType=function(t){var e;return t?(null!=(e=n(t))?e.type:void 0)||null:null},t.payment.formatCardNumber=function(e){var r,i,a,o;return e=e.replace(/\D/g,""),(r=n(e))?(o=r.length[r.length.length-1],e=e.slice(0,o),r.format.global?null!=(a=e.match(r.format))?a.join(" "):void 0:(i=r.format.exec(e),null!=i?(i.shift(),i=t.grep(i,function(t){return t}),i.join(" ")):void 0)):e},t.payment.formatExpiry=function(t){var n,e,r,i;return(e=t.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/))?(n=e[1]||"",r=e[2]||"",i=e[3]||"",i.length>0?r=" / ":" /"===r?(n=n.substring(0,1),r=""):2===n.length||r.length>0?r=" / ":1===n.length&&"0"!==n&&"1"!==n&&(n="0"+n,r=" / "),n+r+i):""}}).call(void 0)},function(t,n){"use strict";!function(){function t(t){$(t).removeClass("input-success"),$(t).addClass("input-error")}function n(t){$(t).removeClass("input-error"),$(t).addClass("input-success")}function e(t,n,e){$(t).hasClass("input-error")&&($(n).addClass("hidden"),$(e).removeClass("hidden"))}function r(t,n,e){$(t).hasClass("input-success")&&($(n).removeClass("hidden"),$(e).addClass("hidden"))}function i(t,n,e){$(t).removeClass("input-error"),$(n).addClass("hidden"),$(e).addClass("hidden"),$(t).removeClass("input-success")}$(".cc-num-input").payment("formatCardNumber"),$(".cc-exp-input").payment("formatCardExpiry"),$(".cc-cvc-input").payment("formatCardCVC");var a={input:".cc-num-input",type:".cc-type",iconOk:".cc-num-icon-success",iconErr:".cc-num-icon-error"};!function(){function o(t){$(a.input).hasClass(t)&&$(a.type+"."+t).addClass("txt-highlight")}function s(){$(a.type).removeClass("txt-highlight")}function c(){var i=$(a.input).val(),o=$.payment.validateCardNumber(i);o===!0&&(n(a.input),r(a.input,a.iconOk,a.iconErr)),o===!1&&(t(a.input),e(a.input,a.iconOk,a.iconErr))}$(a.input).on("input",function(){$(this).val().length>1?(s(),o("visa"),o("mastercard"),o("amex"),o("discover"),$(this).hasClass("amex")&&17===$(this).val().length&&c(),$(this).hasClass("identified")&&19===$(this).val().length&&c(),$(this).hasClass("amex")&&$(this).val().length<17&&i(this,a.iconOk,a.iconErr),$(this).hasClass("amex")===!1&&$(this).val().length<19&&i(this,a.iconOk,a.iconErr),$(this).hasClass("unknown")&&(t(this),e(this,a.iconOk,a.iconErr))):(i(this,a.iconOk,a.iconErr),s())})}(),function(){function a(){var i=$(o.input).payment("cardExpiryVal"),a=$.payment.validateCardExpiry(i.month,i.year);a===!0&&(n(o.input),r(o.input,o.iconOk,o.iconErr)),a===!1&&(t(o.input),e(o.input,o.iconOk,o.iconErr))}var o={input:".cc-exp-input",iconOk:".cc-exp-icon-success",iconErr:".cc-exp-icon-error"};$(o.input).on("input",function(){7===$(this).val().length||9===$(this).val().length?a():i(this,o.iconOk,o.iconErr)})}(),function o(){function o(i){var a=$(s.input).val(),o=$.payment.validateCardCVC(a);o===!0&&(n(s.input),r(s.input,s.iconOk,s.iconErr)),o===!1&&(t(s.input),e(s.input,s.iconOk,s.iconErr))}var s={input:".cc-cvc-input",iconOk:".cc-cvc-icon-success",iconErr:".cc-cvc-icon-error"};$(s.input).on("input",function(){$(a.input).hasClass("amex")?$(s.input).val().length>3?o(this):i(this,s.iconOk,s.iconErr):3===$(this).val().length?o(this):i(this,s.iconOk,s.iconErr)})}()}()}]);