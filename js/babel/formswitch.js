'use strict';

(function () {

  var doc = document;
  var formSignIn = doc.getElementById('form-sign-in');
  var formSignUp = doc.getElementById('form-sign-up');
  var formToggle = doc.getElementsByClassName('sign-in-link');

  function addListener(activator, form1, form2) {
    activator.addEventListener('click', function (event) {
      form1.classList.toggle('hidden');
      form2.classList.toggle('hidden');
    });
  }

  if (formToggle[1]) {
    addListener(formToggle[0], formSignIn, formSignUp);
    addListener(formToggle[1], formSignIn, formSignUp);
  }
})();