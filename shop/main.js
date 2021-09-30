



const clickForOpen = document.querySelector('.hamburger-for-product');
const sideOption = document.querySelector('.for-left-showing');

const closeButton = document.querySelector('.close-btn');



clickForOpen.addEventListener('click', function(){
  sideOption.classList.add("for-placeing");
});

closeButton.addEventListener('click', function(){
  sideOption.classList.remove("for-placeing");
})

