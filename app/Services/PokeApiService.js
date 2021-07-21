import { ProxyState } from "../AppState.js"
import { pokeApi } from "./AxiosService.js"

class PokeApiService {

  async getAllPokemons() {
    let res = await pokeApi.get('pokemon')
    console.log(res.data.results)
    ProxyState.allPokemons = res.data.results
  }
}


export const pokeApiService = new PokeApiService()