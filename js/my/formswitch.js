(function() {

const doc = document;

const formsToggle = []
                   .slice
                   .call(doc.getElementsByClassName('forms-toggle'));

formsToggle.forEach( el => {

  let btn = el.getElementsByClassName('form-switch');
  let formSignIn = el.getElementsByClassName('form-sign-in');
  let formSignUp = el.getElementsByClassName('form-sign-up');
  
  function hideShow() {
    formSignIn[0].classList.toggle('hidden');
    formSignUp[0].classList.toggle('hidden');
  }

  btn[0].addEventListener('click', _ => {
    hideShow()
  });

  btn[1].addEventListener('click', _ => {
    hideShow()
  });

})
})();
