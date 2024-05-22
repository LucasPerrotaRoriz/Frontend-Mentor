const tabs = document.querySelectorAll('.tab__item');
const icons = document.querySelectorAll('.tab__icon');
const answers = document.querySelectorAll('.tab__answer');

const src = ['./assets/images/icon-plus.svg', './assets/images/icon-minus.svg'];


/* 


function reset() {
  tabs.forEach((tab, idx) => {
    tab.style.maxHeight = getComputedStyle(answers[idx]).height;
    tabs[idx].dataset.opened = 'false';
    
    icons.forEach((icon) => {
      icon.classList.contains('tab__icon-plus') 
        ? icon.style.display = 'block' 
        : icon.style.display = 'none'
    })
  });
}
reset();

icons.forEach((icon, idx) => {
  icon.addEventListener('click', function (e) {
    reset();
    const currentIcon = e.target;
    const tabItem = currentIcon.closest('.tab__item');
    if (!tabItem.dataset.opened) {
      currentIcon.style.display = 'none';
      currentIcon.nextElementSibling.style.display = 'block'
      tabItem.style.overflow = 'auto';
      tabItem.style.maxHeight = '156px';
      tabItem.dataset.opened = true;
    }
  });
});



*/