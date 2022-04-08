import { Component, NgModule, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
// import { PsyduckImageComponent } from '../psyduck-image/psyduck-image.component';


@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})

export class StartpageComponent implements OnInit {

  PokemonSearchResponse: any;
  pokemonlogo:string =  'assets/images/pokemon_logo.png';
  public isPokeCardVisible: Promise<Boolean> = Promise.resolve(false);
  
  constructor(private _pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  getPokemonDetails(input:string){
    //this method get's called when search is performed
    input =  input.trim();
    if(input == "")
      return
    this.PokemonSearchResponse = this._pokemonService.getPokemonDetails(input.toLowerCase( )).subscribe((response)=>{
      console.log("response",response);
      this.PokemonSearchResponse = response;
      this.isPokeCardVisible = Promise.resolve(true)})
    ;
  }

  backButtonPressed(backButtonPressed:any){
    this.isPokeCardVisible = Promise.resolve(backButtonPressed);
    console.log("backbuttonpressed "+this.isPokeCardVisible);
  }
  fetchRandomPokemon(){
    let temp = Math.floor(Math.random() * (898 - 1 + 1) + 1)
    this.getPokemonDetails(temp.toString());
  }
}
