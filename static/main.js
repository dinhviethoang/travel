let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formbtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menuBtn = document.querySelector('#menu-bar');
let menuForm = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');




window.onscroll = ()=>{
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
  menuBtn.classList.remove('fa-times');
  menuForm.classList.remove('active');
  loginform.classList.remove('active');

}



menuBtn.addEventListener('click', ()=>{
  menuBtn.classList.toggle('fa-times');

  menuForm.classList.toggle('active');
})

searchBtn.addEventListener('click', () =>{
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');

});


formbtn.addEventListener('click', () =>{
  loginform.classList.add('active');
  
});

formClose.addEventListener('click', () =>{
  loginform.classList.remove('active');
  
});


videoBtn.forEach(vid =>{
  vid.addEventListener('click', ()=>{
    document.querySelector('.controls .active').classList.remove('active');
    vid.classList.add('active');
    let src = vid.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
  });
});


var swiper = new Swiper(".mySwiper", {
  // khoang cach gia cac slide
  spaceBetween: 150,
  // lap lai
  loop:true,
  // tu dong chay
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // so slide
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper(".brand-slider", {
  // khoang cach gia cac slide
  spaceBetween: 110,
  // lap lai
  loop:true,
  // tu dong chay
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // so slide
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
