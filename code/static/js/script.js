const menu = document.querySelector(".menu");
const slideout = document.querySelector(".menu-slideout");

// console.log("menu btn is "+ menu);

menu.addEventListener("click", (event) => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    slideout.classList.remove("open");
  }else {
    menu.classList.add("open");
    slideout.classList.add("open");
  }
})
