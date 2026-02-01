import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodos } from '../../models/todo';
import { UuidService } from '../../service/uuid.service';
import { TodosService } from '../../service/todos.service';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @ViewChild('todoForm') todoForm !: NgForm
  @Output() emitAddTodo : EventEmitter<Itodos> = new EventEmitter<Itodos>()
  isInEditMode : boolean = false
  editTodo !: string

  constructor(
    private _uuidService : UuidService,
    private _todoService :TodosService,
  ) { }

  ngOnInit(): void {
    this.patchTodo()
  }

  patchTodo(){
    this._todoService.editTodoSubObs$.subscribe(res => {
      if(res){
        this.todoForm.form.patchValue(res)
        this.isInEditMode = true
        this.editTodo = res.todoId
      }
    })
  }

  onUpdate(){
    if(this.todoForm.valid){
      let updated_obj : Itodos = {
        ...this.todoForm.value,
        todoId : this.editTodo
      }
      console.log(updated_obj);

      this._todoService.updateTodo(updated_obj)
       .subscribe(data => console.log(data))

      this.isInEditMode = false
      this.todoForm.reset()
    }
  }

  onSubmit(){
    if(this.todoForm.valid){
      let todo_obj : Itodos = {
        ...this.todoForm.value,
        todoId : this._uuidService.uuid()
      }
      this._todoService.createTodos(todo_obj)
        .subscribe({
          next : data => {
            console.log(data);
            this.emitAddTodo.emit(data)
          },
          error : err => {
            console.log(err);
            
          }
        })

        this.todoForm.reset()
    }
  }

}
