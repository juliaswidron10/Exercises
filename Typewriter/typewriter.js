"use strict";
window.addEventListener("DOMContentLoaded", resetHTML);

const selectText = document.querySelector(".typewritten").textContent;
let n = 0;

function resetHTML() {
  console.log("reset HTML");
  document.querySelector(".typewritten").textContent = "";

  initloop();
}

function initloop() {

  console.log("init-loop");
  if (n < selectText.length) {
    document.querySelector(".typewritten").textContent += selectText.charAt(n);
    n++;
    setTimeout(initloop, 150);
  }
}