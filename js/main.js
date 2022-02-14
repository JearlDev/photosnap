//Select elements to manipulate
const menu = document.querySelector('.menu');

//Add event listeners
window.addEventListener('load', desktopNavToggle);
window.addEventListener('resize', desktopNavToggle);

//Functions
function desktopNavToggle() {
  if(window.innerWidth < 768){
    console.log(window.innerWidth);
    menu.innerHTML = '<nav class="menu"><div class="menu-branding"><a href="index.html"><img class="menu-logo" src="assets/shared/desktop/logo.svg" alt="photosnap logo"></a></div><div class="menu-mobile-btn" onclick="mobileNavToggle();"><div class="btn-line"></div><div class="btn-line"></div></div></nav>';
  } else {
    menu.innerHTML = '<nav class="menu"><div class="menu-branding"><a href="index.html"><img class="menu-logo" src="assets/shared/desktop/logo.svg" alt="photosnap logo"></a></div><ul class="menu-nav"><li class="nav-item"><a href="stories.html" class="nav-link">Stories</a></li><li class="nav-item"><a href="features.html" class="nav-link">Features</a></li><li class="nav-item"><a href="pricing.html" class="nav-link">Pricing</a></li></ul><div class="menu-cta"><a href="#" class="cta-link"><button class="cta-btn">Get An Invite</button></a></div></nav>';
  } 
};

function mobileNavToggle(){
  const mobileMenuBtn = document.querySelector('.menu-mobile-btn');
  mobileMenuBtn.classList.toggle('close');
};