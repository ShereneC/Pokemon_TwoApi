import { ProxyState } from "../AppState.js";
import { pokeApiService } from "../Services/PokeApiService.js";

function _drawAll() {
  const pokemons = ProxyState.allPokemons
  let template = ''
  pokemons.forEach(p => template += `<li onclick="app.pokeApiController.getPokemon(${p.id})">${p.name}</li>`)
  document.getElementById('api-pokemons').innerHTML = template
}

export default class PokeApiController {
  constructor() {
    ProxyState.on('allPokemons', _drawAll)

    this.getAllPokemons()
  }

  async getAllPokemons() {
    try {
      await pokeApiService.getAllPokemons();
    } catch (error) {
      console.error('There was an Issue getting poke api spells')
    }
  }

  async getPokemon(id) {
    try {
      await pokeApiService.getPokemon(id);
    } catch {
      console.error("unable to get pokemon details")
    }
  }
}



