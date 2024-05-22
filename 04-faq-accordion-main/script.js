const buttons = document.querySelectorAll('.accordion__btn')

buttons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    const accordionDesc = this.nextElementSibling
    const plusIcon = this.querySelector('.plus__icon');
    const minusIcon = this.querySelector('.minus__icon');
    
    if(accordionDesc.style.maxHeight) {
      accordionDesc.style.maxHeight = null;
      plusIcon.style.display = 'block';
      minusIcon.style.display = 'none';
    } else {
      accordionDesc.style.maxHeight = accordionDesc.scrollHeight + 'px';
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'block';
    }
  })  
})
