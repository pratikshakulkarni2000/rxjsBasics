import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../service/todos.service';
import { Itodo } from '../../models/todos';

@Component({
  selector: 'app-todos-complt',
  templateUrl: './todos-complt.component.html',
  styleUrls: ['./todos-complt.component.scss']
})
export class TodosCompltComponent implements OnInit {

  todosArray : Itodo[] = []


  constructor(
    private _todosService : TodosService
  ) { }

  ngOnInit(): void {
    this._todosService.getTodos()
      .subscribe({
        next : data => {
          // console.log(data)
          this.todosArray = data.filter(t => t.completed)
        },
        error : err => {
          console.log(err)
        }
      })
  }

  trackById (index:number, todo : Itodo){
    return todo.id
  }

}
