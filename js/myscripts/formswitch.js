(function() {

const doc = document;
const formSignIn = doc.getElementById('form-sign-in');
const formSignUp = doc.getElementById('form-sign-up');
const formToggle = doc.getElementsByClassName('sign-in-link');

function addListener(activator, form1, form2) {
  activator.addEventListener('click', event => {
    form1.classList.toggle('hidden');
    form2.classList.toggle('hidden');
  });
}

if (formToggle[1]) {
  addListener(formToggle[0], formSignIn, formSignUp);
  addListener(formToggle[1], formSignIn, formSignUp);
}
})();
