import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonStatsURL = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private httpClient: HttpClient, private _snackBar:MatSnackBar) { }

    getPokemonDetails(pokemonSearchString:string){
      //add the api call here 
      return this.httpClient.get(this.pokemonStatsURL+pokemonSearchString)
      .pipe(
        catchError(error => {
          this.toastMessage('Please enter correct pokemon Name or id. Eg: Pikachu or 5');
          return throwError(error);
        })
      );
    }

    toastMessage(message:string){
      this._snackBar.open(message, 'ok',{
        duration:5000
      });
    }
}
