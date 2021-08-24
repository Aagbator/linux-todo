import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Todos} from "../../../../model/todo.data";
import {Todo} from "../../../../model/todo.model";
import {DatatableComponent} from "@swimlane/ngx-datatable";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TodoService} from "../../../../service/todo.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @ViewChild('table') table: DatatableComponent | undefined;

  rows: any;
  filteredData: any;
  columns: any = {};
  isEditable: any = {};

  constructor(public todoService: TodoService,
              public _snackBar: MatSnackBar,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTodos();
    this.columns = [{ prop: 'title' }, { name: 'Description' }];
  }

  getTodos() {
    this.todoService.getTodos().subscribe(data => {
      this.rows = [...data];
      this.filteredData = this.rows;
    });
  }

  filterTodos(event: any){
    const val = event.target.value.toLowerCase();
    this.filteredData = this.rows.filter((row: any) => {
      if (row.title.toLowerCase().indexOf(val) !== -1){
        return true;
      }
      if (row.description.toLowerCase().indexOf(val) !== -1){
        return true;
      }
      return false;
    });

  }

  saveTodo(row: any, rowIndex: string){
    this.isEditable[rowIndex]=!this.isEditable[rowIndex];
    this._snackBar.open('Todo Updated Successfully',  "✓", {"duration": 2000});
  }

  deleteTodo(row: any, rowIndex: number){
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(isDeleted => {
      if(isDeleted){
        let todos: Todo[] = [];
        this.todoService.getTodos().subscribe(data => todos = data);
        todos.splice(rowIndex, 1);
        this.rows.splice(rowIndex, 1);
        this.todoService.setTodo(todos);
        this._snackBar.open('Deleted Successfully',  "✓", {"duration": 2000});
      }
      this.isEditable[rowIndex] = !this.isEditable[rowIndex];
    });
  }
}

@Component({
  selector: 'delete-dialog',
  templateUrl: 'delete-dialog.html',
})
export class DeleteDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Todo,
    private todoService: TodoService, private _snackBar: MatSnackBar) {
  }
}
