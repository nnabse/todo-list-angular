import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

import {
  CREATE_TASK_LINK,
  DELETE_TASK_LINK,
  GET_ALL_TASKS_LINK,
  UPDATE_TASK_LINK,
} from 'src/links.constants';

import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements OnInit {
  public todoList: Todo[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  getAllTasks(): void {
    this.httpService
      .get(GET_ALL_TASKS_LINK)
      .subscribe((resp) => ((this.todoList = resp), console.log(resp)));
  }

  createTask(body: object): void {
    this.httpService
      .create(CREATE_TASK_LINK, body)
      .subscribe(() => this.getAllTasks());
  }

  deleteTask(_id: number): void {
    this.httpService
      .delete(DELETE_TASK_LINK, { _id })
      .subscribe(() => this.getAllTasks());
  }

  updateTask(_id: number, body: any): void {
    this.httpService
      .update(UPDATE_TASK_LINK, { _id }, body)
      .subscribe(() => this.getAllTasks());
  }
}
