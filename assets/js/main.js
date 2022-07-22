// Swiper Slider
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  }
});



// Change header bg
function scrollHeader() {
  const header = document.querySelector('.header');

  if(this.scrollY > 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);


// Show scroll up
function showScrollUp() {
  const scrollUp = document.querySelector('.scroll-up');

  if(this.scrollY > 200) {
    scrollUp.classList.add('show-scroll-up');
  } else {
    scrollUp.classList.remove('show-scroll-up');
  }
}

window.addEventListener('scroll', showScrollUp);