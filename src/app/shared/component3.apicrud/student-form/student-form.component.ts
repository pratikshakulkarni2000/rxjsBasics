import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Istd } from '../models/student';
import { StudentService } from '../service/student.service';
import { CustomRegex } from '../consts/validatorsPattern';
import { NoSpaceValidators } from '../consts/noSpaceValidators';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  stdForm !: FormGroup
  isInEditMode : boolean = false
  editStd !: string

  constructor(
    private _stdService : StudentService
  ) { }

  ngOnInit(): void {
    this.createStdForm()

    this.patchData()
  }

  patchData(){
    this._stdService.editStdSubObs$.subscribe(res => {
      if(res){
      this.stdForm.patchValue(res)
        this.isInEditMode = true
        this.editStd = res.id
      }
    })
  }

  createStdForm(){
    this.stdForm = new FormGroup({
      fname : new FormControl(
            null,
            [Validators.required,
              Validators.minLength(5),
              Validators.maxLength(10),
              Validators.pattern(CustomRegex.onlyText),
              NoSpaceValidators.noSpace
            ],[]),
      lname : new FormControl(null,
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
          Validators.pattern(CustomRegex.onlyText),
          NoSpaceValidators.noSpace
        ],[]),
      email : new FormControl(null,
        [Validators.required,
          Validators.pattern(CustomRegex.email)
        ],[]),
      contact : new FormControl(null,
        [Validators.required,
          Validators.pattern(CustomRegex.contactPattern)
        ],[])
    })
  }

    get formControls(){
    return this.stdForm.controls
  }


  onSubmit(){
    if(this.stdForm.valid){
      let stdObj : Istd = this.stdForm.value

      this._stdService.createStd(stdObj)
        .subscribe({
          next : data => {
            console.log(data);     //got only id here due to firebase
            this.stdForm.reset()
            this._stdService.setNewStd({...stdObj,id : data.name})
          },
          error : err => {
            console.log(err);
            
          }
        })
    }
  }

  onUpdate(){
    if(this.stdForm.valid){
      let updated_obj : Istd = {
        ...this.stdForm.value,
        id : this.editStd
      }
      console.log(updated_obj);
      
      this._stdService.updateStd(updated_obj)
        .subscribe({
          next : data => {
            console.log(data);
            this.isInEditMode = false
            this.stdForm.reset()
            
            this._stdService.setUpdateStd(data)
          } ,
          error : err => {
            console.log(err)
          }
        })
    }
  }

}
