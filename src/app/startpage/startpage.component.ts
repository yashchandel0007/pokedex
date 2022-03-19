import { Component, NgModule, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
// import { PsyduckImageComponent } from '../psyduck-image/psyduck-image.component';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})

export class StartpageComponent implements OnInit {

  getPokemonDetails(){
    //this method get's called when search button is hit
  }
  constructor(private _pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  pokemonlogo:string =  'assets/images/pokemon_logo.png';

}
