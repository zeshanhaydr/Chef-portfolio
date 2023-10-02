const btn = document.getElementById("show-btn");
const closeBtn = document.getElementById("close-btn");
const modal = document.querySelector(".modal");
const mobileNav = document.querySelector(".nav-for-mobile");

const toggle = () => {
  modal.classList.toggle("show");
  mobileNav.classList.toggle("show-nav");

  if (modal.classList.contains("show")) {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.height = "";
    document.body.style.overflow = "";
  }
};

btn.addEventListener("click", toggle);
modal.addEventListener("click", toggle);
closeBtn.addEventListener("click", toggle);
