
import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todos';
import { TodosService } from '../../service/todos.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {

  todosArr : Itodo[] = []


  constructor(
    private _todosService : TodosService
  ) {}

  ngOnInit(): void {
    this._todosService.getTodos()
      .subscribe({
        next : data => {
          // console.log(data)
          this.todosArr = data
        }
      })
  }

  trackById (index : number, todo : Itodo){
    return todo.id
  }
}
