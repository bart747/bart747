'use strict';

(function () {

  var homeDiv = document.getElementsByClassName('home');
  var postDiv = document.getElementsByClassName('post');
  var blogDiv = document.getElementsByClassName('blog');
  var homeLink = document.getElementsByClassName('link-home');
  var blogLink = document.getElementsByClassName('link-blog');

  // console.log(homeDiv);
  // console.log(homeLink);
  if (homeDiv[0] !== undefined) {
    homeLink[0].classList.add('link-active');
  }

  // console.log(postDiv);
  // console.log(blogLink);
  else if (postDiv[0] !== undefined || blogDiv[0] !== undefined) {
      blogLink[0].classList.add('link-active');
    }
})();