(function() {
 
// select all images in page content  
const imgAll = document.querySelectorAll('.page-content img');

// add blur effect to all selected images
[].forEach.call(imgAll, function(el) {
  el.classList.add('img-blur');   
});
console.log("blur added");

// if first image is "uploaded enough" remove blur effect  
if (imgAll[0].clientHeight > 220) {
  [].forEach.call(imgAll, function(el) {
    el.classList.remove('img-blur');   
    console.log('blur removed');
  });
}

// if not, remove blur effect after one second
// ( += css transition time )
else {
  setTimeout(function() {
    [].forEach.call(imgAll, function(el) {
      el.classList.remove('img-blur');   
    });
    console.log('blur removed (setTimeout, 1000)');
  }, 1000);
}

}());
