import { Injectable } from '@angular/core';
import {Todos} from "../model/todo.data";
import {Todo} from "../model/todo.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(Todos);

  getTodos(): Observable<Todo[]> {
    return this._todos$.asObservable();
  }

  setTodo(todos: Todo[]){
    this._todos$.next(todos);
  }

  constructor() { }
}
