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
const confirm = document.querySelector(".confirm");
const defult = document.querySelector(".defult"); //img
const colors = document.querySelectorAll(".color");
const right = document.querySelector(".icon-right");
const left = document.querySelector(".icon-left");
const fileName = document.querySelector(".file-name");
let currentPage = 1;
let itemPerPage = window.innerWidth < 640 ? 4 : 6;
const start = (currentPage - 1) * itemPerPage;

add.addEventListener("click", () => {
  popUp.style.transition = "opacity 250ms ease";
  popUp.style.opacity = "0";
  popUp.style.display = "flex";
  requestAnimationFrame(() => {
    popUp.style.opacity = "1";
  });
});

cancel.addEventListener("click", () => {
  close();
});

const close = function () {
  popUp.style.transition = "opacity 250ms ease";
  popUp.style.opacity = "0";
  defult.src = "imgs/defult-color.png";
  fileName.value = "";

  setTimeout(() => {
    popUp.style.display = "none";
  }, 250);
};

colors.forEach((color) => {
  color.addEventListener("click", () => {
    defult.src = `imgs/file-${color.dataset.color}.png`;
  });
});

confirm.addEventListener("click", () => {
  const ones = document.querySelectorAll(".one");

  //[...ones] => make ones arr, so we can navegate it well
  //.find => search into the ones arr.  an one without(!) an img?
  //an .one without image? this is the empty div we are looking for
  // no empty?  we do not have an empty div to work with
  let emptyOne = [...ones].find((one) => !one.querySelector("img"));

  //if yes an empty div, we create the thing we will put in the div
  //chosenImage is the elemnt's name we will create in html to carry the new img
  //chosenImage.src, we decided we will add an img, we need its src and its alt (html props)
  const chosenImage = document.createElement("img");
  chosenImage.src = defult.src;
  chosenImage.alt = "Flash card";
  const fileNameElement = document.createElement("div");
  fileNameElement.textContent = fileName.value;
  fileNameElement.classList.add(
    "absolute",
    "bottom-0",
    "left-0",
    "w-4/5",
    "h-1/2",
    "capitalize",
    "whitespace-nowrap",
    "truncate",
    "font-semibold",
    "text-lg", // something is wrong with the text size, couldn't figure it
    "min-[425px]:text-xl",
    "md:text-[1.3rem]",
    "lg:text-2xl",
    "text-white",
    "drop-shadow-md",
    "tracking-[0.08em]",
    "px-4",
    "pt-2",
  );

  //If emptyOne actually exists, put the image inside it.
  //emptyOne is the name of the div that hold the files
  if (emptyOne) {
    // There is an empty card already
    //put the img in it
    //emptyOne.appendChild(chosenImage);
    emptyOne.append(chosenImage, fileNameElement);
  } else {
    // All cards are full → create a new one
    //this create a whole new div (not a new .one) , not just an img
    emptyOne = document.createElement("div");

    //Give that div (.emptyOne) the same classes as your .one
    emptyOne.classList.add(
      "one",
      "w-4/5",
      "flex",
      "justify-center",
      "items-center",
      "cursor-pointer",
      "transition-transform",
      "duration-200",
      "hover:scale-105",
      "relative",
    );

    //put the img in it
    //emptyOne.appendChild(chosenImage);
    emptyOne.append(chosenImage, fileNameElement);

    //to add our new .one to .the-grid with the rest of .one
    document.querySelector(".the-grid").appendChild(emptyOne);
  }

  close();

  /*let fileNameValue = fileName.value;
  console.log(fileNameValue);
  fileNameValue.classList.add("absolute");*/

  const currentOnes = document.querySelectorAll(".one");
  currentPage = Math.ceil(currentOnes.length / itemPerPage);

  showPage();
});

function showPage() {
  const ones = document.querySelectorAll(".one");
  const start = (currentPage - 1) * itemPerPage;
  const pageItems = [...ones].slice(start, start + itemPerPage);

  // Hide all cards
  ones.forEach((one) => {
    one.classList.add("hidden");
  });

  // Show only cards belonging to this page
  pageItems.forEach((one) => {
    one.classList.remove("hidden");
  });
}

/*right.addEventListener("click", () => {
  currentPage = 2;
});*/
