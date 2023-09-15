const swiper = new Swiper('.swiper', {
  slidesPerView: '7',
  loop: true,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

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


const burgerMenu = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__nav');
const btntoBack = document.querySelector('.header__btn-back');
burgerMenu.addEventListener('click',() => {
  headerMenu.classList.toggle('header__nav--active');


});

btntoBack.addEventListener('click',() =>{
  headerMenu.classList.remove('header__nav--active');
});

