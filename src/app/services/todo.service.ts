import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

import {
  CREATE_TASK_LINK,
  DELETE_TASK_LINK,
  GET_ALL_TASKS_LINK,
  UPDATE_TASK_LINK,
} from 'src/links.constants';

import { HttpService } from './http.service';
import { BehaviorSubject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todoList: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  constructor(private httpService: HttpService) {}

  getAllTasks(): void {
    this.httpService
      .get<Todo[]>(GET_ALL_TASKS_LINK)
      .pipe(catchError((err) => throwError(() => err)))
      .subscribe((resp) => this.todoList.next(resp));
  }

  createTask(body: object): void {
    this.httpService
      .create<Todo>(CREATE_TASK_LINK, body)
      .pipe(catchError((err) => throwError(() => err)))
      .subscribe((resp) => {
        this.todoList.next([...this.todoList.value, resp]);
      });
  }

  deleteTask(_id: number): void {
    this.httpService
      .delete(DELETE_TASK_LINK, { _id })
      .pipe(catchError((err) => throwError(() => err)))
      .subscribe(() => {
        this.todoList.next(
          this.todoList.value.filter((elem) => _id !== elem._id)
        );
      });
  }

  updateTask(_id: number, body: any): void {
    this.httpService
      .update(UPDATE_TASK_LINK, { _id }, body)
      .pipe(catchError((err) => throwError(() => err)))
      .subscribe(() => {
        this.todoList.next(
          this.todoList.value.map((elem) => {
            if (_id === elem._id) {
              return (elem = { ...elem, ...body });
            }
            return elem;
          })
        );
      });
  }
}
