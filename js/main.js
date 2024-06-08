// shrink
window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

// navbar
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggleIconId");
  const navMenuId = document.getElementById("nav-menuId");
  const navBtnId = document.getElementById("nav-btnId");

  console.log(menuToggle);
  menuToggle.addEventListener("click", () => {
    navMenuId.classList.toggle("active");
    navBtnId.classList.toggle("activeBtn");
  });
});