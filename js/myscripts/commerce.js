
$('.cc-num-input').payment('formatCardNumber');
$('.cc-exp-input').payment('formatCardExpiry');
$('.cc-cvc-input').payment('formatCardCVC');

//
// helpers
//

// highlight selected card type (brand)
function markCardType(name) {
  if ( $('.cc-num-input').hasClass(name) ) {
    $('.cc-type.' + name).addClass('blue');
  }
}

// reset card type highlight
function resetCardType() {
  $('.cc-type').removeClass('blue');
}

// add error css class 
function addErr(input) {
  $(input).removeClass('input-success');
  $(input).addClass('input-error');
}

// add success css class
function addOk(input) {
  $(input).removeClass('input-error');
  $(input).addClass('input-success');
}

// show input error icon
function showInputErrIcon(input, iconErr, iconSuc) {
  if ( $(input).hasClass('input-error') ) {
    $(iconSuc).addClass('hidden');
    $(iconErr).removeClass('hidden');
  }
}

// show input success icon
function showInputOkIcon(input, iconErr, iconSuc) {
  if ( $(input).hasClass('input-success') ) {
    $(iconSuc).removeClass('hidden');
    $(iconErr).addClass('hidden');
  }
}

// reset input icons
function resetInputIcon(input, iconErr, iconSuc) {
  $(input).removeClass('input-error');
  $(iconSuc).addClass('hidden');
  $(iconErr).addClass('hidden');
  $(input).removeClass('input-success');
}




//
// check stuff
//

const cardNum = {
  input: '.cc-num-input',
  type:  '.cc-type',
  iconOk: '.cc-num-icon-success',
  iconErr: '.cc-num-icon-error'
};

// check card number input
function cardNrCheck() {
  
  // get card number
  const cardValue = $('.cc-num-input').val();

  // validate card number
  const cardValid = $.payment.validateCardNumber(cardValue);

  // add proper indicators
  if ( cardValid === true ) {
    addOk('.cc-num-input'); 
    showInputOkIcon('.cc-num-input', '.cc-num-icon-error', '.cc-num-icon-success');
  }

  if ( cardValid === false ) {
    addErr('.cc-num-input'); 
    showInputErrIcon('.cc-num-input', '.cc-num-icon-error', '.cc-num-icon-success');
  }
}

$('input.cc-num-input').on('input', function() {

  if ( $(this).val().length > 1 ) {

    markCardType('visa');
    markCardType('mastercard');
    markCardType('amex');
    markCardType('discover');
    

    if ( $(this).hasClass('amex')  &&
      $(this).val().length > 16 ) {
      
      cardNrCheck();
    }
    
    if ( $(this).hasClass('identified') &&
      $(this).val().length > 17 ) {
      
      cardNrCheck();
    }

    if ( $(this).hasClass('amex') &&
      $(this).val().length < 17 ) {
      
      resetInputIcon(this, '.cc-num-icon-error', '.cc-num-icon-success');
    }
    
    if ( $(this).hasClass('amex') === false &&
      $(this).val().length < 19 ) {
      
      resetInputIcon(this, '.cc-num-icon-error', '.cc-num-icon-success');
    }

    if ( $(this).hasClass('unknown') ) {
      addErr(this);
      showInputErrIcon(this, '.cc-num-icon-error', '.cc-num-icon-success');
    }

  }
  
  else {
   inputIconReset(this, '.cc-num-icon-error', '.cc-num-icon-success');
   resetCardType(); 
  }

});

//check expiry date 


function expCheck() {
  
  const expDate= $('.cc-exp-input').payment('cardExpiryVal');
  const expValid = $.payment.validateCardExpiry(expDate.month, expDate.year);
 
  if (expValid === true) {
    addOk('.cc-exp-input'); 
    showInputOkIcon('.cc-exp-input', '.cc-exp-icon-error', '.cc-exp-icon-success');
  }
  if (expValid === false) {
    addErr('.cc-exp-input'); 
    showInputErrIcon('.cc-exp-input', '.cc-exp-icon-error', '.cc-exp-icon-success');
  }
}

$('input.cc-exp-input').on('input', function() {
  if ( $(this).val().length > 6 ) {
    expCheck();
  }

  else {
    resetInputIcon(this, '.cc-exp-icon-error', '.cc-exp-icon-success');
  }
});

function cvcCheck(input) {
  const cvcNum= $('.cc-cvc-input').val();
  const cvcValid = $.payment.validateCardCVC(cvcNum);
  const iconOk = '.cc-cvc-icon-success';
  const iconErr = '.cc-cvc-icon-error';
 
  if (cvcValid === true) {
    addOk(input); 
    showInputOkIcon(input, iconErr, iconOk);
  }
  if (cvcValid === false) {
    addErr('.cc-cvc-input'); 
    showInputErrIcon(input, iconErr, iconOk);
  }
}

$('input.cc-cvc-input').on('input', function() {

  if ( $(this).val().length > 2 ) {
    cvcCheck(this);
  }

  else {
    resetInputIcon(this, '.cc-cvc-icon-error', '.cc-cvc-icon-success');
  }
});
