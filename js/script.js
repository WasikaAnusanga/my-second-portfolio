let burgerBtn = document.querySelector(".burger-menu-btn");
let burgerMenu = document.querySelector(".nav-links-resp");

let isBurgerOpen = false;

burgerBtn.onclick = function () {
  if (!isBurgerOpen) {
    burgerMenu.style.display = "block";
    burgerBtn.style.backgroundPosition = "center left 50px,right";
    isBurgerOpen = true;
  } else if (isBurgerOpen) {
    burgerMenu.style.display = "none";
    burgerBtn.style.backgroundPosition = "center,right 50px";
    isBurgerOpen = false;
  }
};
