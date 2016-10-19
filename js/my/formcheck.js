(function() {

const inputDivs = []
              .slice
              .call(document.getElementsByClassName("validate"));

function error(container) {
  container.classList.add('input-error');
  container.classList.remove('input-success');
}

function correct(container) {
  container.classList.remove('input-error');
  container.classList.add('input-success');
}

function addIndicator(container, input) {
  if (input.validity.valid) {
    correct(container);
  } else {
    error(container);
  }
  if (input.validity.valid && container.classList.contains('input-error')) {
    correct(container);
  }
}

function validReset(container) {
  container.classList.remove('input-error');
  container.classList.remove('input-success'); 
}

if (inputDivs[0]) {

  inputDivs.forEach(el => {
    let input = el.getElementsByTagName("input")[0];

    if (input) {

      input.addEventListener('blur', _=> {

        addIndicator(el, input);

        if (input.classList.contains("input-email")) {
          input.addEventListener('keyup', _=> {
            addIndicator(el, input);
            if (input.value.length < 1) {
              validReset(el);
            }
          });
        }
      });

      if (input.classList.contains("input-password")) {
        el.addEventListener('keyup', _=> {
          if (input.value.length >= 8) {
            correct(el);         
          } else {
            validReset(el);       
          }
        });
      }
    }
  });
}

})();