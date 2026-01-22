import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

}
