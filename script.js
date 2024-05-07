function myFunction() {
  const element = document.getElementById("dem");
  element.scrollIntoView();
}



const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',

  loop: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },


  scrollbar: {
      el: '.swiper-scrollbar',
  },


  grid: {
      rows: 2,
      
  },


  slidesPerView: 1,
  
  // Responsive breakpoints
  breakpoints: {
      // when window width is >= 320px
      320: {
          slidesPerView: 2,
          
      },
      // when window width is >= 480px
      480: {
          slidesPerView: 3,
          
      },
      // when window width is >= 640px
      640: {
          slidesPerView: 4,
          
      }
  }
});

