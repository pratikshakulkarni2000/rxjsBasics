import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../models/student';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Input() stdInfo !: Istd[]

  constructor(
    private _dialog : MatDialog,
    private _stdService : StudentService
  ) { }

  ngOnInit(): void {
  }

  trackById (index:number,std : Istd){
    return std.id
  }

  onRemove(id : string){
    console.log(id);

    let matConfig = new MatDialogConfig()
    matConfig.data = `Are you sure to remove this student <strong>${id}</strong>?`
    matConfig.width = "500px"

    let matDialog = this._dialog.open(GetConfirmComponent,matConfig)
    matDialog.disableClose = true
    matDialog.afterClosed().subscribe(res => {
      if(res){
          this._stdService.removeStd(id).subscribe({
            next : data => {
              console.log(data);
              this._stdService.setRemoveStd(id)
            },
            error : err => {
              console.log(err);
            }
          })
      }
    })
  }

  onEdit(std : Istd){
    this._stdService.setEditStd(std)
  }

}
