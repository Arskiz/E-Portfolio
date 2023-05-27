let hamburger = document.getElementById("navIconHitbox");
const mobileNavigation = document.getElementById("MobileNavigation");



// Mobile Navigation
let isOpened = false;
let footerOpened = null;

// Footer

if(localStorage.getItem("footerStatus") != null){
  footerOpened = localStorage.getItem("footerStatus");
  console.log("footerOpened = " + footerOpened);
  console.log("EI OLE NULL!!")
  console.log("footerOpened in localstorage = " + localStorage.getItem("footerStatus"));
}
else
{
  footerOpened = true;
  console.log("footerOpened = " + footerOpened);
  console.log("SE ON NULL!!")
  console.log("footerOpened in localstorage = " + localStorage.getItem("footerStatus"));
}




var collapses = {
// Collapses (HOME PAGE)
collapse1_1: false,
collapse1_2: false,
collapse1_3: false,
collapse1_4: false,
collapse1_5: false,

// Collapses (PROFESSIONS PAGE)
collapse4_1: false,
};


let openedCollapseMark = "v";
let closedCollapseMark1 = "< ";
let closedCollapseMark2 = " >";



let originalText = null;

// Open-Close for mobile navigation menu
function navOpenClose() {
  // Boolean check for the open/close-button
  if (isOpened) {
    const mobileNavigation = document.getElementById("MobileNavigation");
    var siteContent = document.getElementById('transition-fade-menu');
    siteContent.style.opacity = '0';
    if (siteContent.style.opacity === "0") {
      mobileNavigation.classList.remove("flex-display");
      mobileNavigation.classList.add("hidden");
    }
  }
  else {
    const mobileNavigation = document.getElementById("MobileNavigation");
    var siteContent = document.getElementById('transition-fade-menu');
    siteContent.style.opacity = '1';
    if (siteContent.style.opacity === "1") {
      mobileNavigation.classList.remove("hidden");
      mobileNavigation.classList.add("flex-display");
    }
  }
  isOpened = !isOpened;
}

// Navigate to a html-document by id
function goToHTML(id) {
  // If the id is not 999, navigate to the window with the id
  if (id != 999) {
    const windowKey = ("window" + id + ".html");
    window.location.href = windowKey;
  }
  // If it is however, navigate to home
  else {
    window.location.href = "e-portfolio.html";
  }
}

// Smooth animation on window load
document.addEventListener('DOMContentLoaded', function () {
  var siteContent = document.getElementById('transition-fade');
  siteContent.style.opacity = '1';
});

// Collapse's own handling function
function collapseItem(id, name) {
  // Set up variables
  const togglerText = "collapse" + id + "MainToggler";
  const div = "collapse" + id;
  
  // Find the variables from the document
  const currentCollapse = document.getElementById(div);
  const currentCollapseText = document.getElementById(togglerText);

  if (currentCollapse && currentCollapseText) {
    // Boolean check for the collapse
    if (collapses["collapse" + id] !== true) {
      currentCollapse.classList.remove("hidden");
      currentCollapse.classList.add("flex-display");
      currentCollapseText.innerHTML = openedCollapseMark + " " + name + " " + openedCollapseMark;
    } else {
      currentCollapse.classList.remove("flex-display");
      currentCollapse.classList.add("hidden");
      currentCollapseText.innerHTML = closedCollapseMark1 + name + closedCollapseMark2;
    }

    collapses["collapse" + id] = !collapses["collapse" + id];
  } else {
    console.log("Element with id", div, "or", togglerText, "not found. look for them in html lol");
  }
}

// Handle footer's open and close
function footerCloseOpen(){
  const openBtn = document.getElementById("FooterCloseButton");
  const footerElement = document.getElementById("footerText");

  if(footerOpened) {
    footerElement.style.transform = "translateY(50px)";
    openBtn.classList.remove("finish");
    openBtn.classList.add("start");
  }
  else if(!footerOpened)
  {
    footerElement.style.transform = "translateY(0px)";
    openBtn.classList.remove("start");
    openBtn.classList.add("finish");
  }
  footerOpened = !footerOpened;
  localStorage.setItem("footerStatus", footerOpened);

  console.log("footerOpened = " + footerOpened);
  console.log("footerOpened in localstorage = " + localStorage.getItem("footerStatus"));
}

function pressedSocials(id){
  const email = "aronsarkioja7@gmail.com";

  // 1 = Github
  const github = "https://github.com/Arskiz";
  // 2 = Email
  const mail = "https://mail.google.com/mail/u/0/#inbox?compose=new";
  // 3 = Discord
  const discord = "Arskiz#3257";
  // 4 = Phone
  const phone = "+358 400 291 062";

  if(id === 1){
    window.location.href = github;
  }
  else if(id === 2){
    alert("Send email to: " + email + "!");
    window.location.href = mail;
  }
  else if(id === 3){
    alert("Add me in discord: " + discord);
  }
  else if(id === 4){
    alert("Add me in WhatsApp / Telegram or send me a message to this number: " + phone);
  }
  else
  {
    alert("Not supported id!")
  }
}