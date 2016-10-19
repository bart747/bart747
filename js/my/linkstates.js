(function() {
  const doc = document;
  const postDiv = doc.getElementsByClassName('post')[0];
  const blogDiv = doc.getElementsByClassName('blog')[0];
  const blogLink = doc.getElementsByClassName('link-blog')[0];
  const contactLink = doc.getElementsByClassName('contact-link')[0];
  const contactLinkBox = doc.getElementsByClassName('contact-link-box')[0];
  const contactLinkTxt = doc.getElementsByClassName('contact-link-txt')[0];
  const customLink = []
                     .slice
                     .call(doc.getElementsByClassName('link-custom'));

  window.onload = function() {
  
    //if (homeDiv[0] !== undefined) {
    //  homeLink[0].classList.add("link-active");
    //}

    if (postDiv !== undefined || blogDiv !== undefined) {
      blogLink.classList.add('link-active');
    }
  // console.log(homeDiv); console.log(homeLink);
  // console.log(postDiv); console.log(blogLink);
    if (contactLink !== undefined) {
      contactLink.addEventListener('click', _=> {
        event.preventDefault();
        contactLinkBox.classList.toggle('hidden');
        contactLinkTxt.classList.toggle('orange');
      });
    }
  };
  
}());
