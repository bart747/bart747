(function() {

  const homeDiv = document.getElementsByClassName('home');
  const postDiv = document.getElementsByClassName('post');
  const blogDiv = document.getElementsByClassName('blog');
  const homeLink = document.getElementsByClassName('link-home');
  const blogLink = document.getElementsByClassName('link-blog');

  // console.log(homeDiv); console.log(homeLink);
  // console.log(postDiv); console.log(blogLink);

  if (homeDiv[0] !== undefined) {
    homeLink[0].classList.add('link-active');
  }

  else if (postDiv[0] !== undefined || blogDiv[0] !== undefined) {
    blogLink[0].classList.add('link-active');
  }
  
}());
