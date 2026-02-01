import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  userNameSub$ : Subject<string> = new Subject<string>()

  constructor() {}
}


