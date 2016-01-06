(function() {
 
// select all images in page content  
const imgAll = document.querySelectorAll('.page-content img');

// set image upload threshold 
// - minimum height (in px) of IMG element which signals that
// image is at least partly uploaded
// 
// in my CSS, min. IMG height is set at 250px
// so 260 threshold will fine 
const imgThreshold = 260; 

// add blur effect to all selected images
[].forEach.call(imgAll, function(el) {
  el.classList.add('img-blur');   
});
console.log("blur added");

if (imgAll[0] !== undefined) {

  // if first image is "uploaded enough" remove it's blur filter 
  if (imgAll[0].clientHeight > imgThreshold) {
    imgAll[0].classList.remove('img-blur');   
    console.log('blur removed from img 0');
  }

  // if not, remove blur with delay
  // ( += css transition time )
  else  {
    setTimeout(function() {
      imgAll[0].classList.remove('img-blur');   
      console.log('blur removed from img 0 (timeout: 300)');
    }, 300);
  }

}

if (imgAll[1] !== undefined) {

  // if second image is "uploaded enough" remove blur filter
  // from all pics
  if (imgAll[1].clientHeight > imgThreshold) {
    [].forEach.call(imgAll, function(el) {
      el.classList.remove('img-blur');   
    });
    console.log('blur removed from img 1');
  }

  // if not, remove blur with delay 
  // ( += css transition time )
  else  {
    setTimeout(function() {
      [].forEach.call(imgAll, function(el) {
        el.classList.remove('img-blur');   
      });   
      console.log('blur removed from all img (timeout: 600)');
    }, 600);
  }

}

}());
