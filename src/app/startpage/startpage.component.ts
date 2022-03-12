import { Component, NgModule, OnInit } from '@angular/core';
// import { PsyduckImageComponent } from '../psyduck-image/psyduck-image.component';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})

export class StartpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pokemonlogo:string =  'assets/images/pokemon_logo.png';

}
