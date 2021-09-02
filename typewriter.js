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

let timesCalled = 0;

function initLoop() {
  console.log(len);

  document.querySelector(".typewritten").textContent = "";
  iterator = 0;
  typeSound.currentTime = 0;
  typeSound2.currentTime = 0;
  spaceSound.currentTime = 0;
  btn.addEventListener("click", function () {
    timesCalled++;
    loop();
    console.log("Called " + timesCalled + " times");
  });
}

function loop() {
  console.log("loop", iterator);
  //document.querySelector("button").disabled = true;
  if (timesCalled <= 1) {
    document.querySelector(".typewritten").textContent += text.charAt(iterator);
  }
  iterator++;
  if (iterator < maxNumberOfIterations) {
    if (text.charAt(iterator) === " ") {
      spaceSound.play();
    } else if (text.charAt(iterator) % 2 === 0) {
      typeSound.play();
    } else {
      typeSound2.play();
    }
    if (timesCalled <= 1) {
      setTimeout(loop, Math.floor(Math.random() * 100));
    } else {
      typeSound.pause();
      typeSound2.pause();
      spaceSound.pause();
      iterator = 0;
      //document.querySelector("button").disabled = false;
      document.querySelector("button").addEventListener("click", initLoop);
      timesCalled--;
    }
  }
  if (iterator >= maxNumberOfIterations) {
    typeSound.pause();
    typeSound2.pause();
    spaceSound.pause();
    iterator = 0;
    //document.querySelector("button").disabled = false;
    document.querySelector("button").addEventListener("click", initLoop);
    timesCalled--;
  }
}
