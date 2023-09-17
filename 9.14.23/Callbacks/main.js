// console.log('1');

// setTimeout(() => {
//   console.log('2')
// }, 100)

// console.log('3');

// const names = ['James', 'Jess', 'Lilly', 'Sevy'];

// names.forEach((name) => console.log(name));

// const myForEach = (arr, cb) => {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     cb(element)
//   }
// }

// myForEach(names, () => {
//   console.log(name)
// })

const loadPokemon = (id, cb) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json())
  .then(data => {
    cb(data)
  })
}

loadPokemon(112, (pokemon) => {
  console.log(pokemon)
})