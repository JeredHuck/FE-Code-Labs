// grab things
const crazyButtons = document.querySelectorAll('.btn-crazy');


// define functions
function goCrazy(e) {
  const button = e.target;
  // random number for left offset
  const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
  // random number for top offset
  const offsetTop = Math.random() * (window.innerWidth - this.clientHeight);
  // apply to button
  console.log(offsetLeft, offsetTop);
  this.style.top = offsetTop + 'px';
  this.style.left = offsetLeft + 'px';
}

// add event listeners
crazyButtons.forEach(button => button.addEventListener('mouseenter', goCrazy));
