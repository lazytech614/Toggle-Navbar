const menuBtn = document.querySelector("#open-menu");
const dropDownNav = document.querySelector(".drop-down-nav-container");

menuBtn.addEventListener("click", () => {
  dropDownNav.classList.toggle("open");
});
