import { Injectable } from '@angular/core';
import { filter, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfService {

  of$ : Observable<number> = of(1,2,3,4,5,6,7,8,9)

  ofEven$ = this.of$.pipe(
    filter(num => {
      return num % 2 === 0
    }),

    tap( n => {
      console.log(`value after filter ${n}`)
    })
  )


  off$ : Observable<number> = of(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)
  
  offOdd$ = this.off$.pipe(
    filter(n => {
      return n % 2 !== 0
    })
  )

  offf$ : Observable<number> = of(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)

  ofDiv$ = this.offf$.pipe(
    filter (n => n % 3 === 0)
  )


  offff$ : Observable<number> = of(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)

  ofGret$ = this.offff$.pipe(
    filter(n => n > 5)
  )  


  ofer$ : Observable<number> = of(1,2,3,4,5,6,7,8,9,10)

  ofExact$ = this.ofer$.pipe(
    filter(n => n === 10)
  )

  offer$ : Observable<number> = of(1,2,3,4,5,6,7,8,9,10)

  ofDouble$ = this.offer$.pipe(
    map(m => m *2)
  )

  isPrime(n : number):boolean{
    if(n <= 1){
      return false
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
      if(n % i === 0){
        return false
      }
    }
    return true
  }

  ofPrime$ = this.of$.pipe(
    filter(num => this.isPrime(num))
  )

  skills : Array<string> = ["HTML","CSS","TS","JS","Angular","Rxjs"]

  skill$ = of(this.skills)

  cars : Array<string> = ["BMW","Maserati","Porsche","Pagani","Ferrari","RR"]

  cars$ = of(this.cars)

  color : Array<string> = ["Emerald green","Olive green","Sea-green","Mint-greeen","Bottle-green"]

  color$ = of(this.color)

  brands : Array<string> = ["Hp","Dell","Lenovo","Asus","Victous"]

  brands$ = of(this.brands)

  constructor() { }
}
