import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../service/username.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  userName !: string

  constructor(
    private _userName : UsernameService
  ) { }

  ngOnInit(): void {
    this._userName.userNameSub$.subscribe(data => {
      this.userName = data
    })
  }

}
