import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../service/username.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  userName !: string

  constructor(
    private _userName : UsernameService
  ) { }

  ngOnInit(): void {
    this._userName.userNameSub$
      .subscribe(data => {
        this.userName = data
      })
  }

}
