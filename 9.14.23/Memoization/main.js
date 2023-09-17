// const prevValues = [];

// function square(n) {
//   if (prevValues[n] != null) {
//     return prevValues[n]
//   }
//   let result = 0
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       result += 1
//     }
//   }
//   prevValues[n] = result
//   return result;
// }

// console.log(300000);
// console.log(300000);
// console.log(300000);
// console.log(300000);
// console.log(300000);


function fib(n, prevValues = []) {
  if (prevValues[n] != null) {
    return prevValues[n]
  }
  let result
  if (n <= 2) {
    result = 1
  } else {
    result = fib(n - 1, prevValues) + fib(n - 2, prevValues)
  }
  prevValues[n] = result
  return result
}

console.log(fib(20));

