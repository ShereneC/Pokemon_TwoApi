export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 4000
})

// export const sandbox = axios.create({
//   baseURL: 'https://bcw-sandbox.herokuapp.com/api/sherenecarter/',
//   timeout: 4000
// })