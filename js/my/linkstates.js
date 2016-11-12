(function() {
  const doc = document;
  const header = doc.getElementsByTagName('header')[0];
  const postDiv = doc.getElementsByClassName('post')[0];
  const blogDiv = doc.getElementsByClassName('blog')[0];
  const blogLink = doc.getElementsByClassName('link-blog')[0];
  const contactLink = doc.getElementsByClassName('contact-link')[0];
  const contactLinkBox = doc.getElementsByClassName('contact-link-box')[0];
  const contactLinkOpen = doc.getElementsByClassName('contact-link-open')[0];
  const contactLinkClose = doc.getElementsByClassName('contact-link-close')[0];

  window.onload = function() {
    if (postDiv !== undefined || blogDiv !== undefined) {
      blogLink.classList.add('link-active');
    }
  // console.log(homeDiv); console.log(homeLink);
  // console.log(postDiv); console.log(blogLink);
  // console.log(contactLinkClose);

  };

  if (contactLink !== undefined) {
    contactLinkOpen.addEventListener('click', evt => {
      evt.preventDefault();
      contactLinkBox.classList.toggle('hidden');
      contactLinkOpen.classList.toggle('orange');
    });
    contactLinkClose.addEventListener('click', evt => {
      contactLinkBox.classList.add('hidden');
      contactLinkOpen.classList.remove('orange');
    });
  }

}()); 
