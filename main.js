let containerMenu = document.querySelector(".container-menu");
let bgMenu = document.querySelector(".menu-bg");
let bgMenuList = bgMenu.querySelector("ul");

containerMenu.addEventListener('click', function () {
  bgMenu.classList.toggle("hidden");
  bgMenuList.classList.toggle("animateY");
  this.classList.toggle("change");
});
