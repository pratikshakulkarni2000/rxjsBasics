import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _matsnackbar : MatSnackBar
  ) { }

  openSnackBar(msg : string){
    this._matsnackbar.open(msg,"Close",{
      horizontalPosition : 'left',
      verticalPosition : 'top',
      duration : 3000
    })
  }

}
