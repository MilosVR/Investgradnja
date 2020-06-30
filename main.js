const hamburger_menu = document.querySelector(".hamburger_menu");
const open_menu_icon = document.querySelector(".fa-bars");
const close_menu_icon = document.querySelector(".fa-times");
const side_menu = document.querySelector(".side_menu");
const body = document.querySelector("body");

const toggleSideMenu = (e) => {
  console.log(body);

  if (!side_menu.classList.contains("toggle_side_menu")) {
    side_menu.classList.add("toggle_side_menu");
    body.classList.add("overlay");
    close_menu_icon.style.display = "block";
    open_menu_icon.style.display = "none";
  } else {
    side_menu.classList.remove("toggle_side_menu");
    body.classList.remove("overlay");
    close_menu_icon.style.display = "none";
    open_menu_icon.style.display = "block";
  }
};

hamburger_menu.addEventListener("click", toggleSideMenu);
