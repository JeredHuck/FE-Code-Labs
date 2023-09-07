function outerFunction(outerVariable) {
  fetch('url').then(() => {
    console.log(url)
  })
}

const newFunction = outerFunction('outside');
newFunction('inside');


// Closures essentially is the fact that functions inside of functions have access to all variables within the function tree despite how unaccessible the variables are outside of the functions