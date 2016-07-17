(function() {

// format card form inputs
$('.cc-num-input').payment('formatCardNumber');
$('.cc-exp-input').payment('formatCardExpiry');
$('.cc-cvc-input').payment('formatCardCVC');

//
// general helpers:
//

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
function showInputErrIcon(input, iconSuc, iconErr) {
  if ( $(input).hasClass('input-error') ) {
    $(iconSuc).addClass('hidden');
    $(iconErr).removeClass('hidden');
  }
}

// show input success icon
function showInputOkIcon(input, iconSuc, iconErr) {
  if ( $(input).hasClass('input-success') ) {
    $(iconSuc).removeClass('hidden');
    $(iconErr).addClass('hidden');
  }
}

// reset input icons
function resetInput(input, iconSuc, iconErr) {
  $(input).removeClass('input-error');
  $(iconSuc).addClass('hidden');
  $(iconErr).addClass('hidden');
  $(input).removeClass('input-success');
}


//
// check stuff
//

// check CARD NUMBER 
(function checkCardNum() { 

  // card number css classes setting
  const cardNum = {
    input: '.cc-num-input',
    type:  '.cc-type',
    iconOk: '.cc-num-icon-success',
    iconErr: '.cc-num-icon-error'
  };

  // highlight selected card type (brand)
  function markCardType(name) {
    if ( $(cardNum.input).hasClass(name) ) {
      $(cardNum.type + '.' + name).addClass('txt-highlight');
    }
  }

  // reset card type highlight
  function resetCardType() {
    $(cardNum.type).removeClass('txt-highlight');
  }

  // validate card number input
  function validCardNum() {
    
    // get card number
    const cardValue = $(cardNum.input).val();

    // validate card number
    const cardValid = $.payment.validateCardNumber(cardValue);

    // add proper indicators to valid/invalid number
    if ( cardValid === true ) {
      addOk(cardNum.input);
      showInputOkIcon(cardNum.input, cardNum.iconOk, cardNum.iconErr);
    }
    if ( cardValid === false ) {
      addErr(cardNum.input); 
      showInputErrIcon(cardNum.input, cardNum.iconOk, cardNum.iconErr);
    }
  }

  // listen to card number input
  $(cardNum.input).on('input', function() {

    // when input is long enough...
    if ( $(this).val().length > 1 ) {
      
      // highlight proper card type name
      resetCardType();
      markCardType('visa');
      markCardType('mastercard');
      markCardType('amex');
      markCardType('discover');
      
      // validate number according to statements
      if ( $(this).hasClass('amex')  &&
        $(this).val().length > 16 ) {
          validCardNum();
      }

      if ( $(this).hasClass('identified') &&
        $(this).val().length > 17 ) {
          validCardNum();
      }
      
      // reset input indicators according to statements
      if ( $(this).hasClass('amex') &&
        $(this).val().length < 17 ) {
          resetInput(this, cardNum.iconOk, cardNum.iconErr);
      }
      
      if ( $(this).hasClass('amex') === false &&
        $(this).val().length < 19 ) {
          resetInput(this, cardNum.iconOk, cardNum.iconErr);
      }
      
      // show error if unknown
      if ( $(this).hasClass('unknown') ) {
        addErr(this);
        showInputErrIcon(this, cardNum.iconOk, cardNum.iconErr);
      }

    }
    
    else {
    resetInput(this, cardNum.iconOk, cardNum.iconErr);
    resetCardType();
    }

  });

}());


(function checkExpDate() {

  // card expiry number css classes setting
  const cardExp = {
    input: '.cc-exp-input',
    iconOk: '.cc-exp-icon-success',
    iconErr: '.cc-exp-icon-error'
  };

  // validate number
  function validExp() {
    
    const expDate= $(cardExp.input).payment('cardExpiryVal');
    const expValidation = $.payment.validateCardExpiry(expDate.month, expDate.year);
    
    // add proper indicators to valid/invalid number
    if (expValidation === true) {
      addOk(cardExp.input); 
      showInputOkIcon(cardExp.input, cardExp.iconOk, cardExp.iconErr);
    }
    if (expValidation === false) {
      addErr(cardExp.input); 
      showInputErrIcon(cardExp.input, cardExp.iconOk, cardExp.iconErr);
    }
  }

  // listen to input
  $(cardExp.input).on('input', function() {

    // validate number when it's long enough
    if ( $(this).val().length > 6 ) {
      validExp();
    }
    
    // otherwise, reset indicators
    else {
      resetInput(this, cardExp.iconOk, cardExp.iconErr);
    }
  });

}());


(function cvcCheck() {

  const cardCVC = {
    input: '.cc-cvc-input',
    iconOk: '.cc-cvc-icon-success',
    iconErr: '.cc-cvc-icon-error'
  };
  
  // validate number
  function cvcCheck(input) {
    const cvcNum= $(cardCVC.input).val();
    const cvcValid = $.payment.validateCardCVC(cvcNum);
    
    // add proper indicators to valid/invalid number
    if (cvcValid === true) {
      addOk(cardCVC.input); 
      showInputOkIcon(cardCVC.input, cardCVC.iconOk, cardCVC.iconErr);
    }
    if (cvcValid === false) {
      addErr(cardCVC.input); 
      showInputErrIcon(cardCVC.input, cardCVC.iconOk, cardCVC.iconErr);
    }
  }

  // listen to input
  $(cardCVC.input).on('input', function() {
    
    // validate number when it's long enough
    if ( $(this).val().length > 2 ) {
      cvcCheck(this);
    }
    
    // otherwise, reset indicators
    else {
      resetInput(this, cardCVC.iconOk, cardCVC.iconErr);
    }
  });

}());

}());
