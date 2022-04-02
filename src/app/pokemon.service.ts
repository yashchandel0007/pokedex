import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonStatsURL = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private httpClient: HttpClient) { }

    getPokemonDetails(pokemonSearchString:string){
      //add the api call here 
      return this.httpClient.get(this.pokemonStatsURL+pokemonSearchString);
    }
}
