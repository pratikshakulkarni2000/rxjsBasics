import { Injectable } from '@angular/core';
import { Itodo } from '../../models/todos';
import { Itodos } from '../models/todo';
import { Observable, of, Subject } from 'rxjs';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos : Array<Itodos> = [
    {
      todoItem : 'Angular',
      todoId : '1'
    },
    {
      todoItem : 'Java',
      todoId : '11'
    },
    {
      todoItem : 'FLEX',
      todoId : '111'
    }
  ]

    constructor(
      private _snackbar : SnackbarService
    ) { }

  fetchTodos () : Observable<Itodos[]> {
    // Api call to fetch DataTransfer(array)
    return of(this.todos)
  }

  createTodos(todo : Itodos){
    // this.todos.push(todo)
    return of(todo)
  }
  // subject
  private editTodoSub$ : Subject<Itodos> = new Subject<Itodos>()

  // subject as a observable
  public editTodoSubObs$ : Observable<Itodos> = this.editTodoSub$.asObservable()

  // subject as a observer
  setEditTodo(todo : Itodos){
    this.editTodoSub$.next(todo)
  }

  onRemoveTodo(id : string){
    let getIndex = this.todos.findIndex(t => t.todoId === id)
    this.todos.splice(getIndex,1)
    this._snackbar.openSnackBar(`The TodoItem removed successfully !!!`)

    return of(this.todos[0])
  }

  updateTodo(updateTodo : Itodos){
    let getIndex = this.todos.findIndex(obj => obj.todoId === updateTodo.todoId)
    this.todos[getIndex] = updateTodo
    this._snackbar.openSnackBar(`The TodoItem updated successfully !!!`)

    return of(this.todos)
  }


}
