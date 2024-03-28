"use strict";

var zoomScreen = document.querySelector(".container");
var zoom = 1;
var zoomSpeed = 0.1;
document.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    zoomScreen.style.transform = "scale(".concat(zoom += zoomSpeed, ")");
  } else {
    zoomScreen.style.transform = "scale(".concat(zoom -= zoomSpeed, ")");
  }
});