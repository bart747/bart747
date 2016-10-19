(function() {
const doc = document;
const imgTop = []
               .slice
               .call(doc.getElementsByClassName('imgload-top'));
const imgTopLast = imgTop[imgTop.length - 1];
const imgBtm = []
               .slice
               .call(doc.getElementsByClassName('imgload-bottom'));

imgTopLast.src = imgTopLast.getAttribute("data-imgload");



//imgtop[0].addEventListener('load', loadRest("data-imgload"), false);

function loadImg(count) {

  if (count > 0) {
    setTimeout( _=> {

      console.log(imgTopLast.complete);

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

loadImg(10);
})();