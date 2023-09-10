
const toggleElement = document.querySelector('.toggle');
const toggleCheckbox = document.querySelector('.toggle-input');

toggleCheckbox.addEventListener('change', function(){
  if(toggleCheckbox.checked) {
    toggleElement.classList.add('toggle--active');
  }

  else {
    toggleElement.classList.remove('toggle--active');
  }
});