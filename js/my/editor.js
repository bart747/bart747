var exports = module.exports = {};

(function () {
"use strict";
const doc = document;
const editors = doc.getElementsByClassName("editable");       
console.log(editors[0]);

const editorBtnCss = {
  edit:     "editor-btn-edit",
  waiting:  "editor-btn-waiting",
  save:     "editor-btn-save"
};

const note = `Joey seems interested in the Pro plan.
              He was talking about organizing his team.
              I'll meet with him tomorrow.`;

const editorWriter = {
  on:           false,
  content:      "*empty note*",
};


const editorReader = {
  on:           true,
  content:      "*empty note*",
};

const dateNames = {
  recent:   "just a moment ago",
  days1:    "1 day ago",
  days2:    "2 days ago"
  // ... 
};


const reader = doc.createElement("div");
const newNote = doc.createTextNode(note);
reader.classList.add("editor-reader");
reader.appendChild(newNote); 

const writer = doc.createElement("div");
const newNoteCopy = doc.createTextNode(note);
writer.classList.add("editor-writer");
writer.setAttribute("contenteditable", "true");
writer.appendChild(newNoteCopy);

const editorFragment = document.createDocumentFragment();
editorFragment.appendChild(reader); 
editorFragment.appendChild(writer);
editors[0].appendChild(editorFragment);  

let writerContent = writer.textContent;
editorWriter.content = writer.textContent;
console.log("writer content: " + editorWriter.content);

})();