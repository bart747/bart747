(function () {
"use strict";

function editor(editor, note) {

const l = require('./editorLogic');

const doc = document;

const editorCSS = {
  window: "editor-window",
  writer: "editor-writer",
  reader: "editor-reader",
};

const btnCSS = {
  edit:     "editor-btn-edit",
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

const dateCSS = "editor-date";
const dateNames = {
  recent:   "just a moment ago",
  days1:    "1 day ago",
  days2:    "2 days ago"
  // ... 
};

const noteDate = {
  field : editor.getElementsByClassName( dateCSS ),
  created: dateNames.days1,
};

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
let editorWindow = editor.getElementsByClassName( editorCSS.window );
const editorFragment = document.createDocumentFragment();
editorFragment.appendChild( readerUi ); 
editorFragment.appendChild( writerUi );
editorWindow[0].appendChild( editorFragment );  

const btn = editor.getElementsByClassName( btnCSS.edit );
const btnCancel = editor.getElementsByClassName( btnCSS.cancel );

function editorStateToUI() {
  if (readerState.display === true) {
    writerUi.classList.add( CSShidden );
    readerUi.classList.remove( CSShidden );
  } else {
    writerUi.classList.remove( CSShidden );
    readerUi.classList.add( CSShidden ); 
  }
}
editorStateToUI();

function btnStateToUI() {
  if (btnState.save === true) {
    btn[0].classList.add( btnCSS.save );
    btnCancel[0].classList.remove( CSShidden );
  } else {
    btn[0].classList.remove( btnCSS.save );
    btnCancel[0].classList.add( CSShidden );
  }
}

function editorStateToggle() {
  // change states
  writerState.display = l.toggleBool( writerState.display );
  readerState.display = l.toggleBool( readerState.display );
  btnState.save = l.toggleBool( btnState.save );
  //console.log("writer disp: " + writerState.display);
  //console.log("reader dips: " + readerState.display);
  //console.log("button save: " + btnState.save);
}

function editorContentSave() {
  if (btnState.save === true) {
    writerState.content = l.getUpdatedContent(writerState.content,
                                              writerUi.textContent);
    // console.log(readerState.content);
  }
}

function dbFeedback() {
  // in practice there should be something that checks db message
  console.log("content is saved properly (not really, it's just a demo)");
}

const emsp = String.fromCharCode(8195);

function editorUpdate() {
  if (writerState.content !== readerState.content) {
    readerState.content = writerState.content;
    writerUi.textContent = writerState.content;
    readerUi.textContent = readerState.content;
    dbFeedback();
    noteDate.field[0].textContent = "created: " + noteDate.created + emsp + " edited: " + dateNames.recent;
  } else {
    writerUi.textContent = writerState.content;
  }
}

// create edit button functionality
btn[0].addEventListener('click', _=> {
  editorContentSave();
  editorUpdate();
  editorStateToggle();
  editorStateToUI();
  btnStateToUI();
});

// create cancel btn functionality
btnCancel[0].addEventListener('click', _=> {
  editorStateToggle();
  editorStateToUI();
  btnStateToUI();
});

}
// END --------------------------

// run editor only if needed
if (document.getElementsByClassName("editable")[0]) {

  const note1 = `Joey seems interested in the Pro plan.
              He was talking about organizing his team.
              I'll meet with him tomorrow.`;
  const editors = document.getElementsByClassName("editable");       
  editor(editors[0], note1);
}
})();