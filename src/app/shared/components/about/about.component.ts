import { Component, OnInit } from '@angular/core';
import { OfService } from '../../service/of.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  colors !: Array<string> 

  constructor(
    private _ofService : OfService
  ) { }

  ngOnInit(): void {
    // this._ofService.of$
    //   .subscribe({
    //     next : data => {
    //       if(data % 2 === 0){
    //          console.log(data);
    //       }
    //     }
    //   })


    this._ofService.ofEven$
      .subscribe(num => {
        console.log(num)
      })


      this._ofService.offOdd$
        .subscribe(n => {
          console.log(n)
        })

      this._ofService.ofDiv$.subscribe(console.log);

      this._ofService.ofGret$.subscribe(console.log)

      this._ofService.ofExact$.subscribe(console.log)
      
      this._ofService.ofDouble$.subscribe(console.log)

      this._ofService.ofPrime$.subscribe(console.log)
      
      this._ofService.color$.subscribe(res => {
        this.colors = res
      })

  }

}
