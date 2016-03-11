(function() {

const switchEls = document
  .getElementsByClassName('is-switchable')

const switchArr = [].slice.call(switchEls)

function addListener(el) {
  el.addEventListener('click', event =>
    el.classList.toggle('is-on'))
    // other actions
}

switchArr.forEach(addListener)

}())
