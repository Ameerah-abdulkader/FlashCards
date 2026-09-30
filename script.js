"use strict";

/*
	Before coding, outline:
	- Purpose: What should this script do?
	- Inputs: What data or user actions does it receive?
	- Output: What should happen or be displayed?
	- Steps: What is the simplest sequence to achieve it?
	- Edge cases: What could go wrong or be missing?
*/
const add = document.querySelector(".icon-add");
const popUp = document.querySelector(".popup");
const cancel = document.querySelector(".cancel");
const leftDown = document.querySelector(".leftdown");
const defult = document.querySelector(".defult"); //img
const colors = document.querySelectorAll(".color");

add.addEventListener("click", () => {
  popUp.style.transition = "opacity 250ms ease";
  popUp.style.opacity = "0";
  popUp.style.display = "flex";
  requestAnimationFrame(() => {
    popUp.style.opacity = "1";
  });
});

cancel.addEventListener("click", () => {
  popUp.style.transition = "opacity 250ms ease";
  popUp.style.opacity = "0";
  defult.src = "imgs/file-sky.png";

  setTimeout(() => {
    popUp.style.display = "none";
  }, 250);
});

colors.forEach((color) => {
  color.addEventListener("click", () => {
    defult.src = `imgs/file-${color.dataset.color}.png`;
  });
});
