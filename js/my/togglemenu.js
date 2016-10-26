(function() {
const doc = document;

const toggleMenu = []
                   .slice
                   .call(doc.getElementsByClassName('menu-toggle'));

const btnNonSubmit = []
                     .slice
                     .call(doc.getElementsByClassName('btn-prevent'));

if (btnNonSubmit[0]) { 
  btnNonSubmit.forEach( el => {
    el.addEventListener('click', _=> {
      return false;
    });
  });
}

toggleMenu.forEach( el => {

  let btn = el.getElementsByClassName('menu-toggle-btn');
  let content = el.getElementsByClassName('menu-toggle-content');

  btn[0].addEventListener('click', _ => {
    btn[0].classList.toggle('toggle-is-on');
    content[0].classList.toggle('menu-toggle-hide');
    content[0].classList.toggle('menu-toggle-show');
  });

});



})();