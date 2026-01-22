import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Itodo } from '../models/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  BASE_URL : string = environment.BASE_URL
  TODOS_URL : string = `${this.BASE_URL}/todos`
  

  constructor(
    private _httpClient : HttpClient
  ) { }

  getTodos() : Observable<Itodo[]>{
    return this._httpClient.get<Itodo[]>(this.TODOS_URL)
  }

  getCompltedTodo() : Observable<Itodo[]>{
    return this.getTodos().pipe(
      map(arr => {
        let cmpltedArr = arr.filter(t => {
          return t.completed
        })
        return cmpltedArr
      })
    )
  }


  getCompleteTodos() : Observable<Itodo[]>{
    return this.getTodos().pipe(
      map(arr => {
        let cmplt = arr.filter(a => {
          return  a.completed
        })
        return cmplt
      })
    )
  }


  getNotCompltTodo () : Observable<Itodo[]>{
    return this.getTodos().pipe(
      map(arr => {
        let notCmplt = arr.filter(n => {
          return !n.completed
        })
        return notCmplt
      })
    )
  }
  

}
