import { Component, Input, OnInit } from '@angular/core';
import { Itodos } from '../../models/todo';
import { TodosService } from '../../service/todos.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() data !: Itodos[]

  constructor(
    private _todoService : TodosService,
    private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  onTodoEdit(todo :Itodos){
    console.log(todo);
    this._todoService.setEditTodo(todo)
    
  }

  onRemove(id: string){
    let matConfig = new MatDialogConfig()
    matConfig.width = "600px"
    matConfig.data = `Are  you sure to remove the todoItem?`
    matConfig.disableClose = true


    let matDialogRef = this._matDialog.open(GetConfirmComponent,matConfig)
    matDialogRef.afterClosed().subscribe(flag => {
      if(flag){
        this._todoService.onRemoveTodo(id).subscribe({
          next : res => {
            console.log(res);
          },
          error : err => {
            console.log(err);
            
          }
        })

      }
    })

  }
  
}
