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