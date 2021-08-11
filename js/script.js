"use strict";

const hamburgerEl = document.querySelector(".js--mobile-hamburger");
const closeEl = document.querySelector(".js--mobile-close");
const mobileMenuEl = document.querySelector(".js--mobile-menu");
const headerEl = document.querySelector(".js--header");

// Open Mobile Menu
hamburgerEl.addEventListener("click", function () {
  mobileMenuEl.classList.add("visible");
  mobileMenuEl.classList.remove("notVisible");
  headerEl.classList.add("notVisible");
  headerEl.classList.remove("visible");
});

// Close Mobile Menu
closeEl.addEventListener("click", function () {
  mobileMenuEl.classList.remove("visible");
  mobileMenuEl.classList.add("notVisible");
  headerEl.classList.remove("notVisible");
  headerEl.classList.add("visible");
});
