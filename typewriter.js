"use strict";

window.addEventListener("DOMContentLoaded", initLoop);
let text = document.querySelector(".typewritten").textContent.trim();

let maxNumberOfIterations;
let iterator = 0;
const len = text.length;

maxNumberOfIterations = len;

let typeSound = document.querySelector("#typekey1");
let typeSound2 = document.querySelector("#typekey2");
let spaceSound = document.querySelector("#typespace");
let btn = document.querySelector("button");
function initLoop() {
  console.log(len);

  document.querySelector(".typewritten").textContent = "";

  typeSound.currentTime = 0;
  btn.addEventListener("click", loop);
}

function loop() {
  console.log("loop", iterator);

  if (iterator < maxNumberOfIterations) {
    document.querySelector(".typewritten").textContent += text.charAt(iterator);
    iterator++;

    typeSound.play();
    if (text.charAt(iterator) === " ") {
      spaceSound.play();
    } else if (text.charAt(iterator) % 2 === 0) {
      typeSound.play();
    } else {
      typeSound2.play();
    }
  }

  setTimeout(loop, Math.floor(Math.random() * 1000));
}
