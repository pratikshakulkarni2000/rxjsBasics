import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../service/username.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  userName !: string

  constructor(
    private _userService : UsernameService
  ) { }

  ngOnInit(): void {
    this._userService.userNameSub$.subscribe(data => {
      this.userName = data
    })
  }

}
