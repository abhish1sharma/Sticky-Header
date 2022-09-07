let h1 = document.querySelector("h1");
let h1Height = h1.getBoundingClientRect().height;

window.addEventListener("scroll", function () {
  if (window.scrollY >= h1Height) {
    h1.style.position = "sticky";
    h1.style.top = "0";
    h1.style.boxShadow = "0 10px 20px 0px rgba(0 0 0 /0.8)";
    h1.style.opacity = "0.7";
  } else {
    h1.style.opacity = "1";
    h1.style.backgroundColor = "rgb(0, 70, 128)";
    h1.style.boxShadow = "0 0 0 0 transparent";
  }
});
