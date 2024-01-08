const burger = document.querySelector(".burger");
if (burger) {
  const menu = document.querySelector(".burger-menu");
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    burger.classList.toggle("_open");
    menu.classList.toggle("_active");
  });
}
