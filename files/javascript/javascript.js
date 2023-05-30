let hamburger = document.getElementById("navIconHitbox");
const mobileNavigation = document.getElementById("MobileNavigation");



// Mobile Navigation
let isOpened = false;
let footerOpened = null;
const footerNameText = "Särkioja Aron 2023 ©";
const headerNameText = "Särkioja Aron";

// Collapses (Syntax example: "11" = 1_1 = html1 - collapse 1)
var collapses = {
  // Collapses (HOME PAGE)
  collapse11: true,
  collapse12: true,
  collapse13: true,
  collapse14: true,
  collapse15: true,

  // Collapses (KNOWLEDGE PAGE)
  collapse31: true,
  collapse32: true,

  // Collapses (ABOUT ME PAGE)
  collapse21: true,
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
  // File end type
  const end = ".html"

  // List of windows in the e-portfolio
  const windows = {
    1: "about-me",
    2: "knowledge",
    3: "professions",
    4: "contact-me"
  }
  
  // Check if id is in windows-const
  if(id in windows){
    window.location.href = windows[id] + end;
  }

  // If it isn't, navigate to Home
  else
  {
    window.location.href = "e-portfolio" + end;
  }
}

// On Window load: (smooth fade and set up things)
document.addEventListener('DOMContentLoaded', function () {
  // Set-up variables:
  const footerElement = document.getElementById("footerText");
  const openBtn = document.getElementById("FooterCloseButton");
  var siteContent = document.getElementById('transition-fade');
  var footerTextElement = document.getElementById("footerName");
  var headerTextElement = document.getElementById("headerTitle");

  // Check if in localstorage the Contact Me-window's inputs arent null
  if (document.title === "Contact Me, Aron Särkioja") {
    console.log(document.title)
    if (localStorage.getItem("firstName") && localStorage.getItem("lastName") && localStorage.getItem("email") && localStorage.getItem("message") !== null) {
      loadInputs();
    }
    else {
      localStorage.setItem("firstName", "")
      localStorage.setItem("lastName", "")
      localStorage.setItem("email", "")
      localStorage.setItem("message", "")
      console.log("couldn't find any saved data so they were created :)")
    }
  }
  else {
    console.log("not Contact me page")
  }


  // Code that detects if the footer has been opened or closed before (takes the info from memory) and closes or opens it when page is loaded. 
  if (localStorage.getItem("footerElement") !== null) {
    footerOpened = JSON.parse(localStorage.getItem("footerElement"));
    console.log("in memory, the value for footerOpened is (" + localStorage.getItem("footerElement") + ") and in the script it has been set to (" + footerOpened + ")! ")
  }
  // If nothing has been found from the memory, log that to the console and set footerOpened to false.
  else {
    footerOpened = false;
    console.log("didnt find footerOpened from memory")
  }

  // Check if it is true, if it is, open footer and if its not, close the footer.
  if (!footerOpened) {
    footerElement.style.transform = "translateY(50px)";
    openBtn.classList.add("start");
    openBtn.classList.remove("finish");
    console.log("footer ---> (isnt opened) :)");
  }
  else if (footerOpened) {
    footerElement.style.transform = "translateY(0px)";
    openBtn.classList.add("finish");
    openBtn.classList.remove("start");
    console.log("footer ---> (is opened)");
  }
  // If error occurred and it is neither, log this:
  else {
    console.log("footer is not true or false! lmao! it is " + footerOpened);
  }

  // Smooth load:
  siteContent.style.opacity = '1';

  // Set up footer's text for the name
  footerTextElement.innerHTML = footerNameText;

  // Set up header's text for the name
  headerTextElement.innerHTML = headerNameText;

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
      if (useCollapseMarks) {
        currentCollapseText.innerHTML = openedCollapseMark + " " + name + " " + openedCollapseMark;
      }

    } else {
      currentCollapse.classList.remove("flex-display");
      currentCollapse.classList.add("hidden");
      if (useCollapseMarks) {
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
function footerCloseOpen() {
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
  localStorage.setItem("footerElement", footerOpened);
  console.log("footer is: ---(" + footerOpened + ")---")
}

function pressedSocials(id) {

  // List of my socials
  const socials = {
    1: "https://github.com/Arskiz",         // Github
    2: "https://mail.google.com/mail/u/0/#inbox?compose=new",  // Email's url
    3: "Arskiz#3257",                       // Discord
    4: "+358 400 291 062",                  // Phone
    5: "aronsarkioja7@gmail.com"            // Email
  };

  // If id is in socials-list:
  if (id in socials) {
    const social = socials[id];
    if (id == 1) {
      window.location.href = social;
    }
    if (id === 2) {
      alert("Send an email to: " + socials[5] + "!");
      window.location.href = social;
    } else if (id === 4) {
      alert("Add me on WhatsApp/Telegram or send me a message to this number: " + social);
    } else if (id === 3) {
      alert("Add me on Discord: " + social);
    }
  // If it isn't, alert that the id isn't supported
  } else {
    alert("Unsupported ID!");
  }
}

// Save Contact Me's variables to localStorage
function saveInputs() {
  const empty = null;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (firstName !== empty || "") {
    localStorage.setItem("firstName", firstName);
  }
  if (lastName !== empty || "") {
    localStorage.setItem("lastName", lastName);
  }
  if (email !== empty || "") {
    localStorage.setItem("email", email);
  }
  if (message !== empty || "") {
    localStorage.setItem("message", message);
  }
}

// Load Contact Me's variables from localStorage
function loadInputs() {
  document.getElementById("firstName").value = localStorage.getItem("firstName");
  document.getElementById("lastName").value = localStorage.getItem("lastName");
  document.getElementById("email").value = localStorage.getItem("email");
  document.getElementById("message").value = localStorage.getItem("message");
  console.log("Values Loaded!")
}

// If game is pressed, then:
function gamePressed(id) {
  const games = {
    1: "Avaruuspeli",
    2: "COMING SOON",
    3: "COMING SOON"
  }

  // If the id is in the games-list
  if (id in games) {
    if(id === 1)
      redirect("../images/games/Avaruuspeli.png");
    else if (id == 2)
      redirect("../images/games/Avaruuspeli.png");
  }
}

function redirect(site){
  window.location.href = site;
}

var game1LinkText = document.getElementById("game1Link");
game1LinkText.onmouseover = handleGame1ElementHover("yes");
game1LinkText.innerHTML = "Avaruuspeli";

function handleGame1ElementHover(status){
  if(status === "yes"){
    game1LinkText.innerHTML = "[ Click to redirect ]";
  }
  else
  {
    game1LinkText.innerHTML = "Avaruuspeli";
  }
}
