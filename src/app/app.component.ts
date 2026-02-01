import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { observable, Observable } from 'rxjs';
import { UsernameService } from './shared/service/username.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjsBasics';
  

//  1) // ourInterval$ = new Observable(observer => {
  //   let count = 10
  //   setInterval ( () => {
  //     observer.next(count)
  //     count++

  //     if(count === 18){
  //       observer.error(`Error : Devils number`)
  //     }

  //     if(count === 13){
  //       observer.complete()
  //     }
  //   },1000)
  // })

  // 2 //

  // ourInter$ = new Observable(obs => {
  //   let x = 1 
  //   setInterval(() => {
  //     obs.next(x)
  //     x++

  //     if(x === 6){
  //       obs.error(`Error`)
  //     }

  //     if(x === 4){
  //       obs.complete()
  //     }
  //   },1000)
  // })

  // 3 //

  // interval$ = new Observable(obs => {
  //   let x = 4
  //   setInterval(() => {
  //     obs.next (x)
  //     x++

  //     if(x === 7){
  //       obs.error(`Error`)
  //     }

  //     if(x === 6){
  //       obs.complete()
  //     }
  //   },1000)
  // })


  // 4  //

  // ourIntervals$ = new Observable(observer => {
  //   let y = 20 
  //   setInterval(() => {
  //     observer.next(y)
  //     y--

  //     if(y === 16){
  //       observer.error(`Error`)
  //     }

  //     if(y === 18){
  //       observer.complete()
  //     }
      
  //   },1000)
  // })

  // 5 //

  // ourInterval$ = new Observable(obs => {
  //   let f = 50
  //   setInterval(() => {
  //     obs.next(f)
  //     f--

  //     if(f === 45){
  //       obs.error(`error`)
  //     }

  //     if(f === 47){
  //       obs.complete()
  //     }
  //   },1000)
  // })



  ngOnInit() : void {

  //  this.ourInterval$.subscribe({
  //   next : num => {
  //     console.log(num)
  //   },
  //   error : err => {
  //     console.log(err)
  //   },
  //   complete : () => {
  //     console.log(`Observable is completed`)
  //   }
  //  })
  // }


    // this.ourInter$.subscribe({
    //   next : data => {
    //     console.log(data)
    //   },
    //   error : err => {
    //     console.log(err)
    //   },
    //   complete : () => {
    //     console.log(`completed`)
    //   }
    // })


    // this.interval$.subscribe({
    //   next : data => {
    //     console.log(data)
    //   },
    //   error : err => {
    //     console.log(err);
        
    //   },
    //   complete : () => {
    //     console.log(`Completed`);
    //   }
    // })


    // this.ourIntervals$.subscribe({
    //   next : data => {
    //     console.log(data);
    //   },
    //   error : err => {
    //     console.log(err);
    //   },
    //   complete : () => {
    //     console.log(`Completed`);
    //   }
    // })


    // this.ourInterval$.subscribe({
    //   next : data => {
    //     console.log(data);
    //   },
    //   error : err => {
    //     console.log(err);
    //   },
    //   complete : () => {
    //     console.log(`Completed`);
        
    //   }
    // })

}
}
