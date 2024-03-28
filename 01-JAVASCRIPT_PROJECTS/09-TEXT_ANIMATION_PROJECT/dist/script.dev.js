"use strict";

var heading = document.querySelector(".heading");
var text = heading.textContent;
var alpha = text.split("");
heading.textContent = "";

for (i = 0; i < alpha.length; i++) {
  heading.innerHTML += "<span>" + alpha[i] + "</span>";
}

var count = 0;
var timer = setInterval(onArrival, 50);

function onArrival() {
  var span = heading.querySelectorAll("span")[count];
  span.classList.add("fade");
  count++;
}