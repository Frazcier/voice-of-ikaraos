
document.querySelectorAll(".nav-item").forEach(label => {
  label.addEventListener("click", () => {
    window.scrollTo({top: 0});
  });
});

window.addEventListener("scroll", () => {
  var header =  document.querySelector("header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  }
  else {
    header.classList.remove("scrolled");
  }
});

const navToggle = document.getElementById("navToggle");
document.querySelectorAll("header .col-2 .nav-item").forEach(label => {
  label.addEventListener("click", () => {
    navToggle.checked = false;
  });
});
