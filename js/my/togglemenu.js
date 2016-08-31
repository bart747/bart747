(function() {
const doc = document;

const toggleMenu = []
                   .slice
                   .call(doc.getElementsByClassName('menu-toggle'));

toggleMenu.forEach( el => {

  let btn = el.getElementsByClassName('menu-toggle-btn');
  let content = el.getElementsByClassName('menu-toggle-content');
  btn[0].addEventListener('click', _ => {
    btn[0].classList.toggle('toggle-is-on');
    content[0].classList.toggle('hidden');
  });

})



})();