import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartpageComponent } from './startpage/startpage.component';
import { PsyduckImageComponent } from './psyduck-image/psyduck-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PokemonService } from './pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { PokeCardComponent } from './poke-card/poke-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    PsyduckImageComponent,
    PokeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
