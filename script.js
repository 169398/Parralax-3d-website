let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

window.addEventListener("scroll", function() {
  let value = window.scrollY;

  text.style.marginTop = 50 + value * -0.5 + "%";
  leaf.style.top = value * 0.5 + "px";
  hill1.style.top = value * 0.15 + "px";
  hill4.style.top = value * 0.25 + "px";
  hill5.style.top = value * 0.5 + "px";
});



