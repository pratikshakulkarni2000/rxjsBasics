import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  intervalSub !: Subscription

  constructor() { }

  // ngOnInit(): void {
  //   this.intervalSub=interval(1000)
  //     .subscribe((num : number) => {
  //       console.log(num);
  //     })
    
  // }
  ngOnDestroy(): void {
  //   this.intervalSub.unsubscribe()
  }

  ngOnInit(): void {
    
  }

}
