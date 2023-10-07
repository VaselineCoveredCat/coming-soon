"use strict";
const year = document.querySelector(".js-year");
const currentYear = new Date().getFullYear();
year.textContent = String(currentYear);
