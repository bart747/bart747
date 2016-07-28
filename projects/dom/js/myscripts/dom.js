(function() {

//
// debug 
//
 
const dbg = {
  isOn:  true,
  log:   function(trigger, action, description) {
           if (this.isOn === true) {
             console.log(description);
             console.log(trigger);
             console.log(action);
           }
         }
};

//
// button
//

const sandbox1 = document.getElementById("dom-sandbox-1");
const btn1 = document.createElement("button");
sandbox1.appendChild(btn1);

//---------
const sandbox2 = document.getElementById("dom-sandbox-2");
const btn2 = document.createElement("button");
const textBtn2 = document.createTextNode("I'm Clickable");
btn2.appendChild(textBtn2);
sandbox2.appendChild(btn2);

//
// document fragment
//
const sandbox3 = document.getElementById("dom-sandbox-3");
const fragment = document.createDocumentFragment();
// css classes that select icons
const iconClasses = ["ion-paper-airplane",
                     "ion-plane",
                     "ion-jet"];

iconClasses.forEach(el => {
  let span = document.createElement("span");
  span.classList.add("icon", el);
  fragment.appendChild(span);
});

sandbox3.appendChild(fragment);

//------------
const sandbox4 = document.getElementById("dom-sandbox-4");
const fragmentBig = document.createDocumentFragment();

const skySet = ["ion-paper-airplane",
                "ion-plane",
                "ion-jet"];
const roadSet = ["ion-android-bicycle",
                 "ion-android-car",
                 "ion-android-bus"];

const skyDiv = document.createElement("div");
const roadDiv = document.createElement("div");

skySet.forEach(el => {
  let span = document.createElement("span");
  span.classList.add("icon", el, "blue");
  skyDiv.appendChild(span);
});

roadSet.forEach(el => {
  let span = document.createElement("span");
  span.classList.add("icon", el, "orange");
  roadDiv.appendChild(span);
});

fragmentBig.appendChild(skyDiv);
fragmentBig.appendChild(roadDiv);
sandbox4.appendChild(fragmentBig);


//
// event listeners
//

const sandbox5 = document.getElementById("dom-sandbox-5");
const btnSky = document.getElementById("btnSky");
const btnRoad = document.getElementById("btnRoad");

function showSky() {
  skySet.forEach(el => {
    let span = document.createElement("span");
    span.classList.add("icon", el, "blue");
    sandbox5.appendChild(span);
  });
}

function showRoad() {
  roadSet.forEach(el => {
    let span = document.createElement("span");
    span.classList.add("icon", el, "orange");
    sandbox5.appendChild(span);
  });
}

btnSky.addEventListener("click", showSky);
btnRoad.addEventListener("click", showRoad);


//------------

const sandbox6 = document.getElementById("dom-sandbox-6");
const btnPlane = document.getElementById("btnPlane");
const btnCar = document.getElementById("btnCar");

function planeToggle() {
  let iconPlane = document.getElementsByClassName("iconPlane");

  if (iconPlane[0]) {
    iconPlane[0].classList.toggle("hidden");
  }
  else {
    let span = document.createElement("span");
    span.classList.add("icon", "iconPlane", "ion-plane", "blue");
    sandbox6.appendChild(span);
  }
  dbg.log(this, iconPlane[0], "show plane icon on button click");
}

function carToggle() {
  let iconCar = document.getElementsByClassName("iconCar");

  if (iconCar[0]) {
    iconCar[0].classList.toggle("hidden");
  }
  else {
    let span = document.createElement("span");
    span.classList.add("icon", "iconCar", "ion-android-car", "orange");
    sandbox6.appendChild(span);
  }
  dbg.log(this, iconCar[0], "show car icon on button click");
}

btnPlane.addEventListener("click", planeToggle);
btnCar.addEventListener("click", carToggle);



}());
