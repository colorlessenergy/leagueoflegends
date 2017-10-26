let containerMenu = document.querySelector(".container-menu");
let bgMenu = document.querySelector(".menu-bg");
let bgMenuList = bgMenu.querySelector("ul");
let champGallery = document.querySelectorAll(".main-content .thumb a div");

// scroll animation happen only once
let once = false;

containerMenu.addEventListener('click', function () {
  bgMenu.classList.toggle("hidden");
  bgMenuList.classList.toggle("animateY");
  this.classList.toggle("change");
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 388 && !once) {
    console.log(champGallery);
    champGallery.forEach(function (e) {
      e.classList.toggle("appearUp");
    })
    once = true;
  }
})
