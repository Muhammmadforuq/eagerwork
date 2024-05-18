document.querySelectorAll('.mobileMenu').forEach((btn)=>{
  if(btn){
      btn.addEventListener('click',()=>{
        document.querySelector('.menu').classList.toggle('-translate-x-full');
        document.querySelector('.overlay').classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden')
      })
  }
    
})

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  if (tab) {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      tab.classList.add('active')
      target.classList.add('active')
    });
  }
});