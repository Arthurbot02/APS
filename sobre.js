document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const menuBtn = document.querySelector(".menuBtn");
  const closeBtn = document.querySelector(".closeBtn");

  function openMenu() {
    menu.style.display = "flex";
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
  }

  function closeMenu() {
    menu.style.display = "none";
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
  }

  function checkScreenSize() {
    if (window.innerWidth > 700) {
      menu.style.display = "flex";
      menuBtn.style.display = "none";
      closeBtn.style.display = "none";
    } else {
      menu.style.display = "none";
      menuBtn.style.display = "block";
      closeBtn.style.display = "none";
    }
  }

  menuBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  window.addEventListener("resize", checkScreenSize);

  checkScreenSize();
});