(function() {

const inputs = []
              .slice
              .call(document.getElementsByClassName("validate"));

if (inputs[0]) {

  inputs.forEach(el => {
     
    el.addEventListener('focusout', _=> {
      if (el.validity.patternMismatch) {

        el.classList.add('input-error');

        el.addEventListener('keyup', _=> {
          if (el.validity.valid) {
            el.classList.remove('input-error');
          } else {
            el.classList.add('input-error');       
          }
        });

      } else if (el.validity.valid 
                 && el.classList.contains('input-error') ) {
        el.classList.remove('input-error');
      }
    });
  });
}

})();