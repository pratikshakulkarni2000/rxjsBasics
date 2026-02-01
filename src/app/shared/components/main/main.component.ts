import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsernameService } from '../../service/username.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @ViewChild('usernameForm') usernameForm !: NgForm

  
  private _userservice = inject(UsernameService)
  
  onSubmit(){
    if(this.usernameForm.valid){
      let val = this.usernameForm.value
      console.log(val)
      this.usernameForm.reset()
        // emits data/value from here  i.e observer 
      this._userservice.userNameSub$.next(val.username)
    }
  }

}
