import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TodoComponent, TodoDialog} from './todo/todo.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {DeleteDialog, ListComponent} from './todo/components/list/list.component';
import {MatCardModule} from "@angular/material/card";
import { GridComponent } from './todo/components/grid/grid.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDialogClose, MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatGridListModule} from "@angular/material/grid-list";

const routes: Routes = [
  { path: '', component: TodoComponent, }
];

@NgModule({
  declarations: [
    TodoComponent,
    ListComponent,
    GridComponent,
    TodoDialog,
    DeleteDialog,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    NgxDatatableModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
