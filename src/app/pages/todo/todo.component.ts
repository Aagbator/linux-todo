import {Component, Inject, OnInit} from '@angular/core';
import {Todo} from "../../model/todo.model";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TodoService} from "../../service/todo.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  title: string = '';
  description: string = '';
  layout = {
    list : 'list',
    grid : 'grid'
  }
  public layoutMode = this.layout.list;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  isListLayout = () => this.layoutMode === this.layout.list;
  isGridLayout = () => this.layoutMode === this.layout.grid;

  openDialog(): void {
    this.dialog.open(TodoDialog, {
      width: '300px',
      data: {title: this.title, description: this.description}
    });
  }

}


@Component({
  selector: 'todo-dialog',
  templateUrl: 'todo-dialog.html',
})
export class TodoDialog implements OnInit{
  public todoForm: FormGroup | any;

  constructor(
    public dialogRef: MatDialogRef<TodoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Todo,
    private todoService: TodoService, private _snackBar: MatSnackBar) {}

  createTodo(todo: Todo): void {
    let todos: Todo[] = [];
    this.todoService.getTodos().subscribe(data => todos = data);
    todos.push(todo);
    this.todoService.setTodo(todos);
    this._snackBar.open('Todo Created Successfully',  "✓", {"duration": 2000});
    this.dialogRef.close();
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.todoForm.controls[controlName].hasError(errorName);
  }

  ngOnInit() {
    this.todoForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(80)])
    });
  }

}
