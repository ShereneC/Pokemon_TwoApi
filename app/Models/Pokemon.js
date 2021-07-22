import { ProxyState } from "../AppState.js"

export default class Pokemon {
  constructor({ id, name, sprites, height, weight, abilities }) {
    this.apiId = id;
    // this.myListId = 
    this.name = name;
    this.imgURL = sprites.other.dream_world.front_default;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities || abilities.join('\n\n');
  }

}
