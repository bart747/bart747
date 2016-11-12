(function() {

window.onload = function() { 

  const header = document.getElementsByTagName('header')[0];

  function runOnScroll() { 
    if (window.scrollY > 45 && window.scrollY < 500) {
      header.classList.add('header-scroll');     
    }
    if (window.scrollY < 45) {
      header.classList.remove('header-scroll');  
    }
  }

  window.addEventListener('scroll', runOnScroll);
};

})();