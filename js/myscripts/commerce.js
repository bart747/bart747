
$('.cc-num-input').payment('formatCardNumber');
$('.cc-exp-input').payment('formatCardExpiry');
//ccCvc.payment('formatCardCVC');

//
// helpers
//

// highlight selected card name
function ccType(name) {
  if ( $('.cc-num-input').hasClass(name) ) {
    $('.cc-type.' + name).addClass('blue');
  }
}

// reset card name highlight
function ccTypeReset() {
  $('.cc-type').removeClass('blue');
}

// add error css class 
function addErr(input) {
  $(input).removeClass('input-success');
  $(input).addClass('input-error');
}


function addOk(input) {
  $(input).removeClass('input-error');
  $(input).addClass('input-success');
}

// show input error icon
function inputErrIcon(input, iconErr, iconSuc) {
  if ( $(input).hasClass('input-error') ) {
    $(iconSuc).addClass('hidden');
    $(iconErr).removeClass('hidden');
  }
}

function inputOkIcon(input, iconErr, iconSuc) {
  if ( $(input).hasClass('input-success') ) {
    $(iconSuc).removeClass('hidden');
    $(iconErr).addClass('hidden');
  }
}

// reset input icons
function inputReset(input, iconErr, iconSuc) {
  $(input).removeClass('input-error');
  $(iconSuc).addClass('hidden');
  $(iconErr).addClass('hidden');
  $(input).removeClass('input-success');
}




//
// check stuff
//

// check card number input
function cardNrCheck() {

  const cardValue = $('.cc-num-input').val();
  const cardValid = $.payment.validateCardNumber(cardValue);

  if ( cardValid === true ) {
    addOk('.cc-num-input'); 
    inputOkIcon('.cc-num-input', '.cc-num-icon-error', '.cc-num-icon-success');
  }

  if ( cardValid === false ) {
    addErr('.cc-num-input'); 
    inputErrIcon('.cc-num-input', '.cc-num-icon-error', '.cc-num-icon-success');
  }
}

$('form.card input').on('input', function() {

  if ( $('.cc-num-input').val().length > 1 ) {

    ccType('visa');
    ccType('mastercard');
    ccType('amex');
    ccType('discover');
    

    if ( $('.cc-num-input').hasClass('amex')  &&
      $('.cc-num-input').val().length > 16 ) {
      
      cardNrCheck();
    }
    
    if ( $('.cc-num-input').hasClass('identified') &&
      $('.cc-num-input').val().length > 17 ) {
      
      cardNrCheck();
    }

    if ( $('.cc-num-input').hasClass('amex') &&
      $('.cc-num-input').val().length < 17 ) {
      
      inputReset('.cc-num-input', '.cc-num-icon-error', '.cc-num-icon-success');
    }
    
    if ( $('.cc-num-input').hasClass('amex') === false &&
      $('.cc-num-input').val().length < 19 ) {
      
      inputReset('.cc-num-input', '.cc-num-icon-error', '.cc-num-icon-success');
    }

    if ( $('.cc-num-input').hasClass('unknown') ) {
      addErr('.cc-num-input');
      inputErrIcon('.cc-num-input', '.cc-num-icon-error', '.cc-num-icon-success');
    }

  }
  
  else {
   inputReset('.cc-num-input', '.cc-num-icon-error', '.cc-num-icon-success');
   ccTypeReset(); 
  }

});

//check expiry date 


function expCheck() {
  
  const expDate= $('.cc-exp-input').payment('cardExpiryVal');
  const expValid = $.payment.validateCardExpiry(expDate.month, expDate.year);
 
  if (expValid === true) {
    addOk('.cc-exp-input'); 
    inputOkIcon('.cc-exp-input', '.cc-exp-icon-error', '.cc-exp-icon-success');
  }
  if (expValid === false) {
    addErr('.cc-exp-input'); 
    inputErrIcon('.cc-exp-input', '.cc-exp-icon-error', '.cc-exp-icon-success');
  }
}

$('input.cc-exp-input').on('input', function() {
  if ( $('.cc-exp-input').val().length > 6 ) {
    expCheck();
  }

  else {
    inputReset('.cc-exp-input', '.cc-exp-icon-error', '.cc-exp-icon-success');
  }
});

function cvcCheck() {
  const cvcNum= $('.cc-cvc-input').val();
  const cvcValid = $.payment.validateCardCVC(cvcNum); 
 
  if (cvcValid === true) {
    addOk('.cc-cvc-input'); 
    inputOkIcon('.cc-cvc-input', '.cc-cvc-icon-error', '.cc-cvc-icon-success');
  }
  if (cvcValid === false) {
    addErr('.cc-cvc-input'); 
    inputErrIcon('.cc-cvc-input', '.cc-cvc-icon-error', '.cc-cvc-icon-success');
  }
}

$('input.cc-cvc-input').on('input', function() {
  if ( $('.cc-cvc-input').val().length > 2 ) {
    cvcCheck();
  }

  else {
    inputReset('.cc-cvc-input', '.cc-cvc-icon-error', '.cc-cvc-icon-success');
  }
});
