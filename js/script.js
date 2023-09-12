
const toggleElement = document.querySelector('.toggle');
const toggleCheckbox = document.querySelector('.toggle-input');

toggleCheckbox.addEventListener('change', function(){
  if(toggleCheckbox.checked) {
    toggleElement.classList.add('toggle--active-eng');
  }

  else {
    toggleElement.classList.remove('toggle--active-eng');
  }
});

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