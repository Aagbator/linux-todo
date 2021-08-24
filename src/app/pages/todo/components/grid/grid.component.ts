import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../../../service/todo.service";
import {Todo} from "../../../../model/todo.model";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  todos: Todo[] = [];
  colors: string[] = ['#FFCCCC', '#FFE5CC', '#FFFFCC', '#E5FFCC', '#CCFFCC','#CCFFE5',
    '#CCFFFF', '#CCE5FF', '#E5CCFF', '#E5CCFF', '#FFCCFF', '#FFCCFF', '#FFCCCC', '#FFE5CC',
    '#FFFFCC', '#E5FFCC', '#CCFFCC','#CCFFE5', '#CCFFFF', '#CCE5FF', '#E5CCFF', '#E5CCFF', '#FFCCFF', '#FFCCFF'];

  constructor(private todoService: TodoService) { }

  getColor = (i: number) => {
    return this.colors[i];
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(data => this.todos = data);
  }

}
