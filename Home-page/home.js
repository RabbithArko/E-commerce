$(document).ready(() => {
  $(".home__banner").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".home__secondBanner").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  
  });
});


var logInpopUp = document.querySelector('.login-popup');
var profile = document.querySelector('.profile__header');
var closePopup = document.querySelector('.cross-btn');
const bgccolor = document.querySelector('.overlay');

profile.addEventListener('click', function(){
  // logInpopUp.style.display = 'block';
  logInpopUp.classList.add('from-top')
  bgccolor.style.display = 'block'
})
closePopup.addEventListener('click', function(){
  // logInpopUp.style.display = 'none';
  logInpopUp.classList.remove('from-top')
  bgccolor.style.display = 'none'
})

// More products show
document.querySelector(".see__moreBtn").addEventListener("click", () => {
  let hiddenCard = document.getElementsByClassName("hidden__card");

  for (let i=0; i<hiddenCard.length; i++) {
    hiddenCard[i].style.display = "flex";
  }

  document.querySelector(".see__moreProductBtn").style.display = "none";

  document.querySelector(".home__productBottom").style.marginTop = "3rem";
});

// Mouse hover effect
function onMouseOver(e) {
  e.setAttribute("data-icon", "ant-design:heart-filled");
}

function onMouseOut(e) {
  e.setAttribute("data-icon", "ant-design:heart-outlined");
}