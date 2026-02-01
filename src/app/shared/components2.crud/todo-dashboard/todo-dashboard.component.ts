import { Component, OnInit } from '@angular/core';
import { Itodos } from '../models/todo';
import { TodosService } from '../service/todos.service';
import { SnackbarService } from '../service/snackbar.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  todosArr : Itodos[] = []

  constructor(
    private _todoService : TodosService,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
    this._todoService.fetchTodos()
      .subscribe({
        next : data => {
          this.todosArr = data
        },
        error : err => {
          console.log(err);
        }
      })
  }

  getNewTodo(todo : Itodos){
    this.todosArr.push(todo)
    this._snackbar.openSnackBar(`TodoItem added successfully !!!`)
  }

}
