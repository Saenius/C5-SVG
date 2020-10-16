const btn = document.querySelector('.j-btn-test');
const icon1 = document.querySelector('.btn_icon1');
const icon2 = document.querySelector('.btn_icon2');


btn.addEventListener('click', () => { 
  if (icon1.style.display = 'none'){
  	icon1.classList.remove('display-none');
  	icon1.classList.add('display-block');
  	icon2.classList.remove('display-block');
  	icon2.classList.add('display-none')
  } else if (icon1.style.display = 'block'){
  	icon2.classList.remove('display-none');
  	icon2.classList.add('display-block');
  	icon1.classList.remove('display-block');
  	icon1.classList.add('display-none')
  }  
});
