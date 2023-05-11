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
    window.location.href = ("e-portfolio.html");
  }

}
