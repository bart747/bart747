(function () {

const doc = document;
const editables = []
                  .slice
                  .call(doc.getElementsByClassName("editable"));       
// console.log(editables);

const dateName = {
  recent : "just a moment ago",
  days1: "1 day ago",
  days2: "2 days ago"
}

function editModeToggle(editFields, editBtn, dateField) {

  if (editFields[0].classList.contains("edit-mode")) {

    editFields.forEach( fld => {
      fld.classList.remove("edit-mode");
      fld.setAttribute("contenteditable", "false");
    })

    editBtn.classList.remove("btn-edit-mode");
    editBtn.classList.add("btn-edit-waiting");

    // place for 'saving' code
    // than: "if (saved) {... 
    setTimeout( _=> {
      editBtn.classList.remove("btn-edit-waiting");
      editBtn.classList.add("btn-edit-done");
      dateField.innerHTML = "&nbsp; | &nbsp; edited: " + dateName.recent;
    }, 500);
    
    setTimeout( _=> {
      editBtn.classList.remove("btn-edit-done");
    }, 1500);
  }

  else {

    editFields.forEach( fld => {
      fld.classList.add("edit-mode");
      fld.setAttribute("contenteditable", "true");
    })

    editBtn.classList.add("btn-edit-mode");
  }
}

// add edit mode toggle for each editable area
editables.forEach( el => {

  let editBtn = el.getElementsByClassName("btn-edit")[0];
  let editFields = []
                   .slice
                   .call(el.getElementsByClassName("editor-field"));
  let dateField = el.getElementsByClassName("editor-date")[0];

  // console.log(btn);
  // console.log(field);
  // console.log(dateField);

  editBtn.addEventListener('click', _ => {
    editModeToggle(editFields, editBtn, dateField);  
  });


})

})();