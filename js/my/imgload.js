(function() {

function imgLoad() {
  const doc = document;
  const imgTop = []
                .slice
                .call(doc.getElementsByClassName('imgload-top'));

  const imgBtm = []
                .slice
                .call(doc.getElementsByClassName('imgload-bottom'));

  let imgTopLast;
  if (imgTop[0]) {
    imgTopLast = imgTop[imgTop.length - 1];
    imgTopLast.src = imgTopLast.getAttribute("data-imgload");
  }

  function loadImg(count) {

    if (count > 0) {
      setTimeout( _=> {

        //console.log("imgLoad: last primary img ready? => " + imgTopLast.complete);

        if (imgTopLast.complete) {
          imgBtm.forEach( el => {
            el.src = el.getAttribute("data-imgload");
          });
        } else { loadImg( count - 1); } 

      }, 200);
    } else {        
      imgBtm.forEach( el => {
        el.src = el.getAttribute("data-imgload");
      });
    }
  }
  if (imgBtm[0]) {
    loadImg(10);
  }

}

imgLoad(); 
})();