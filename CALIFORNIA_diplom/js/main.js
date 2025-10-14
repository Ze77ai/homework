(function () {

  // Бургер

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 800) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }

  }

  // Slider

  const swiper = new Swiper('.hero__slider', {

    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
    },

    // autoplay: {
    //   delay: 10000,
    // }
  });

  // Search

  const searchInput = document.getElementById('searchInput');
  const suggestionButtons = document.querySelectorAll('.keyword__search-item');


  suggestionButtons.forEach(button => {
    button.addEventListener('click', () => {
      searchInput.value = button.textContent;
    });
  });

})()