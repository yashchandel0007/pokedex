import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatButtonModule } from '@angular/material/button'
import {MatTabsModule  } from '@angular/material/tabs'
import { MatListModule } from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar'

const material = [
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatSnackBarModule,
  MatButtonModule,
  MatTabsModule,
  MatListModule,
  MatProgressBarModule
];

@NgModule({
  imports: [
    material
  ],
  exports:[
    material
  ]
})
export class MaterialModule { }
