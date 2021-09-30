$('.for-slider').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  centerMode: false,
  


  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        autoplay: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


const click = document.querySelector('.hamburger');
const mainDiv = document.querySelector('.mob-bar');
const close = document.querySelector('.close');

click.addEventListener('click', function(){
  mainDiv.style.display = 'block';
  body.style.overflow = 'hidden';
})
close.addEventListener('click', function(){
  mainDiv.style.display = 'none';
})
