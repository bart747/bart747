(function() {

const inputDivs = []
              .slice
              .call(document.getElementsByClassName("validate"));

function onKeyupValid(container, input) {
  input.addEventListener('keyup', _=> {
    if (input.validity.valid) {
      container.classList.remove('input-error');
      container.classList.add('input-success');
    } else {
      container.classList.add('input-error');
      container.classList.remove('input-success');       
    }
  });
}

if (inputDivs[0]) {

  inputDivs.forEach(el => {
    let input = el.getElementsByTagName("input")[0];

    if (input) {

      input.addEventListener('focusout', _=> {

        onKeyupValid(el, input);

        if (input.validity.patternMismatch) {

          el.classList.add('input-error');
          el.classList.remove('input-success');

        } if (input.validity.valid) {
          el.classList.add('input-success');

        } if (input.validity.valid 
              && el.classList.contains('input-error')) {
          el.classList.remove('input-error');
          el.classList.add('input-success');
        }
      });

      if (input.classList.contains("input-password")) {
        el.addEventListener('keyup', _=> {
          if (input.value.length >= 8) {
            el.classList.add('input-success');
            el.classList.remove('input-error');
            onKeyupValid(el, input);  
          }
        });
      }
    }
  });
}

})();