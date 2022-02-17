//Select elements to manipulate
const menu = document.querySelector('.menu');

//Set Initial State of Menu
let showMenu = false;

//Add event listeners
window.addEventListener('load', desktopNavToggle);
window.addEventListener('resize', desktopNavToggle);

//Functions
function desktopNavToggle() {
  if(window.innerWidth < 768){
    console.log(window.innerWidth);
    menu.innerHTML = '<div class="menu-branding"><a href="index.html"><img class="menu-logo" src="assets/shared/desktop/logo.svg" alt="photosnap logo"></a></div><div class="menu-mobile-btn" onclick="mobileNavToggle();"><div class="btn-line"></div><div class="btn-line"></div></div>';
  } else {
    menu.innerHTML = '<div class="menu-branding"><a href="index.html"><img class="menu-logo" src="assets/shared/desktop/logo.svg" alt="photosnap logo"></a></div><ul class="menu-nav"><li class="nav-item"><a href="stories.html" class="nav-link">Stories</a></li><li class="nav-item"><a href="features.html" class="nav-link">Features</a></li><li class="nav-item"><a href="pricing.html" class="nav-link">Pricing</a></li></ul><div class="menu-cta"><a href="#" class="cta-link"><button class="cta-btn">Get An Invite</button></a></div>';
  } 
};

function mobileNavToggle(){
  const mobileMenuBtn = document.querySelector('.menu-mobile-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileNavContainer = document.querySelector('.mobile-nav-container');

  if(!showMenu){
    mobileMenuBtn.classList.add('close');
    mobileMenu.classList.add('show');
    mobileNavContainer.classList.add('show');

    //Set Menu State
    showMenu = true;
  } else {
    mobileMenuBtn.classList.remove('close');
    mobileMenu.classList.remove('show');
    mobileNavContainer.classList.remove('show');

    //Set Menu State
    showMenu = false;
  }
  
  
};