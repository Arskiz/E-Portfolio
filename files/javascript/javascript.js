let hamburger = document.getElementById("navIconHitbox");
const mobileNavigation = document.getElementById("MobileNavigation");
let isOpened = false;


function navOpenClose(){
  if (isOpened) {
    const mobileNavigation = document.getElementById("MobileNavigation");
    mobileNavigation.classList.remove("flex-display");
    mobileNavigation.classList.add("hidden");
  }
  else
  {
    const mobileNavigation = document.getElementById("MobileNavigation");
    mobileNavigation.classList.remove("hidden");
    mobileNavigation.classList.add("flex-display"); 
  }
  isOpened = !isOpened;
}

function goToHTML(id) {
  if (id != 999) {
    const windowKey = ("window" + id + ".html");
    window.location.href = windowKey;
  }
  else {
    if (window.location.pathname !== "/e-portfolio.html") {
      window.location.href = "e-portfolio.html";
    }
  }
}

//Smooth animation on window load
document.addEventListener('DOMContentLoaded', function() {
  var siteContent = document.getElementById('transition-fade');
  siteContent.style.opacity = '1';
});
