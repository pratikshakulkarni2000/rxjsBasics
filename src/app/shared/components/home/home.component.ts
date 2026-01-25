import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { OfService } from '../../service/of.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  intervalSub !: Subscription

  skillsArr !: Array<string>
  carsArr !: Array<string>
  brandsArr !: Array<string>

  constructor(
    private _ofService : OfService
  ) { }

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
    // this._ofService.of$
    // .subscribe({
    //   next : data => {
    //     if(data % 2 === 0){
    //     console.log(data);
    //     }        
    //   }
    // })


    this._ofService.ofEven$
      .subscribe(console.log)


      this._ofService.offOdd$
        .subscribe(n => {
          console.log(n);
          
        })

      this._ofService.ofDiv$.subscribe(console.log)

      this._ofService.ofGret$.subscribe(console.log)

      this._ofService.ofExact$.subscribe(console.log)

      this._ofService.ofDouble$.subscribe(console.log)

      this._ofService.ofPrime$.subscribe(console.log)

      this._ofService.skill$.subscribe(res => {
        this.skillsArr = res
      })

      this._ofService.cars$.subscribe(res => {
        this.carsArr = res
      })

      this._ofService.brands$.subscribe(res => {
        this.brandsArr = res
      })

      
  }

}
