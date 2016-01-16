'use strict';

$('.cc-num-input').payment('formatCardNumber');
//ccExp.payment('formatCardExpiry');
//ccCvc.payment('formatCardCVC');

//
// helpers
//

// highlight selected card name
function ccType(name) {
  if ($('.cc-num-input').hasClass(name)) {
    $('.cc-type.' + name).addClass('blue');
  }
}

// reset card name highlight
function ccTypeReset() {
  $('.cc-type').removeClass('blue');
}

// add error css class
function addErr(input) {
  $(input).addClass('input-error');
}

// show input error icon
function inputErrIcon(input, iconErr, iconSuc) {
  if ($(input).hasClass('input-error')) {
    $(iconSuc).addClass('hidden');
    $(iconErr).removeClass('hidden');
  }
}

function inputOkIcon(input, iconErr, iconSuc) {
  if ($(input).hasClass('input-success')) {
    $(iconSuc).removeClass('hidden');
    $(iconErr).addClass('hidden');
  }
}

// reset input icons
function inputReset(input, iconErr, iconSuc) {
  $(input).removeClass('input-error');
  $(iconSuc).addClass('hidden');
  $(iconErr).addClass('hidden');
  $('.cc-num-input').removeClass('input-success');
}

function cardOk() {

  var cardValue = $('.cc-num-input').val();
  var cardValid = $.payment.validateCardNumber(cardValue);

  if (cardValid === true) {
    $('.cc-num-input').addClass('input-success');
    inputOkIcon('.cc-num-input', '.cc-num-icon-error', '.cc-num-icon-success');
  }

  if (cardValid === false) {
    $('.cc-num-input').addClass('input-error');
    inputErrIcon('.cc-num-input', '.cc-num-icon-error', '.cc-num-icon-success');
  }
}
//
// check stuff
//

// check card number input
$('form.card input').on('input', function () {

  if ($('.cc-num-input').val().length > 1) {

    ccType('visa');
    ccType('mastercard');
    ccType('amex');
    ccType('discover');

    if ($('.cc-num-input').hasClass('amex') && $('.cc-num-input').val().length > 16) {

      cardOk();
    }

    if ($('.cc-num-input').hasClass('identified') && $('.cc-num-input').val().length > 17) {

      cardOk();
    }

    if ($('.cc-num-input').hasClass('amex') && $('.cc-num-input').val().length < 17) {

      inputReset('.cc-num-input', '.cc-num-icon-error', '.cc-num-icon-success');
    }

    if ($('.cc-num-input').hasClass('amex') === false && $('.cc-num-input').val().length < 19) {

      inputReset('.cc-num-input', '.cc-num-icon-error', '.cc-num-icon-success');
    }

    if ($('.cc-num-input').hasClass('unknown')) {
      addErr('.cc-num-input');
      inputErrIcon('.cc-num-input', '.cc-num-icon-error', '.cc-num-icon-success');
    }
  } else {
    inputReset('.cc-num-input', '.cc-num-icon-error', '.cc-num-icon-success');
    ccTypeReset();
  }
});