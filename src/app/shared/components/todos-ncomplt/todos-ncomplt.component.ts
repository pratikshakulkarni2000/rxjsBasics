import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../service/todos.service';
import { Itodo } from '../../models/todos';

@Component({
  selector: 'app-todos-ncomplt',
  templateUrl: './todos-ncomplt.component.html',
  styleUrls: ['./todos-ncomplt.component.scss']
})
export class TodosNCompltComponent implements OnInit {

  todosArr : Itodo[] = []

  constructor(
    private _todoService : TodosService
  ) { }

  ngOnInit(): void {
    this._todoService.getTodos()
      .subscribe({
        next : data => {
          this.todosArr = data.filter(t => !t.completed)
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
