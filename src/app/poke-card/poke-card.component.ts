import { Component, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  @Input() pokemonData: any;
  public mainCardImage: any;
  public altMainCardImage: any;
  public mainCardHeaderImage: any;
  public altCardHeaderImage: any;
  public isPokeCardVisible: boolean = false;
  @Output() emitter:EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit"+this.pokemonData)
    console.log("ngOnInit mainCardImage"+this.mainCardImage)
    this.mainCardImage = this.pokemonData.sprites.other["dream_world"].front_default;
    this.altMainCardImage = this.pokemonData.sprites.other["official-artwork"].front_default;
    this.mainCardHeaderImage = this.pokemonData.sprites.front_default;
    this.altCardHeaderImage = this.pokemonData.sprites.front_default;
  }
  goBackShowSearchBar(){
    this.emitter.emit(this.isPokeCardVisible);
  }
}
