let hamburger = document.getElementById("navIconHitbox");
let isRotated = false;

hamburger.addEventListener("click", function() {
  if (isRotated) {
    hamburger.style.transform = "translate(0,0) rotate(90deg);";
  } else {
    hamburger.style.transform = "translate(0,0) rotate(0deg);";
  }
  isRotated = !isRotated;
});
