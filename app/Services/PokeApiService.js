import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class PokeApiService {

  async getAllPokemons() {
    let res = await pokeApi.get('pokemon')
    // console.log(res.data.results)
    ProxyState.allPokemons = res.data.results
  }
  async getPokemon(id) {
    let res = await pokeApi.get(id)
    console.log(res.data)
    ProxyState.activePokemon = new Pokemon(res.data)
  }
}


export const pokeApiService = new PokeApiService()