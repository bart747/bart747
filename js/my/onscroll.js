(function() {

const bar = document.getElementsByTagName('header')[0];

function runOnScroll() { 
  if (window.scrollY > 40) {
    if (bar.classList.contains('header-scroll') === false) {
      bar.classList.add('header-scroll');     
    }
  }
  if (window.scrollY < 40) {
    if (bar.classList.contains('header-scroll') === true) {
      bar.classList.remove('header-scroll');     
    }
  }
}

window.addEventListener('scroll', runOnScroll);


})();