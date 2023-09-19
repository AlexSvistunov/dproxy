const applySlider = document.querySelector('.apply__box');
const swiper = new Swiper(applySlider, {
  slidesPerView: '1',
  loop: true,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    500: {
      slidesPerView: 2,
    },

    600: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 4,
    },

    1100: {
      slidesPerView: 5,
    },
    1000: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 7,

    },
  },

});





window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    '(max-width: 873px)',
    '.proxy-types__slider',
    {
      spaceBetween: 32,
      slidesPerView: '1',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    // someFunc
  );

  resizableSwiper(
    '(max-width: 769px)',
    '.help__slider',
    {
      spaceBetween: 10,
      slidesPerView: 1.2,
    }
  );

  resizableSwiper(
    '(max-width: 769px)',
    '.areas__slider',
    {
      spaceBetween: 10,
      slidesPerView: 1.2,
    }
  );
});




const switchToggle = document.querySelector('.switch-toggle');

switchToggle.addEventListener('click', () =>{
  switchToggle.classList.toggle('switch-toggle--eng');
  if(switchToggle.classList.contains('switch-toggle--eng')) {
    switchToggle.setAttribute('aria-checked', 'true');
  } else {
    switchToggle.setAttribute('aria-checked', 'false');
  }
});


const toggleElement = document.querySelector('.toggle');
const toggleCheckbox = document.querySelector('.toggle-input');

// toggleCheckbox.addEventListener('change', function(){
//   if(toggleCheckbox.checked) {
//     toggleElement.classList.add('toggle--active-eng');
//   }

//   else {
//     toggleElement.classList.remove('toggle--active-eng');
//   }
// });

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(el =>  {
  el.addEventListener('click', (e) => {
    const self = e.currentTarget;

    const accordionSwitch = self.querySelector('.accordion__switch');
    const accordionIcon = self.querySelector('.accordion__icon');
    const accordionContent = self.querySelector('.accordion__content');

    self.classList.toggle('accordion--active');

    if(self.classList.contains('accordion--active')){
      accordionSwitch.setAttribute('aria-expanded', true);
      accordionContent.setAttribute('aria-hidden', false);
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      accordionIcon.classList.add('rotate');
    
    }

    else {
      accordionSwitch.setAttribute('aria-expanded', false);
      accordionContent.setAttribute('aria-hidden', true);
      accordionContent.style.maxHeight = 0;
      accordionIcon.classList.remove('rotate');
    }

  });

});

// const accordionBox = document.querySelectorAll('.accordion__box');


// accordionBox.forEach(el =>{
//   el.addEventListener('click', (e) => {
//     const self = e.currentTarget;
//     const accordionSwitch = self.querySelector('.accordion__box-switch');
//     const accordionInner = self.querySelector('.accordion__box-inner');
//     accordionInner.classList.add('accordion__box-inner--active');


//   });

//   const accordionSwitcher = el.querySelector('.accordion__box-switch');

//   accordionSwitcher.addEventListener('click', (e) => {

//       const accordionInner = el.querySelector('.accordion__box-inner');
//       accordionInner.classList.remove('accordion__box-inner--active');
//   });

    



// });

// const accordionBox = document.querySelectorAll('.accordion__box');

// accordionBox.forEach(el =>{
//   const accordionSwitch = el.querySelector('.accordion__box-switch');
//   const accordionInner = el.querySelector('.accordion__box-inner');


//   el.addEventListener('click', (e) =>{
//     const self = e.currentTarget;
//     const accordionSwitch = self.querySelector('.accordion__box-switch');
//     const accordionInner = self.querySelector('.accordion__box-inner');

//     accordionInner.classList.add('accordion__box-inner--active');
//   })

//   accordionSwitch.addEventListener('click', (e) =>{
//     const self = e.currentTarget;
//     const accordionInner = self.querySelector('.accordion__box-inner');
//     accordionInner.classList.remove('accordion__box-inner--active');
//   });

  



// });


const accordionBox = document.querySelectorAll('.accordion__box');

accordionBox.forEach((el) => {
  const accordionSwitch = el.querySelector('.accordion__box-switch');
  const accordionInner = el.querySelector('.accordion__box-inner');

  accordionSwitch.addEventListener('click', (e) => {
    e.stopPropagation(); // Предотвращаем всплытие события до родительского аккордеона

    // Проверяем, активен ли внутренний аккордеон
    const isActive = accordionInner.classList.contains('accordion__box-inner--active');

    if (isActive) {
      accordionInner.classList.remove('accordion__box-inner--active');
      el.classList.remove('accordion__box--active');
      accordionSwitch.setAttribute('aria-expanded', false);
      accordionInner.setAttribute('aria-hidden', true);
    } else {
      // Закрываем все внутренние аккордеоны перед открытием текущего
      // accordionBox.forEach((accordion) => {
      //   const inner = accordion.querySelector('.accordion__box-inner');
      //   inner.classList.remove('accordion__box-inner--active');
      // });

      accordionInner.classList.add('accordion__box-inner--active');
      el.classList.add('accordion__box--active');
      accordionSwitch.setAttribute('aria-expanded', true);
      accordionInner.setAttribute('aria-hidden', false);
    
    }
  });
});






// const accordionBox = document.querySelectorAll('.accordion__box');
// const accordionInner = document.querySelector('.accordion__box-inner');
// accordionBox.forEach(el =>{
//   el.addEventListener('click', (e) =>{
//     const self = e.currentTarget;

//     self.classList.toggle('accordionbox--active');

//     if(self.classList.contains('accordionbox--active')) {
//       accordionInner.style.maxHeight = accordionInner.scrollHeight + 'px';
//     }
//     else {
//       accordionInner.style.maxHeight = accordionInner.scrollHeight = 0;
//     }
//   });
// });

const burgerMenu = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__nav');
const btntoBack = document.querySelector('.header__btn-back');
const bodyLock = document.querySelector('body');
burgerMenu.addEventListener('click', () => {
  headerMenu.classList.add('header__nav--active');
  bodyLock.classList.add('lock');


});





btntoBack.addEventListener('click',() =>{
  headerMenu.classList.remove('header__nav--active');
  bodyLock.classList.remove('lock');
});

