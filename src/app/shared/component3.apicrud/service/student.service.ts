import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Istd } from '../models/student';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  fireB_url : string = environment.fireB_url
  STUDENT_URL : string = `${this.fireB_url}/students.json`
  
  constructor(
    private _httpClient : HttpClient,
    private _snackbar : SnackbarService
  ) { }

  private newStdSub$ : Subject<Istd> = new Subject<Istd>()
  newStdSubObs$ : Observable<Istd> = this.newStdSub$.asObservable()

  private removeStdSub$ : Subject<string> = new Subject<string>()

  removeStdObs$ : Observable<string> = this.removeStdSub$.asObservable()

  private updateStdSub$ : Subject<Istd> = new Subject<Istd>()

  updateStdSubObs$ : Observable<Istd> = this.updateStdSub$.asObservable()

  setUpdateStd(up : Istd){
    this.updateStdSub$.next(up)
  }

  private editStdSub$ : Subject<Istd> = new Subject<Istd>()
  editStdSubObs$ : Observable<Istd> = this.editStdSub$.asObservable()
  setEditStd(std : Istd){
    this.editStdSub$.next(std)
  }

  setRemoveStd(id : string){
    this.removeStdSub$.next(id)
  }


  setNewStd(newStd : Istd){
    this.newStdSub$.next(newStd)
  }

  fetchStdData():Observable<any>{
    return this._httpClient.get(this.STUDENT_URL).pipe(
      map((obj : any) => {
        let stdArr = []
        for(const key in obj){
          stdArr.push({...obj[key], id : key})
        }
        return stdArr
      }
    )
    )
  }


  createStd(std : Istd) : Observable<any> {
    this._snackbar.openSnackBar(`Student added successfully!!!`)
    return this._httpClient.post(this.STUDENT_URL,std)
  }

  removeStd(id : string) : Observable<any>{
    let REMOVE_URL : string = `${this.fireB_url}students/${id}.json`

    return this._httpClient.delete<any>(REMOVE_URL)
  }


  updateStd(update : Istd) : Observable<Istd>{
    let UPDATED_URL = `${this.fireB_url}students/${update.id}.json`
    console.log(UPDATED_URL);

    this._snackbar.openSnackBar(`Student information updated successfully!!!`)
    
    return this._httpClient.patch<Istd>(UPDATED_URL,update)
  }
}
