(function () {
"use strict";

function editor() {

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

const dateCSS = "editor-date";
const dateNames = {
  recent:   "just a moment ago",
  days1:    "1 day ago",
  days2:    "2 days ago"
  // ... 
};

const noteDate = {
  field : editors[0].getElementsByClassName( dateCSS ),
  created: dateNames.days1,
};

const note = `Joey seems interested in the Pro plan.
              He was talking about organizing his team.
              I'll meet with him tomorrow.`;

readerState.content = note; 
writerState.content = note; 


/*
There are two separate windows: 
one for reading notes, one for editing them.
When you click an edit button, "reader" becomes hidden
and "writer" shows up
*/

// create publication date info
noteDate.field[0].textContent = "created: " + noteDate.created;

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

const btn = editors[0].getElementsByClassName( btnCSS.edit );
const btnCancel = editors[0].getElementsByClassName( btnCSS.cancel );

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
  
  // show selected window (writer or reader)
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
    writerState.content = l.getUpdatedContent(writerState.content,
                                              writerUi.textContent);
    // console.log(readerState.content);
  }
}

function saveFeedback() {
  console.log("content is saved properly (not really, it's just a demo)");
}

const nbsp = String.fromCharCode(8195);

function editorUpdate() {
  if (writerState.content !== readerState.content) {
    readerState.content = writerState.content;
    writerUi.textContent = writerState.content;
    readerUi.textContent = readerState.content;
    saveFeedback(); // do if saved on db (hard-coded here)
    noteDate.field[0].textContent = "created: " + noteDate.created + nbsp + " edited: " + dateNames.recent;
  } else {
    writerUi.textContent = writerState.content;
  }
}

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

}

if (document.getElementsByClassName("editable")[0]) {
  editor();
}
})();