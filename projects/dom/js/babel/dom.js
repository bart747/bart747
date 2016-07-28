"use strict";

(function () {

  //
  // button
  //

  var sandbox1 = document.getElementById("dom-sandbox-1");
  var btn1 = document.createElement("button");
  sandbox1.appendChild(btn1);

  //---------
  var sandbox2 = document.getElementById("dom-sandbox-2");
  var btn2 = document.createElement("button");
  var textBtn2 = document.createTextNode("I'm Clickable");
  btn2.appendChild(textBtn2);
  sandbox2.appendChild(btn2);

  //
  // document fragment
  //
  var sandbox3 = document.getElementById("dom-sandbox-3");
  var fragment = document.createDocumentFragment();
  // css classes that select icons
  var iconClasses = ["ion-paper-airplane", "ion-plane", "ion-jet"];

  iconClasses.forEach(function (el) {
    var span = document.createElement("span");
    span.classList.add("icon", el);
    fragment.appendChild(span);
  });

  sandbox3.appendChild(fragment);

  //------------
  var sandbox4 = document.getElementById("dom-sandbox-4");
  var fragmentBig = document.createDocumentFragment();

  var skySet = ["ion-paper-airplane", "ion-plane", "ion-jet"];
  var roadSet = ["ion-android-bicycle", "ion-android-car", "ion-android-bus"];

  var skyDiv = document.createElement("div");
  var roadDiv = document.createElement("div");

  skySet.forEach(function (el) {
    var span = document.createElement("span");
    span.classList.add("icon", el, "blue");
    skyDiv.appendChild(span);
  });

  roadSet.forEach(function (el) {
    var span = document.createElement("span");
    span.classList.add("icon", el, "orange");
    roadDiv.appendChild(span);
  });

  fragmentBig.appendChild(skyDiv);
  fragmentBig.appendChild(roadDiv);
  sandbox4.appendChild(fragmentBig);

  //
  // event listeners
  //

  var sandbox5 = document.getElementById("dom-sandbox-5");
  var btnSky = document.getElementById("btnSky");
  var btnRoad = document.getElementById("btnRoad");

  function showSky() {
    skySet.forEach(function (el) {
      var span = document.createElement("span");
      span.classList.add("icon", el, "blue");
      sandbox5.appendChild(span);
    });
  }

  function showRoad() {
    roadSet.forEach(function (el) {
      var span = document.createElement("span");
      span.classList.add("icon", el, "orange");
      sandbox5.appendChild(span);
    });
  }

  btnSky.addEventListener("click", showSky);
  btnRoad.addEventListener("click", showRoad);

  //------------

  var sandbox6 = document.getElementById("dom-sandbox-6");
  var btnPlane = document.getElementById("btnPlane");
  var btnCar = document.getElementById("btnCar");

  function planeToggle() {
    var iconPlane = document.getElementsByClassName("iconPlane");

    if (iconPlane[0]) {
      iconPlane[0].classList.toggle("hidden");
    } else {
      var span = document.createElement("span");
      span.classList.add("icon", "iconPlane", "ion-plane", "blue");
      sandbox6.appendChild(span);
    }
  }

  function carToggle() {
    var iconCar = document.getElementsByClassName("iconCar");

    if (iconCar[0]) {
      iconCar[0].classList.toggle("hidden");
    } else {
      var span = document.createElement("span");
      span.classList.add("icon", "iconCar", "ion-android-car", "orange");
      sandbox6.appendChild(span);
    }
  }

  btnPlane.addEventListener("click", planeToggle);
  btnCar.addEventListener("click", carToggle);
})();