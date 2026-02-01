import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Istd } from '../models/student';
import { SnackbarService } from '../../components2.crud/service/snackbar.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  stdArr : Array<Istd> = []

  constructor(
    private _stdService : StudentService,
    private _snackBar : SnackbarService
  ) { }

  ngOnInit(): void {

   this.onAdd()
    this.fetch()

    this.removeStd()

    this.updateStd()
  
  }

  updateStd(){
    this._stdService.updateStdSubObs$.subscribe(res => {
      let getIndex = this.stdArr.findIndex(u => u.id === res.id)
      this.stdArr[getIndex] = res
    })
  }

  removeStd(){
    this._stdService.removeStdObs$.subscribe(id => {
      let getIndex = this.stdArr.findIndex(r => r.id === id)
      this.stdArr.splice(getIndex,1)

      this._snackBar.openSnackBar(`Removed successfully!!!`)
    })
  }

  fetch(){
      this._stdService.fetchStdData()
      .subscribe({
        next : data => {
          console.log(data)
          this.stdArr = data
        },
        error : err => {
          console.log(err);
          
        }
      })
  }

  onAdd(){
     this._stdService.newStdSubObs$.subscribe(res => {
      this.stdArr.push(res)
    })
  }



}
