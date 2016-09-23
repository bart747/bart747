(function () {

const editables = []
                  .slice
                  .call(document.getElementsByClassName("editable"));       
// console.log(editables);

const editBtns = []
                 .slice
                 .call(document.getElementsByClassName("btn-edit"));  
// console.log(editBtns);

editables.forEach( el => {
  let btn = el.getElementsByClassName("btn-edit")[0];
  let field = el.getElementsByClassName("edit-field")[0];
  // console.log(btn);
  btn.addEventListener('click', _ => {

    if (field.classList.contains("edit-mode")) {
      field.classList.remove("edit-mode");
      field.setAttribute("contenteditable", "false");
      btn.classList.remove("btn-edit-mode");

      // place for 'saving' code
      // than: "if (saved) {... 

      btn.classList.add("btn-edit-done");

      setTimeout( _=> {
        btn.classList.remove("btn-edit-done");
      }, 1500);
    }
    else {
      field.classList.add("edit-mode");
      field.setAttribute("contenteditable", "true");
      btn.classList.add("btn-edit-mode");
    }
    
  });
})

})();