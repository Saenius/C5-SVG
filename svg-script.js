const btn = document.querySelector('.j-btn-test');


btn.addEventListener('click', () => {
  const icon1 = document.querySelector('.btn_icon');
  const icon2 = document.querySelector('.btn_icon2');
  if (icon1.style.display = 'block'){
    icon1.style.display = 'none';
    icon2.style.display = 'block';
  } else if (icon1.style.display = 'none') {
    icon2.style.display = 'none';
    icon1.style.display = 'block';
  }   
});