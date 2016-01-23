'use strict';

(function () {

  // select all images in page content 
  var imgAll = document.querySelectorAll('.post img');

  // set image upload threshold
  // - minimum height (in px) of IMG element which signals that
  // image is at least partly uploaded
  //
  // in my CSS, min. IMG height is set at 250px
  // so 260 threshold will be fine
  var imgThreshold = 260;
  var imgLen = imgAll.length;

  // setTiemout sets acceptable delay of rendering process
  setTimeout(function () {

    // if there's only one image
    if (imgAll[0] !== undefined && imgAll[1] === undefined) {

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
        if (imgAll[0].clientHeight > imgThreshold && imgAll[1].clientHeight < imgThreshold) {

          imgAll[0].classList.add('img-blur-1');
          console.log('img 0: blur 1');

          for (var i = 1; i < imgLen; i += 1) {
            imgAll[i].classList.add('img-blur-2');
          }
          console.log('img rest: blur 2');
        }

        // when all images are not loading fast enough
        else if (imgAll[0].clientHeight < imgThreshold && imgAll[1].clientHeight < imgThreshold) {

            imgAll[0].classList.add('img-blur-2');
            console.log('img 0: blur 2');

            for (var i = 1; i < imgLen; i += 1) {
              imgAll[i].classList.add('img-blur-3');
            }
            console.log('img rest: blur 3');
          }
      }
  }, 100);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLWJsdXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxBQUFDLENBQUEsWUFBVzs7O0FBR1osTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQzs7Ozs7Ozs7QUFBQyxBQVF0RCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUM7QUFDekIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU07OztBQUFDLEFBRzdCLFlBQVUsQ0FBQyxZQUFXOzs7QUFHcEIsUUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUN6QixNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFOztBQUV6QixhQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7Ozs7QUFBQyxBQUkxRCxVQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsWUFBWSxFQUFFOztBQUV6QyxjQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0QyxlQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO09BQzlCOzs7O0FBQ0YsU0FHSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7O0FBRTlCLGVBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzFELGVBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQzs7O0FBQUMsQUFHNUQsWUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLFlBQVksSUFDdkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxZQUFZLEVBQUU7O0FBRXZDLGdCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0QyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7QUFFN0IsZUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFHO0FBQ3BDLGtCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztXQUN2QztBQUNELGlCQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Ozs7QUFDakMsYUFHSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsWUFBWSxJQUM1QyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLFlBQVksRUFBRTs7QUFFdkMsa0JBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3RDLG1CQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDOztBQUU3QixpQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFHO0FBQ3BDLG9CQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN2QztBQUNELG1CQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7V0FDakM7T0FDRjtHQUVGLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FFUCxDQUFBLEVBQUUsQ0FBRSIsImZpbGUiOiJpbWFnZS1ibHVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuIFxuLy8gc2VsZWN0IGFsbCBpbWFnZXMgaW4gcGFnZSBjb250ZW50ICBcbmNvbnN0IGltZ0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3N0IGltZycpO1xuXG4vLyBzZXQgaW1hZ2UgdXBsb2FkIHRocmVzaG9sZCBcbi8vIC0gbWluaW11bSBoZWlnaHQgKGluIHB4KSBvZiBJTUcgZWxlbWVudCB3aGljaCBzaWduYWxzIHRoYXRcbi8vIGltYWdlIGlzIGF0IGxlYXN0IHBhcnRseSB1cGxvYWRlZFxuLy8gXG4vLyBpbiBteSBDU1MsIG1pbi4gSU1HIGhlaWdodCBpcyBzZXQgYXQgMjUwcHhcbi8vIHNvIDI2MCB0aHJlc2hvbGQgd2lsbCBiZSBmaW5lIFxuY29uc3QgaW1nVGhyZXNob2xkID0gMjYwO1xuY29uc3QgaW1nTGVuID0gaW1nQWxsLmxlbmd0aDtcblxuLy8gc2V0VGllbW91dCBzZXRzIGFjY2VwdGFibGUgZGVsYXkgb2YgcmVuZGVyaW5nIHByb2Nlc3NcbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgLy8gaWYgdGhlcmUncyBvbmx5IG9uZSBpbWFnZVxuICBpZiAoaW1nQWxsWzBdICE9PSB1bmRlZmluZWQgJiZcbiAgICBpbWdBbGxbMV0gPT09IHVuZGVmaW5lZCkge1xuXG4gICAgY29uc29sZS5sb2coXCJpbWcgMCB0aHJlc2hvbGQ6IFwiICsgaW1nQWxsWzBdLmNsaWVudEhlaWdodCk7XG4gICAgXG4gICAgLy8gaWYgaXQncyBub3QgbG9hZGluZyBmYXN0IGVub3VnaCwgXG4gICAgLy8gYWRkIHByb3BlciBibHVyIGFuaW1hdGlvblxuICAgIGlmIChpbWdBbGxbMF0uY2xpZW50SGVpZ2h0IDwgaW1nVGhyZXNob2xkKSB7XG5cbiAgICAgIGltZ0FsbFswXS5jbGFzc0xpc3QuYWRkKCdpbWctYmx1ci0xJyk7ICAgXG4gICAgICBjb25zb2xlLmxvZygnaW1nIDA6IGJsdXIgMScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZXJlIGFyZSB0d28gb3IgbW9yZSBpbWFnZXMsIGFkZCBwcm9wZXIgYmx1ciBhbmltYXRpb25zIFxuICBlbHNlIGlmIChpbWdBbGxbMV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhcImltZyAwIHRocmVzaG9sZDogXCIgKyBpbWdBbGxbMF0uY2xpZW50SGVpZ2h0KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW1nIDEgdGhyZXNob2xkOiBcIiArIGltZ0FsbFsxXS5jbGllbnRIZWlnaHQpO1xuXG4gICAgLy8gd2hlbiBvbmx5IGZpcnN0IGltYWdlIGlzIGxvYWRpbmcgZmFzdCBlbm91Z2hcbiAgICBpZiAoaW1nQWxsWzBdLmNsaWVudEhlaWdodCA+IGltZ1RocmVzaG9sZCAmJlxuICAgICAgaW1nQWxsWzFdLmNsaWVudEhlaWdodCA8IGltZ1RocmVzaG9sZCkge1xuXG4gICAgICBpbWdBbGxbMF0uY2xhc3NMaXN0LmFkZCgnaW1nLWJsdXItMScpOyAgIFxuICAgICAgY29uc29sZS5sb2coJ2ltZyAwOiBibHVyIDEnKTtcblxuICAgICAgZm9yICggbGV0IGkgPSAxOyBpIDwgaW1nTGVuOyBpICs9IDEgKSB7XG4gICAgICAgIGltZ0FsbFtpXS5jbGFzc0xpc3QuYWRkKCdpbWctYmx1ci0yJyk7ICAgXG4gICAgICB9ICAgXG4gICAgICBjb25zb2xlLmxvZygnaW1nIHJlc3Q6IGJsdXIgMicpO1xuICAgIH1cblxuICAgIC8vIHdoZW4gYWxsIGltYWdlcyBhcmUgbm90IGxvYWRpbmcgZmFzdCBlbm91Z2hcbiAgICBlbHNlIGlmIChpbWdBbGxbMF0uY2xpZW50SGVpZ2h0IDwgaW1nVGhyZXNob2xkICYmXG4gICAgICBpbWdBbGxbMV0uY2xpZW50SGVpZ2h0IDwgaW1nVGhyZXNob2xkKSB7XG5cbiAgICAgIGltZ0FsbFswXS5jbGFzc0xpc3QuYWRkKCdpbWctYmx1ci0yJyk7ICAgXG4gICAgICBjb25zb2xlLmxvZygnaW1nIDA6IGJsdXIgMicpO1xuXG4gICAgICBmb3IgKCBsZXQgaSA9IDE7IGkgPCBpbWdMZW47IGkgKz0gMSApIHtcbiAgICAgICAgaW1nQWxsW2ldLmNsYXNzTGlzdC5hZGQoJ2ltZy1ibHVyLTMnKTsgICBcbiAgICAgIH0gICBcbiAgICAgIGNvbnNvbGUubG9nKCdpbWcgcmVzdDogYmx1ciAzJyk7XG4gICAgfVxuICB9XG5cbn0sIDEwMCk7XG5cbn0oKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
