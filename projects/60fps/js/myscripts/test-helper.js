(function() {

dbgIsOn = false;
this.dbg = (msg1, msg2, msg3) => {
  if (dbgIsOn === true) {
    console.log(msg1);
    msg2 = (typeof msg2 === 'undefined') ? null : console.log(msg2);
    msg2 = (typeof msg3 === 'undefined') ? null : console.log(msg3);
  }
};
  
}());
