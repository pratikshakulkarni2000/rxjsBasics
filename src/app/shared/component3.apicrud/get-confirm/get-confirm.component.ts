import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss'],
})
export class GetConfirmComponent implements OnInit {

  getMsg !: string

  constructor(
    private _matRef : MatDialogRef<GetConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) data : string
  ) {
    this.getMsg = data
   }

   onClose(flag : boolean){
    this._matRef.close(flag)
   }

  ngOnInit(): void {
  }

}
