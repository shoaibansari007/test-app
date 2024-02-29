"use strict";

const menuSection = document.querySelector(".menu-section");
const menuOpenBtn = document.querySelector(".menuOpenBtn");
const menuCloseBtn = document.querySelector(".menuCloseBtn");

// Menu Toggles
const openMenu = function () {
  menuSection.classList.remove("hide");
};

const closeMenu = function () {
  menuSection.classList.add("hide");
};

menuOpenBtn.addEventListener("click", openMenu);
menuCloseBtn.addEventListener("click", closeMenu);

const toggleBoxFn = function () {
  toggleBox.classList.toggle("hide");
  console.log("click map");
};

// Map Pointers

const mapPoints = document.querySelectorAll(".mapPoint");

mapPoints.forEach(function (item) {
  const mapBtn = item.querySelector(".mapBtn");

  mapBtn.addEventListener("click", function () {
    item.classList.toggle("active");
    item.classList.add("z-20");

    mapPoints.forEach(function (otherItem) {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        otherItem.classList.remove("z-20");
      }
    });
  });
});
