let hamburger = document.getElementById("navIconHitbox");
const mobileNavigation = document.getElementById("MobileNavigation");



// Mobile Navigation
let isOpened = false;
let footerOpened = true;


var collapses = {
// Collapses (HOME PAGE) (Syntax example: "11" = 1_1 = html1 - collapse 1)
collapse11: true,
collapse12: true,
collapse13: true,
collapse14: true,
collapse15: true,

// Collapses (PROFESSIONS PAGE)
collapse41: true,
};


let openedCollapseMark = "v";
let closedCollapseMark1 = "< ";
let closedCollapseMark2 = " >";
const useCollapseMarks = false;



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
      if(useCollapseMarks){
        currentCollapseText.innerHTML = openedCollapseMark + " " + name + " " + openedCollapseMark;
      }
      
    } else {
      currentCollapse.classList.remove("flex-display");
      currentCollapse.classList.add("hidden");
      if(useCollapseMarks){
      currentCollapseText.innerHTML = closedCollapseMark1 + name + closedCollapseMark2;
      }
    }
    console.log(collapses);
    collapses["collapse" + id] = !collapses["collapse" + id];
  } else {
    console.log("Element with id", div, "or", togglerText, "not found. look for them in html lol");
  }
}

// Handle footer's open and close
function footerCloseOpen(){
  const openBtn = document.getElementById("FooterCloseButton");
  const footerElement = document.getElementById("footerText");

  if (footerOpened) {
    openBtn.classList.add("start");
    openBtn.classList.remove("finish");
    
    footerElement.style.transform = "translateY(50px)";
  } else {
    openBtn.classList.remove("start");
    openBtn.classList.add("finish");
    footerElement.style.transform = "translateY(0px)";
  }

  footerOpened = !footerOpened;
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