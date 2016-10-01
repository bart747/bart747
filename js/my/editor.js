(function () {
"use strict";

const l = require('./editorLogic');

const doc = document;
const editors = doc.getElementsByClassName("editable");       
console.log(editors[0]);

const editorCSS = {
  window: "editor-window",
  writer: "editor-writer",
  reader: "editor-reader",
};

const btnCSS = {
  edit:     "editor-btn-edit",
  waiting:  "editor-btn-waiting",
  save:     "editor-btn-save",
  cancel:   "editor-btn-cancel",
};

const CSShidden = "hidden";

// states are mutable
const writerState = {
  display:     false, // initial
  content:     "*empty note*", // initial
};

const readerState = {
  display:     true, // initial
  content:     "*empty note*", // initial
};

const btnState = {
  save:        false, // initial
};

const dateNames = {
  recent:   "just a moment ago",
  days1:    "1 day ago",
  days2:    "2 days ago"
  // ... 
};

const note = `Joey seems interested in the Pro plan.
              He was talking about organizing his team.
              I'll meet with him tomorrow.`;

readerState.content = note; 
writerState.content = note; 

// creater reader window
const readerUi = doc.createElement( "div" );
const newNote = doc.createTextNode( readerState.content );
readerUi.classList.add( editorCSS.reader );
readerUi.appendChild( newNote );

// creater writer window
const writerUi = doc.createElement("div");
const newNoteCopy = doc.createTextNode( writerState.content );
writerUi.classList.add( editorCSS.writer );
writerUi.setAttribute( "contenteditable", "true" );
writerUi.appendChild( newNoteCopy );

// append reader and writer to editor window
let editorWindow = editors[0].getElementsByClassName( editorCSS.window );
const editorFragment = document.createDocumentFragment();
editorFragment.appendChild( readerUi ); 
editorFragment.appendChild( writerUi );
editorWindow[0].appendChild( editorFragment );  


function showEditorState() {

  if (readerState.display === true) {
    writerUi.classList.add( CSShidden );
    readerUi.classList.remove( CSShidden );
  } else {
    writerUi.classList.remove( CSShidden );
    readerUi.classList.add( CSShidden ); 
  }
}
showEditorState();

function editorToggle() {
  // change states
  writerState.display = l.toggleBool( writerState.display );
  readerState.display = l.toggleBool( readerState.display );
  btnState.save = l.toggleBool( btnState.save );
  //console.log("writer disp: " + writerState.display);
  //console.log("reader dips: " + readerState.display);
  //console.log("button save: " + btnState.save);
  
  // show right window
  showEditorState();

  // transform buttons (edit/save)
  if (btnState.save === true) {
    btn[0].classList.add( btnCSS.save );
    btnCancel[0].classList.remove( CSShidden );
  } else {
    btn[0].classList.remove( btnCSS.save );
    btnCancel[0].classList.add( CSShidden );
  }
}

function editorSave() {
  if (btnState.save === true) {
    readerState.content = l.getUpdatedContent(readerState.content,
                                              writerUi.textContent);
    // console.log(readerState.content);
    readerUi.textContent = readerState.content;
  }
}

function editorUpdate() {
  writerState.content = readerState.content;
  writerUi.textContent = writerState.content;
}

let btn = editors[0].getElementsByClassName( btnCSS.edit );
let btnCancel = editors[0].getElementsByClassName( btnCSS.cancel );

// create edit button functionality
btn[0].addEventListener('click', _=> {
  editorSave();
  editorUpdate();
  editorToggle();
});

// create cancel btn functionality
btnCancel[0].addEventListener('click', _=> {
  editorToggle(); 
});

})();