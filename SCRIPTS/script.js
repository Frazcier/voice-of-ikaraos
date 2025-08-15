document.addEventListener("DOMContentLoaded", function() {
    box = new LetMeScroll({
     selector: "#main",
     config : {
           dimensions : {
               width : "auto",
               height : "auto"
           },
           scroll : {
             bottomOffset: 0,
             autoHide: true
           }
     }
   });
});

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
})