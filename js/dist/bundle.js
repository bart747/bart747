!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";n(1),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(14),n(15),n(16),n(17)},function(t,e){},,,,function(t,e){"use strict";!function(){function t(t){t.addEventListener("click",function(e){return t.classList.toggle("is-on")})}var e=document.getElementsByClassName("is-switchable"),n=[].slice.call(e);n.forEach(t)}()},function(t,e){"use strict";!function(){var t=document,e=[].slice.call(t.getElementsByClassName("menu-toggle")),n=[].slice.call(t.getElementsByClassName("btn-prevent"));n[0]&&n.forEach(function(t){t.addEventListener("click",function(t){return!1})}),e.forEach(function(t){var e=t.getElementsByClassName("menu-toggle-btn"),n=t.getElementsByClassName("menu-toggle-content");e[0].addEventListener("click",function(t){e[0].classList.toggle("toggle-is-on"),n[0].classList.toggle("menu-toggle-hide"),n[0].classList.toggle("menu-toggle-show")})})}()},function(t,e){"use strict";!function(){function t(t){t.classList.add("input-error"),t.classList.remove("input-success")}function e(t){t.classList.remove("input-error"),t.classList.add("input-success")}function n(n,i){i.validity.valid?e(n):t(n),i.validity.valid&&n.classList.contains("input-error")&&e(n)}function i(t){t.classList.remove("input-error"),t.classList.remove("input-success")}var r=[].slice.call(document.getElementsByClassName("validate"));r[0]&&r.forEach(function(t){var r=t.getElementsByTagName("input")[0];r&&(r.addEventListener("blur",function(e){n(t,r),r.classList.contains("input-email")&&r.addEventListener("keyup",function(e){n(t,r),r.value.length<1&&i(t)})}),r.classList.contains("input-password")&&t.addEventListener("keyup",function(n){r.value.length>=8?e(t):i(t)}))})}()},function(t,e){"use strict";!function(){var t=document,e=[].slice.call(t.getElementsByClassName("forms-toggle"));e[0]&&e.forEach(function(t){function e(){i[0]&&r[0]&&(i[0].classList.toggle("hidden"),r[0].classList.toggle("hidden")),a[0]&&a[0].classList.toggle("rotate")}var n=t.getElementsByClassName("form-switch"),i=t.getElementsByClassName("form-sign-in"),r=t.getElementsByClassName("form-sign-up"),a=t.getElementsByClassName("flipper");n[0].addEventListener("click",function(t){t.preventDefault(),e()}),n[1].addEventListener("click",function(t){t.preventDefault(),e()})})}()},function(t,e){"use strict";!function(){var t=document,e=(t.getElementsByTagName("header")[0],t.getElementsByClassName("post")[0]),n=t.getElementsByClassName("blog")[0],i=t.getElementsByClassName("link-blog")[0],r=t.getElementsByClassName("contact-link")[0],a=t.getElementsByClassName("contact-link-box")[0],s=t.getElementsByClassName("contact-link-open")[0],o=t.getElementsByClassName("contact-link-close")[0];window.onload=function(){void 0===e&&void 0===n||i.classList.add("link-active")},void 0!==r&&(s.addEventListener("click",function(t){t.preventDefault(),a.classList.toggle("hidden"),s.classList.toggle("orange")}),o.addEventListener("click",function(t){a.classList.add("hidden"),s.classList.remove("orange")}))}()},function(t,e){"use strict";!function(){function t(){window.scrollY>45&&window.scrollY<500&&e.classList.add("header-scroll"),window.scrollY<45&&e.classList.remove("header-scroll")}var e=document.getElementsByTagName("header")[0];window.addEventListener("scroll",t)}()},function(t,e){"use strict";!function(){function t(){function t(e){e>0?setTimeout(function(n){r.complete?i.forEach(function(t){t.src=t.getAttribute("data-imgload")}):t(e-1)},200):i.forEach(function(t){t.src=t.getAttribute("data-imgload")})}var e=document,n=[].slice.call(e.getElementsByClassName("imgload-top")),i=[].slice.call(e.getElementsByClassName("imgload-bottom")),r=void 0;n[0]&&(r=n[n.length-1],r.src=r.getAttribute("data-imgload")),i[0]&&t(10)}t()}()},function(t,e,n){"use strict";!function(){function t(t,e){function i(){m.display===!0?(E.classList.add(p),w.classList.remove(p)):(E.classList.remove(p),w.classList.add(p))}function r(){g.save===!0?(k[0].classList.add(h.save),b[0].classList.remove(p)):(k[0].classList.remove(h.save),b[0].classList.add(p))}function a(){f.display=l.toggleBool(f.display),m.display=l.toggleBool(m.display),g.save=l.toggleBool(g.save)}function s(){g.save===!0&&(f.content=l.getUpdatedContent(f.content,E.innerHTML))}function o(){console.log("content is saved properly (not really, it's just a demo)")}function c(){f.content!==m.content?(m.content=f.content,E.innerHTML=f.content,w.innerHTML=m.content,o(),C.field[0].textContent="created: "+C.created+N+" edited: "+y.recent,C.field[0].classList.add("highlight-anim"),setTimeout(function(t){C.field[0].classList.remove("highlight-anim")},1200)):E.innerHTML=f.content}var l=n(13),u=document,d={window:"editor-window",writer:"editor-writer",reader:"editor-reader"},h={edit:"editor-btn-edit",save:"editor-btn-save",cancel:"editor-btn-cancel"},p="hidden",f={display:!1,content:"*empty note*"},m={display:!0,content:"*empty note*"},g={save:!1},v="editor-date",y={recent:"just a moment ago",days1:"1 day ago",days2:"2 days ago"},C={field:t.getElementsByClassName(v),created:y.days1};m.content=e,f.content=e,C.field[0].textContent="created: "+C.created;var w=u.createElement("div");w.innerHTML=m.content,w.classList.add(d.reader);var E=u.createElement("div");E.innerHTML=f.content,E.classList.add(d.writer),E.setAttribute("contenteditable","true");var L=t.getElementsByClassName(d.window),$=document.createDocumentFragment();$.appendChild(w),$.appendChild(E),L[0].appendChild($);var k=t.getElementsByClassName(h.edit),b=t.getElementsByClassName(h.cancel);i();var N=String.fromCharCode(8195);k[0].addEventListener("click",function(t){s(),c(),a(),i(),r()}),b[0].addEventListener("click",function(t){a(),i(),r()})}if(document.getElementsByClassName("editable")[0]){var e="<p>Joey seems interested in the Pro plan.\n              He was talking about organizing his team.\n              I'll meet with him tomorrow.</p>",i=document.getElementsByClassName("editable");t(i[0],e)}}()},function(t,e){"use strict";function n(t,e){var n=t+e;return n}function i(t){return t=t===!1}function r(t,e){return t!=e?e:t}var a=t.exports={};a.testFn=n,a.toggleBool=i,a.getUpdatedContent=r},function(t,e){"use strict";!function(t){t.fn.fitVids=function(e){var n={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var i=document.head||document.getElementsByTagName("head")[0],r=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",a=document.createElement("div");a.innerHTML='<p>x</p><style id="fit-vids-style">'+r+"</style>",i.appendChild(a.childNodes[1])}return e&&t.extend(n,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];n.customSelector&&e.push(n.customSelector);var i=".fitvidsignore";n.ignore&&(i=i+", "+n.ignore);var r=t(this).find(e.join(","));r=r.not("object object"),r=r.not(i),r.each(function(){var e=t(this);if(!(e.parents(i).length>0||"embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){e.css("height")||e.css("width")||!isNaN(e.attr("height"))&&!isNaN(e.attr("width"))||(e.attr("height",9),e.attr("width",16));var n="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),r=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),a=n/r;if(!e.attr("name")){var s="fitvid"+t.fn.fitVids._count;e.attr("name",s),t.fn.fitVids._count++}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*a+"%"),e.removeAttr("height").removeAttr("width")}})})},t.fn.fitVids._count=0}(window.jQuery||window.Zepto)},function(t,e){"use strict";!function(){$(".fit-vid").fitVids()}()},function(t,e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};(function(){var t,e,i,r,a,s,o,c,l,u,d,h,p,f,m,g,v,y,C,w,E,L,$,k,b=[].slice,N=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};t=window.jQuery||window.Zepto||window.$,t.payment={},t.payment.fn={},t.fn.payment=function(){var e,n;return n=arguments[0],e=2<=arguments.length?b.call(arguments,1):[],t.payment.fn[n].apply(this,e)},a=/(\d{1,4})/g,t.payment.cards=r=[{type:"visaelectron",patterns:[4026,417500,4405,4508,4844,4913,4917],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"maestro",patterns:[5018,502,503,56,58,639,6220,67],format:a,length:[12,13,14,15,16,17,18,19],cvcLength:[3],luhn:!0},{type:"forbrugsforeningen",patterns:[600],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"dankort",patterns:[5019],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"visa",patterns:[4],format:a,length:[13,16],cvcLength:[3],luhn:!0},{type:"mastercard",patterns:[51,52,53,54,55,22,23,24,25,26,27],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"amex",patterns:[34,37],format:/(\d{1,4})(\d{1,6})?(\d{1,5})?/,length:[15],cvcLength:[3,4],luhn:!0},{type:"dinersclub",patterns:[30,36,38,39],format:/(\d{1,4})(\d{1,6})?(\d{1,4})?/,length:[14],cvcLength:[3],luhn:!0},{type:"discover",patterns:[60,64,65,622],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"unionpay",patterns:[62,88],format:a,length:[16,17,18,19],cvcLength:[3],luhn:!1},{type:"jcb",patterns:[35],format:a,length:[16],cvcLength:[3],luhn:!0}],e=function(t){var e,n,i,a,s,o,c,l;for(t=(t+"").replace(/\D/g,""),n=0,a=r.length;n<a;n++)for(e=r[n],l=e.patterns,i=0,s=l.length;i<s;i++)if(c=l[i],o=c+"",t.substr(0,o.length)===o)return e},i=function(t){var e,n,i;for(n=0,i=r.length;n<i;n++)if(e=r[n],e.type===t)return e},p=function(t){var e,n,i,r,a,s;for(a=!0,s=0,n=(t+"").split("").reverse(),i=0,r=n.length;i<r;i++)e=n[i],e=parseInt(e,10),(a=!a)&&(e*=2),e>9&&(e-=9),s+=e;return s%10===0},h=function(t){var e;return null!=t.prop("selectionStart")&&t.prop("selectionStart")!==t.prop("selectionEnd")||!(null==("undefined"!=typeof document&&null!==document&&null!=(e=document.selection)?e.createRange:void 0)||!document.selection.createRange().text)},$=function(t,e){var n,i,r;try{n=e.prop("selectionStart")}catch(t){i=t,n=null}if(r=e.val(),e.val(t),null!==n&&e.is(":focus"))return n===r.length&&(n=t.length),e.prop("selectionStart",n),e.prop("selectionEnd",n)},y=function(t){var e,n,i,r,a,s,o,c;for(null==t&&(t=""),i="０１２３４５６７８９",r="0123456789",c="",e=t.split(""),a=0,o=e.length;a<o;a++)n=e[a],s=i.indexOf(n),s>-1&&(n=r[s]),c+=n;return c},v=function(e){return setTimeout(function(){var n,i;return n=t(e.currentTarget),i=n.val(),i=y(i),i=i.replace(/\D/g,""),$(i,n)})},m=function(e){return setTimeout(function(){var n,i;return n=t(e.currentTarget),i=n.val(),i=y(i),i=t.payment.formatCardNumber(i),$(i,n)})},c=function(n){var i,r,a,s,o,c,l;if(a=String.fromCharCode(n.which),/^\d+$/.test(a)&&(i=t(n.currentTarget),l=i.val(),r=e(l+a),s=(l.replace(/\D/g,"")+a).length,c=16,r&&(c=r.length[r.length.length-1]),!(s>=c||null!=i.prop("selectionStart")&&i.prop("selectionStart")!==l.length)))return o=r&&"amex"===r.type?/^(\d{4}|\d{4}\s\d{6})$/:/(?:^|\s)(\d{4})$/,o.test(l)?(n.preventDefault(),setTimeout(function(){return i.val(l+" "+a)})):o.test(l+a)?(n.preventDefault(),setTimeout(function(){return i.val(l+a+" ")})):void 0},s=function(e){var n,i;if(n=t(e.currentTarget),i=n.val(),8===e.which&&(null==n.prop("selectionStart")||n.prop("selectionStart")===i.length))return/\d\s$/.test(i)?(e.preventDefault(),setTimeout(function(){return n.val(i.replace(/\d\s$/,""))})):/\s\d?$/.test(i)?(e.preventDefault(),setTimeout(function(){return n.val(i.replace(/\d$/,""))})):void 0},g=function(e){return setTimeout(function(){var n,i;return n=t(e.currentTarget),i=n.val(),i=y(i),i=t.payment.formatExpiry(i),$(i,n)})},l=function(e){var n,i,r;if(i=String.fromCharCode(e.which),/^\d+$/.test(i))return n=t(e.currentTarget),r=n.val()+i,/^\d$/.test(r)&&"0"!==r&&"1"!==r?(e.preventDefault(),setTimeout(function(){return n.val("0"+r+" / ")})):/^\d\d$/.test(r)?(e.preventDefault(),setTimeout(function(){var t,e;return t=parseInt(r[0],10),e=parseInt(r[1],10),e>2&&0!==t?n.val("0"+t+" / "+e):n.val(r+" / ")})):void 0},u=function(e){var n,i,r;if(i=String.fromCharCode(e.which),/^\d+$/.test(i))return n=t(e.currentTarget),r=n.val(),/^\d\d$/.test(r)?n.val(r+" / "):void 0},d=function(e){var n,i,r;if(r=String.fromCharCode(e.which),"/"===r||" "===r)return n=t(e.currentTarget),i=n.val(),/^\d$/.test(i)&&"0"!==i?n.val("0"+i+" / "):void 0},o=function(e){var n,i;if(n=t(e.currentTarget),i=n.val(),8===e.which&&(null==n.prop("selectionStart")||n.prop("selectionStart")===i.length))return/\d\s\/\s$/.test(i)?(e.preventDefault(),setTimeout(function(){return n.val(i.replace(/\d\s\/\s$/,""))})):void 0},f=function(e){return setTimeout(function(){var n,i;return n=t(e.currentTarget),i=n.val(),i=y(i),i=i.replace(/\D/g,"").slice(0,4),$(i,n)})},L=function(t){var e;return!(!t.metaKey&&!t.ctrlKey)||32!==t.which&&(0===t.which||(t.which<33||(e=String.fromCharCode(t.which),!!/[\d\s]/.test(e))))},w=function(n){var i,r,a,s;if(i=t(n.currentTarget),a=String.fromCharCode(n.which),/^\d+$/.test(a)&&!h(i))return s=(i.val()+a).replace(/\D/g,""),r=e(s),r?s.length<=r.length[r.length.length-1]:s.length<=16},E=function(e){var n,i,r;if(n=t(e.currentTarget),i=String.fromCharCode(e.which),/^\d+$/.test(i)&&!h(n))return r=n.val()+i,r=r.replace(/\D/g,""),!(r.length>6)&&void 0},C=function(e){var n,i,r;if(n=t(e.currentTarget),i=String.fromCharCode(e.which),/^\d+$/.test(i)&&!h(n))return r=n.val()+i,r.length<=4},k=function(e){var n,i,a,s,o;if(n=t(e.currentTarget),o=n.val(),s=t.payment.cardType(o)||"unknown",!n.hasClass(s))return i=function(){var t,e,n;for(n=[],t=0,e=r.length;t<e;t++)a=r[t],n.push(a.type);return n}(),n.removeClass("unknown"),n.removeClass(i.join(" ")),n.addClass(s),n.toggleClass("identified","unknown"!==s),n.trigger("payment.cardType",s)},t.payment.fn.formatCardCVC=function(){return this.on("keypress",L),this.on("keypress",C),this.on("paste",f),this.on("change",f),this.on("input",f),this},t.payment.fn.formatCardExpiry=function(){return this.on("keypress",L),this.on("keypress",E),this.on("keypress",l),this.on("keypress",d),this.on("keypress",u),this.on("keydown",o),this.on("change",g),this.on("input",g),this},t.payment.fn.formatCardNumber=function(){return this.on("keypress",L),this.on("keypress",w),this.on("keypress",c),this.on("keydown",s),this.on("keyup",k),this.on("paste",m),this.on("change",m),this.on("input",m),this.on("input",k),this},t.payment.fn.restrictNumeric=function(){return this.on("keypress",L),this.on("paste",v),this.on("change",v),this.on("input",v),this},t.payment.fn.cardExpiryVal=function(){return t.payment.cardExpiryVal(t(this).val())},t.payment.cardExpiryVal=function(t){var e,n,i,r;return i=t.split(/[\s\/]+/,2),e=i[0],r=i[1],2===(null!=r?r.length:void 0)&&/^\d+$/.test(r)&&(n=(new Date).getFullYear(),n=n.toString().slice(0,2),r=n+r),e=parseInt(e,10),r=parseInt(r,10),{month:e,year:r}},t.payment.validateCardNumber=function(t){var n,i;return t=(t+"").replace(/\s+|-/g,""),!!/^\d+$/.test(t)&&(n=e(t),!!n&&(i=t.length,N.call(n.length,i)>=0&&(n.luhn===!1||p(t))))},t.payment.validateCardExpiry=function(e,i){var r,a,s;return"object"===("undefined"==typeof e?"undefined":n(e))&&"month"in e&&(s=e,e=s.month,i=s.year),!(!e||!i)&&(e=t.trim(e),i=t.trim(i),!!/^\d+$/.test(e)&&(!!/^\d+$/.test(i)&&(1<=e&&e<=12&&(2===i.length&&(i=i<70?"20"+i:"19"+i),4===i.length&&(a=new Date(i,e),r=new Date,a.setMonth(a.getMonth()-1),a.setMonth(a.getMonth()+1,1),a>r)))))},t.payment.validateCardCVC=function(e,n){var r,a;return e=t.trim(e),!!/^\d+$/.test(e)&&(r=i(n),null!=r?(a=e.length,N.call(r.cvcLength,a)>=0):e.length>=3&&e.length<=4)},t.payment.cardType=function(t){var n;return t?(null!=(n=e(t))?n.type:void 0)||null:null},t.payment.formatCardNumber=function(n){var i,r,a,s;return n=n.replace(/\D/g,""),(i=e(n))?(s=i.length[i.length.length-1],n=n.slice(0,s),i.format.global?null!=(a=n.match(i.format))?a.join(" "):void 0:(r=i.format.exec(n),null!=r?(r.shift(),r=t.grep(r,function(t){return t}),r.join(" ")):void 0)):n},t.payment.formatExpiry=function(t){var e,n,i,r;return(n=t.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/))?(e=n[1]||"",i=n[2]||"",r=n[3]||"",r.length>0?i=" / ":" /"===i?(e=e.substring(0,1),i=""):2===e.length||i.length>0?i=" / ":1===e.length&&"0"!==e&&"1"!==e&&(e="0"+e,i=" / "),e+i+r):""}}).call(void 0)},function(t,e){"use strict";!function(){function t(t){$(t).removeClass("input-success"),$(t).addClass("input-error")}function e(t){$(t).removeClass("input-error"),$(t).addClass("input-success")}function n(t,e,n){$(t).hasClass("input-error")&&($(e).addClass("hidden"),$(n).removeClass("hidden"))}function i(t,e,n){$(t).hasClass("input-success")&&($(e).removeClass("hidden"),$(n).addClass("hidden"))}function r(t,e,n){$(t).removeClass("input-error"),$(e).addClass("hidden"),$(n).addClass("hidden"),$(t).removeClass("input-success")}$(".cc-num-input").payment("formatCardNumber"),$(".cc-exp-input").payment("formatCardExpiry"),$(".cc-cvc-input").payment("formatCardCVC");var a={input:".cc-num-input",type:".cc-type",iconOk:".cc-num-icon-success",iconErr:".cc-num-icon-error"};!function(){function s(t){$(a.input).hasClass(t)&&$(a.type+"."+t).addClass("txt-highlight")}function o(){$(a.type).removeClass("txt-highlight")}function c(){var r=$(a.input).val(),s=$.payment.validateCardNumber(r);s===!0&&(e(a.input),i(a.input,a.iconOk,a.iconErr)),s===!1&&(t(a.input),n(a.input,a.iconOk,a.iconErr))}$(a.input).on("input",function(){$(this).val().length>1?(o(),s("visa"),s("mastercard"),s("amex"),s("discover"),$(this).hasClass("amex")&&17===$(this).val().length&&c(),$(this).hasClass("identified")&&19===$(this).val().length&&c(),$(this).hasClass("amex")&&$(this).val().length<17&&r(this,a.iconOk,a.iconErr),$(this).hasClass("amex")===!1&&$(this).val().length<19&&r(this,a.iconOk,a.iconErr),$(this).hasClass("unknown")&&(t(this),n(this,a.iconOk,a.iconErr))):(r(this,a.iconOk,a.iconErr),o())})}(),function(){function a(){var r=$(s.input).payment("cardExpiryVal"),a=$.payment.validateCardExpiry(r.month,r.year);a===!0&&(e(s.input),i(s.input,s.iconOk,s.iconErr)),a===!1&&(t(s.input),n(s.input,s.iconOk,s.iconErr))}var s={input:".cc-exp-input",iconOk:".cc-exp-icon-success",iconErr:".cc-exp-icon-error"};$(s.input).on("input",function(){7===$(this).val().length||9===$(this).val().length?a():r(this,s.iconOk,s.iconErr)})}(),function s(){function s(r){var a=$(o.input).val(),s=$.payment.validateCardCVC(a);s===!0&&(e(o.input),i(o.input,o.iconOk,o.iconErr)),s===!1&&(t(o.input),n(o.input,o.iconOk,o.iconErr))}var o={input:".cc-cvc-input",iconOk:".cc-cvc-icon-success",iconErr:".cc-cvc-icon-error"};$(o.input).on("input",function(){$(a.input).hasClass("amex")?$(o.input).val().length>3?s(this):r(this,o.iconOk,o.iconErr):3===$(this).val().length?s(this):r(this,o.iconOk,o.iconErr)})}()}()}]);