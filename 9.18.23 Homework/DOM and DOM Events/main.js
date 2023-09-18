// 1. grab elements from the dom
// 2. attach event listeners


// Option 1
function goCoocoo() {
  document.body.style.backgroundColor = '#c00c00'
}

// Option 2
const coffeeButtons = document.querySelectorAll('.coffee-btn');
// coffeeButton.onclick = function() {
//   document.body.style.backgroundColor = '#c0ffee';
// }

// coffeeButton.onmouseenter = goCoocoo;

function getCoffee() {
  document.body.style.backgroundColor = '#c0ffee'
}
coffeeButtons.forEach(function(button) {
  button.onclick = getCoffee;
})

// Option 3
const lalaButton = document.querySelector('.lala-btn');

function notListening() {
  document.body.style.backgroundColor = '#1a1a1a';
}

lalaButton.addEventListener('click', notListening);
lalaButton.addEventListener('mouseenter', goCoocoo);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('mouseleave', notListening));