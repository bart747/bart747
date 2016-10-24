(function() {

const doc = document;

const formsToggle = []
                   .slice
                   .call(doc.getElementsByClassName('forms-toggle'));

if (formsToggle[0]) {
  formsToggle.forEach( el => {

    let btn = el.getElementsByClassName('form-switch');
    let formSignIn = el.getElementsByClassName('form-sign-in');
    let formSignUp = el.getElementsByClassName('form-sign-up');
    let flipper = el.getElementsByClassName('flipper');
    
    function transform() {
      if (formSignIn[0] && formSignUp[0]) {
        formSignIn[0].classList.toggle('hidden');
        formSignUp[0].classList.toggle('hidden');
      }
      if (flipper[0]) {
        flipper[0].classList.toggle('rotate');
      }
    }

    btn[0].addEventListener('click', _ => {
      event.preventDefault();
      transform();
    });

    btn[1].addEventListener('click', _ => {
      event.preventDefault();
      transform();
    });

  });
}
})();
