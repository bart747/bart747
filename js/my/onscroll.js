(function() {

const bar = document.getElementsByTagName('header')[0];

function runOnScroll() { 
  if (window.scrollY > 45 && window.scrollY < 500) {
    bar.classList.add('header-scroll');     
  }
  if (window.scrollY < 45) {
    bar.classList.remove('header-scroll');  
  }
}

window.addEventListener('scroll', runOnScroll);


})();