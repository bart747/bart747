'use strict';

(function () {

  var homeDiv = document.getElementsByClassName('home');
  var postDiv = document.getElementsByClassName('post');
  var blogDiv = document.getElementsByClassName('blog');
  var homeLink = document.getElementsByClassName('link-home');
  var blogLink = document.getElementsByClassName('link-blog');

  window.onload = function () {

    if (homeDiv[0] !== undefined) {
      homeLink[1].classList.add("link-active");
    }

    if (postDiv[0] !== undefined || blogDiv[0] !== undefined) {
      blogLink[0].classList.add('link-active');
    }
    console.log(homeDiv);console.log(homeLink);
    console.log(postDiv);console.log(blogLink);
  };
})();