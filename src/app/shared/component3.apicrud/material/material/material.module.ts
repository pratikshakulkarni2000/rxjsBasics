import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';


const matArr = [
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    CommonModule
]


@NgModule({
  declarations: [],

  imports : [...matArr],
  exports : [...matArr]


  // imports: [
  //   MatButtonModule,
  //   MatIconModule,
  //   MatSnackBarModule,
  //   MatDialogModule
  // ],
  // exports : [
  //   MatButtonModule,
  //   MatIconModule,
  //   MatSnackBarModule,
  //   MatDialogModule
  // ]


})
export class MaterialModule { }
