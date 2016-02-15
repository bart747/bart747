(function() {
 
// select all images in page content  
const imgAll = document.querySelectorAll('.post img');

// set image upload threshold 
// - minimum height (in px) of IMG element which signals that
// image is at least partly uploaded
// 
// in my CSS, min. IMG height is set at 250px
// so 260 threshold will be fine 
const imgThreshold = 260;
const imgLen = imgAll.length;

// setTiemout sets acceptable delay of rendering process
setTimeout(function() {

  // if there's only one image
  if (imgAll[0] !== undefined &&
    imgAll[1] === undefined) {

    console.log("img 0 threshold: " + imgAll[0].clientHeight);
    
    // if it's not loading fast enough, 
    // add proper blur animation
    if (imgAll[0].clientHeight < imgThreshold) {

      imgAll[0].classList.add('img-blur-1');   
      console.log('img 0: blur 1');
    }
  }

  // if there are two or more images, add proper blur animations 
  else if (imgAll[1] !== undefined) {
      
      console.log("img 0 threshold: " + imgAll[0].clientHeight);
      console.log("img 1 threshold: " + imgAll[1].clientHeight);

    // when only first image is loading fast enough
    if (imgAll[0].clientHeight > imgThreshold &&
      imgAll[1].clientHeight < imgThreshold) {

      imgAll[0].classList.add('img-blur-1');   
      console.log('img 0: blur 1');

      for ( let i = 1; i < imgLen; i += 1 ) {
        imgAll[i].classList.add('img-blur-2');   
      }   
      console.log('img rest: blur 2');
    }

    // when all images are not loading fast enough
    else if (imgAll[0].clientHeight < imgThreshold &&
      imgAll[1].clientHeight < imgThreshold) {

      imgAll[0].classList.add('img-blur-2');   
      console.log('img 0: blur 2');

      for ( let i = 1; i < imgLen; i += 1 ) {
        imgAll[i].classList.add('img-blur-3');   
      }   
      console.log('img rest: blur 3');
    }
  }

}, 100);

}());
