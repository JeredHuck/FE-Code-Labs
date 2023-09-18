const btns = document.querySelectorAll('.btn_onclick');

btns.forEach((button) => button.addEventListener('click', (e) =>{
  const color = e.target.getAttribute('data-color');
  changeBackground(color);
}));

function changeBackground(color) {
  document.body.style.backgroundColor = color;
}