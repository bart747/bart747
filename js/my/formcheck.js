(function() {

const inputDivs = []
              .slice
              .call(document.getElementsByClassName("validate"));


function addIndicator(container, input) {
  if (input.validity.valid) {
    container.classList.remove('input-error');
    container.classList.add('input-success');
  } else {
    container.classList.add('input-error');
    container.classList.remove('input-success');       
  }
}

function onKeyupValid(container, input) {
  input.addEventListener('keyup', _=> {
    addIndicator(container, input);
    validReset(container, input);
  });
}

function validReset(container, input) {
  container.classList.remove('input-error');
  container.classList.remove('input-success'); 
}

if (inputDivs[0]) {

  inputDivs.forEach(el => {
    let input = el.getElementsByTagName("input")[0];

    if (input) {

      input.addEventListener('blur', _=> {

        if (input.validity.patternMismatch) {
          el.classList.add('input-error');
          el.classList.remove('input-success');

        } if (input.validity.valid) {
          el.classList.add('input-success');

        } if (input.validity.valid && el.classList.contains('input-error')) {
          el.classList.remove('input-error');
          el.classList.add('input-success');
        } if (input.classList.contains("input-email")) {
          onKeyupValid(el, input);
        }
        if (input.value.length < 1) {
          validReset(el, input);
        }
      });

      if (input.classList.contains("input-password")) {
        el.addEventListener('keyup', _=> {
          if (input.value.length >= 8) {
            el.classList.add('input-success');
            el.classList.remove('input-error');          
          } else {
            el.classList.remove('input-success');
            el.classList.remove('input-error');          
          }
        });
      }
    }
  });
}

})();