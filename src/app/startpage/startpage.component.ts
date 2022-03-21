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
  
  constructor(private _pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  getPokemonDetails(input:string){
    //this method get's called when search is performed
    this._pokemonService.getPokemonDetails(input).subscribe(reponse=>{
      this.PokemonSearchResponse = reponse;
    })
  }

}
